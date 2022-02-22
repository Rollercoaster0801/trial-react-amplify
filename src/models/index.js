// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MONTHS, AMOUNT, MONTHSAMOUNT } = initSchema(schema);

export {
  MONTHS,
  AMOUNT,
  MONTHSAMOUNT
};