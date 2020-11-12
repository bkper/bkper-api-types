declare namespace bkper {
    export interface Account {
        /**
         * The id of agent that created the resource
         */
        agentId?: string;
        /**
         * Archived accounts are kept for history
         */
        archived?: boolean;
        /**
         * The overall account balance
         */
        balance?: string;
        /**
         * The balance of the account for checked transactions
         */
        checkedBalance?: string;
        /**
         * The creation timestamp, in milliseconds
         */
        createdAt?: string;
        /**
         * Credit nature or Debit otherwise
         */
        credit?: boolean;
        /**
         * The ids of groups of the account
         */
        groups?: string[];
        /**
         * Tell if the account has transaction posted
         */
        hasTransactionPosted?: boolean;
        /**
         * The unique id that identifies the Account in the Book
         */
        id?: string;
        /**
         * The name of the Account
         */
        name?: string;
        /**
         * The name of the Account, lowercase, without spaces or special characters
         */
        normalizedName?: string;
        /**
         * Permanent are such as bank accounts, customers or the like
         */
        permanent?: boolean;
        /**
         * The key/value custom properties of the Account
         */
        properties?: {
            [name: string]: string;
        };
        /**
         * The type of the account
         */
        type?: "ASSET" | "LIABILITY" | "INCOMING" | "OUTGOING";
    }
    export interface AccountBalances {
        balances?: Balance[];
        checkedCumulativeBalance?: string;
        checkedPeriodBalance?: string;
        credit?: boolean;
        cumulativeBalance?: string;
        name?: string;
        periodBalance?: string;
        permanent?: boolean;
        uncheckedCumulativeBalance?: string;
        uncheckedPeriodBalance?: string;
    }
    export interface AccountList {
        /**
         * List items
         */
        items?: Account[];
    }
    export interface Agent {
        /**
         * The agent id
         */
        id?: string;
        /**
         * The agent logo. Public url or Base64 encoded
         */
        logo?: string;
        /**
         * The agent name
         */
        name?: string;
    }
    export interface Any {
    }
    export interface Balance {
        checkedCumulativeBalance?: string;
        checkedPeriodBalance?: string;
        cumulativeBalance?: string;
        day?: number; // int32
        fuzzyDate?: number; // int32
        month?: number; // int32
        periodBalance?: string;
        uncheckedCumulativeBalance?: string;
        uncheckedPeriodBalance?: string;
        year?: number; // int32
    }
    export interface Balances {
        accountBalances?: AccountBalances[];
        balanceCheckedType?: "FULL_BALANCE" | "CHECKED_BALANCE" | "UNCHECKED_BALANCE";
        groupBalances?: GroupBalances[];
        nextRange?: string;
        periodicity?: "DAILY" | "MONTHLY" | "YEARLY";
        previousRange?: string;
        range?: string;
        totalRemovedBalances?: number; // int32
    }
    export interface Book {
        /**
         * The book Accounts
         */
        accounts?: Account[];
        /**
         * The id of agent that created the resource
         */
        agentId?: string;
        collection?: Collection;
        /**
         * The creation timestamp, in milliseconds
         */
        createdAt?: string;
        /**
         * The date pattern of the Book. Example: dd/MM/yyyy
         */
        datePattern?: string;
        /**
         * The decimal separator of the Book
         */
        decimalSeparator?: "DOT" | "COMMA";
        /**
         * The number of fraction digits (decimal places) of the Book
         */
        fractionDigits?: number; // int32
        /**
         * The book account Groups
         */
        groups?: Group[];
        /**
         * The unique id that identifies the Book in the system. Found at bookId url param
         */
        id?: string;
        /**
         * The last update date of the Book, in in milliseconds
         */
        lastUpdateMs?: string;
        /**
         * The name of the Book
         */
        name?: string;
        /**
         * The Book owner username
         */
        ownerName?: string;
        /**
         * The Permission the current user has in the Book
         */
        permission?: "OWNER" | "EDITOR" | "POSTER" | "RECORDER" | "VIEWER" | "NONE";
        /**
         * The key/value custom properties of the Book
         */
        properties?: {
            [name: string]: string;
        };
        /**
         * The time zone of the Book
         */
        timeZone?: string;
        /**
         * The time zone offset of the Book, in minutes
         */
        timeZoneOffset?: number; // int32
    }
    export interface BookList {
        /**
         * List items
         */
        items?: Book[];
    }
    export interface Collection {
        /**
         * The id of agent that created the resource
         */
        agentId?: string;
        /**
         * The Books contained in the Collection
         */
        books?: Book[];
        /**
         * The creation timestamp, in milliseconds
         */
        createdAt?: string;
        /**
         * The unique id of the Collection
         */
        id?: string;
        /**
         * The name of the Collection
         */
        name?: string;
        /**
         * The username of the Collection owner
         */
        ownerUsername?: string;
    }
    export interface Event {
        agent?: Agent;
        /**
         * The id of the Book associated to the Event
         */
        bookId?: string;
        /**
         * The creation timestamp, in milliseconds
         */
        createdAt?: string;
        data?: EventData;
        /**
         * The unique id that identifies the Event
         */
        id?: string;
        /**
         * The resource associated to the Event
         */
        resource?: string;
        /**
         * The type of the Event
         */
        type?: "FILE_CREATED" | "TRANSACTION_CREATED" | "TRANSACTION_UPDATED" | "TRANSACTION_DELETED" | "TRANSACTION_POSTED" | "TRANSACTION_CHECKED" | "TRANSACTION_UNCHECKED" | "TRANSACTION_RESTORED" | "ACCOUNT_CREATED" | "ACCOUNT_UPDATED" | "ACCOUNT_DELETED" | "QUERY_CREATED" | "QUERY_UPDATED" | "QUERY_DELETED" | "GROUP_CREATED" | "GROUP_UPDATED" | "GROUP_DELETED" | "COMMENT_CREATED" | "COMMENT_DELETED" | "COLLABORATOR_ADDED" | "COLLABORATOR_UPDATED" | "COLLABORATOR_REMOVED" | "BOOK_UPDATED" | "BOOK_DELETED";
        user?: User;
    }
    export interface EventData {
        object?: Any;
        /**
         * The object previous attributes when updated
         */
        previousAttributes?: {
            [name: string]: string;
        };
    }
    export interface EventList {
        /**
         * The cursor, for pagination
         */
        cursor?: string;
        /**
         * List items
         */
        items?: Event[];
    }
    export interface File {
        /**
         * The id of agent that created the resource
         */
        agentId?: string;
        /**
         * The file content type
         */
        contentType?: string;
        /**
         * The creation timestamp, in milliseconds
         */
        createdAt?: string;
        /**
         * The unique id that identifies the file in the book
         */
        id?: string;
        /**
         * The file name
         */
        name?: string;
        /**
         * The file serving url
         */
        url?: string;
    }
    export interface Group {
        /**
         * The id of agent that created the resource
         */
        agentId?: string;
        /**
         * The creation timestamp, in milliseconds
         */
        createdAt?: string;
        /**
         * Tell if the group is hidden on transactions main menu
         */
        hidden?: boolean;
        /**
         * The unique id that identifies the Group in the Book
         */
        id?: string;
        /**
         * The name of the Group
         */
        name?: string;
        /**
         * The name of the Group, lowercase, without spaces or special characters
         */
        normalizedName?: string;
        /**
         * The key/value custom properties of the Group
         */
        properties?: {
            [name: string]: string;
        };
    }
    export interface GroupBalances {
        accountBalances?: AccountBalances[];
        balances?: Balance[];
        checkedCumulativeBalance?: string;
        checkedPeriodBalance?: string;
        credit?: boolean;
        cumulativeBalance?: string;
        name?: string;
        periodBalance?: string;
        permanent?: boolean;
        uncheckedCumulativeBalance?: string;
        uncheckedPeriodBalance?: string;
    }
    export interface GroupList {
        /**
         * List items
         */
        items?: Group[];
    }
    export interface Query {
        /**
         * The id of agent that created the resource
         */
        agentId?: string;
        /**
         * The creation timestamp, in milliseconds
         */
        createdAt?: string;
        /**
         * The unique id that identifies the saved Query in the Book
         */
        id?: string;
        /**
         * The Query string to be executed
         */
        query?: string;
        /**
         * The title of the saved Query
         */
        title?: string;
    }
    export interface QueryList {
        /**
         * List items
         */
        items?: Query[];
    }
    export interface Transaction {
        /**
         * The id of agent that created the resource
         */
        agentId?: string;
        /**
         * The amount on format ####.##
         */
        amount?: string;
        /**
         * Tell if the transaction is a checked
         */
        checked?: boolean;
        /**
         * The creation timestamp, in milliseconds
         */
        createdAt?: string;
        creditAccount?: Account;
        /**
         * The date on ISO format yyyy-MM-dd
         */
        date?: string;
        /**
         * The date on format of the Book
         */
        dateFormatted?: string;
        /**
         * The date number representation on format YYYYMMDD
         */
        dateValue?: number; // int32
        debitAccount?: Account;
        /**
         * The transaction description
         */
        description?: string;
        /**
         * The files attached to the transaction
         */
        files?: File[];
        /**
         * The unique id that identifies the transaction in the book
         */
        id?: string;
        /**
         * Tell if the transaction is already posted on accounts, otherwise is a draft
         */
        posted?: boolean;
        /**
         * The key/value custom properties of the Transaction
         */
        properties?: {
            [name: string]: string;
        };
        /**
         * The transaction remote ids, to avoid duplication
         */
        remoteIds?: string[];
        /**
         * The transaction #hashtags
         */
        tags?: string[];
        /**
         * Tell if transaction is trashed
         */
        trashed?: boolean;
        /**
         * The transaction urls
         */
        urls?: string[];
    }
    export interface TransactionList {
        /**
         * The account id when filtering by a single account. E.g. account='Bank'
         */
        account?: string;
        /**
         * The cursor, for pagination
         */
        cursor?: string;
        /**
         * List items
         */
        items?: Transaction[];
    }
    export interface TransactionOperation {
        /**
         * The affected accounts
         */
        accounts?: Account[];
        transaction?: Transaction;
    }
    export interface User {
        /**
         * The user public avatar url
         */
        avatarUrl?: string;
        /**
         * The user display name
         */
        name?: string;
        /**
         * The Bkper username of the user
         */
        username?: string;
    }
}
declare namespace Paths {
    namespace BkperV3CheckTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            export type Transaction = bkper.Transaction;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace BkperV3CreateAccount {
        export interface BodyParameters {
            Account: Parameters.Account;
        }
        namespace Parameters {
            export type Account = bkper.Account;
        }
        namespace Responses {
            export type $200 = bkper.Account;
        }
    }
    namespace BkperV3CreateAccountsBatch {
        export interface BodyParameters {
            AccountList: Parameters.AccountList;
        }
        namespace Parameters {
            export type AccountList = bkper.AccountList;
        }
        namespace Responses {
            export type $200 = bkper.AccountList;
        }
    }
    namespace BkperV3CreateGroup {
        export interface BodyParameters {
            Group: Parameters.Group;
        }
        namespace Parameters {
            export type Group = bkper.Group;
        }
        namespace Responses {
            export type $200 = bkper.Group;
        }
    }
    namespace BkperV3CreateGroupsBatch {
        export interface BodyParameters {
            GroupList: Parameters.GroupList;
        }
        namespace Parameters {
            export type GroupList = bkper.GroupList;
        }
        namespace Responses {
            export type $200 = bkper.GroupList;
        }
    }
    namespace BkperV3CreateTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            export type Transaction = bkper.Transaction;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace BkperV3CreateTransactionsBatch {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            export type TransactionList = bkper.TransactionList;
        }
        namespace Responses {
            export type $200 = bkper.TransactionList;
        }
    }
    namespace BkperV3DeleteAccount {
        namespace Responses {
            export type $200 = bkper.Account;
        }
    }
    namespace BkperV3DeleteGroup {
        namespace Responses {
            export type $200 = bkper.Group;
        }
    }
    namespace BkperV3GetBook {
        namespace Responses {
            export type $200 = bkper.Book;
        }
    }
    namespace BkperV3GetTransaction {
        namespace Responses {
            export type $200 = bkper.Transaction;
        }
    }
    namespace BkperV3ListActivities {
        namespace Responses {
            export type $200 = bkper.EventList;
        }
    }
    namespace BkperV3ListBooks {
        namespace Responses {
            export type $200 = bkper.BookList;
        }
    }
    namespace BkperV3ListQueries {
        namespace Responses {
            export type $200 = bkper.QueryList;
        }
    }
    namespace BkperV3ListTransactions {
        namespace Responses {
            export type $200 = bkper.TransactionList;
        }
    }
    namespace BkperV3PostTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            export type Transaction = bkper.Transaction;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace BkperV3QueryBalances {
        namespace Responses {
            export type $200 = bkper.Balances;
        }
    }
    namespace BkperV3RemoveTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            export type Transaction = bkper.Transaction;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace BkperV3RestoreTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            export type Transaction = bkper.Transaction;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace BkperV3UncheckTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            export type Transaction = bkper.Transaction;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace BkperV3UpdateAccount {
        export interface BodyParameters {
            Account: Parameters.Account;
        }
        namespace Parameters {
            export type Account = bkper.Account;
        }
        namespace Responses {
            export type $200 = bkper.Account;
        }
    }
    namespace BkperV3UpdateGroup {
        export interface BodyParameters {
            Group: Parameters.Group;
        }
        namespace Parameters {
            export type Group = bkper.Group;
        }
        namespace Responses {
            export type $200 = bkper.Group;
        }
    }
    namespace BkperV3UpdateTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            export type Transaction = bkper.Transaction;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
}
