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
         * The running balance of the account at the transaction date. Only present when the account is part of a transaction response filtered by account. NOT the current account balance. To get current balances, use the Balances endpoint: GET /books/{bookId}/balances
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
         * Whether the account has any transactions posted
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
         * Whether this app is connectable by a user
         */
        connectable?: boolean;
        /**
         * Whether the app is deprecated
         */
        deprecated?: boolean;
        /**
         * The App description
         */
        description?: string;
        /**
         * The developers (usernames and domain patterns), comma or space separated
         */
        developers?: string;
        /**
         * Event types the App listen to
         */
        events?: ("FILE_CREATED" | "FILE_UPDATED" | "TRANSACTION_CREATED" | "TRANSACTION_UPDATED" | "TRANSACTION_DELETED" | "TRANSACTION_POSTED" | "TRANSACTION_CHECKED" | "TRANSACTION_UNCHECKED" | "TRANSACTION_RESTORED" | "ACCOUNT_CREATED" | "ACCOUNT_UPDATED" | "ACCOUNT_DELETED" | "QUERY_CREATED" | "QUERY_UPDATED" | "QUERY_DELETED" | "GROUP_CREATED" | "GROUP_UPDATED" | "GROUP_DELETED" | "COMMENT_CREATED" | "COMMENT_DELETED" | "COLLABORATOR_ADDED" | "COLLABORATOR_UPDATED" | "COLLABORATOR_REMOVED" | "INTEGRATION_CREATED" | "INTEGRATION_UPDATED" | "INTEGRATION_DELETED" | "BOOK_CREATED" | "BOOK_AUDITED" | "BOOK_UPDATED" | "BOOK_DELETED")[];
        /**
         * File patterns the App handles - wildcard accepted. E.g. *.pdf, *-bank.csv
         */
        filePatterns?: string[];
        /**
         * The unique agent id of the App - this can't be changed after created
         */
        id?: string;
        /**
         * Whether this app is installable in a book
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
         * How the app menu opens. Default to SIDEBAR
         */
        menuOpenMode?: "SIDEBAR" | "EXPANDED" | "NEW_TAB";
        /**
         * Deprecated
         */
        menuPopupHeight?: string;
        /**
         * Deprecated
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
         * The owner user email
         */
        ownerEmail?: string;
        /**
         * The owner user id
         */
        ownerId?: string;
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
         * Whether this app is already published
         */
        published?: boolean;
        /**
         * The readme.md file as string
         */
        readme?: string;
        /**
         * The readme.md file as raw markdown string
         */
        readmeMd?: string;
        /**
         * Whether the code repository is private
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
         * The users (usernames and domain patterns) to enable the App while not yet published
         */
        users?: string;
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
    export interface Billing {
        /**
         * The billing admin email for the user's billing account
         */
        adminEmail?: string;
        /**
         * How many days the user has left in the trial period
         */
        daysLeftInTrial?: number; // int32
        /**
         * The user's email address
         */
        email?: string;
        /**
         * True if billing is enabled for the user
         */
        enabled?: boolean;
        /**
         * The user hosted domain
         */
        hostedDomain?: string;
        /**
         * The user's current plan
         */
        plan?: string;
        /**
         * True if subscription payment is overdue
         */
        planOverdue?: boolean;
        /**
         * True if the user has started the trial period
         */
        startedTrial?: boolean;
        /**
         * User-level total transactions this month
         */
        totalTransactionsThisMonth?: number; // int64
        /**
         * User-level total transactions this year
         */
        totalTransactionsThisYear?: number; // int64
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
         * The book closing date, in ISO format yyyy-MM-dd. Transactions on or before this date are closed for the period
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
         * The number of fraction digits (decimal places) of the Book. E.g. 2 for ####.##, 4 for ####.####
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
         * The last update date of the Book, in milliseconds
         */
        lastUpdateMs?: string;
        /**
         * The book lock date, in ISO format yyyy-MM-dd. Transactions on or before this date are locked
         */
        lockDate?: string;
        /**
         * The logo URL of the book owner's custom domain
         */
        logoUrl?: string;
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
         * The time zone of the Book, in IANA format. E.g. America/New_York, Europe/London
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
         * The Collaborator public avatar url
         */
        avatarUrl?: string;
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
        /**
         * The permission the current user has in the Collection. E.g. OWNER, EDITOR, NONE
         */
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
    export interface Domain {
        /**
         * The unique id of the domain
         */
        id?: string;
        /**
         * The domain name
         */
        name?: string;
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
        type?: "FILE_CREATED" | "FILE_UPDATED" | "TRANSACTION_CREATED" | "TRANSACTION_UPDATED" | "TRANSACTION_DELETED" | "TRANSACTION_POSTED" | "TRANSACTION_CHECKED" | "TRANSACTION_UNCHECKED" | "TRANSACTION_RESTORED" | "ACCOUNT_CREATED" | "ACCOUNT_UPDATED" | "ACCOUNT_DELETED" | "QUERY_CREATED" | "QUERY_UPDATED" | "QUERY_DELETED" | "GROUP_CREATED" | "GROUP_UPDATED" | "GROUP_DELETED" | "COMMENT_CREATED" | "COMMENT_DELETED" | "COLLABORATOR_ADDED" | "COLLABORATOR_UPDATED" | "COLLABORATOR_REMOVED" | "INTEGRATION_CREATED" | "INTEGRATION_UPDATED" | "INTEGRATION_DELETED" | "BOOK_CREATED" | "BOOK_AUDITED" | "BOOK_UPDATED" | "BOOK_DELETED";
        user?: User;
    }
    export interface EventData {
        object?: {
            [key: string]: any;
        };
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
    export interface FileList {
        /**
         * The cursor, for pagination
         */
        cursor?: string;
        /**
         * List items
         */
        items?: File[];
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
         * Whether the group has credit nature
         */
        credit?: boolean;
        /**
         * Whether the group has any accounts
         */
        hasAccounts?: boolean;
        /**
         * Whether the group has any children groups
         */
        hasGroups?: boolean;
        /**
         * Whether the group is hidden on the transactions main menu
         */
        hidden?: boolean;
        /**
         * The unique id that identifies the Group in the Book
         */
        id?: string;
        /**
         * Whether the group is locked by the Book owner
         */
        locked?: boolean;
        /**
         * Whether the group has mixed types of accounts
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
         * Whether the group is permanent
         */
        permanent?: boolean;
        /**
         * The key/value custom properties of the Group
         */
        properties?: {
            [name: string]: string;
        };
        /**
         * The type of the accounts in the group. E.g. ASSET, LIABILITY, INCOMING, OUTGOING
         */
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
        logoDark?: string;
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
         * Whether the transaction is checked
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
         * Whether the transaction is a draft
         */
        draft?: boolean;
        /**
         * The files attached to the transaction
         */
        files?: File[];
        /**
         * The unique id that identifies the transaction in the book
         */
        id?: string;
        /**
         * Whether the transaction is already posted on accounts, otherwise is a draft
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
         * Whether the transaction is trashed
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
         * The billing admin email for this user's billing account
         */
        billingAdminEmail?: string;
        /**
         * True if billing is enabled for the user
         */
        billingEnabled?: boolean;
        /**
         * How many days left in trial
         */
        daysLeftInTrial?: number; // int32
        domain?: Domain;
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
         * True if subscription payment is overdue
         */
        planOverdue?: boolean;
        /**
         * True if user started trial
         */
        startedTrial?: boolean;
        /**
         * User-level total transactions this month
         */
        totalTransactionsThisMonth?: number; // int64
        /**
         * User-level total transactions this year
         */
        totalTransactionsThisYear?: number; // int64
        /**
         * The Bkper username of the user
         */
        username?: string;
    }
}
declare namespace Paths {
    namespace AddBooksToCollection {
        export interface BodyParameters {
            BookList: Parameters.BookList;
        }
        namespace Parameters {
            export type BookList = bkper.BookList;
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = bkper.BookList;
        }
    }
    namespace AddCollaborator {
        export interface BodyParameters {
            Collaborator: Parameters.Collaborator;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Collaborator = bkper.Collaborator;
            /**
             * Optional message to send with the invitation email
             */
            export type Message = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            message?: /* Optional message to send with the invitation email */ Parameters.Message;
        }
        namespace Responses {
            export type $200 = bkper.Collaborator;
        }
    }
    namespace AuditBook {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
    }
    namespace CheckTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Transaction = bkper.Transaction;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace CheckTransactionsBatch {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type TransactionList = bkper.TransactionList;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
    }
    namespace CopyBook {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * Whether to copy transactions
             */
            export type CopyTransactions = boolean;
            /**
             * Start date for copying transactions (YYYYMMDD format)
             */
            export type FromDate = number; // int32
            /**
             * Name for the copied book
             */
            export type Name = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            name?: /* Name for the copied book */ Parameters.Name;
            copyTransactions?: /* Whether to copy transactions */ Parameters.CopyTransactions;
            fromDate?: /* Start date for copying transactions (YYYYMMDD format) */ Parameters.FromDate /* int32 */;
        }
        namespace Responses {
            export type $200 = bkper.Book;
        }
    }
    namespace CountTransactions {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The query to filter transactions
             */
            export type Query = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            query?: /* The query to filter transactions */ Parameters.Query;
        }
        namespace Responses {
            export type $200 = bkper.Count;
        }
    }
    namespace CountTransactionsPosted {
        namespace Parameters {
            /**
             * After date, on yyyy-mm-dd format.
             */
            export type After = string; // date
            /**
             * Before date, on yyyy-mm-dd format.
             */
            export type Before = string; // date
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * Periodicity DAILY or MONTHLY
             */
            export type Periodicity = "DAILY" | "MONTHLY" | "YEARLY";
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            after: /* After date, on yyyy-mm-dd format. */ Parameters.After /* date */;
            before: /* Before date, on yyyy-mm-dd format. */ Parameters.Before /* date */;
            periodicity: /* Periodicity DAILY or MONTHLY */ Parameters.Periodicity;
        }
        namespace Responses {
            export type $200 = bkper.Counts;
        }
    }
    namespace CreateAccount {
        export interface BodyParameters {
            Account: Parameters.Account;
        }
        namespace Parameters {
            export type Account = bkper.Account;
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.Account;
        }
    }
    namespace CreateAccountsBatch {
        export interface BodyParameters {
            AccountList: Parameters.AccountList;
        }
        namespace Parameters {
            export type AccountList = bkper.AccountList;
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.AccountList;
        }
    }
    namespace CreateApp {
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
    namespace CreateCollection {
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
    namespace CreateConnection {
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
    namespace CreateFile {
        export interface BodyParameters {
            File: Parameters.File;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type File = bkper.File;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.File;
        }
    }
    namespace CreateGroup {
        export interface BodyParameters {
            Group: Parameters.Group;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Group = bkper.Group;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.Group;
        }
    }
    namespace CreateGroupsBatch {
        export interface BodyParameters {
            GroupList: Parameters.GroupList;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type GroupList = bkper.GroupList;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.GroupList;
        }
    }
    namespace CreateIntegration {
        export interface BodyParameters {
            Integration: Parameters.Integration;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Integration = bkper.Integration;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.Integration;
        }
    }
    namespace CreateNewBook {
        export interface BodyParameters {
            Book: Parameters.Book;
        }
        namespace Parameters {
            export type Book = bkper.Book;
            export type Name = string;
        }
        export interface QueryParameters {
            name?: Parameters.Name;
        }
        namespace Responses {
            export type $200 = bkper.Book;
        }
    }
    namespace CreateTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * Optional time zone for parsing dates when recording from different book time zone
             */
            export type TimeZone = string;
            export type Transaction = bkper.Transaction;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            timeZone?: /* Optional time zone for parsing dates when recording from different book time zone */ Parameters.TimeZone;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace CreateTransactionsBatch {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * Optional time zone for parsing dates when recording from different book time zone
             */
            export type TimeZone = string;
            export type TransactionList = bkper.TransactionList;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            timeZone?: /* Optional time zone for parsing dates when recording from different book time zone */ Parameters.TimeZone;
        }
        namespace Responses {
            export type $200 = bkper.TransactionList;
        }
    }
    namespace DeleteAccount {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The account id
             */
            export type Id = number; // int64
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
            id: /* The account id */ Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = bkper.Account;
        }
    }
    namespace DeleteAccountsBatch {
        export interface BodyParameters {
            AccountList: Parameters.AccountList;
        }
        namespace Parameters {
            export type AccountList = bkper.AccountList;
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.AccountList;
        }
    }
    namespace DeleteBook {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.Book;
        }
    }
    namespace DeleteCollection {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = bkper.BookList;
        }
    }
    namespace DeleteConnection {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = bkper.Connection;
        }
    }
    namespace DeleteEventResponse {
        namespace Parameters {
            /**
             * The agent id
             */
            export type AgentId = string;
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The event id
             */
            export type Id = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
            id: /* The event id */ Parameters.Id;
            agentId: /* The agent id */ Parameters.AgentId;
        }
        namespace Responses {
            export type $200 = bkper.Event;
        }
    }
    namespace DeleteGroup {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The group id
             */
            export type Id = number; // int64
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
            id: /* The group id */ Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = bkper.Group;
        }
    }
    namespace DeleteIntegration {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Id = number; // int64
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = bkper.Integration;
        }
    }
    namespace DeleteQuery {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The query id
             */
            export type Id = number; // int64
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
            id: /* The query id */ Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = bkper.Query;
        }
    }
    namespace GetAccount {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The account id or name
             */
            export type Id = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
            id: /* The account id or name */ Parameters.Id;
        }
        namespace Responses {
            export type $200 = bkper.Account;
        }
    }
    namespace GetApp {
        namespace Parameters {
            export type AgentId = string;
        }
        export interface PathParameters {
            agentId: Parameters.AgentId;
        }
        namespace Responses {
            export type $200 = bkper.App;
        }
    }
    namespace GetBalances {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The query to filter balances
             */
            export type Query = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            query: /* The query to filter balances */ Parameters.Query;
        }
        namespace Responses {
            export type $200 = bkper.Balances;
        }
    }
    namespace GetBilling {
        namespace Responses {
            export type $200 = bkper.Billing;
        }
    }
    namespace GetBillingCheckout {
        namespace Parameters {
            export type CancelUrl = string;
            export type Cycle = string;
            export type Plan = string;
            export type SuccessUrl = string;
        }
        export interface QueryParameters {
            plan: Parameters.Plan;
            cycle?: Parameters.Cycle;
            successUrl: Parameters.SuccessUrl;
            cancelUrl: Parameters.CancelUrl;
        }
        namespace Responses {
            export type $200 = bkper.Url;
        }
    }
    namespace GetBillingPortal {
        namespace Parameters {
            export type ReturnUrl = string;
        }
        export interface QueryParameters {
            returnUrl: Parameters.ReturnUrl;
        }
        namespace Responses {
            export type $200 = bkper.Url;
        }
    }
    namespace GetBook {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * Optionally load accounts and groups
             */
            export type LoadAccounts = boolean;
            /**
             * Optionally load groups
             */
            export type LoadGroups = boolean;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            loadAccounts?: /* Optionally load accounts and groups */ Parameters.LoadAccounts;
            loadGroups?: /* Optionally load groups */ Parameters.LoadGroups;
        }
        namespace Responses {
            export type $200 = bkper.Book;
        }
    }
    namespace GetBookEventsBacklog {
        namespace Parameters {
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.Backlog;
        }
    }
    namespace GetConnection {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = bkper.Connection;
        }
    }
    namespace GetFile {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The file id
             */
            export type Id = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
            id: /* The file id */ Parameters.Id;
        }
        namespace Responses {
            export type $200 = bkper.File;
        }
    }
    namespace GetGroup {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The group id or name
             */
            export type Id = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
            id: /* The group id or name */ Parameters.Id;
        }
        namespace Responses {
            export type $200 = bkper.Group;
        }
    }
    namespace GetTransaction {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The transaction id
             */
            export type Id = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
            id: /* The transaction id */ Parameters.Id;
        }
        namespace Responses {
            export type $200 = bkper.Transaction;
        }
    }
    namespace GetUser {
        namespace Responses {
            export type $200 = bkper.User;
        }
    }
    namespace ListAccountGroups {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The account id or name
             */
            export type Id = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
            id: /* The account id or name */ Parameters.Id;
        }
        namespace Responses {
            export type $200 = bkper.GroupList;
        }
    }
    namespace ListAccounts {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.AccountList;
        }
    }
    namespace ListApps {
        namespace Responses {
            export type $200 = bkper.AppList;
        }
    }
    namespace ListBillingCounts {
        namespace Responses {
            export type $200 = bkper.Counts;
        }
    }
    namespace ListBookApps {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.AppList;
        }
    }
    namespace ListBooks {
        namespace Parameters {
            /**
             * Optional search term to filter books
             */
            export type Query = string;
        }
        export interface QueryParameters {
            query?: /* Optional search term to filter books */ Parameters.Query;
        }
        namespace Responses {
            export type $200 = bkper.BookList;
        }
    }
    namespace ListCollaborators {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = /* An ordered list of Collaborator */ bkper.CollaboratorPayloadCollection;
        }
    }
    namespace ListCollections {
        namespace Responses {
            export type $200 = bkper.CollectionList;
        }
    }
    namespace ListConnectionIntegrations {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = bkper.IntegrationList;
        }
    }
    namespace ListConnections {
        namespace Responses {
            export type $200 = bkper.ConnectionList;
        }
    }
    namespace ListEvents {
        namespace Parameters {
            /**
             * After date and time, on RFC3339 format
             */
            export type After = string; // date-time
            /**
             * Before date and time, on RFC3339 format
             */
            export type Before = string; // date-time
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * Filter by error
             */
            export type Error = boolean;
            /**
             * The dataset limit. Useful for pagination
             */
            export type Limit = number; // int32
            /**
             * The resourceId associated
             */
            export type ResoureId = string;
            /**
             * Filter by event type
             */
            export type Type = "FILE_CREATED" | "FILE_UPDATED" | "TRANSACTION_CREATED" | "TRANSACTION_UPDATED" | "TRANSACTION_DELETED" | "TRANSACTION_POSTED" | "TRANSACTION_CHECKED" | "TRANSACTION_UNCHECKED" | "TRANSACTION_RESTORED" | "ACCOUNT_CREATED" | "ACCOUNT_UPDATED" | "ACCOUNT_DELETED" | "QUERY_CREATED" | "QUERY_UPDATED" | "QUERY_DELETED" | "GROUP_CREATED" | "GROUP_UPDATED" | "GROUP_DELETED" | "COMMENT_CREATED" | "COMMENT_DELETED" | "COLLABORATOR_ADDED" | "COLLABORATOR_UPDATED" | "COLLABORATOR_REMOVED" | "INTEGRATION_CREATED" | "INTEGRATION_UPDATED" | "INTEGRATION_DELETED" | "BOOK_CREATED" | "BOOK_AUDITED" | "BOOK_UPDATED" | "BOOK_DELETED";
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            after?: /* After date and time, on RFC3339 format */ Parameters.After /* date-time */;
            before?: /* Before date and time, on RFC3339 format */ Parameters.Before /* date-time */;
            error?: /* Filter by error */ Parameters.Error;
            resoureId?: /* The resourceId associated */ Parameters.ResoureId;
            type?: /* Filter by event type */ Parameters.Type;
            limit?: /* The dataset limit. Useful for pagination */ Parameters.Limit /* int32 */;
        }
        namespace Responses {
            export type $200 = bkper.EventList;
        }
    }
    namespace ListFiles {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The dataset limit. Useful for pagination
             */
            export type Limit = number; // int32
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            limit?: /* The dataset limit. Useful for pagination */ Parameters.Limit /* int32 */;
        }
        namespace Responses {
            export type $200 = bkper.FileList;
        }
    }
    namespace ListGroupAccounts {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The group id or name
             */
            export type Id = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
            id: /* The group id or name */ Parameters.Id;
        }
        namespace Responses {
            export type $200 = bkper.AccountList;
        }
    }
    namespace ListGroups {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.GroupList;
        }
    }
    namespace ListIntegrations {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.IntegrationList;
        }
    }
    namespace ListQueries {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.QueryList;
        }
    }
    namespace ListTemplates {
        namespace Responses {
            export type $200 = bkper.TemplateList;
        }
    }
    namespace ListTransactions {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The dataset limit. Useful for pagination
             */
            export type Limit = number; // int32
            /**
             * The query to filter transactions
             */
            export type Query = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            query?: /* The query to filter transactions */ Parameters.Query;
            limit?: /* The dataset limit. Useful for pagination */ Parameters.Limit /* int32 */;
        }
        namespace Responses {
            export type $200 = bkper.TransactionList;
        }
    }
    namespace MergeTransactions {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type TransactionList = bkper.TransactionList;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace PostTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Transaction = bkper.Transaction;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace PostTransactionsBatch {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type TransactionList = bkper.TransactionList;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
    }
    namespace RemoveBooksFromCollection {
        export interface BodyParameters {
            BookList: Parameters.BookList;
        }
        namespace Parameters {
            export type BookList = bkper.BookList;
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = bkper.BookList;
        }
    }
    namespace RemoveCollaborator {
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The collaborator id or email
             */
            export type Id = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
            id: /* The collaborator id or email */ Parameters.Id;
        }
        namespace Responses {
            export type $200 = bkper.Collaborator;
        }
    }
    namespace RemoveTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Transaction = bkper.Transaction;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace ReplayEventResponse {
        namespace Parameters {
            /**
             * The agent id
             */
            export type AgentId = string;
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * The event id
             */
            export type Id = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
            id: /* The event id */ Parameters.Id;
            agentId: /* The agent id */ Parameters.AgentId;
        }
        namespace Responses {
            export type $200 = bkper.Event;
        }
    }
    namespace ReplayEvents {
        export interface BodyParameters {
            EventList: Parameters.EventList;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            /**
             * Replay errors only
             */
            export type ErrorsOnly = boolean;
            export type EventList = bkper.EventList;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            errorsOnly?: /* Replay errors only */ Parameters.ErrorsOnly;
        }
    }
    namespace RestoreTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Transaction = bkper.Transaction;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace SaveQuery {
        export interface BodyParameters {
            Query: Parameters.Query;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Query = bkper.Query;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.Query;
        }
    }
    namespace TrashTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Transaction = bkper.Transaction;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace TrashTransactionsBatch {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type TransactionList = bkper.TransactionList;
            /**
             * True to also trash checked transactions
             */
            export type TrashChecked = boolean;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            trashChecked?: /* True to also trash checked transactions */ Parameters.TrashChecked;
        }
    }
    namespace UncheckTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Transaction = bkper.Transaction;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace UncheckTransactionsBatch {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type TransactionList = bkper.TransactionList;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
    }
    namespace UntrashTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Transaction = bkper.Transaction;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace UntrashTransactionsBatch {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type TransactionList = bkper.TransactionList;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
    }
    namespace UpdateAccount {
        export interface BodyParameters {
            Account: Parameters.Account;
        }
        namespace Parameters {
            export type Account = bkper.Account;
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.Account;
        }
    }
    namespace UpdateAccountsBatch {
        export interface BodyParameters {
            AccountList: Parameters.AccountList;
        }
        namespace Parameters {
            export type AccountList = bkper.AccountList;
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.AccountList;
        }
    }
    namespace UpdateApp {
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
    namespace UpdateBook {
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
    namespace UpdateBookDeprecated {
        export interface BodyParameters {
            Book: Parameters.Book;
        }
        namespace Parameters {
            export type Book = bkper.Book;
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.Book;
        }
    }
    namespace UpdateCollection {
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
    namespace UpdateConnection {
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
    namespace UpdateFile {
        export interface BodyParameters {
            File: Parameters.File;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type File = bkper.File;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.File;
        }
    }
    namespace UpdateGroup {
        export interface BodyParameters {
            Group: Parameters.Group;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Group = bkper.Group;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.Group;
        }
    }
    namespace UpdateIntegration {
        export interface BodyParameters {
            Integration: Parameters.Integration;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Integration = bkper.Integration;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.Integration;
        }
    }
    namespace UpdateQuery {
        export interface BodyParameters {
            Query: Parameters.Query;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Query = bkper.Query;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.Query;
        }
    }
    namespace UpdateTransaction {
        export interface BodyParameters {
            Transaction: Parameters.Transaction;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type Transaction = bkper.Transaction;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        namespace Responses {
            export type $200 = bkper.TransactionOperation;
        }
    }
    namespace UpdateTransactionsBatch {
        export interface BodyParameters {
            TransactionList: Parameters.TransactionList;
        }
        namespace Parameters {
            /**
             * The id of the book. Same bookId url param on Bkper
             */
            export type BookId = string;
            export type TransactionList = bkper.TransactionList;
            /**
             * True to also update checked transactions
             */
            export type UpdateChecked = boolean;
        }
        export interface PathParameters {
            bookId: /* The id of the book. Same bookId url param on Bkper */ Parameters.BookId;
        }
        export interface QueryParameters {
            updateChecked?: /* True to also update checked transactions */ Parameters.UpdateChecked;
        }
        namespace Responses {
            export type $200 = bkper.TransactionList;
        }
    }
}
