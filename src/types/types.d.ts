declare interface FilterProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  gender: Gender;
  setGender: React.Dispatch<React.SetStateAction<Gender>>;
}

declare type ItemProps = {
  to: string;
  primary: string;
  icon?: JSX.Element;
};

declare interface PersonneProps extends FilterProps {
  data: Person[];
}

declare enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  BOTH = '',
}

declare type AwaitedResponse = {
  data: {
    data: Person[];
  };
};

declare type Person = {
  id: string;
  firstname: string;
  lastname: string;
  gender: Gender;
  email: string;
};

declare type EditModalProps = {
  isOpen: boolean;
  fullname: string;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
};
