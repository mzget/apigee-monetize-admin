export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ApiPackage = {
  __typename?: 'APIPackage';
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  product?: Maybe<Array<Maybe<ApiProduct>>>;
  status?: Maybe<Scalars['String']>;
};

export type ApiPackages = {
  __typename?: 'APIPackages';
  data?: Maybe<Array<Maybe<ApiPackage>>>;
  total?: Maybe<Scalars['Int']>;
};

export type ApiProduct = {
  __typename?: 'APIProduct';
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  refundSuccessCriteria?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  transactionSuccessCriteria?: Maybe<Scalars['String']>;
};

export type Address = {
  __typename?: 'Address';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type Attribute = {
  __typename?: 'Attribute';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  apps?: Maybe<Array<Maybe<Scalars['String']>>>;
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  createdAt?: Maybe<Scalars['Float']>;
  createdBy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  lastModifiedAt?: Maybe<Scalars['Float']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type CompanyWithTotal = {
  __typename?: 'CompanyWithTotal';
  data?: Maybe<Array<Maybe<Company>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Currency = {
  __typename?: 'Currency';
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  status?: Maybe<Scalars['String']>;
  virtualCurrency?: Maybe<Scalars['Boolean']>;
};

export type Organization = {
  __typename?: 'Organization';
  address?: Maybe<Array<Maybe<Address>>>;
  approveTrusted?: Maybe<Scalars['Boolean']>;
  approveUntrusted?: Maybe<Scalars['Boolean']>;
  billingCycle?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hasBillingAdjustment?: Maybe<Scalars['Boolean']>;
  hasBroker?: Maybe<Scalars['Boolean']>;
  hasSelfBilling?: Maybe<Scalars['Boolean']>;
  hasSeparateInvoiceForProduct?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  issueNettingStmt?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  nettingStmtPerCurrency?: Maybe<Scalars['Boolean']>;
  regNo?: Maybe<Scalars['String']>;
  selfBillingAsExchOrg?: Maybe<Scalars['Boolean']>;
  selfBillingForAllDev?: Maybe<Scalars['Boolean']>;
  separateInvoiceForFees?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  supportedBillingType?: Maybe<Scalars['String']>;
  taxEngineExternalId?: Maybe<Scalars['String']>;
  taxModel?: Maybe<Scalars['String']>;
  taxRegNo?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  apiPackage?: Maybe<ApiPackage>;
  apiPackages?: Maybe<ApiPackages>;
  companies?: Maybe<CompanyWithTotal>;
  company?: Maybe<Company>;
  developerRateplans?: Maybe<RatePlans>;
  organization?: Maybe<Organization>;
  ratePlan?: Maybe<RatePlanType>;
  ratePlans?: Maybe<RatePlans>;
};


export type QueryApiPackageArgs = {
  package_id?: Maybe<Scalars['String']>;
};


export type QueryApiPackagesArgs = {
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  monetized?: Maybe<Scalars['Boolean']>;
};


export type QueryCompanyArgs = {
  company_name?: Maybe<Scalars['String']>;
};


export type QueryDeveloperRateplansArgs = {
  size?: Maybe<Scalars['Int']>;
  developer_id?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryRatePlanArgs = {
  package_id?: Maybe<Scalars['String']>;
  plan_id?: Maybe<Scalars['String']>;
};


export type QueryRatePlansArgs = {
  size?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type RatePlanDetail = {
  __typename?: 'RatePlanDetail';
  aggregateFreemiumCounters?: Maybe<Scalars['Boolean']>;
  aggregateStandardCounters?: Maybe<Scalars['Boolean']>;
  aggregateTransactions?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Currency>;
  customPaymentTerm?: Maybe<Scalars['Boolean']>;
  duration?: Maybe<Scalars['Int']>;
  durationType?: Maybe<Scalars['String']>;
  freemiumDuration?: Maybe<Scalars['Int']>;
  freemiumDurationType?: Maybe<Scalars['String']>;
  freemiumUnit?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  meteringType?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  paymentDueDays?: Maybe<Scalars['String']>;
  ratePlanRates?: Maybe<Array<Maybe<RatePlanRates>>>;
  ratingParameter?: Maybe<Scalars['String']>;
  revenueType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type RatePlanRates = {
  __typename?: 'RatePlanRates';
  endUnit?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
  revshare?: Maybe<Scalars['Float']>;
  startUnit?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type RatePlanType = {
  __typename?: 'RatePlanType';
  advance?: Maybe<Scalars['Boolean']>;
  contractDuration?: Maybe<Scalars['Int']>;
  contractDurationType?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
  customPaymentTerm?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  earlyTerminationFee?: Maybe<Scalars['Int']>;
  frequencyDuration?: Maybe<Scalars['Int']>;
  frequencyDurationType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  keepOriginalStartDate?: Maybe<Scalars['Boolean']>;
  monetizationPackage?: Maybe<ApiPackage>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  paymentDueDays?: Maybe<Scalars['String']>;
  prorate?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  ratePlanDetails?: Maybe<Array<Maybe<RatePlanDetail>>>;
  recurringFee?: Maybe<Scalars['Int']>;
  recurringStartUnit?: Maybe<Scalars['Int']>;
  recurringType?: Maybe<Scalars['String']>;
  setUpFee?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type RatePlans = {
  __typename?: 'RatePlans';
  data?: Maybe<Array<Maybe<RatePlanType>>>;
  total?: Maybe<Scalars['Int']>;
};
