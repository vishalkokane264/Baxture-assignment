export const RateIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="tabler-icon tabler-icon-at"
    >
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
      <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
    </svg>
  );
};
export const CompanyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="tabler-icon tabler-icon-world"
    >
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
      <path d="M3.6 9h16.8"></path>
      <path d="M3.6 15h16.8"></path>
      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
      <path d="M12.5 3a17 17 0 0 1 0 18"></path>
    </svg>
  );
};
export const Telicon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="tabler-icon tabler-icon-phone-call"
    >
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
      <path d="M15 7a2 2 0 0 1 2 2"></path>
      <path d="M15 3a6 6 0 0 1 6 6"></path>
    </svg>
  );
};

export const UnfollowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="tabler-icon tabler-icon-user-minus"
    >
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.009 .128"></path>
      <path d="M16 19h6"></path>
    </svg>
  );
};

export const FollowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="tabler-icon tabler-icon-user-plus"
    >
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
    </svg>
  );
};

export const DeleteIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="tabler-icon tabler-icon-trash"
    >
      <path d="M4 7l16 0"></path>
      <path d="M10 11l0 6"></path>
      <path d="M14 11l0 6"></path>
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
    </svg>
  );
};
export const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="tabler-icon tabler-icon-star"
    >
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
    </svg>
  );
};
export default {
  RateIcon,
  Telicon,
  CompanyIcon,
  FollowIcon,
  UnfollowIcon,
  DeleteIcon,
  StarIcon,
};
