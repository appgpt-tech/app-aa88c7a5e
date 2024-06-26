//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    Clients: {
      name: 'Clients',
      fields: {
        Names: 'Names',
        IDNumbers: 'Idnumbers',
        Address: 'Address',
        Emails: 'Emails',
        PhoneNumbers: 'Phone Numbers',
        Pictures: 'Pictures',
        id: 'id',
      },
    },
    Accounts: {
      name: 'Accounts',
      fields: {
        AccountNumber: 'Account Number',
        ClientID: 'Client Id',
        Picture: 'Picture',
        id: 'id',
      },
    },
    Transactions: {
      name: 'Transactions',
      fields: {
        TransactionNumbers: 'Transaction Numbers',
        SenderName: 'Sender Name',
        PictureOfSender: 'Picture Of Sender',
        id: 'id',
      },
    },
    Loans: {
      name: 'Loans',
      fields: {
        CreditReceivedAmount: 'Credit Received Amount',
        InterestToBePaid: 'Interest To Be Paid',
        LoanDueDate: 'Loan Due Date',
        id: 'id',
      },
    },
    Payments: {
      name: 'Payments',
      fields: {
        ServiceName: 'Service Name',
        SenderName: 'Sender Name',
        AmountReceived: 'Amount Received',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    Clients: {
      name: 'Clients (fr)',
      fields: {
        Names: 'Names (fr)',
        IDNumbers: 'Idnumbers (fr)',
        Address: 'Address (fr)',
        Emails: 'Emails (fr)',
        PhoneNumbers: 'Phone Numbers (fr)',
        Pictures: 'Pictures (fr)',
        id: 'id',
      },
    },
    Accounts: {
      name: 'Accounts (fr)',
      fields: {
        AccountNumber: 'Account Number (fr)',
        ClientID: 'Client Id (fr)',
        Picture: 'Picture (fr)',
        id: 'id',
      },
    },
    Transactions: {
      name: 'Transactions (fr)',
      fields: {
        TransactionNumbers: 'Transaction Numbers (fr)',
        SenderName: 'Sender Name (fr)',
        PictureOfSender: 'Picture Of Sender (fr)',
        id: 'id',
      },
    },
    Loans: {
      name: 'Loans (fr)',
      fields: {
        CreditReceivedAmount: 'Credit Received Amount (fr)',
        InterestToBePaid: 'Interest To Be Paid (fr)',
        LoanDueDate: 'Loan Due Date (fr)',
        id: 'id',
      },
    },
    Payments: {
      name: 'Payments (fr)',
      fields: {
        ServiceName: 'Service Name (fr)',
        SenderName: 'Sender Name (fr)',
        AmountReceived: 'Amount Received (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);
