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
         * The current account balance, when querying transactions.
         */
        balance?: string;
        /**
         * Whether the account balance has been verified/audited
         */
        balanceVerified?: boolean;
        /**
         * The creation timestamp, in milliseconds
         */
        createdAt?: string;
        /**
         * Credit nature or Debit otherwise
         */
        credit?: boolean;
        /**
         * The groups of the account
         */
        groups?: Group[];
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
        /**
         * The last update timestamp, in milliseconds
         */
        updatedAt?: string;
    }
    export interface AccountBalances {
        archived?: boolean;
        balances?: Balance[];
        credit?: boolean;
        cumulativeBalance?: string;
        cumulativeCredit?: string;
        cumulativeDebit?: string;
        empty?: boolean;
        name?: string;
        normalizedName?: string;
        periodBalance?: string;
        periodCredit?: string;
        periodDebit?: string;
        permanent?: boolean;
        properties?: {
            [name: string]: string;
        };
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
         * The agent logo on dark mode. Public url or Base64 encoded
         */
        logoDark?: string;
        /**
         * The agent name
         */
        name?: string;
    }
    export interface Any {
    }
    export interface App {
        /**
         * The API version of the event payload
         */
        apiVersion?: "v0" | "v1" | "v2" | "v3" | "v4" | "v5";
        /**
         * The Google OAuth Client ID
         */
        clientId?: string;
        /**
         * The Google OAuth Client Secret
         */
        clientSecret?: string;
        /**
         * Tell if this app is connectable by a user
         */
        connectable?: boolean;
        /**
         * Tell if the code app is deprecated
         */
        deprecated?: boolean;
        /**
         * The App description
         */
        description?: string;
        /**
         * The developer email
         */
        developerEmail?: string;
        /**
         * Event types the App listen to
         */
        events?: ("FILE_CREATED" | "TRANSACTION_CREATED" | "TRANSACTION_UPDATED" | "TRANSACTION_DELETED" | "TRANSACTION_POSTED" | "TRANSACTION_CHECKED" | "TRANSACTION_UNCHECKED" | "TRANSACTION_RESTORED" | "ACCOUNT_CREATED" | "ACCOUNT_UPDATED" | "ACCOUNT_DELETED" | "QUERY_CREATED" | "QUERY_UPDATED" | "QUERY_DELETED" | "GROUP_CREATED" | "GROUP_UPDATED" | "GROUP_DELETED" | "COMMENT_CREATED" | "COMMENT_DELETED" | "COLLABORATOR_ADDED" | "COLLABORATOR_UPDATED" | "COLLABORATOR_REMOVED" | "INTEGRATION_CREATED" | "INTEGRATION_UPDATED" | "INTEGRATION_DELETED" | "BOOK_UPDATED" | "BOOK_DELETED")[];
        /**
         * File patters the App handles - wildcard accepted - E.g *.pdf *-bank.csv
         */
        filePatterns?: string[];
        /**
         * The unique agent id of the App - this can't be changed after created
         */
        id?: string;
        /**
         * Tell if this app is installable in a book
         */
        installable?: boolean;
        /**
         * The App logo url
         */
        logoUrl?: string;
        /**
         * The App logo url in dark mode
         */
        logoUrlDark?: string;
        /**
         * The menu popup window height
         */
        menuPopupHeight?: string;
        /**
         * The menu popup window width
         */
        menuPopupWidth?: string;
        /**
         * The contex menu text - default to the App name
         */
        menuText?: string;
        /**
         * The context menu url
         */
        menuUrl?: string;
        /**
         * The context menu url in dev mode
         */
        menuUrlDev?: string;
        /**
         * The App name
         */
        name?: string;
        /**
         * The owner email
         */
        ownerEmail?: string;
        /**
         * The owner company logo url
         */
        ownerLogoUrl?: string;
        /**
         * The owner company name
         */
        ownerName?: string;
        /**
         * The owner company website url
         */
        ownerWebsite?: string;
        propertiesSchema?: AppPropertiesSchema;
        /**
         * Tell if this app already published
         */
        published?: boolean;
        /**
         * The readme.md file as string
         */
        readme?: string;
        /**
         * Tell if the code repository is private
         */
        repoPrivate?: boolean;
        /**
         * The code repository url
         */
        repoUrl?: string;
        /**
         * The Google OAuth Scopes used by the app
         */
        scopes?: string[];
        /**
         * The user emails to enable the App while not yet published
         */
        userEmails?: string;
        /**
         * The Webhook endpoint URL to listen for book events
         */
        webhookUrl?: string;
        /**
         * The Webhook endpoint URL to listen for book events in dev mode
         */
        webhookUrlDev?: string;
        /**
         * The App website url
         */
        website?: string;
    }
    export interface AppList {
        items?: App[];
    }
    export interface AppPropertiesSchema {
        account?: AppPropertySchema;
        book?: AppPropertySchema;
        group?: AppPropertySchema;
        transaction?: AppPropertySchema;
    }
    export interface AppPropertySchema {
        /**
         * The property keys schema
         */
        keys?: string[];
        /**
         * The property values schema
         */
        values?: string[];
    }
    export interface Backlog {
        count?: number; // int32
    }
    export interface Balance {
        cumulativeBalance?: string;
        cumulativeCredit?: string;
        cumulativeDebit?: string;
        day?: number; // int32
        fuzzyDate?: number; // int32
        month?: number; // int32
        periodBalance?: string;
        periodCredit?: string;
        periodDebit?: string;
        year?: number; // int32
    }
    export interface Balances {
        accountBalances?: AccountBalances[];
        balancesUrl?: string;
        groupBalances?: GroupBalances[];
        nextRange?: string;
        periodicity?: "DAILY" | "MONTHLY" | "YEARLY";
        previousRange?: string;
        range?: string;
        rangeBeginLabel?: string;
        rangeEndLabel?: string;
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
        /**
         * Tells if the Book has auto post enabled
         */
        autoPost?: boolean;
        /**
         * The book closing date
         */
        closingDate?: string;
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
         * The book lock date
         */
        lockDate?: string;
        /**
         * The name of the Book
         */
        name?: string;
        /**
         * The Book owner username
         */
        ownerName?: string;
        /**
         * The transactions pagination page size
         */
        pageSize?: number; // int32
        /**
         * The period slice for balances visualization
         */
        period?: "MONTH" | "QUARTER" | "YEAR";
        /**
         * The start month when YEAR period set
         */
        periodStartMonth?: "JANUARY" | "FEBRUARY" | "MARCH" | "APRIL" | "MAY" | "JUNE" | "JULY" | "AUGUST" | "SEPTEMBER" | "OCTOBER" | "NOVEMBER" | "DECEMBER";
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
        /**
         * The total transactions posted
         */
        totalTransactions?: number; // int64
        /**
         * The total transactions posted on current month
         */
        totalTransactionsCurrentMonth?: number; // int64
        /**
         * The total transactions posted on current year
         */
        totalTransactionsCurrentYear?: number; // int64
        /**
         * The last update timestamp, in milliseconds
         */
        updatedAt?: string;
        /**
         * The Visibility of the Book
         */
        visibility?: "PUBLIC" | "PRIVATE";
    }
    export interface BookList {
        /**
         * List items
         */
        items?: Book[];
    }
    export interface BotResponse {
        agentId?: string;
        createdAt?: string;
        message?: string;
        type?: "INFO" | "WARNING" | "ERROR";
    }
    export interface Collaborator {
        /**
         * The id of agent that created the resource
         */
        agentId?: string;
        /**
         * The creation timestamp, in milliseconds
         */
        createdAt?: string;
        /**
         * The email of the Collaborator
         */
        email?: string;
        /**
         * The unique id that identifies the Collaborator in the Book
         */
        id?: string;
        /**
         * The permission the Collaborator has in the Book
         */
        permission?: "OWNER" | "EDITOR" | "POSTER" | "RECORDER" | "VIEWER" | "NONE";
        /**
         * The last update timestamp, in milliseconds
         */
        updatedAt?: string;
    }
    /**
     * An ordered list of Collaborator
     */
    export interface CollaboratorPayloadCollection {
        items?: Collaborator[];
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
        permission?: "OWNER" | "EDITOR" | "POSTER" | "RECORDER" | "VIEWER" | "NONE";
        /**
         * The last update timestamp, in milliseconds
         */
        updatedAt?: string;
    }
    export interface CollectionList {
        /**
         * List items
         */
        items?: Collection[];
    }
    export interface Connection {
        /**
         * The id of agent that created the resource
         */
        agentId?: string;
        /**
         * The creation timestamp, in milliseconds
         */
        createdAt?: string;
        dateAddedMs?: string;
        email?: string;
        id?: string;
        logo?: string;
        name?: string;
        properties?: {
            [name: string]: string;
        };
        type?: "APP" | "BANK";
        /**
         * The last update timestamp, in milliseconds
         */
        updatedAt?: string;
        userId?: string;
        uuid?: string;
    }
    export interface ConnectionList {
        /**
         * List items
         */
        items?: Connection[];
    }
    export interface Count {
        day?: number; // int32
        fuzzyDate?: number; // int32
        month?: number; // int32
        total?: number; // int64
        year?: number; // int32
    }
    export interface Counts {
        posted?: Count[];
        trashed?: Count[];
    }
    export interface Event {
        agent?: Agent;
        book?: Book;
        /**
         * The id of the Book associated to the Event
         */
        bookId?: string;
        /**
         * The list of bot responses associated to the Event
         */
        botResponses?: BotResponse[];
        /**
         * The creation timestamp, in milliseconds
         */
        createdAt?: string;
        /**
         * The creation date time on RFC3339 format
         */
        createdOn?: string; // date-time
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
        type?: "FILE_CREATED" | "TRANSACTION_CREATED" | "TRANSACTION_UPDATED" | "TRANSACTION_DELETED" | "TRANSACTION_POSTED" | "TRANSACTION_CHECKED" | "TRANSACTION_UNCHECKED" | "TRANSACTION_RESTORED" | "ACCOUNT_CREATED" | "ACCOUNT_UPDATED" | "ACCOUNT_DELETED" | "QUERY_CREATED" | "QUERY_UPDATED" | "QUERY_DELETED" | "GROUP_CREATED" | "GROUP_UPDATED" | "GROUP_DELETED" | "COMMENT_CREATED" | "COMMENT_DELETED" | "COLLABORATOR_ADDED" | "COLLABORATOR_UPDATED" | "COLLABORATOR_REMOVED" | "INTEGRATION_CREATED" | "INTEGRATION_UPDATED" | "INTEGRATION_DELETED" | "BOOK_UPDATED" | "BOOK_DELETED";
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
         * The file content Base64 encoded
         */
        content?: string;
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
         * The key/value custom properties of the File
         */
        properties?: {
            [name: string]: string;
        };
        /**
         * The file size in bytes
         */
        size?: number; // int64
        /**
         * The last update timestamp, in milliseconds
         */
        updatedAt?: string;
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
         * Tell if the group is credit
         */
        credit?: boolean;
        /**
         * Tell if the group is has any accounts
         */
        hasAccounts?: boolean;
        /**
         * Tell if the group is has any children groups
         */
        hasGroups?: boolean;
        /**
         * Tell if the group is hidden on transactions main menu
         */
        hidden?: boolean;
        /**
         * The unique id that identifies the Group in the Book
         */
        id?: string;
        /**
         * Tell if the group is locked by the Book owner
         */
        locked?: boolean;
        /**
         * Tell if has mixed type of accounts
         */
        mixed?: boolean;
        /**
         * The name of the Group
         */
        name?: string;
        /**
         * The name of the Group, lowercase, without spaces or special characters
         */
        normalizedName?: string;
        parent?: Group;
        /**
         * Tell if the group is permanent
         */
        permanent?: boolean;
        /**
         * The key/value custom properties of the Group
         */
        properties?: {
            [name: string]: string;
        };
        type?: "ASSET" | "LIABILITY" | "INCOMING" | "OUTGOING";
        /**
         * The last update timestamp, in milliseconds
         */
        updatedAt?: string;
    }
    export interface GroupBalances {
        accountBalances?: AccountBalances[];
        balances?: Balance[];
        credit?: boolean;
        cumulativeBalance?: string;
        cumulativeCredit?: string;
        cumulativeDebit?: string;
        groupBalances?: GroupBalances[];
        name?: string;
        normalizedName?: string;
        periodBalance?: string;
        periodCredit?: string;
        periodDebit?: string;
        permanent?: boolean;
        properties?: {
            [name: string]: string;
        };
    }
    export interface GroupList {
        /**
         * List items
         */
        items?: Group[];
    }
    export interface Integration {
        addedBy?: string;
        /**
         * The id of agent that created the resource
         */
        agentId?: string;
        bookId?: string;
        connectionId?: string;
        /**
         * The creation timestamp, in milliseconds
         */
        createdAt?: string;
        dateAddedMs?: string;
        id?: string;
        lastUpdateMs?: string;
        logo?: string;
        name?: string;
        normalizedName?: string;
        properties?: {
            [name: string]: string;
        };
        /**
         * The last update timestamp, in milliseconds
         */
        updatedAt?: string;
        userId?: string;
    }
    export interface IntegrationList {
        /**
         * List items
         */
        items?: Integration[];
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
        /**
         * The last update timestamp, in milliseconds
         */
        updatedAt?: string;
    }
    export interface QueryList {
        /**
         * List items
         */
        items?: Query[];
    }
    export interface Template {
        bookId?: string;
        bookLink?: string;
        category?: string;
        description?: string;
        imageUrl?: string;
        name?: string;
        sheetsLink?: string;
        timesUsed?: number; // int32
    }
    export interface TemplateList {
        /**
         * List items
         */
        items?: Template[];
    }
    export interface Transaction {
        /**
         * The id of agent that created the resource
         */
        agentId?: string;
        /**
         * The logo of the agent that created the transaction
         */
        agentLogo?: string;
        /**
         * The logo in dark mode, of the agent that created the transaction
         */
        agentLogoDark?: string;
        /**
         * The name of the agent that created the transaction
         */
        agentName?: string;
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
        /**
         * The actor username that created the transaction
         */
        createdBy?: string;
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
         * The last update timestamp, in milliseconds
         */
        updatedAt?: string;
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
    export interface Url {
        url?: string;
    }
    export interface User {
        /**
         * The user public avatar url
         */
        avatarUrl?: string;
        /**
         * True if user already had any bank connection
         */
        bankConnections?: boolean;
        /**
         * True if billing is enabled for the user
         */
        billingEnabled?: boolean;
        /**
         * How many days left in trial
         */
        daysLeftInTrial?: number; // int32
        /**
         * The user email
         */
        email?: string;
        /**
         * True if user is in the free plan
         */
        free?: boolean;
        /**
         * The user full name
         */
        fullName?: string;
        /**
         * The user given name
         */
        givenName?: string;
        /**
         * The user hash
         */
        hash?: string;
        /**
         * The user hosted domain
         */
        hostedDomain?: string;
        /**
         * The user unique id
         */
        id?: string;
        /**
         * The user display name
         */
        name?: string;
        /**
         * The user plan
         */
        plan?: string;
        /**
         * True if user started trial
         */
        startedTrial?: boolean;
        /**
         * The Bkper username of the user
         */
        username?: string;
    }
}
declare namespace Paths {
    namespace BkperV5AddBooksToCollection {
        export interface BodyParameters {
            BookList: Parameters.BookList;
        }
        namespace Parameters {
            export type BookList = bkper.BookList;
        }
        namespace Responses {
            export type $200 = bkper.BookList;
        }
    }
    namespace BkperV5AddCollaborator {
        export interface BodyParameters {
            Collaborator: Parameters.Collaborator;
        }
        namespace Parameters {
            export type Collaborator = bkper.Collaborator;
        }
        namespace Responses {
            export type $200 = bkper.Collaborator;
        }
    }
    namespace BkperV5CheckTransaction {
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
    namespace BkperV5CheckTransactionsBatch {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            export type TransactionList = bkper.TransactionList;
        }
    }
    namespace BkperV5CopyBook {
        namespace Responses {
            export type $200 = bkper.Book;
        }
    }
    namespace BkperV5CountTransactions {
        namespace Responses {
            export type $200 = bkper.Count;
        }
    }
    namespace BkperV5CountTransactionsPosted {
        namespace Responses {
            export type $200 = bkper.Counts;
        }
    }
    namespace BkperV5CreateAccount {
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
    namespace BkperV5CreateAccountsBatch {
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
    namespace BkperV5CreateApp {
        export interface BodyParameters {
            App: Parameters.App;
        }
        namespace Parameters {
            export type App = bkper.App;
        }
        namespace Responses {
            export type $200 = bkper.App;
        }
    }
    namespace BkperV5CreateCollection {
        export interface BodyParameters {
            Collection: Parameters.Collection;
        }
        namespace Parameters {
            export type Collection = bkper.Collection;
        }
        namespace Responses {
            export type $200 = bkper.Collection;
        }
    }
    namespace BkperV5CreateConnection {
        export interface BodyParameters {
            Connection: Parameters.Connection;
        }
        namespace Parameters {
            export type Connection = bkper.Connection;
        }
        namespace Responses {
            export type $200 = bkper.Connection;
        }
    }
    namespace BkperV5CreateFile {
        export interface BodyParameters {
            File: Parameters.File;
        }
        namespace Parameters {
            export type File = bkper.File;
        }
        namespace Responses {
            export type $200 = bkper.File;
        }
    }
    namespace BkperV5CreateGroup {
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
    namespace BkperV5CreateGroupsBatch {
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
    namespace BkperV5CreateIntegration {
        export interface BodyParameters {
            Integration: Parameters.Integration;
        }
        namespace Parameters {
            export type Integration = bkper.Integration;
        }
        namespace Responses {
            export type $200 = bkper.Integration;
        }
    }
    namespace BkperV5CreateNewBook {
        export interface BodyParameters {
            Book: Parameters.Book;
        }
        namespace Parameters {
            export type Book = bkper.Book;
        }
        namespace Responses {
            export type $200 = bkper.Book;
        }
    }
    namespace BkperV5CreateTransaction {
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
    namespace BkperV5CreateTransactionsBatch {
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
    namespace BkperV5DeleteAccount {
        namespace Responses {
            export type $200 = bkper.Account;
        }
    }
    namespace BkperV5DeleteCollection {
        namespace Responses {
            export type $200 = bkper.BookList;
        }
    }
    namespace BkperV5DeleteConnection {
        namespace Responses {
            export type $200 = bkper.Connection;
        }
    }
    namespace BkperV5DeleteEventResponse {
        namespace Responses {
            export type $200 = bkper.Event;
        }
    }
    namespace BkperV5DeleteGroup {
        namespace Responses {
            export type $200 = bkper.Group;
        }
    }
    namespace BkperV5DeleteIntegration {
        namespace Responses {
            export type $200 = bkper.Integration;
        }
    }
    namespace BkperV5DeleteQuery {
        namespace Responses {
            export type $200 = bkper.Query;
        }
    }
    namespace BkperV5GetAccount {
        namespace Responses {
            export type $200 = bkper.Account;
        }
    }
    namespace BkperV5GetApp {
        namespace Responses {
            export type $200 = bkper.App;
        }
    }
    namespace BkperV5GetBalances {
        namespace Responses {
            export type $200 = bkper.Balances;
        }
    }
    namespace BkperV5GetBillingPortal {
        namespace Responses {
            export type $200 = bkper.Url;
        }
    }
    namespace BkperV5GetBook {
        namespace Responses {
            export type $200 = bkper.Book;
        }
    }
    namespace BkperV5GetBookEventsBacklog {
        namespace Responses {
            export type $200 = bkper.Backlog;
        }
    }
    namespace BkperV5GetConnection {
        namespace Responses {
            export type $200 = bkper.Connection;
        }
    }
    namespace BkperV5GetFile {
        namespace Responses {
            export type $200 = bkper.File;
        }
    }
    namespace BkperV5GetGroup {
        namespace Responses {
            export type $200 = bkper.Group;
        }
    }
    namespace BkperV5GetTransaction {
        namespace Responses {
            export type $200 = bkper.Transaction;
        }
    }
    namespace BkperV5GetUser {
        namespace Responses {
            export type $200 = bkper.User;
        }
    }
    namespace BkperV5ListAccountGroups {
        namespace Responses {
            export type $200 = bkper.GroupList;
        }
    }
    namespace BkperV5ListAccounts {
        namespace Responses {
            export type $200 = bkper.AccountList;
        }
    }
    namespace BkperV5ListApps {
        namespace Responses {
            export type $200 = bkper.AppList;
        }
    }
    namespace BkperV5ListBookApps {
        namespace Responses {
            export type $200 = bkper.AppList;
        }
    }
    namespace BkperV5ListBooks {
        namespace Responses {
            export type $200 = bkper.BookList;
        }
    }
    namespace BkperV5ListCollaborators {
        namespace Responses {
            export type $200 = /* An ordered list of Collaborator */ bkper.CollaboratorPayloadCollection;
        }
    }
    namespace BkperV5ListCollections {
        namespace Responses {
            export type $200 = bkper.CollectionList;
        }
    }
    namespace BkperV5ListConnectionIntegrations {
        namespace Responses {
            export type $200 = bkper.IntegrationList;
        }
    }
    namespace BkperV5ListConnections {
        namespace Responses {
            export type $200 = bkper.ConnectionList;
        }
    }
    namespace BkperV5ListEvents {
        namespace Responses {
            export type $200 = bkper.EventList;
        }
    }
    namespace BkperV5ListGroupAccounts {
        namespace Responses {
            export type $200 = bkper.AccountList;
        }
    }
    namespace BkperV5ListGroups {
        namespace Responses {
            export type $200 = bkper.GroupList;
        }
    }
    namespace BkperV5ListIntegrations {
        namespace Responses {
            export type $200 = bkper.IntegrationList;
        }
    }
    namespace BkperV5ListQueries {
        namespace Responses {
            export type $200 = bkper.QueryList;
        }
    }
    namespace BkperV5ListTemplates {
        namespace Responses {
            export type $200 = bkper.TemplateList;
        }
    }
    namespace BkperV5ListTransactions {
        namespace Responses {
            export type $200 = bkper.TransactionList;
        }
    }
    namespace BkperV5PatchApp {
        export interface BodyParameters {
            App: Parameters.App;
        }
        namespace Parameters {
            export type App = bkper.App;
        }
        namespace Responses {
            export type $200 = bkper.App;
        }
    }
    namespace BkperV5PostTransaction {
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
    namespace BkperV5PostTransactionsBatch {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            export type TransactionList = bkper.TransactionList;
        }
    }
    namespace BkperV5RemoveBooksFromCollection {
        export interface BodyParameters {
            BookList: Parameters.BookList;
        }
        namespace Parameters {
            export type BookList = bkper.BookList;
        }
        namespace Responses {
            export type $200 = bkper.BookList;
        }
    }
    namespace BkperV5RemoveCollaborator {
        namespace Responses {
            export type $200 = bkper.Collaborator;
        }
    }
    namespace BkperV5RemoveTransaction {
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
    namespace BkperV5ReplayEventResponse {
        namespace Responses {
            export type $200 = bkper.Event;
        }
    }
    namespace BkperV5ReplayEvents {
        export interface BodyParameters {
            EventList: Parameters.EventList;
        }
        namespace Parameters {
            export type EventList = bkper.EventList;
        }
    }
    namespace BkperV5RestoreTransaction {
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
    namespace BkperV5SaveQuery {
        export interface BodyParameters {
            Query: Parameters.Query;
        }
        namespace Parameters {
            export type Query = bkper.Query;
        }
        namespace Responses {
            export type $200 = bkper.Query;
        }
    }
    namespace BkperV5TrashTransaction {
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
    namespace BkperV5TrashTransactionsBatch {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            export type TransactionList = bkper.TransactionList;
        }
    }
    namespace BkperV5UncheckTransaction {
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
    namespace BkperV5UncheckTransactionsBatch {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            export type TransactionList = bkper.TransactionList;
        }
    }
    namespace BkperV5UntrashTransaction {
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
    namespace BkperV5UntrashTransactionsBatch {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            export type TransactionList = bkper.TransactionList;
        }
    }
    namespace BkperV5UpdateAccount {
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
    namespace BkperV5UpdateApp {
        export interface BodyParameters {
            App: Parameters.App;
        }
        namespace Parameters {
            export type App = bkper.App;
        }
        namespace Responses {
            export type $200 = bkper.App;
        }
    }
    namespace BkperV5UpdateBook {
        export interface BodyParameters {
            Book: Parameters.Book;
        }
        namespace Parameters {
            export type Book = bkper.Book;
        }
        namespace Responses {
            export type $200 = bkper.Book;
        }
    }
    namespace BkperV5UpdateBookDeprecated {
        export interface BodyParameters {
            Book: Parameters.Book;
        }
        namespace Parameters {
            export type Book = bkper.Book;
        }
        namespace Responses {
            export type $200 = bkper.Book;
        }
    }
    namespace BkperV5UpdateCollection {
        export interface BodyParameters {
            Collection: Parameters.Collection;
        }
        namespace Parameters {
            export type Collection = bkper.Collection;
        }
        namespace Responses {
            export type $200 = bkper.Collection;
        }
    }
    namespace BkperV5UpdateConnection {
        export interface BodyParameters {
            Connection: Parameters.Connection;
        }
        namespace Parameters {
            export type Connection = bkper.Connection;
        }
        namespace Responses {
            export type $200 = bkper.Connection;
        }
    }
    namespace BkperV5UpdateGroup {
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
    namespace BkperV5UpdateIntegration {
        export interface BodyParameters {
            Integration: Parameters.Integration;
        }
        namespace Parameters {
            export type Integration = bkper.Integration;
        }
        namespace Responses {
            export type $200 = bkper.Integration;
        }
    }
    namespace BkperV5UpdateQuery {
        export interface BodyParameters {
            Query: Parameters.Query;
        }
        namespace Parameters {
            export type Query = bkper.Query;
        }
        namespace Responses {
            export type $200 = bkper.Query;
        }
    }
    namespace BkperV5UpdateTransaction {
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
    namespace BkperV5UpdateTransactionsBatch {
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
}
