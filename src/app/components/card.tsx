"use client";
import { Card } from "@mantine/core";
import React from "react";
import Avatar from "./avatar";
import {
  CompanyIcon,
  DeleteIcon,
  FollowIcon,
  RateIcon,
  StarIcon,
  Telicon,
  UnfollowIcon,
} from "../services/getIcon";

type Props = {
  id: number;
  name: string;
  email: string;
  contact: string;
  company: string;
  follow: boolean;
  color: string;
  actionPerformed: (data: any) => void;
};

export const LibCard = (props: Props) => {
  const performFollow = () => {
    const payload = {
      type: "follow",
      data: props.id,
    };
    props.actionPerformed(payload);
  };

  const performRemove = () => {
    const payload = {
      type: "remove",
      data: props.id,
    };
    props.actionPerformed(payload);
  };
  return (
    <Card className="card">
      <div className="group">
        <div className="group-1">
          <Avatar name={props.name} color={props.color} />
          <div className="row-display">
            <p className="display-name">
              {props.name} {props.follow ? <StarIcon /> : null}
            </p>
          </div>
        </div>
        <div className="group-2">
          <div className="row-display">
            <RateIcon key={"as"} />
            <a href={props.email} rel="noopener noreferrer">
              <p className="text">{props.email}</p>
            </a>
          </div>
          <div className="row-display">
            {" "}
            <Telicon key={"as"} />
            <a href={props.contact} rel="noopener noreferrer">
              <p className="text"> {props.contact}</p>
            </a>
          </div>
          <div className="row-display">
            <CompanyIcon />
            <a href={props.company} rel="noopener noreferrer">
              <p className="text">{props.company}</p>
            </a>
          </div>
        </div>
        <div className="button-group">
          <button className="active-button" onClick={performFollow}>
            {!props.follow ? <FollowIcon /> : <UnfollowIcon />}
            <p>Follow</p>
          </button>
          <button className="inactive-button" onClick={performRemove}>
            <DeleteIcon />
            <p>Delete</p>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default LibCard;
