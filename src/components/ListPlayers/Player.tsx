import { UserIcon } from "../Icons/User";

type User = {
  email: string;
  name?: string;
};

export const Player = ({ email, name }: User) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="border-2 border-violet-500 rounded-full overflow-hidden">
        <UserIcon size={30} />
      </div>
      <h3>{name ? name : email}</h3>
      <span className="text-violet-500 text-xl">&#10003;</span>
    </div>
  );
};
