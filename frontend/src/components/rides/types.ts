type RideIdentifier = {
  sequence: number;
  year: number;
};

export enum RideState {
  NEW,
  ASSIGNED,
  DONE,
}

export enum Gender {
  FEMALE,
  MALE,
  OTHER,
}

type Adress = {
  street: string;
  houseNumber: string;
  city: string;
  zipCode: string;
};

type Person = {
  gender: Gender;
  name: string;
  adress: Adress;
  phoneNumber: string;
};

type Destination = {
  date: Date; // Date und Time
  name: string;
  adress: Adress;
};

export type Ride = {
  identifier: RideIdentifier;
  state: RideState;
  client: Person;
  destination: Destination;
  driver: Person | null;
};
