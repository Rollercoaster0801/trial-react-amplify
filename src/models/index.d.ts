import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MONTHSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AMOUNTMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MONTHSAMOUNTMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MONTHS {
  readonly id: string;
  readonly twelve?: string;
  readonly eighteen?: string;
  readonly twentyfour?: string;
  readonly AMOUNTS?: (MONTHSAMOUNT | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MONTHS, MONTHSMetaData>);
  static copyOf(source: MONTHS, mutator: (draft: MutableModel<MONTHS, MONTHSMetaData>) => MutableModel<MONTHS, MONTHSMetaData> | void): MONTHS;
}

export declare class AMOUNT {
  readonly id: string;
  readonly twelve?: number;
  readonly hundred?: number;
  readonly eighteen?: number;
  readonly monthss?: (MONTHSAMOUNT | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AMOUNT, AMOUNTMetaData>);
  static copyOf(source: AMOUNT, mutator: (draft: MutableModel<AMOUNT, AMOUNTMetaData>) => MutableModel<AMOUNT, AMOUNTMetaData> | void): AMOUNT;
}

export declare class MONTHSAMOUNT {
  readonly id: string;
  readonly months: MONTHS;
  readonly amount: AMOUNT;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MONTHSAMOUNT, MONTHSAMOUNTMetaData>);
  static copyOf(source: MONTHSAMOUNT, mutator: (draft: MutableModel<MONTHSAMOUNT, MONTHSAMOUNTMetaData>) => MutableModel<MONTHSAMOUNT, MONTHSAMOUNTMetaData> | void): MONTHSAMOUNT;
}