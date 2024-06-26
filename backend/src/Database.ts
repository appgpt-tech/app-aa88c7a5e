//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { ClientsEntity } from './db/Clients.entity';
import { AccountsEntity } from './db/Accounts.entity';
import { TransactionsEntity } from './db/Transactions.entity';
import { LoansEntity } from './db/Loans.entity';
import { PaymentsEntity } from './db/Payments.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      ClientsEntity,
      AccountsEntity,
      TransactionsEntity,
      LoansEntity,
      PaymentsEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      Clients: [
        {
          Names: 'Names 1',
          IDNumbers: 1,
          Address: 'Address 1',
          Emails: 'Emails 1',
          PhoneNumbers: 'PhoneNumbers 1',
          Pictures: 'Pictures 1',
          id: 62,
        },
        {
          Names: 'Names 2',
          IDNumbers: 2,
          Address: 'Address 2',
          Emails: 'Emails 2',
          PhoneNumbers: 'PhoneNumbers 2',
          Pictures: 'Pictures 2',
          id: 77,
        },
        {
          Names: 'Names 3',
          IDNumbers: 3,
          Address: 'Address 3',
          Emails: 'Emails 3',
          PhoneNumbers: 'PhoneNumbers 3',
          Pictures: 'Pictures 3',
          id: 99,
        },
        {
          Names: 'Names 4',
          IDNumbers: 4,
          Address: 'Address 4',
          Emails: 'Emails 4',
          PhoneNumbers: 'PhoneNumbers 4',
          Pictures: 'Pictures 4',
          id: 57,
        },
        {
          Names: 'Names 5',
          IDNumbers: 5,
          Address: 'Address 5',
          Emails: 'Emails 5',
          PhoneNumbers: 'PhoneNumbers 5',
          Pictures: 'Pictures 5',
          id: 90,
        },
      ],
      Accounts: [
        {
          AccountNumber: 'AccountNumber 1',
          ClientID: 1,
          Picture: 'Picture 1',
          id: 27,
        },
        {
          AccountNumber: 'AccountNumber 2',
          ClientID: 2,
          Picture: 'Picture 2',
          id: 14,
        },
        {
          AccountNumber: 'AccountNumber 3',
          ClientID: 3,
          Picture: 'Picture 3',
          id: 68,
        },
        {
          AccountNumber: 'AccountNumber 4',
          ClientID: 4,
          Picture: 'Picture 4',
          id: 41,
        },
        {
          AccountNumber: 'AccountNumber 5',
          ClientID: 5,
          Picture: 'Picture 5',
          id: 96,
        },
      ],
      Transactions: [
        {
          TransactionNumbers: 'TransactionNumbers 1',
          SenderName: 1,
          PictureOfSender: 1,
          id: 97,
        },
        {
          TransactionNumbers: 'TransactionNumbers 2',
          SenderName: 2,
          PictureOfSender: 2,
          id: 33,
        },
        {
          TransactionNumbers: 'TransactionNumbers 3',
          SenderName: 3,
          PictureOfSender: 3,
          id: 2,
        },
        {
          TransactionNumbers: 'TransactionNumbers 4',
          SenderName: 4,
          PictureOfSender: 4,
          id: 73,
        },
        {
          TransactionNumbers: 'TransactionNumbers 5',
          SenderName: 5,
          PictureOfSender: 5,
          id: 93,
        },
      ],
      Loans: [
        {
          CreditReceivedAmount: 0.85,
          InterestToBePaid: 0.1,
          LoanDueDate: '2025-02-22T05:42:07.409Z',
          id: 41,
        },
        {
          CreditReceivedAmount: 0.97,
          InterestToBePaid: 0.41,
          LoanDueDate: '2023-09-12T04:20:31.418Z',
          id: 61,
        },
        {
          CreditReceivedAmount: 0.95,
          InterestToBePaid: 0.24,
          LoanDueDate: '2024-12-07T22:23:05.024Z',
          id: 15,
        },
        {
          CreditReceivedAmount: 0.6,
          InterestToBePaid: 0.81,
          LoanDueDate: '2024-12-22T12:49:01.831Z',
          id: 30,
        },
        {
          CreditReceivedAmount: 0.58,
          InterestToBePaid: 0.73,
          LoanDueDate: '2023-05-21T23:52:45.769Z',
          id: 2,
        },
      ],
      Payments: [
        {
          ServiceName: 'ServiceName 1',
          SenderName: 1,
          AmountReceived: 0.93,
          id: 94,
        },
        {
          ServiceName: 'ServiceName 2',
          SenderName: 2,
          AmountReceived: 0.02,
          id: 95,
        },
        {
          ServiceName: 'ServiceName 3',
          SenderName: 3,
          AmountReceived: 0.56,
          id: 31,
        },
        {
          ServiceName: 'ServiceName 4',
          SenderName: 4,
          AmountReceived: 0.52,
          id: 75,
        },
        {
          ServiceName: 'ServiceName 5',
          SenderName: 5,
          AmountReceived: 0.66,
          id: 61,
        },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('ClientsEntity', data.Clients);
      await this.SeedResource('AccountsEntity', data.Accounts);
      await this.SeedResource('TransactionsEntity', data.Transactions);
      await this.SeedResource('LoansEntity', data.Loans);
      await this.SeedResource('PaymentsEntity', data.Payments);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}
