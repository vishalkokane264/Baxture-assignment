"use client";
import { Card } from "@mantine/core";
import Image from "next/image";
import contactdata from "../raw-data/data";
import { useEffect, useState } from "react";
import LibCard from "./components/card";

interface IAction {
  type: string;
  data: any;
}

interface ICard {
  id: number;
  name: string;
  email: string;
  tel: string;
  company: string;
  follow: boolean;
  color: string;
}

export default function Home() {
  const [contact, setContact] = useState<ICard[]>([]);
  useEffect(() => {
    const obj: any = contactdata?.data?.map((elt: any) => {
      return { ...elt, follow: false };
    });
    setContact(obj);
  }, []);

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  const actionPerformed = (data: IAction) => {
    switch (data.type) {
      case "follow":
        console.log(data);
        setContact((_prev) => {
          const prev = JSON.parse(JSON.stringify(_prev));

          const obj = prev.findIndex((value: ICard) => value.id === data.data);
          if (obj !== -1) {
            prev[obj].follow = !prev[obj].follow;
          }
          console.log(prev);
          return prev;
        });
        break;
      case "remove":
        setContact((prev) => {
          const obj = prev.filter((value: ICard) => value.id !== data.data);
          return obj;
        });
        break;
      default:
        return;
    }
  };

  return (
    <div className="container">
      {contact && contact.length
        ? contact.map((elt: ICard, index: any) => {
            return (
              // <div>hello</div>
              <LibCard
                key={elt.id}
                id={elt.id}
                company={elt.company}
                contact={elt.tel}
                color={elt.color}
                email={elt.email}
                name={elt.name}
                follow={elt.follow}
                actionPerformed={actionPerformed}
              />
            );
          })
        : null}
    </div>
  );
}
