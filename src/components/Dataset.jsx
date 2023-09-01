const dataset = [
  {
    Question:
      "What are the documents required for opening a Current Account of a sole proprietorship firm",
    Answer:
      "Following documents are required to open a Current Account of a sole proprietorship entity: Proof of existence in the name of firm Proof of address in the name of firm KYC of the proprietor Any two of the below listed documents shall be obtained for establishing proof of existence. Registration certificate/license issued by Municipal authorities such as Shop & Establishment Certificate/Trade License CST/VAT/Service Tax Certificate or Letter Of Registration for CST/VAT/Service Tax Certificate/Registration document issued by Professional Tax authorities Valid Business License or Certificate Of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) RBI/SEBI Registration Certificate License issued by Food and Drug Control Authorities Import - Export certificate (IEC Code) issued by the Director General of Foreign Trade Documents for establishing proof of address Landline telephone bill/electricity bill of public & approved private operators in the state. (Bills not to be older than 4 months from the date of account opening) Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered TAN Allotment Letter issued in the name of the firm Latest property tax or water tax paid receipt/bill raised in the name of the firm Existing bank account statement or passbook of a PSU/private sector/foreign bank. Statement not older than 4 months from the date of account opening to be accepted ** This is only indicative list. Please visit your nearest branch for details View more",
  },
  {
    Question: "Can I transfer my Current Account from one branch to another",
    Answer:
      "Yes, Current Accounts can be transferred from one branch to another. However, there are certain restrictions. Please visit your nearest branch for details.",
  },
  {
    Question:
      "My present status is NRI. What extra documents are required for opening a Sole Proprietorship Current Account",
    Answer:
      "NRI/PIO can open the proprietorship/partnership firm subject to following customer declaration (which needs to be taken from the customer): Amount is invested by inward remittance or out of NRE/FCNR/NRO account maintained with AD bank (from the Current Account of the customer). The firm or proprietary concern is not engaged in any agricultural/plantation or real estate business (i.e. dealing in land and immovable property with a view to earning profit or earning income there from) or print media sector. Amount invested shall not be eligible for repatriation outside India. The above should be clearly mentioned in the declarations given by the customer. View more",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of Limited Liability Partnership",
    Answer:
      "Following documents are required for opening a Current Account of Limited Liability Partnership: Incorporation Document, Limited Liability Partnership Agreement Certificate of Incorporation List of all existing Designated Partners of LLP along with Designated Partner Identification Number (DPIN) issued by the Central Government Resolution passed at the meeting of Designated Partners for the particular relationship, which the LLP plans to have with the bank KYC of Designated Partners/Authorised Signatories View more",
  },
  {
    Question: "What documents are required to change the address of an entity",
    Answer:
      "Following documents are required to change the address of an entity:Request letter for address change signed by the Proprietor/Partner/Authorised Signatory (in case of a company)Along with following list of documents: Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) Property Ownership Deed i.e. the title deeds of the property in the name of the firm duly stamped and registered TAN Allotment Letter issued in the name of the firm Latest property tax or water tax paid receipt/bill raised in the name of the firm Existing bank account statement or passbook of a PSU/private sector /foreign bank. (Statement not older than 4 months from the date of account opening to be accepted; ** This is only an indicative list. Please visit your nearest branch for details View more",
  },
  {
    Question:
      "What are the documents required for opening Current Account of a company",
    Answer:
      "Following documents are required for opening Current Account of a company: Private Limited Companies - Memorandum of Association (MOA) - Articles of Association (AOA) - Certificate of Incorporation - Latest list of directors duly signed by any Director/Company Secretary /Authorised Signatory - Board Resolution (BR) duly signed by the directors of the company. Limited Companies - Memorandum of Association (MOA) - Articles of Association (AOA) - Certificate of Incorporation - Certificate of Commencement of Business - Latest list of directors duly signed by any Director/Company Secretary/Authorised Signatory - Board Resolution (BR) duly signed by the Directors/Company Secretary of the Company View more",
  },
  {
    Question: "Who can be a partner in a partnership firm",
    Answer:
      "Partners must be major (above the age of 18), should be sane and should not be disqualified by law from entering into a contract.",
  },
  {
    Question: "What is the time taken to realize outstation cheques",
    Answer:
      "The indicative time taken for the realization of outstation cheques is given below: Cheques drawn where M&N  Bank has a branch, credit will be given on receipt of clear funds in: Main metro locations (Mumbai, Chennai, Kolkata, New Delhi): 7 working days Metro centers and state capitals (other than those of North Eastern states and Sikkim): Maximum period of 10 working days. In all other centres where we have branches: maximum period of 14 working days. Cheques drawn on non-branch locations where we have a tie-up with correspondent banks, credit will be given on receipt of clear funds: Within a maximum period of 14 working days Cheques drawn on non-branch locations where we do not have a tie-up with correspondent banks, credit will be given on receipt of clear funds: Within a maximum period of 14 working days For more details on the outstation cheque collection policy, click here. For other queries, Contact Us. View more",
  },
  {
    Question: "Can an individual open a Current Account",
    Answer:
      "Yes. Documentation will be that of an individual, i.e. identity proof and address proof.Click here for documentation required for opening individual a Current Account.",
  },
  {
    Question: "Can EEFC Account be opened by Special Economic Zone (SEZ) Units",
    Answer: "No, SEZ Units cannot open EEFC accounts.",
  },
  {
    Question:
      "What should I do in case I am unable to access my Company's Current Account",
    Answer:
      "If you are unable to access your company Current Account, it may be because you have entered an incorrect Customer Identification Number (Cust ID) to log into your NetBanking Account. While opening Accounts of Companies, separate Customer IDs are created in the name of the Company as well as each of the Authorized Signatory(ies). The Authorised Signatory(ies) is distinct and has to be used to access NetBanking for the Company Account. For more details, Contact Us",
  },
  {
    Question:
      "What transactions are included as a part of the free inter-city clearing limit",
    Answer:
      "The following transactions comprise part of the free Inter-city clearing Limit: Cheques deposited into your account in other cities (in Local Clearing/within Bank) Inter-city payable-at-par cheque issuances View more",
  },
  {
    Question:
      "How is M&N  Bank Premium CA different from a regular CA offered by most banks",
    Answer:
      "An M&N  Bank Premium Current Account offers you a host of features that sets it apart from any regular Current Accounts that most banks offer.These features are: Free Intercity Clearing between M&N  Bank Branch Locations Up to 100 free payable-at-par cheque leaves per month View more",
  },
  {
    Question:
      "Must I open Premium Current account in each location where I have my company office",
    Answer:
      "No. As a Premium Current account holder you have the advantage of a single account, multi-location banking facility.",
  },
  {
    Question:
      "Can I access my Premium Current Account from any M&N  Bank branch",
    Answer:
      "Yes, you can. Our advanced technology provides you with the flexibility of accessing your account from any of our branches.",
  },
  {
    Question:
      "With Premium Current Account can I make payments to my suppliers at M&N  Bank Branches through Single Cheque Book",
    Answer:
      "Yes. When you open an account, you will be issued an at-par cheque book, which is payable at all our branches.",
  },
  {
    Question:
      "Can I access my account by telephone to conduct routine daily transactions",
    Answer:
      "Yes you can. You can use PhoneBanking to perform the following operations: Access your account details Request account statements Make Fixed Deposit related queries Inquire about interest and FX rates Request a cash delivery or pick-up Order a new cheque book View more",
  },
  {
    Question: "What are included in Bulk Transactions",
    Answer:
      "Bulk transactions include: Local Clearing Transactions Anywhere Clearing Transactions Local Fund Transfer Transactions Anywhere Fund Transfer Transactions, View more",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "Can I access my account by telephone to conduct routine daily transactions",
    Answer:
      "Yes you can. You can use PhoneBanking to perform the following operations: Access your account details Request account statements Make Fixed Deposit related queries Inquire about interest and FX rates Request a cash delivery or pick-up Order a new cheque book View more",
  },
  {
    Question:
      "How do I become eligible for an M&N  Bank Regular Current Account",
    Answer:
      "If the Average Quarterly Balance (AQB) in your Current Account is over Rs.10,000 you are eligible to enjoy the benefits of a Regular Current Account.",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "Must I open Regular Current account in each location where I have my company office",
    Answer:
      "No. As a Regular Current account holder you have the advantage of single account, multi-location banking.",
  },
  {
    Question:
      "What is the initial deposit amount required to open the Flexi Account",
    Answer:
      "The initial deposit amount to open a Flexi Current account is Rs.75,000.",
  },
  {
    Question:
      "What should I do in case I am unable to access my Company's Current Account using NetBanking",
    Answer:
      "If you are unable to access your company account, it may be because you have entered an incorrect Customer Identification Number (Cust ID) to log into your NetBanking Account. While opening Accounts of Companies, separate Customer IDs are created in name of the Company as well as each of the Authorized Signatory(ies). The latter is distinct and has to be used to access NetBanking for the Company's Account. However, we regret our inability to disclose the appropriate Customer ID on an unsecure e-mail and request you to contact our nearest Branch or PhoneBanking Center for this. For more details, Contact Us View more",
  },
  {
    Question:
      "Can I access my account by telephone to conduct routine daily transactions",
    Answer:
      "Yes you can. You can use PhoneBanking to perform the following operations: Access your account details Request account statements Make Fixed Deposit related queries Inquire about interest and FX rates Request a cash delivery or pick-up Order a new cheque book View more",
  },
  {
    Question:
      "How is a Flexi Current account different from a regular current account",
    Answer:
      "The Flexi account includes the following privileges: Flexibility of higher cash deposits (home location) and transactions anywhere (payments, collections and funds transfers), limits during peak seasons, since these are based on the Average Monthly Balance (AMB) maintained in the account. Calculation of free transaction limits based on balances maintained in the transaction month, leading to a high level of customization in tune with current business requirements. For example, if your season starts in November, you get a transaction limit based on the balance maintained by you in November, and not in October or September. Low minimum balance requirement of Rs. 75,000 per month. Competitive pricing on and faster Collection of Outstation Cheques. Up to 40 free Pay Orders and 40 free Demand Drafts per month. Free RTGS and NEFT Transactions. These privileges make a Flexi Current account different from a Regular Current account. View more",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "What transactions are included as a part of the Free Anywhere Transactions limit for a month",
    Answer:
      "The following transactions together comprise part of the Free Anywhere Transaction Limit: Cheques deposited into the account in other cities (in local clearing / within Bank) Inter-city payable-at-par cheques issued. Inter-city account to account funds transfers (Cheque Payments & Collections) within M&N  Bank Accounts. View more",
  },
  {
    Question:
      "How much cash can I deposit per month in my home branch, without being charged",
    Answer:
      "The free cash deposit limit at your home branch depends on the AMB you have maintained during the transaction month. This free limit is calculated as 10 times the actual AMB maintained during the transaction month or 50 transactions per month, whichever is less. In case you make more than 50 transactions or your cash deposits are more than 10 times your AMB at your home branch, you will have to pay a charge of Rs. 3 per Rs. 1,000, subject to a minimum of Rs. 50 (excluding taxes). If I maintainI get Monthly Free If I utilizeI am Charged Average Monthly Balance (AMB) in Rs. Home Location Cash Deposit in Rs. (Subject to maximum of 50 transactions) Actual Home Location Cash Deposit in Rs. Rs. (excluding 12.36% Service Tax & Education Cess) 50,000 5,00,000 7,50,000 1,750 (750 + 1000**) 75,000 7,50,000 11,00,000 1,050 1,00,000 10,00,000 9,50,000 Nil 2,21,103* 22,11,000* 20,00,000 Nil 3,00,000 30,00,000 37,00,000 2,100 5,00,000 50,00,000 45,00,000 Nil 10,00,000 1,00,00,000 60,00,000 Nil *The Home Location Cash Deposit Free limit is rounded off to the nearest thousand ** AMB non-maintenance charges View more",
  },
  {
    Question: "Can I access my account from any M&N  Bank branch",
    Answer:
      "Yes. All M&N  Bank branches and systems are interconnected by state-of-the-art technology and allow access at all times.",
  },
  {
    Question:
      "What is the minimum balance that I need to maintain in a Flexi Current Account",
    Answer:
      "You have to maintain an Average Monthly Balance (AMB) of Rs. 75,000 in a Flexi Current account. If you are unable to maintain the AMB you will be have to pay a charge of Rs. 1,000 for the month in which the AMB has not been maintained.",
  },
  {
    Question:
      "What is the minimum balance required for an Apex Current account",
    Answer:
      "You need to maintain an Average Quarterly Balance (AQB) of Rs. 10,00,000 in your Apex Current account.",
  },
  {
    Question: "Can I access my account from any M&N  Bank branch",
    Answer:
      "Yes. All M&N  Bank branches and systems are interconnected by state-of-the-art technology and allow access at all times.",
  },
  {
    Question:
      "Is it necessary to open Apex Current Account in each location where my company has an office",
    Answer:
      "No. With a Apex Current Account, you enjoy the advantage of a single account with multi-location banking.",
  },
  {
    Question:
      "Can I make payments to my suppliers at M&N  Bank branches through a single cheque book",
    Answer:
      "Yes. When you open an account, you will be issued an at-par cheque book, which is payable at all our branches.",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "Can I access my account by telephone to conduct routine daily transactions",
    Answer:
      "Yes you can. You can use PhoneBanking to perform the following operations: Access your account details Request account statements Make Fixed Deposit related queries Inquire about interest and FX rates Request a cash delivery or pick-up Order a new cheque book View more",
  },
  {
    Question:
      "What should I do in case I am unable to access my Company's Current Account through Net Banking",
    Answer:
      "If you are unable to access your company account, it may be because you have entered an incorrect Customer Identification Number (Cust ID) to log into your NetBanking Account. While opening Accounts of Companies, separate Customer IDs are created in name of the Company as well as each of the Authorized Signatory(ies). The latter is distinct and has to be used to access NetBanking for the Company's Account. However, we regret our inability to disclose the appropriate Customer ID on an unsecure e-mail and request you to contact our nearest Branch or PhoneBanking Center for this. For more details, Contact Us",
  },
  {
    Question:
      "How is an Apex Current account different from a regular Current Account",
    Answer:
      "An Apex Current account includes the following privileges: Higher free limit of Rs. 120 Lakhs per month for cash deposits at your home branch Unlimited free clearing transactions anywhere for payments and collections Free and faster collection of outstation cheques at M&N  Bank locations Free Demand Drafts and Pay Orders Free RTGS and NEFT transactions Free BillPay and InstaAlerts Free Business Debit Card These features make an Apex Current account different from a regular Current account. View more",
  },
  {
    Question:
      "What transactions are included as a part of the Free Anywhere Transactions limit for a month",
    Answer:
      "The following transactions comprise part of the Free Anywhere Transaction limit: Cheque deposited into the account in other cities (in local clearing) Inter-city Payable-at-Par cheque issuance. View more",
  },
  {
    Question:
      "What transactions are included as a part of the Free Anywhere Transactions limit for a month",
    Answer:
      "The following transactions comprise part of the Free Anywhere Transaction Limit: Cheque deposited into the account in other cities (in local clearing) Inter-city payable-at-par cheques issued View more",
  },
  {
    Question:
      "Can I make payments to my suppliers at M&N  Bank branches through a single cheque book",
    Answer:
      "Yes. When you open an account, you will be issued an at-par cheque book, which is payable at all our branches.",
  },
  {
    Question:
      "What should I do in case I am unable to access my Company's Current Account through Net Banking",
    Answer:
      "If you are unable to access your company account, it may be because you have entered an incorrect Customer Identification Number (Cust ID) to log into your NetBanking Account. While opening Accounts of Companies, separate Customer IDs are created in name of the Company as well as each of the Authorized Signatory(ies). The latter is distinct and has to be used to access NetBanking for the Company's Account. However, we regret our inability to disclose the appropriate Customer ID on an unsecure e-mail and request you to contact our nearest Branch or PhoneBanking Center for this. For more details, Contact Us",
  },
  {
    Question:
      "Is it necessary to open Max Current Account in each location where my company has an office",
    Answer:
      "No. With your Max Current account you enjoy the advantage of single account with multi-location banking.",
  },
  {
    Question:
      "Can I access my account by telephone to conduct routine daily transactions",
    Answer:
      "Yes you can. You can use PhoneBanking to perform the following operations: Access your account details Request account statements Make Fixed Deposit related queries Inquire about interest and FX rates Request a cash delivery or pick-up Order a new cheque book View more",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "What is the initial deposit amount required to open a Max Current account",
    Answer:
      "You need an initial deposit of Rs. 5,00,000 to open a Max Current account.",
  },
  {
    Question:
      "What is the minimum balance that I need to maintain in a Max Current Account",
    Answer:
      "You need to maintain an Average Quarterly Balance of Rs. 5,00,000 in your Max Current account.",
  },
  {
    Question: "Can I access my account from any M&N  Bank branch",
    Answer:
      "Yes. All M&N  Bank branches and systems are interconnected by state-of-the-art technology and allow access at all times.",
  },
  {
    Question:
      "How is M&N  Bank's Max Current account different from a regular Current Account",
    Answer:
      "Your Max Current account includes the following privileges: Combined free limit of 60 Lacs per month at home and Non- Home Locations. Free and faster collection of outstation cheques at M&N  Bank locations Free Demand Drafts and Pay Orders Free RTGS and NEFT transactions Free BillPay & InstaAlerts Free Business Debit Card This makes a Max Current account different from a regular Current account. View more",
  },
  {
    Question:
      "Must I open an account in each location where I have my company office",
    Answer:
      "No. As a Premium Current Account holder you have the advantage of a single account, multi-location banking facility.",
  },
  {
    Question:
      "What is the minimum Average Monthly Balance required if I have a Merchant Advantage Current Account",
    Answer:
      "You have to maintain a minimum Average Monthly Balance (AMB) of Rs. 25,000.",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "Must I open an Merchant Advantage Current Account in each location where I have my company office",
    Answer:
      "No. A Merchant Advantage Current Account gives you the advantage of a single account with multi-location banking.",
  },
  {
    Question:
      "Can I access my account by telephone to conduct routine daily transactions",
    Answer:
      "Yes you can. You can use PhoneBanking to perform the following operations: Access your account details Request account statements Make Fixed Deposit related queries Inquire about interest and FX rates Request a cash delivery or pick-up Order a new cheque book View more",
  },
  {
    Question:
      "Can I access my Merchant Advantage Plus Current Account from any M&N  Bank branch",
    Answer:
      "Yes. The advanced technology of our systems provides you with the flexibility of accessing your account from any M&N  Bank branch.",
  },
  {
    Question:
      "With Merchant Plus Current Account can I make payments to my suppliers at M&N  Bank Branches through Single Cheque Book",
    Answer:
      "Yes. When you open an account, you will be issued an at-par cheque book, which is payable at M&N  Bank branches.",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "Can I access my account by telephone to conduct routine daily transactions",
    Answer:
      "Yes you can. You can use PhoneBanking to perform the following operations: Access your account details Request account statements Make Fixed Deposit related queries Inquire about interest and FX rates Request a cash delivery or pick-up Order a new cheque book View more",
  },
  {
    Question:
      "How is a Merchant Advantage Plus Current Account different from a Regular Current Account offered by most banks",
    Answer:
      "A Merchant Advantage Plus Current Account offers you the following privileges: Free limit for cash deposits up to four times the amount swiped at the M&N  Bank EDC machine linked to your Merchant Advantage Plus Current Account Free and faster collection of outstation cheques at M&N  Bank locations Free RTGS and NEFT transactions Free BillPay and InstaAlerts Free Regular and Business Debit Cards These privileges make a Merchant Advantage Plus Current account different from a Regular Current account. View more",
  },
  {
    Question:
      "How is a Merchant Advantage Plus Current Account different from a Regular Current Account offered by most banks",
    Answer:
      "A Merchant Advantage Plus Current Account offers you the following privileges: Free limit for cash deposits up to four times the amount swiped at the M&N  Bank EDC machine linked to your Merchant Advantage Plus Current Account Free inter-city clearing between M&N  Bank branch locations (except Dahej) up to Rs.50 Lakhs per month Free and faster collection of outstation cheques at M&N  Bank locations Free RTGS and NEFT transactions Free BillPay and InstaAlerts Free Regular and Business Debit Cards These privileges make a Merchant Advantage Plus Current account different from a Regular Current account. View more",
  },
  {
    Question:
      "What is the minimum Average Monthly Balance I have to maintain with a Merchant Advantage Plus Current Account",
    Answer:
      "You have to maintain a minimum Average Monthly Balance (AMB) of Rs. 1,00,000 with your Merchant Advantage Plus Current account.",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question: "Can I access my account from any M&N  Bank branch",
    Answer:
      "Yes. All M&N  Bank branches and systems are interconnected by state-of-the-art technology and allow access at all times.",
  },
  {
    Question:
      "Can I make payments to my suppliers at M&N  Bank branches through a single cheque book",
    Answer:
      "Yes. When you open an account, you will be issued an at-par cheque book, which is payable at all our branches.",
  },
  {
    Question:
      "Is it necessary to open Ultima Current Account in each location where my company has an office",
    Answer:
      "No. With an Ultima Current Account, you enjoy the advantage of a single account with multi-location banking.",
  },
  {
    Question:
      "Can I access my account by telephone to conduct routine daily transactions",
    Answer:
      "Yes you can. You can use PhoneBanking to perform the following operations: - Access your account details - Request account statements - Make Fixed Deposit related queries - Inquire about interest and FX rates - Request a cash delivery or pick-up - Order a new cheque book",
  },
  {
    Question:
      "How is an Ultima Current account different from a Regular Current Account",
    Answer:
      "An Ultima Current account includes the following privileges: - Higher free limit of Rs. 2Cr per month for cash deposits at your home branch - Unlimited free clearing transactions anywhere for payments and collections - Free and faster collection of outstation cheque at M&N  Bank locations - Free Demand Drafts and Pay Orders - Free RTGS and NEFT transactions - Free BillPay and InstaAlerts - Free Business Debit Card",
  },
  {
    Question:
      "What is the minimum balance required for an Ultima Current account",
    Answer:
      "You need to maintain an Average Quarterly Balance (AQB) of Rs. 20,00,000 in your Ultima Current account.",
  },
  {
    Question:
      "What transactions are included as a part of the Free Anywhere Transactions limit for a month",
    Answer:
      "The following transactions comprise part of the Free Anywhere Transaction limit: - Cheque deposited into the account in other cities (in local clearing) - Inter-city Payable-at-Par cheque issuance",
  },
  {
    Question:
      "What should I do in case I am unable to access my Company's Current Account through Net Banking",
    Answer:
      "If you are unable to access your company account, it may be because you have entered an incorrect Customer Identification Number (Cust ID) to log into your NetBanking Account. While opening Accounts of Companies, separate Customer IDs are created in name of the Company as well as each of the Authorised Signatory(ies). The latter is distinct and has to be used to access NetBanking for the Company's Account. However, we regret our inability to disclose the appropriate Customer ID on an unsecure e-mail and request you to contact our nearest Branch or PhoneBanking Center for this.For more details, Contact Us",
  },
  {
    Question:
      "What are the minimum docs required to open a Institutional current account",
    Answer:
      "Non-individual (Current account) AOD to be completed Registration proof with any state regulatory authority ORCertificate of Registration with the Local Charities Commissioner (for charitable trusts) Certified Copy of the Trust Deed / Bye-laws /MOA /Constitution Proof of address of the institute Certified Copy of the Resolution from Board of Trustees defining who is going to be the authorized signatories in the account / authorizing the opening & conduct of the account Proof of appointment of present Trustees/Governing Body members in case they are not listed in the Trust Deed/Bye-laws Pan Card/Form 60/No Pan declaration as may be applicable FCRA declaration Beneficial Ownership declaration (only for Trusts & Association of Persons) Photograph & proof of identity of all authorized signatories",
  },
  {
    Question:
      "How is an Institutional Current Account  different from a Regular Current Account",
    Answer:
      "An Institutional Current Account includes the following privileges: Free limit of Rs. 50 Lakhs per month for cash deposits at your home branch Free and faster collection of outstation cheques at M&N  Bank locations Free Demand Drafts and Pay Orders Free RTGS and NEFT Collections and upto 25 transactions free for NEFT/RTGS payments. Free BillPay and InstaAlerts Free Business Debit Card These features make an Institutional Current Account different from a Regular Current account.",
  },
  {
    Question:
      "What should I do in case I am unable to access my Institutional Current Account through Net Banking",
    Answer:
      "If you are unable to access you Institutional account, it may be because you have entered an incorrect Customer Identification Number (Cust ID) to log into your NetBanking Account. While opening Accounts of Institutes, separate Customer IDs are created in the name of the Institute, as well as each Authorised Signatory(ies). The latter is distinct and has to be used to access NetBanking for the Institutes Account. However, since we do not disclose the Institutes Customer ID on an unsecure e-mail, the Institute will have to contact their nearest Branch or PhoneBanking Center for this. For more details, Contact Us",
  },
  {
    Question: "Can I access my account from any M&N  Bank branch",
    Answer:
      "Yes. All M&N  Bank branches and systems are interconnected by state-of-the-art technology and allow access at all times.",
  },
  {
    Question:
      "Must I open Institutional Current Account in each location where I have my company office",
    Answer:
      "No. As a Institutional Current Account holder you have the advantage of single account, multi-location banking.",
  },
  {
    Question:
      "What is the minimum balance required for an Institutional Current Account",
    Answer: "No minimum balance requirement.",
  },
  {
    Question:
      "How do I become eligible for an M&N  Bank Institutional Current Account",
    Answer:
      "To become eligible for an M&N  Bank Institutional Current Account you belong to one of the eligibility criteria mentioned above.",
  },
  {
    Question:
      "Can I access my account by telephone to conduct routine daily transactions",
    Answer:
      "Yes you can. You can use PhoneBanking to perform the following operations: Access your account details Request account statements Make Fixed Deposit related queries Inquire about interest and FX rates Request a cash delivery or pick-up Order a new cheque book",
  },
  {
    Question:
      "Is it necessary to open Institutional Current Account in each location where my company has an office",
    Answer:
      "No. With a Institutional Current Account , you enjoy the advantage of a single account with multi-location banking.",
  },
  {
    Question:
      "What transactions are included as a part of the Free Anywhere Transactions limit for a month",
    Answer:
      "The following transactions comprise part of the Free Anywhere Transaction limit: Cheque deposited into the account in other cities (in local clearing) Inter-city Payable-at-Par cheque issuance.",
  },
  {
    Question:
      "Can I make payments to my suppliers at M&N  Bank branches through a single cheque book",
    Answer:
      "Yes. When you open an account, you will be issued an at-par cheque book, which is payable at all our branches.",
  },
  {
    Question: "What are the permissible Debits from an RFC Domestic Account",
    Answer:
      "The funds in a Resident Foreign Currency Domestic Account opened or held or maintained shall be free from all restrictions regarding utilization of foreign currency balances, including any restriction on investment in any form, by whatever name called, outside India.",
  },
  {
    Question:
      "Can I access my account by telephone to conduct routine daily transactions",
    Answer:
      "Yes you can. You can use PhoneBanking to perform the following operations: Access your account details Request account statements Make Fixed Deposit related queries Inquire about interest and FX rates Request a cash delivery or pick-up Order a new cheque book View more",
  },
  {
    Question: "Who can open an RFC Domestic Account",
    Answer:
      "Any person who is a resident Indian can open an RFC Domestic account, as long as the foreign exchange earned is in line with the permissible credits as defined in the RBI circular.",
  },
  {
    Question:
      "What are the documents required for opening a Current Account of a partnership firm",
    Answer:
      "Following documents are required for opening a Current Account of a partnership firm: Latest Partnership Deed Documents establishing proof of existence - Certificate of Registration under any Statute/Act or professional bodies - Registration Certificate issued by Registrar of Firms - Valid Business License or Certificate of Registration issued by State/Central Government authority (validity would include the grace period for renewal as mentioned in the certificate) - PAN Card in the name of the firm; - Self-signed cheque issued from the firmâ€™s account from a PSU/private sector/foreign bank along with a bank statement not older than four months Documents for establishing proof of address - Landline telephone bill/electricity bill of public and approved private operators in the State. (Bills not to be older than 4 months from the date of account opening) - Property Ownership Deed i.e. title deeds of the property in the name of the firm duly stamped and registered - Latest property tax or water tax paid receipt/bill raised in the name of the firm - TAN Allotment Letter in the name of the firm - Existing bank account statement or passbook of a PSU/private sector/foreign bank - Statement not older than 4 months from the date of account opening to be accepted Documents for establishing photo identity of authorised partners/signatories View more",
  },
  {
    Question: "What are the permissible credits from an RFC Domestic Account",
    Answer:
      "As per the RBI directive, the following can be credited into an RFC Domestic Account: a) Received as pension or any other superannuation or other monetary benefits from his employer outside India; or b) Realised on conversion of the assets referred to in sub-section (4) of section 6 of the Act, and repatriated to India; or c) Received or acquired, as gift or inheritance, from a person referred to in sub-section (4) of section 6 of the Act; or d) Referred to in clause (c) of section 9 of the Act, or acquired as gift or inheritance therefrom. View more",
  },
  {
    Question: "In what currencies can I open an RFC Domestic account",
    Answer:
      "An RFC Domestic Account can be opened in three different currencies, i.e. USD / Euro / GBP.",
  },
  {
    Question: "Whether the EEFC balances can be covered against exchange risk",
    Answer: "Yes, the EEFC account balances can be hedged.",
  },
  {
    Question:
      "Is there any restriction on withdrawal in rupees of funds held in an EEFC account",
    Answer:
      "No, there is no restriction on withdrawal in rupees of funds held in an EEFC account. However, the amount withdrawn in rupees shall not be eligible for conversion into foreign currency and for re-credit to the account.",
  },
  {
    Question:
      "How much of foreign exchange earnings can be credited into an EEFC account",
    Answer:
      "100% foreign exchange earnings can be credited to the EEFC account subject to the condition that the sum total of the accruals in the account during a calendar month should be converted into rupees on or before the last day of the succeeding calendar month after adjusting for utilisation of the balances for approved purposes or forward commitments. Refer to the RBI circular on below link. Note: In accordance with Reserve Bank of India's circular no. A. P. (DIR Series) Circular No. 12 dated 31st of July 2012, the balances outstanding in all EEFC / Diamond Dollar Account (DDA) and RFC (D) accounts as on last day of a Current month, shall be converted into Rupees by the Bank on the last working day of the succeeding month, if such balance is not utilised by the account holder before the last day of succeeding month. Such mandatory conversion by the bank on the last working day of the succeeding month will be done at the prevailing TT buying card rate. In case, customer has booked Forward Contract/s for conversion of balances in these accounts at a future date which is falling beyond the last day of the succeeding month, such contracted amount shall be deducted from the eligible amount for the mandatory conversion. In case customer has any payment to be made in future from these accounts beyond the last day of the succeeding month then bank should be duly informed before 25th of the succeeding month in writing through Relationship Manager / Branch Manager for holding back the conversion to that extent. The customer needs to submit the underlying documents of such future transaction/s. This will be an on-going procedure till we receive revised instructions from Reserve Bank of India. View more",
  },
  {
    Question: "What are the permissible credits into EEFC account",
    Answer:
      "Inward remittance through normal banking channels, other than remittances received on account of foreign currency loan or investment received from abroad or received for meeting specific obligations by the account holder; Payments received in foreign exchange by a 100 per cent Export Oriented Unit or a unit in (a) Export Processing Zone or (b) Software Technology Park or (c) Electronic Hardware Technology Park for supply of goods to similar such units or to a unit in domestic tariff area; Payments received in foreign exchange by a unit in the domestic tariff area for supply of goods to a unit in the Special Economic Zone (SEZ); Payment received by an exporter from an account maintained with an authorised dealer for the purpose of counter trade. (Counter trade is an arrangement involving adjustment of value of goods imported into India against value of goods exported from India in terms of the Reserve Bank guidelines); Advance remittance received by an exporter towards export of goods or services; Professional earnings including directors fees, consultancy fees, lecture fees, honorarium and similar other earnings received by a professional by rendering services in his individual capacity; Re-credit of unutilised foreign currency earlier withdrawn from the account; Amount representing repayment by the account holder's importer customer, of loan/advances granted, to the exporter holding such account; and The disinvestment proceeds received by the resident account holder on conversion of shares held by him to ADRs/GDRs under the Sponsored ADR/GDR Scheme approved by the Foreign Investment Promotion Board of the Government of India. View more",
  },
  {
    Question: "What are the permissible debits into this account",
    Answer:
      "Payment outside India towards a permissible current account transaction [in accordance to the provisions of the Foreign Exchange Management (Current Account Transactions) Rules, 2000] and permissible capital account transaction [in accordance to the Foreign Exchange Management (Permissible Capital Account Transactions) Regulations, 2000]. Payment in foreign exchange towards cost of goods purchased from a 100 percent export oriented unit or a unit in (a) Export Processing Zone or (b) Software Technology Park or (c) Electronic Hardware Technology Park. Payment of customs duty in accordance with the provisions of the Foreign Trade Policy of the Central Government for the time being in force. Trade related loans/advances, extended by an exporter holding such account to his importer customer outside India, subject to compliance with the Foreign Exchange Management (Borrowing and Lending in Foreign Exchange) Regulations, 2000. Payment in foreign exchange to a person resident in India for supply of goods/services including payments for airfare and hotel expenditure. View more",
  },
  {
    Question: "What are benefits of Smartup Solutions",
    Answer:
      "A suitable choice of Current Account for your business and transaction needs - Alliances for your Start-up - Advisory Services - Co-working Spaces - Logistics - Public Relations - Digital Marketing services - Content Writing Smart-Buy -Accelerate your business with the right marketing channel at the right time. Get access to 37 million potential customers to accelerate your growth. Smart-Up Portal - Meet other start-ups, customers, mentors, investors all by simply registering for the Smart-Up Program Digital & Cash Management Solutions Forex Advisory",
  },
  {
    Question: "What is the offer for Salary Account under Smartup programme",
    Answer:
      "No minimum requirement of number of salary accounts and Average salary to be more than Rs. 25,000 - Zero Balance Salary Account ,Free payable at par cheque book -Platinum Debit Card with higher limits for cash withdrawal at ATMs and usage at shopping outlets - Corporate Microsite (Whenever applicable) â€“ a customised webpage highlighting our offers for companyâ€™s employees at no cost. - Online investment and Loan facility. - Cashback of Re.1* for every Rs.100 spent at merchant outlets.",
  },
  {
    Question: "If I have a query, do I need to visit the branch",
    Answer:
      "Simply message â€˜SMARTUPâ€™ to 5676712 or send us a mail at [email protected] and our Relationship Manager will promptly get back to you & answer all your queries.",
  },
  {
    Question: "What are the key features of CMS and eCMS of M&N  bank",
    Answer:
      "a. CMS â€“ - End-to-end solution to your payment and collection requirements through our Cash Management Services at extremely attractive rates - Consistently voted â€œBest Bank in Cash Management Servicesâ€ - Cash management services are offered at over 2400 locations b. eCMS - - Tailor made product offering for electronic collections - Ease of reconciliation for your business - STP credit with real time notification - Credit confirmation to the remitter - Integrated MIS offering â€“ secure data transmission",
  },
  {
    Question: "What are Collection Solutions available",
    Answer:
      "a. Cash Management Services - End-to-end solution to your payment and collection requirements through our Cash Management Services at extremely attractive rates - Consistently voted â€œBest Bank in Cash Management Servicesâ€ - Cash management services are offered at over 2400 locations b. eCMS - Tailor made product offering for electronic collections - Ease of reconciliation for your business - STP credit with real time notification - Credit confirmation to the remitter - Integrated MIS offering â€“ secure data transmission c. Payzapp for Business - Revolutionary invoicing solution by M&N  Bank which enables start-ups to request and receive payments on the go. - Ideal for all start-ups who need to collect Payment on delivery / Advance payment / Balance payment/ On-field collection. - Instant flow of cash in to your account d. Chillr - This is a revolutionary application which lets merchants request money from other Chillr users using the Collect feature. A QR Code/Alpha Code is generated which the sender has to scan to complete the payment. - Merchant can also view his transaction history",
  },
  {
    Question: "What are the key features of current account",
    Answer:
      "Current Account Varaint SMARTUP ALPHA SMARTUP MAX Current Account Feature Minimum Balance Requirement Zero Balance for 1 Year, subject to any 2 debit transactions in the first 6 months from account opening Year 2 onwards Rs. 25,000 Average Quarterly Balance 5,00,000 Average Quarterly Balance Enjoy privileges of Preferred Banking* Free Cheque Leaves 100 Per Month 500 Per Month RTGS & NEFT FREE FREE Local & Anywhere cheque collections/payments and fund transfer FREE FREE Free Cash Deposit Limit Per month across all branches Upto 12 times the Average Monthly Balance per month or 25 transactions whichever is lower,(subject to maximum Rs 100 lacs/month) Upto 12 times the Current month Average Monthly Balance or 60 Lakhs or 60 transactions which breached first (subject to maximum Rs 200 lacs/month) Additional Privileges Debit Card Platinum Debit Card with No Annual Fee 1 cash back for every Rs 100 spent * Times Debit Card with No Annual Fee Earn 2 Times Points for every Rs. 150 spent * Exclusive Discount of 10% or more on online lifestyle, entertainment, dining and grocery * Corporate Credit Card (FD backed card with credit limit of 75%) Business MoneyBack (FD Amount Rs. 45000) Business Regalia First (FD Rs.2,00,000) Business Regalia- (FD Rs. 4,00,000) Business MoneyBack (FD Amount Rs. 45000) Business Regalia First (FD Rs.2,00,000) Business Regalia- (FD Rs. 4,00,000)",
  },
  {
    Question: "What are the key features of Payment gateway of M&N  bank",
    Answer:
      "- Acceptance of online payments through cards/ NetBanking and IMPS - Value Added Services such as EMI (Easy Monthly Instalment), Standing Instructions (for recurring payment), IVR (Interactive Voice Response System), intelligent online reporting of success/failed transactions, dynamic routing across gateways to ensure best success rate, tokenisation etc - All the above on a plug & play model with simple documentation and T+1 settlement thereby enabling faster business go-live and better funds management - One of industryâ€™s best risk monitoring capability - Dedicated in-house service team for all time support",
  },
  {
    Question: "What are benefits of Payzapp for business",
    Answer:
      "Payzapp for business is arevolutionary invoicing solution by M&N  Bank which enables start-ups to request and receive payments on the go. Ideal for all start-ups who need to collect Payment on delivery / Advance payment / Balance payment / On-field collection. Benefits to Start-ups â€“ - Instant flow of money to start-ups account - Convenient and Secure Money Transfer - No hassles of Cash Management",
  },
  {
    Question: "Who all can open SmartUp Current Account",
    Answer:
      "SmartUp Solutions is targeted primarily for the newly incorporated Start-up companies working towards innovation, development, deployment or commercialization of new products, processes or services driven by technology or intellectual property. - Proprietorship, Partnerships, LLP, Private limited companies and Limited companies can open this account. - Date of incorporation / registration of business should not be more than five years from date of account opening",
  },
  {
    Question: "What is Smartup Solutions",
    Answer:
      "A SMART solution for your StartUp. SmartUp is here to assist you in achieving your startup goals with smart financial tools, smart advisory services and technology.",
  },
  {
    Question: "What are Payment Solutions available",
    Answer:
      "I. Digital Payments a. Payment Gateway - Complete Internet-based payment processing and management solutions for all cards issued in India and abroad - An integrated, flexible, rule-based, proactive risk management system that supports evaluation of transaction activity - Highly reliable uptime and best transaction success rate - Scalable to process millions of transactions per month on a real time basis - In-house dedicated helpdesk to resolve queries b. POS - Avoid hassles of cash &cheque collection & management - POS, mPOS, GPRS variants available - Low on-boardingtime II. Bulk Payments I. e-Banking solutions (E-Net)-Online platform for bulk remittances within and outside the bank II. Salary/Vendor payments â€“An integrated platform to make bulk payments to your employees/vendors III. Tax Payments Designated bank to collect Direct & indirect taxes",
  },
  {
    Question:
      "I have an existing bank account with other Bank. Can I still open SmartUp Current Account",
    Answer:
      "Yes, provided startup is meeting the criteria of date of incorporation / registration of business should not be more than five years from date of account opening.",
  },
  {
    Question:
      "I am not a technology Start-up. Can I still open SmartUp Current Account",
    Answer:
      "Yes you can. This product caters to all start-ups with an innovative business idea.",
  },
  {
    Question:
      "Do I get access to all the services offered under Smartup programme once I start banking with M&N  BANK",
    Answer:
      "Access to some of the services will depend on the size of the banking relationship",
  },
  {
    Question:
      "Do I need to pay any penalty on premature closure of Fixed Deposits",
    Answer:
      "As per the Terms & Conditions of Fixed Deposit Accounts of the bank, the penalty on premature closure of Fixed Deposits, including sweep-in and partial closures, has been fixed by the Bank at the rate of 1% of the fixed deposit interest rate. This is applicable with effect from 24th January, 2011.",
  },
  {
    Question: "Where can I get Fixed Deposit advice from",
    Answer:
      "You can now download Fixed Deposit advice through Netbanking in pdf format. With effect from July 13th, 2009 weâ€™ve started sending Fixed Deposit advice over e-mail for Fixed Deposits booked through NetBanking. Physical advice has been discontinued for Fixed Deposits booked through NetBanking. An electronic mail advice is sent to you on your registered e-mail ID within 2-3 working days from the date of booking. You will need to enter the primary Customer Identification Number as a password to open the attachment. If you are registered for e-mail statements, Fixed Deposit advice will be sent to your e-mail ID registered with the Bank. This is applicable for all Fixed Deposit booked / renewed through any mode whether Branch, PhoneBanking or NetBanking. Physical advice is discontinued. In case you do not receive the advice on your e-mail, we request you to check your Spam / Junk folder. Please Note: At any point, if you wish to check your Fixed Deposit holdings, they can be viewed on the Fixed Deposit summary page on NetBanking. In case your e-mail id is not updated with the bank, you are requested to contact the nearest branch and update your e-mail ID. In case you wish to have a physical advice, you may walk into the nearest M&N  bank branch. A copy of the e-mail advice may be submitted to the branch in case of premature liquidation of the deposit. The e-mail advice copy is as acceptable at our branches as the physical advice. View more",
  },
  {
    Question:
      "Why is the principal amount and the fixed deposit maturity amount of my Fixed Deposit the same",
    Answer:
      "When your Fixed Deposit is booked with the quarterly / monthly interest pay out option, the maturity amount is the same as the principal amount. The interest amount will be credited to your account at quarterly / monthly intervals.",
  },
  {
    Question:
      "Does M&N  Bank offer preferential rate of interest on Fixed Deposits for Senior Citizens",
    Answer:
      "We offer preferential rate of interest on Fixed Deposits for Senior Citizens. If you are a senior citizen, all you need to do is register as one by calling any Branch with proof of your Date of Birth. Once registered as a Senior Citizen, you are eligible for preferential rates of interest on Fixed Deposits opened through NetBanking as well. Click here to Interest Rates on Fixed Deposits. The Fixed Deposit will be booked in the same combination/ order of names as the existing Current/Savings account, from which the funds are being transferred. View more",
  },
  {
    Question: "Where can I register for M&N  Bankâ€™s NetBanking facility",
    Answer:
      "In case you are not registered for the NetBanking facility, we request you to visit the following URL. Click here for how to register:",
  },
  {
    Question: "How can I book a Fixed Deposit through NetBanking",
    Answer:
      "You can book Fixed Deposits through NetBanking provided: You have registered for the facility with necessary online financial transaction rights Your PAN number is updated under your Customer Identification Number in Bank's records The following are the steps required to book your Fixed Deposit online: Access your NetBanking account with your Customer ID and IPIN (NetBanking Password) Select Open New Fixed Deposit option under the Fixed Deposit menu from the Menu bar located on the left hand side of the web page Select the desired values from the Drop-down lists Once complete, click on Continue and Confirm the details entered A new web page, confirming the Fixed Deposit booking, will be displayed. Physical advice will not be sent for Fixed Deposits booked through Net Banking. An electronic mail advice will be sent to you on your registered e-mail ID within 2 working days. The password for your Fixed Deposit Advice will be your Customer ID. At any point, if you wish to check your Fixed Deposit holdings, the same may be viewed on the Fixed Deposit summary page on Net banking. In case you want physical advice, you may walk into your nearest M&N  bank branch. View more",
  },
  {
    Question:
      "I have made a Fixed Deposit with M&N  Bank. I want to update my PAN details in the account, how should I update my new PAN details",
    Answer:
      "Customer's can now update PAN details through net banking, if they are registered for the same Or by submitting the request along with a copy of the PAN at the nearest branch.",
  },
  {
    Question: "What is the time taken to realize outstation cheques",
    Answer:
      "The indicative time taken for the realization of outstation cheques is given below: Cheques drawn where M&N  Bank has a branch, credit will be given on receipt of clear funds in: Main metro locations (Mumbai, Chennai, Kolkata, New Delhi): 7 working days Metro centers and state capitals (other than those of North Eastern states and Sikkim): Maximum period of 10 working days. In all other centres where we have branches: maximum period of 14 working days. Cheques drawn on non-branch locations where we have a tie-up with correspondent banks, credit will be given on receipt of clear funds: Within a maximum period of 14 working days Cheques drawn on non-branch locations where we do not have a tie-up with correspondent banks, credit will be given on receipt of clear funds: Within a maximum period of 14 working days For more details on the outstation cheque collection policy, click here. For other queries, Contact Us. View more",
  },
  {
    Question:
      "Whom should I approach for any other service related to M&N  Bank Fixed Deposits",
    Answer:
      "For any other service related to Fixed Deposits (Supersaver or Sweep-In Facility, addition of Nominee, Change in Maturity Instructions, Premature Encashment etc.) you may approach the nearest M&N  Bank Branch with the Fixed Deposit advice and the request Form duly signed by all account holders.",
  },
  {
    Question:
      "How can I avail exemption from TDS on interest earned on Fixed Deposits",
    Answer:
      "To avail exemption from TDS on interest earned on Fixed Deposits, please submit a completed Form 15H (for Senior citizens) or Form 15G (for Regular customers) at any nearest M&N  Bank Branch (Form available on the website).",
  },
  {
    Question: "How can I prematurely liquidate my Fixed Deposits",
    Answer:
      "We request you to submit your Fixed Deposit advice, duly discharged by all account holders, at the nearest branch for premature liquidation of your fixed deposit. In the absence of your Fixed Deposit advice, you need to submit the attached Fixed Deposit Liquidation form. Visit a branch or call us You may visit the following URL to access information for the complete address and contact details of our Branches as well as our PhoneBanking numbers. NetBanking Alternatively, you can liquidate your Fixed Deposits through NetBanking. This facility is available to Fixed Deposits held under Sole Owner (SOW) relationship only.The following are the steps required to liquidate your Fixed Deposit online: Access your NetBanking account with your Customer ID and IPIN (NetBanking Password) Select the â€œLiquidate Fixed Deposit option under the Fixed Deposit menu from the Menu bar located on the left hand side of the web page Select the Fixed Deposit account number from the Drop-down lists Once complete, click on Continue and Confirm the details entered A new web page, confirming the Liquidating Fixed Deposit will be displayed. This facility is available on NetBanking only to customers having Account and Fixed Deposit in Sole Name Further, kindly note that: Fixed deposits booked through branch can also be liquidated on NetBanking provided the FD is held with Sole Owner Relationship Fixed Deposits in the name of Non-individuals are not allowed for liquidation through NetBanking. Additional Information - As per current policy of the bank on premature liquidation, the interest rate applicable for premature closure of deposits (all amounts) will be the lower of: The base rate for the original/contracted tenure for which the deposit has been booked OR The base rate applicable for the tenure for which the deposit has been in force with the Bank. # the base rate is the rate applicable to deposits of less than Rs.15 Lakhs as on the date of booking the deposit. Further to the Terms & Conditions of Fixed Deposit Accounts of the Bank, the penalty on premature closure of Fixed Deposits including sweep-in and partial closures has been fixed by the Bank at the rate of 1%. This is applicable for all deposits booked on or after 24th January 2011. View less",
  },
  {
    Question: "How to Download TDS Certificate through Online",
    Answer:
      "Please note you can now download the TDS certificate from Netbanking Accounts Module ,Go to Request section click on TDS Inquiry. We request you to follow the below mentioned process : Log in into NetBanking through the Customer ID and NetBanking Password (IPIN). Select TDS Inquiry under the Request option on the left hand pane. Select the Financial Year and Quarter for which the certificate is required. Click on Continue and confirm. Additional information:- Currently, TDS Certificate for the Quarter 1 , Quarter 2, Quarter 3 AND Quarter 4 are available. TDS certificates will be available only if PAN is updated and there is a tax deduction in the financial quarter. TDS certificate will be in PDF Format. View more",
  },
  {
    Question: "How to change existing fixed deposit account tenure",
    Answer:
      "We regret to inform you that tenure selected for the fixed deposit account cannot be changed once the account is opened. In this case we suggest that you can close your existing fixed deposit account and open a new account with a desired tenure.",
  },
  {
    Question: "How is TDS deducted",
    Answer:
      "Check the deduction rates below: Tax Rate Surcharge Education Cess TOTAL Resident Individuals & HUF 10% ---- ---- 10% Corporate Entity 10% ---- ---- 10% NRO 30% ---- 3% 30.90% Firms 10% ---- ---- 10% Co-operative Societies & Local Authority 10% ---- ---- 10% View more",
  },
  {
    Question: "Can TDS be recovered from my principle of the FD",
    Answer:
      "If the interest amount is not sufficient to recover TDS, the amount is taken from the principal of the deposit.",
  },
  {
    Question: "When does the Bank issue a TDS Certificate",
    Answer:
      "The TDS Certificate, Form 16A, for TDS deducted during a calendar quarter, will be issued in the next month of the respective quarter.",
  },
  {
    Question: "Can TDS influence the maturity of my deposit",
    Answer:
      "Yes, in case of reinvestment deposits ,the interest reinvested is post TDS recovery & hence the maturity amount for re-investment deposits would very to the extent of tax and compounding effect on tax for the period subsequent of deduction till maturity.",
  },
  {
    Question: "What are the implications of booking an FD without PAN",
    Answer:
      "In the absence of PAN, following are the implications for customers: TDS will be recovered at 20%(as against 10%) NO TDS credit from the Income Tax department NO TDS certificate will be issued (As per CBDT circular no:03/11) Form 15G/H and other exemption certificates will be invalid and penal TDS will apply View more",
  },
  {
    Question: "Will changes to my deposit portfolio affect my TDS liability",
    Answer:
      "Yes. If the change or enhancement in your deposit portfolio earns a cumulative interest along with that of the earlier portfolio greater than Rs. 10,000/- you will be liable for TDS on your current portfolio. Note :If interest on the current portfolio is not sufficient to cover TDS, it will be recovered from the principal.",
  },
  {
    Question: "When is TDS deducted for Regular Fixed Deposit",
    Answer:
      "TDS is deducted every time the Bank pays/re-invests interest during the Financial year.In addition TDS is also deducted on interest accrued(but not yet paid) at the end of financial year viz. 31st March.",
  },
  {
    Question:
      "What documents are required to open a senior citizen Regular Fixed Deposit",
    Answer:
      "While opening the account, the customer needs to provide proof of age establishing that he/she is a Senior Citizen. To accomplish this, either of the following can be submitted: Secondary School Leaving Certificate (10thPolicy Voters Identity Card Pension Payment Order Birth Certificate issued by the competent authority Passport Defence ID Card / Govt ID Card (Provided they have the cardholder's photo, signature and date of birth) PSU Issued ID Cards Senior Citizen Cards issued by Indian Airlines / Indian Railways PAN Card View more",
  },
  {
    Question:
      "Can I open a joint account with a non-senior citizen for Regular Fixed Deposit",
    Answer: "You can, as long as the first account holder is a senior citizen.",
  },
  {
    Question:
      "As a Regular Fixed Deposit holder, How do I apply for an exemption on TDS",
    Answer:
      "If your total interest income for the year does not fall within the overall taxable limits, you should let us know. You can do this by submitting a form as per the provisions of the Income Tax Act. A few things to note: You can get the 15AA form from the Assessing Officer of the Income Tax department. Even with the 15H/15AA form, the tax that has already been deducted by way of TDS during the year prior will not be refunded. However, you will get a certificate, which can be used while filing your tax return. 15H/15AA Forms are valid only for the financial year in which they are issued. A fresh 15G/H form needs to be completed for each deposit that is placed with the Bank, and it should be completed within the first week of the financial year. View more",
  },
  {
    Question: "How to prematurely liquidate the Fixed Deposit Online",
    Answer:
      "You can liquidate your Fixed Deposits through NetBanking. This facility would be available to Fixed deposits held under Sole Owner (SOW) relationship only. Following are the steps for liquidating your Fixed Deposit online: Access your NetBanking account with your Customer ID and IPIN (NetBanking Password) Select Liquidate Fixed Deposit option under the Fixed Deposit menu from the Menu bar located on the left hand side of the web page Select the Fixed Deposit account number from the Drop-down lists Once complete, click on Continue and Confirm the details entered A new web page, confirming the Liquidating Fixed Deposit will be displayed. Further, kindly note that: Fixed Deposits in the name of Non-individuals are not allowed for liquidation through NetBanking. Fixed deposit in the joint name cannot be liquidated online. View more",
  },
  {
    Question:
      "What is the new policy with regards to PAN to book fixed deposit with our bank",
    Answer:
      "Where the total value of Fixed deposit per customer id <= 50,000( including the new FD being booked ) No pan , & no form 60 Where the total value of fixed deposit per customer id > 50,000( including the new FD being booked) PAN required mandatorily",
  },
  {
    Question: "When do I become liable for TDS",
    Answer:
      "If the aggregate interest that you are likely to earn for all your deposits held across branches in a customer id is greater than Rs.10000 in a financial year , you become liable for TDS. Note: Tax liability for TDS purpose is determined basis per pan no and not as per branch per pan no . Deposits held by minors are also subject to TDS. The credit for the TDS can be claimed by the person in whose hands the minor's income is included.",
  },
  {
    Question:
      "What documents are required to open a senior citizen 5 Year Tax Saving Fixed Deposit",
    Answer:
      "While opening the account, the customer needs to provide proof of age establishing that he/she is a Senior Citizen. To accomplish this, either of the following can be submitted: Secondary School Leaving Certificate (10thPolicy Voters Identity Card Pension Payment Order Birth Certificate issued by the competent authority Passport Defence ID Card / Govt ID Card (Provided they have the cardholder's photo, signature and date of birth) PSU Issued ID Cards Senior Citizen Cards issued by Indian Airlines / Indian Railways PAN Card View more",
  },
  {
    Question: "Will the bank issue a TDS certificate",
    Answer:
      "You will receive a consolidated TDS Certificate in Form 16A, for TDS deducted during a financial year, in the month of April of the following financial year.",
  },
  {
    Question:
      "As a 5 Year Tax Saving Fixed Deposit holder, How do I apply for an exemption on TDS",
    Answer:
      "If your total interest income for the year does not fall within the overall taxable limits, you should let us know. You can do this by submitting a form as per the provisions of the Income Tax Act. A few things to note: You can get the 15AA form from the Assessing Officer of the Income Tax department. Even with the 15G/15H form, the tax that has already been deducted by way of TDS during the year prior will not be refunded. However, you will get a certificate, which can be used while filing your tax return. 15H/15AA Forms are valid only for the financial year in which they are issued. A fresh Form - 15G/H needs to be submitted in the first week of the financial year for exisitng deposit and separately each time for subsequent deposit booked in the Financial Year. View more",
  },
  {
    Question: "When is TDS deducted for 5 Year Tax Saving Fixed Deposit",
    Answer:
      "TDS is deducted every time the Bank pays/re-invests interest during the Financial year. In addition TDS is also deducted on interest accrued(but not yet paid) at the end of financial year viz. 31st March.",
  },
  {
    Question:
      "Does any change or enhancement in my deposit portfolio affect TDS liability",
    Answer:
      "Yes. If the change or enhancement in your deposit portfolio earns a cumulative interest along with that of the earlier portfolio greater than Rs. 10,000/- you will be liable for TDS on your current portfolio. Note: If interest on the current portfolio is not sufficient to cover TDS, it will be recovered from the principal.",
  },
  {
    Question:
      "Do I need to visit branch to receive my 5 Year Tax Saving Fixed Deposit proceeds on maturity",
    Answer:
      "Customer is not required to visit the branch , FD proceeds will be credited to customers account on maturity as per instructions.",
  },
  {
    Question:
      "Can I open a joint account with a non-senior citizen for 5 Year Tax Saving Fixed Deposit",
    Answer: "Yes you can open deposit with non senior citizen.",
  },
  {
    Question: "How to apply for 5 Year Tax Saving Fixed Deposit",
    Answer:
      "We request you to visit the nearest branch and fill the fixed deposit booking account opening form to open a 5 Year Tax Saving Fixed Deposit.",
  },
  {
    Question: "When am I liable for TDS (Tax Deduction at Source)",
    Answer:
      "You become liable for TDS (Tax Deduction at Source) if the aggregate interest that youâ€™re likely to earn for all your deposits is greater than Rs. 10 000 in a financial year. TDS will be deducted when interest payable or reinvested on RD and FD per customer across all branches, exceed Rs.10000 in a financial year",
  },
  {
    Question:
      "If I have a joint Super Saver Account, can both account holders get an ATM/Debit card",
    Answer:
      "Both account holders can get an ATM / Debit Card, but a maximum of two cards are given for each Super Saver Account.",
  },
  {
    Question: "Is the Super Saver Account a normal Savings Account",
    Answer:
      "Look at the Super Saver Account as a Premium Savings account. With this option youâ€™re combining the benefits of a Fixed Deposit and a Savings Account. There are a few other unique features, including: High interest rates A personalised cheque book A free ATM card Free inter-city access View more",
  },
  {
    Question:
      "What documents are required to open a senior citizen Super Saver Facility",
    Answer:
      "While opening the account, the customer needs to provide proof of age establishing that he/she is a Senior Citizen. To accomplish this, either of the following can be submitted: Secondary School Leaving Certificate (10thPolicy Voters Identity Card Pension Payment Order Birth Certificate issued by the competent authority Passport Defence ID Card / Govt ID Card (Provided they have the cardholder's photo, signature and date of birth) PSU Issued ID Cards Senior Citizen Cards issued by Indian Airlines / Indian Railways PAN Card View more",
  },
  {
    Question: "Iâ€™m part of a Trust â€“ can I open a Super Saver Account",
    Answer:
      "Only Resident Individuals and Hindu Undivided Families are eligible to open a Super Saver Account.",
  },
  {
    Question: "Can I add on a Fixed Deposit",
    Answer:
      "You can, but it has to be in multiples of Rs 5,000. In this situation, the overdraft rate is recalculated. We will let you know the change. Separate add-on forms exist for adding the Fixed Deposit to the Super Saver Account.",
  },
  {
    Question:
      "Will TDS be charged on the gross interest earned or the net interest earned",
    Answer:
      "TDS (Tax Deducted at Source) is charged if, in a financial year, the gross interest earned on your fixed deposits held with the bank exceeds Rs. 10, 000.",
  },
  {
    Question:
      "Can I have a Super Saver Facility and a Sweep-in Facility on the one Fixed Deposit",
    Answer:
      "This isnâ€™t possible. You can only have one of these facilities on a single Fixed Deposit.",
  },
  {
    Question:
      "Can I have a Super Saver Facility and a Sweep-in Facility on the same Savings Account",
    Answer: "You can have both these facilities on the same Savings Account.",
  },
  {
    Question: "How can I apply for the Super Saver Account",
    Answer:
      "You can apply for the Super Saver Account in the following ways: Apply through a branch: To apply for the Super Saver facility through a nearest branch, please submit a duly signed written instruction at the nearest branch. You may visit the following URL to access information for the complete address and contact details of our Branches. Apply by calling us: You may access information about our PhoneBanking numbers. Apply online: To apply online for Super Saver Facility, please follow steps mentioned below: Login to your NetBanking account and click on â€œFixed Deposit Super Saver option located under fixed deposit of the web page. Select the savings account number and the fixed deposit account number that you wish to link for Super Saver Facility from the drop down Accept the terms and conditions by checking the box available for the same. Click on Continue and Confirm. Please note the following details with regards to the online facility. Only customers with SOW (Single Ownership) relationship with both accounts and Fixed Deposits can link them under Super Saver Facility A minimum amount of Rs. 25,000 for a minimum tenure of 6 months 1 day is required to open a super saver account apart from a zero balance Savings Account In case of a Super Saver facility a lien is marked on the Fixed Deposit in favor of the Bank On Auto renewal of the Fixed Deposit, the quantum of the Overdraft limit will remain unchanged Through this facility, a 75% of your Fixed Deposit Principal amount will be granted as an Overdraft facility The rate applicable on the Overdraft facility will be 2% per annum over and above the Fixed Deposit Rate In case of premature liquidation of the Fixed Deposit, against which the Overdraft has been taken, the rate applicable on the overdraft utilized will remain unchanged In case the overdraft limit (Super Saver) set-up on the account is not removed prior to the maturity of the Fixed Deposit, the Bank shall auto-renew the Fixed Deposit for the same tenure at prevailing rates In case you choose any Sweep-in Fixed Deposit to link to a Super Saver facility, please note that a lien will be marked on the said Fixed Deposit for the Super Saver facility. This will mean that in future in case of shortage of funds, the sweep-in will not trigger, however, the Super Saver limit will be utilized. In case you have 2 separate deposits which you have linked to your SB account - a sweep in FD and a Super saver limit, then in case of shortfall of funds, first the OD amount will get utilized and if the shortfall still remains, then the sweep in shall trigger. View more",
  },
  {
    Question: "Can a joint account be opened with a non-senior citizen",
    Answer: "Yes, as long as the first account holder is a senior citizen.",
  },
  {
    Question: "How does it work",
    Answer:
      "The Super Saver Account lets you to withdraw up to 90% of your deposit, just like the liquidity of a Savings Account. Thereâ€™s no need to break your Fixed Deposit for short term requirements. You can withdraw cash through an ATM or by cheque or teller transactions.",
  },
  {
    Question: "Can I get an overdraft facility on my fixed deposit funds",
    Answer:
      "With our Super Saver Account, you can enjoy an overdraft facility of up to 90% of your Fixed Deposit funds without breaking the Fixed Deposit or losing interest on it. However, a minimum tenure of 6 months is required to open a Super Saver Fixed Deposit/ avail of the Super Saver facility on your existing deposit.",
  },
  {
    Question: "What are the benefits",
    Answer:
      "With M&N  Bank's Sweep-in facility, you gain the high interest rates that come with a Fixed Deposit, along with the liquidity of a Savings Account. To benefit, you just need a Savings or Current account. The Sweep-In facility links the deposits you choose, and whenever there are insufficient funds in your Account to clear a cheque, we will break units of the deposit to clear the cheque. Here's an example of how it works: Let's say you have a Sweep-In facility on your Savings Account with a linked Fixed Deposit of Rs10,000/-. If you have just issued a cheque for Rs. 4000/-, but the balance in that Savings Account is Rs. 1000/-, M&N  Bank will mark a lien on the Fixed Deposit to the extent of Rs. 3000/- (4000/- less 1000/-) and clear the cheque. View more",
  },
  {
    Question: "How can I apply for the Sweep-in facility",
    Answer:
      "To apply for the Sweep-In facility, you can login into your NetBanking account and apply online. This facility is available on NetBanking to Sole account holders (Single owners) only. Others can submit a request at nearest Branch. To apply online for Sweep-In Facility, please follow steps mentioned below: 1. Login to your NetBanking account and click on Fixed Deposit Sweep-in option located under fixed deposit of the web page. 2. Select the savings account number and the fixed deposit account number that you wish to link for Sweep-In Facility from the drop down 3. Accept the terms and conditions by checking the box available for the same. 4. Click on Continue and Confirm. Additional Information: Sweep In facility is not given for the below Fixed Deposits Fixed Deposit amounts greater than 1 Crore For availing Sweep-in facility on Fixed Deposits of value Rs 15 Lakhs and above, the customer will have to contact the nearest M&N  Bank Branch. Fixed Deposits with Lien marked: Fixed Deposits which have a lien / an overdraft limit set up; sweep-in on the said Fixed Deposit will not be maintained. Incase multiple deposits are linked for the Sweep-In facility, the first deposit to be encashed will be the deposit which was opened first. To discontinue this facility, once applied for it, you will have to contact the Branch. You may visit the URL to access information for the complete address and contact details of our Branches as well as our PhoneBanking numbers: View more",
  },
  {
    Question:
      "Can I have both a Super Saver facility and a Sweep-In facility on the same Fixed Deposit",
    Answer:
      "No. You can only have one of the two facilities on a single Fixed Deposit.",
  },
  {
    Question:
      "Will both the principal and interest amount of my Fixed Deposit be considered",
    Answer: "Just the principle amount of your Fixed Deposit is considered.",
  },
  {
    Question:
      "Can I have a Super saver facility and a Sweep-in facility on the same Savings Account",
    Answer:
      "It is possible to have both these facilities on the same Savings Account. It is important to note that if there are insufficient funds in your Savings Account, your overdraft limit will be exhausted before units of the Sweep-In Fixed Deposits are used prematurely.",
  },
  {
    Question: "On what basis the Sweep-in facility gets triggered",
    Answer:
      "Effective 22nd Feb 2014, Sweep in of funds from your Fixed Deposit (FD) to Saving/ Current account will trigger on Last in First out basis (LIFO).",
  },
  {
    Question:
      "Can a Fixed Deposit be linked to two different Savings Accounts for the Sweep-in",
    Answer:
      "A Fixed Deposit can only be linked to one savings account for the Sweep-in facility.",
  },
  {
    Question: "Can my Sweep-in facility have multiple deposits",
    Answer:
      "You can definitely link more than one deposit to the Sweep-in facility. When you link more than one deposit to the facility, then the first deposit to be used will be the deposit which you opened last.",
  },
  {
    Question:
      "Can I link accounts held in different account titles to the same Savings Account for the Sweep-In facility",
    Answer:
      "No. You can only link the Sweep-In facility to the accounts with the same account title. For example, a Fixed Deposit held by A-B can be linked to a Savings Account held by A-B across branches.",
  },
  {
    Question: "What is the Sweep-in facility all about",
    Answer:
      "The Sweep-In facility is a cluster deposit (held in units of Re.1). We will automatically break units of term deposits held by you, if there are insufficient funds in your Sweep-In Savings/Current Account to clear a cheque. The same will happen when you wish to withdraw money using your ATM Card and there are insufficient funds in the account. For more information on the Sweep-In facility, please click here. View more",
  },
  {
    Question: "Is there a nomination facility",
    Answer:
      "Yes, there is a nomination facility on the Recurring Deposit account.",
  },
  {
    Question: "Is there a monthly or quarterly interest pay-out option",
    Answer:
      "Interest is paid when the Recurring Deposit account is closed, and on maturity.",
  },
  {
    Question:
      "Can I change the tenure and installment due date, (auto debit date) of my Recurring Deposit",
    Answer:
      "No it is not possible to change the tenure and installment due date, (auto debit date). We request you to open a new Recurring Deposit with the desired due date and tenure.",
  },
  {
    Question: "For what period can I open a Recurring Deposit",
    Answer:
      "You can open a Recurring Deposit account for a minimum period of 6 months, and thereafter in multiples of 3 months up to a maximum period of 10 years.",
  },
  {
    Question: "Can I choose my instalment date",
    Answer:
      "The date of your monthly RD installment will depend on the date you opened your RD account.",
  },
  {
    Question: "Can partial Payments be made on Recurring Deposits",
    Answer: "Partial payments are not possible.",
  },
  {
    Question:
      "What is the maximum deposit amount a Recurring Deposit account can be opened with",
    Answer:
      "The Maximum installment amount you can open a recurring Deposit account with is Rs 14,99,900/- per month.",
  },
  {
    Question: "What if certain RD installments are not paid",
    Answer:
      "If six consecutive installments are unpaid, the Bank reserves the right to close the RD account. The interest rate applicable on such closed accounts will be as per the premature withdrawal policy of the Bank.",
  },
  {
    Question: "How do Recurring Deposits work",
    Answer:
      "A monthly deposit of a pre-fixed amount is made in the Recurring Deposit account. On maturity, you get back the amount you deposited, along with interest calculated at the rate applicable at the time of opening your account.",
  },
  {
    Question: "Can I pay more than one instalment at a time",
    Answer:
      "You can, but note that there will be no interest paid on any additional amount deposited, other than the installment due.",
  },
  {
    Question:
      "How Interest Rate is calculated for premature withdrawal of Recurring Deposit",
    Answer:
      "If your Recurring Deposit is broken prematurely, the interest rate applicable for premature closure of deposits will be lower of The base rate for the original / contracted tenure for which the deposit has been booked OR The base rate applicable for the tenure for which the deposit has been in force with the Bank The base rate is the rate applicable to deposits of less than 1crore as on the date of booking the deposit. In case of premature closure within a month, no interest shall be paid out & only principal amount shall be returned. View more",
  },
  {
    Question: "Is an overdraft facility allowed",
    Answer: "Right now there is no overdraft facility for Recurring Deposits.",
  },
  {
    Question: "How can I prematurely liquidate my recurring deposit",
    Answer:
      "If you wish to prematurely liquidate your Recurring Deposit. We request you to submit your Recurring Deposit advice or written instruction, duly signed by all account holders, at the branch for premature liquidation of your Recurring deposit. Alternatively, you can liquidate your Recurring Deposits through NetBanking. This facility will be available for Recurring Deposit held under Sole Owner (SOW) relationship only and which are booked from Singly Owned Savings or Current Accounts. Following are the steps for liquidating your Recurring Deposit online: Login to NetBanking with your Customer ID and IPIN (NetBanking Password) Select Liquidate R D option under the Recurring Deposit menu from the Menu bar located on the left hand side, under Accounts tab. Select the Recurring Deposit account number from the Drop-down lists, and click on Continue. Verify the details and Confirm the Liquidation. A Confirmation page will be displayed, confirming that your Recurring Deposit has been liquidated. Additional Information - If your Recurring Deposit is broken prematurely, the interest rate applicable for premature closure of deposits will be lower of The base rate for the original / contracted tenure for which the deposit has been booked OR The base rate applicable for the tenure for which the deposit has been in force with the Bank The base rate is the rate applicable to deposits of less than Rs.15 lacs as on the date of booking the deposit. In case of premature closure within a month, no interest shall be paid out & only principal amount shall be returned. View more",
  },
  {
    Question: "What happens if I donâ€™t pay an instalment",
    Answer:
      "If frequent defaults (non-payments) are observed in your payment of monthly installments, and six installments fall in arrears, the Bank reserves the right to close your RD account. The interest rate applicable on such accounts will be as per the premature withdrawal policy of the Bank.",
  },
  {
    Question: "Can my Recurring Deposit be opened in joint names",
    Answer: "Yes, you can open a Recurring Deposit in a joint name.",
  },
  {
    Question: "Can the first applicant for a Recurring Deposit be a minor",
    Answer: "The first applicant can be a minor.",
  },
  {
    Question: "Can I withdraw prematurely from my Recurring Deposit",
    Answer:
      "Premature withdrawals are allowed, but remember that no partial withdrawal is permitted.",
  },
  {
    Question: "I'm a senior citizen â€“ are there any extra benefits",
    Answer: "You gain an additional 0.50% rate of interest.",
  },
  {
    Question: "How to open a Recurring Deposit",
    Answer:
      "Recurring Deposits can now be booked through NetBanking. Following are the steps for booking your Recurring Deposit online: Access your NetBanking account with your Customer ID and IPIN (NetBanking Password) Select Open Recurring Deposit option under the Recurring Deposit menu from the Menu bar located on the left hand side of the web page Select the desired values from the Drop-down lists Once complete, click on Continue and Confirm the details entered",
  },
  {
    Question:
      "Can you covert your existing saving account into a pension account",
    Answer:
      "Yes. You just have to submit an undertaking and submit the required documents.",
  },
  {
    Question: "Any minimum Balance need to be maintained in the account",
    Answer:
      "No minimum balance need to be maintained as these are Zero balance accounts.",
  },
  {
    Question: "When can we open pension accounts",
    Answer:
      "You can open pension account 6 months prior to your date of retirement.",
  },
  {
    Question: "Is nomination required in the account",
    Answer: "Nomination is mandatory in the account.",
  },
  {
    Question: "Can a pension account be opened jointly",
    Answer: "Pension account can be opened jointly with spouse only.",
  },
  {
    Question: "What are the charges for collection of outstation cheques",
    Answer:
      "To know the charges for collection of cheques levied in your account, click here to view the current schedule of charges. Kindly check under the following headings: Collection of outstation cheques - Our Bank Locations Collection of outstation cheques - Other Locations These charges attract a Service Tax and an Educational Cess as applicable in terms of the current Finance Bill.",
  },
  {
    Question: "What is the time taken to realize outstation cheques",
    Answer:
      "The indicative time taken for the realization of outstation cheques is given below: Cheques drawn where M&N  Bank has a branch, credit will be given on receipt of clear funds in: Main metro locations (Mumbai, Chennai, Kolkata, New Delhi): 7 working days Metro centers and state capitals (other than those of North Eastern states and Sikkim): Maximum period of 10 working days. In all other centres where we have branches: maximum period of 14 working days. Cheques drawn on non-branch locations where we have a tie-up with correspondent banks, credit will be given on receipt of clear funds: Within a maximum period of 14 working days Cheques drawn on non-branch locations where we do not have a tie-up with correspondent banks, credit will be given on receipt of clear funds: Within a maximum period of 14 working days For more details on the outstation cheque collection policy, click here. For other queries, Contact Us. View more",
  },
  {
    Question:
      "How do I know my beneficiary's details for a cheque issued in my name (Basic Savings Bank Deposit Account - Farmers)",
    Answer:
      "To know your beneficiaryâ€™s details for a cheque issued by you / issuer name for a cheque credited in your account, please contact any of our bank branches. You can refer the cheque deposit slip also for the details. To know about Service charges and fees click here. For more details, Contact Us.",
  },
  {
    Question:
      "How can I get an International Debit Card with my Basic Savings Bank Deposit Account - Farmers",
    Answer:
      "You can get an International Debit Card only on request at the branch @ Rs. 100 p.a. (plus applicable taxes) for each applicant.",
  },
  {
    Question: "What can I do with the NEFT facility",
    Answer:
      "You can use the NEFT facility to transfer funds from your M&N  Bank account to an account in another Bank at the locations as specified by RBI.",
  },
  {
    Question: "Are all IVR based calls free",
    Answer:
      "Yes, all IVR based PhoneBanking services are available free of cost. However agent assisted calls will be charged.",
  },
  {
    Question:
      "How do I apply for a Basic Savings Bank Deposit Account - Farmers with M&N  Bank",
    Answer:
      "To apply for a Basic Savings Bank Deposit Account - Farmers with M&N  Bank, you need to choose from the following: 1. Requesting a Bank representative to contact you.Fill in your details here and our representative will get in touch with you shortly. 2. Download an application form Once you have downloaded the form, you just need to follow the steps mentioned below: Print and fill-in the application form. Attach the required documents. Click here to see the documents required. Submit the documents at any of our branches. Click here to find a branch near you. Please allow us a week's time to revert on your application. View more",
  },
  {
    Question:
      "How do I know my beneficiary's details for a cheque issued in my name (Kisan Club Savings account)",
    Answer:
      "To know your beneficiaryâ€™s details for a cheque issued by you / issuer name for a cheque credited in your account, please contact any of our bank branches. To know about Service charges and fees click here. For more details, Contact Us.",
  },
  {
    Question: "Is a nomination facility available for lockers",
    Answer:
      "Yes, a nomination facility is available to Individuals /Joint hirers of Safe Deposit Lockers.",
  },
  {
    Question: "What are the timings for locker operations",
    Answer:
      "You can plan your visit and access your locker on all working days during banking hours.",
  },
  {
    Question: "How many nominees can be added to a single locker",
    Answer: "A nomination can be made in favour of only one individual.",
  },
  {
    Question: "Can I pay for the rent of a locker through my account",
    Answer:
      "Yes, you can set a Standing Instruction in your Account to pay your annual locker rent.",
  },
  {
    Question:
      "What is the procedure to add / cancel / modify a nominee in my locker",
    Answer:
      "You will need to fill up the following forms and submit it to your locker branch. The forms are available in the Forms centre section of our website.- For addition of a nominee: Form SL1 (sole hirer) / SL1A (joint hirer)- For cancellation of nomination: Form SL2- For change of nomination: Form SL3 (sole hirer) / SL3A (joint hirer)The branch will assist you after the form has been submitted by you. For more details, Contact Us.",
  },
  {
    Question: "What are the tenure options",
    Answer:
      "The choice is yours. You can choose from any of our repayment options - 12, 18, 24, 30, 36 or 48 months, all specially designed to suit your requirements.",
  },
  {
    Question: "When can I open a salary account with M&N  Bank",
    Answer:
      "The salary account can be opened by virtue of your employer / company having a Corporate Salary arrangement with the Bank.",
  },
  {
    Question:
      "I have not received the Welcome Letter and ATM/Debit Card PIN for my new account",
    Answer:
      "If you have not recieved the same at your mailing address within 7 days from the receipt of the Welcome Kit containing the Account deliverables, kindly Contact us.",
  },
  {
    Question: "What is the time taken to realize outstation cheques",
    Answer:
      "The indicative time taken for the realization of outstation cheques is given below: Cheques drawn where M&N  Bank has a branch, credit will be given on receipt of clear funds in: Main metro locations (Mumbai, Chennai, Kolkata, New Delhi): 7 working days Metro centers and state capitals (other than those of North Eastern states and Sikkim): Maximum period of 10 working days. In all other centres where we have branches: maximum period of 14 working days. Cheques drawn on non-branch locations where we have a tie-up with correspondent banks, credit will be given on receipt of clear funds: Within a maximum period of 14 working days Cheques drawn on non-branch locations where we do not have a tie-up with correspondent banks, credit will be given on receipt of clear funds: Within a maximum period of 14 working days For more details on the outstation cheque collection policy, click here. For other queries, Contact Us. View more",
  },
  {
    Question: "What to do if my Account becomes dormant",
    Answer:
      "Due to non operation for a period of 2 years your account will become Dormant. In order to activate your account you are requested to :Submit a written instruction signed by all applicants along with ID proof and address proof at the branch where the account is held or at your nearest branch. Initiate credit or debit transaction atleast once in a year to keep your account active. For information on the complete address and contact details of our Branches as well as our PhoneBanking numbers Click Here",
  },
  {
    Question: "What are the documents required to open a salary account",
    Answer:
      "To open a Salary Account you have to: Submit your identity proof and address proof along with your latest passport size photographs Proof of employment (Company ID Card / Appointment letter / Company Introduction through Introduction Letter OR attestation on Account opening form) Submit self-attested copies and originals for verification View more",
  },
  {
    Question: "Can a salary account have a joint applicant",
    Answer:
      "Yes, parents, spouse, child or sibling can be a joint applicant to an account. The joint applicant will need to submit a valid photo ID and address proof.",
  },
  {
    Question: "Is employment confirmation mandatory for me to open a",
    Answer:
      "Yes, employment confirmation is required to ensure that you are an employee of the company.",
  },
  {
    Question: "What is the time taken to realize outstation cheques",
    Answer:
      "The indicative time taken for the realization of out-station cheques is given below: Cheques drawn where M&N  Bank has a branch, credit will be given on receipt of clear funds in: Main metro locations (Mumbai, Chennai, Kolkata, New Delhi): 7 working days Metro centers and state capitals (other than those of North Eastern states and Sikkim): Maximum period of 10 working days. In all other centers where we have branches: maximum period of 14 working days. Cheques drawn on non-branch locations where we have a tie-up with correspondent bank, credit will be given on receipt of clear funds: Within a maximum period of 14 working days Cheques drawn on non-branch locations where we do not have a tie-up with correspondent bank, credit will be given on receipt of clear funds: Within a maximum period of 14 working days For more details on the outstation cheque collection policy, click hereFor other queries, Contact Us",
  },
  {
    Question: "How can I stop a cheque payment",
    Answer:
      "To make a Stop Payment request on an issued Cheque, kindly follow the steps mentioned below: Log in to your NetBanking account Click on the Stop Payment of Cheque option available under Request menu on the left hand side of the web page Select the Account Number (if more than 1 account) Enter first/Start cheque number to the last/End cheque number, with a reason for stopping the payment. Click on Continue. On the next web page, you can verify and click on Confirm tab to confirm the stop payment request. To make a stop payment request on a single cheque, enter the same number in both the fields provided. Stop payment of cheques through NetBanking is free of charge. You may obtain the cheque series from PhoneBanking and then use NetBanking to stop the cheques. Alternatively, you could use PhoneBanking or the branch to make a Stop Payment request for a cheque. Read more about fees and charges applicable to stop cheques here. These charges attract a Service Tax and an Educational Cess as applicable in terms with the current Finance Bill.",
  },
  {
    Question: "Can a Company ID card be accepted as a Photo ID document",
    Answer:
      "No, a Company ID cannot be accepted as a Photo ID document. A government issued photo ID card is mandatory.",
  },
  {
    Question:
      "What is the procedure to add/modify or delete a nominee for all my accounts and deposits",
    Answer:
      "To add/modify or delete a nominee you will need to fill the nomination form and submit it to your nearest branch. The branch will assist you after the form has been submitted by you.For more details, Contact Us",
  },
  {
    Question: "How long will it take to update a change of address",
    Answer:
      "Your mailing address will be updated within 7 working days once the application, with any supporting documents, is received and found to be in order. The change in address will also be confirmed through system generated mailers sent to the old as well as the new addresses. If you do not receive any update after the stipulated time mentioned above, we request you to Contact Us with the following details in order to enable us to assist you further: The date when you submitted your request The complete Branch address where the request was submitted. Click here to see details of all our bank branches The name of the executive and complete address of the executiveâ€™s source branch, if the form is handed over to an executive",
  },
  {
    Question:
      "Can I use my existing Salary Account if I have changed employers",
    Answer:
      "Yes, In case an arrangement exists, we request you to visit the nearest branch along with a letter or an e-mail received from the official Corporate email ID. The letter / e-mail should have your complete name and account number and state that you have joined the corporate.",
  },
  {
    Question:
      "How do I know my beneficiary's details for a cheque issued in my name",
    Answer:
      "To know your beneficiary's details for a cheque issued by you / issuer name for a cheque credited in your account, please contact any of our bank branches. To download a Service Brochure, click here For more details, Contact Us",
  },
  {
    Question:
      "From where can I enquire about the status of my request to change the residential address of my M&N  Bank account",
    Answer:
      "Please revert with the following details for us to look into the matter: Date of submission of request for address change The branch where the request was submitted Your Customer ID or Account number (in case, the same has not been mentioned earlier) Your new address Kindly visit the URL to access information for the complete address and contact details of our Branches as well as our PhoneBanking numbers. The primary benefit of this account is that it enables the account holder to track reimbursements you receive from your company separately.",
  },
  {
    Question:
      "From where can I enquire about the status of my request to change the residential address of my M&N  Bank account",
    Answer:
      "Please revert with the following details for us to look into the matter: Date of submission of request for address change The branch where the request was submitted Your Customer ID or Account number (in case, the same has not been mentioned earlier) Your new address Kindly visit the URL to access information for the complete address and contact details of our Branches as well as our PhoneBanking numbers. The primary benefit of this account is that it enables the account holder to track reimbursements you receive from your company separately.",
  },
  {
    Question:
      "How do I know my beneficiary's details for a cheque issued in my name",
    Answer:
      "To know your beneficiary's details for a cheque issued by you / issuer name for a cheque credited in your account, please contact any of our bank branches. To download a Service Brochure, click here For more details, Contact Us",
  },
  {
    Question:
      "Can I use my existing Salary Account if I have changed employers",
    Answer:
      "Yes, In case an arrangement exists, we request you to visit the nearest branch along with a letter or an e-mail received from the official Corporate email ID. The letter / e-mail should have your complete name and account number and state that you have joined the corporate.",
  },
  {
    Question:
      "Is employment confirmation mandatory for me to open a Regular Salary Account",
    Answer:
      "Yes, employment confirmation is required to ensure that you are an employee of the company.",
  },
  {
    Question: "How can I stop a cheque payment",
    Answer:
      "To make a Stop Payment request on an issued Cheque, kindly follow the steps mentioned below: Log in to your NetBanking account Click on the Stop Payment of Cheque option available under Request menu on the left hand side of the web page Select the Account Number (if more than 1 account) Enter first/Start cheque number to the last/End cheque number, with a reason for stopping the payment. Click on Continue. On the next web page, you can verify and click on Confirm tab to confirm the stop payment request. To make a stop payment request on a single cheque, enter the same number in both the fields provided. Stop payment of cheques through NetBanking is free of charge. You may obtain the cheque series from PhoneBanking and then use NetBanking to stop the cheques. Alternatively, you could use PhoneBanking or the branch to make a Stop Payment request for a cheque. Read more about fees and charges applicable to stop cheques here. These charges attract a Service Tax and an Educational Cess as applicable in terms with the current Finance Bill.",
  },
  {
    Question:
      "What are the eligibility criteria for Personal Accident Death Cover",
    Answer:
      "Eligibility: The following are the broad Terms & Conditions of the captioned cover on salary account and Titanium Royale Debit card Accidental Death resulting from bodily injury due accident only (for Defence: under civilian condition (off duty) ) Accidental Death resulting from bodily injury which directly and independently of all other causes results in Death within twelve (12) months of the event date On the event date, the account holder Is a bonafide employees (aged less than 70 years ) of the organization to whom the specific offer has been extended Is holding a Salary Account under the Corporate Salary Account Program with M&N  Bank and has received salary credit in the month or month prior Should have carried out at least one purchase transaction using the Debit Card, within 6 months prior to the date of loss. In case of Air Accidental Death claim ticket should have been purchased using Debit Card linked to Salary Account Cover provided only to the primary account holder",
  },
  {
    Question:
      "What is the procedure to add/modify or delete a nominee for all my accounts and deposits",
    Answer:
      "To add/modify or delete a nominee you will need to fill the nomination form and submit it to your nearest branch. The branch will assist you after the form has been submitted by you.For more details, Contact Us",
  },
  {
    Question: "How long will it take to update a change of address",
    Answer:
      "Your mailing address will be updated within 7 working days once the application, with any supporting documents, is received and found to be in order. The change in address will also be confirmed through system generated mailers sent to the old as well as the new addresses. If you do not receive any update after the stipulated time mentioned above, we request you to Contact Us with the following details in order to enable us to assist you further: The date when you submitted your request The complete Branch address where the request was submitted. Click here to see details of all our bank branches The name of the executive and complete address of the executiveâ€™s source branch, if the form is handed over to an executive",
  },
  {
    Question: "What is the time taken to realize outstation cheques",
    Answer:
      "The indicative time taken for the realization of out-station cheques is given below: Cheques drawn where M&N  Bank has a branch, credit will be given on receipt of clear funds in: Main metro locations (Mumbai, Chennai, Kolkata, New Delhi): 7 working days Metro centers and state capitals (other than those of North Eastern states and Sikkim): Maximum period of 10 working days. In all other centers where we have branches: maximum period of 14 working days. Cheques drawn on non-branch locations where we have a tie-up with correspondent bank, credit will be given on receipt of clear funds: Within a maximum period of 14 working days Cheques drawn on non-branch locations where we do not have a tie-up with correspondent bank, credit will be given on receipt of clear funds: Within a maximum period of 14 working days For more details on the outstation cheque collection policy, click hereFor other queries, Contact Us",
  },
  {
    Question: "Can a Company ID card be accepted as a Photo ID document",
    Answer:
      "No, a Company ID cannot be accepted as a Photo ID document. A government issued photo ID card is mandatory.",
  },
  {
    Question:
      "Can I use my existing Salary Account if I have changed employers",
    Answer:
      "Yes, In case an arrangement exists, we request you to visit the nearest branch along with a letter or an e-mail received from the official Corporate email ID. The letter / e-mail should have your complete name and account number and state that you have joined the corporate.",
  },
  {
    Question: "Can a salary account have a joint applicant",
    Answer:
      "Yes, parents, spouse, child or sibling can be a joint applicant to an account. The joint applicant will need to submit a valid photo ID and address proof.",
  },
  {
    Question: "What is the time taken to realize outstation cheques",
    Answer:
      "The indicative time taken for the realization of out-station cheques is given below: Cheques drawn where M&N  Bank has a branch, credit will be given on receipt of clear funds in: Main metro locations (Mumbai, Chennai, Kolkata, New Delhi): 7 working days Metro centers and state capitals (other than those of North Eastern states and Sikkim): Maximum period of 10 working days. In all other centers where we have branches: maximum period of 14 working days. Cheques drawn on non-branch locations where we have a tie-up with correspondent bank, credit will be given on receipt of clear funds: Within a maximum period of 14 working days Cheques drawn on non-branch locations where we do not have a tie-up with correspondent bank, credit will be given on receipt of clear funds: Within a maximum period of 14 working days For more details on the outstation cheque collection policy, click hereFor other queries, Contact Us",
  },
  {
    Question: "How long will it take to update a change of address",
    Answer:
      "Your mailing address will be updated within 7 working days once the application, with any supporting documents, is received and found to be in order. The change in address will also be confirmed through system generated mailers sent to the old as well as the new addresses. If you do not receive any update after the stipulated time mentioned above, we request you to Contact Us with the following details in order to enable us to assist you further: The date when you submitted your request The complete Branch address where the request was submitted. Click here to see details of all our bank branches The name of the executive and complete address of the executiveâ€™s source branch, if the form is handed over to an executive",
  },
  {
    Question:
      "Is employment confirmation mandatory to open a Premium Salary Account",
    Answer:
      "Yes, employment confirmation is required to ensure that you are an employee of the company.",
  },
  {
    Question:
      "What are the eligibility criteria for Personal Accident Death Cover",
    Answer:
      "Eligibility: The following are the broad Terms & Conditions of the captioned cover on salary account and Titanium Royale Debit card Accidental Death resulting from bodily injury due accident only (for Defence: under civilian condition (off duty) ) Accidental Death resulting from bodily injury which directly and independently of all other causes results in Death within twelve (12) months of the event date On the event date, the account holder Is a bonafide employees (aged less than 70 years ) of the organization to whom the specific offer has been extended Is holding a Salary Account under the Corporate Salary Account Program with M&N  Bank and has received salary credit in the month or month prior Should have carried out at least one purchase transaction using the Debit Card, within 6 months prior to the date of loss. In case of Air Accidental Death claim ticket should have been purchased using Debit Card linked to Salary Account Cover provided only to the primary account holder",
  },
  {
    Question: "How can I stop a cheque payment",
    Answer:
      "To make a Stop Payment request on an issued Cheque, kindly follow the steps mentioned below: Log in to your NetBanking account Click on the Stop Payment of Cheque option available under Request menu on the left hand side of the web page Select the Account Number (if more than 1 account) Enter first/Start cheque number to the last/End cheque number, with a reason for stopping the payment. Click on Continue. On the next web page, you can verify and click on Confirm tab to confirm the stop payment request. To make a stop payment request on a single cheque, enter the same number in both the fields provided. Stop payment of cheques through NetBanking is free of charge. You may obtain the cheque series from PhoneBanking and then use NetBanking to stop the cheques. Alternatively, you could use PhoneBanking or the branch to make a Stop Payment request for a cheque. Read more about fees and charges applicable to stop cheques here. These charges attract a Service Tax and an Educational Cess as applicable in terms with the current Finance Bill.",
  },
  {
    Question: "Can a Company ID card be accepted as a Photo ID document",
    Answer:
      "No, a Company ID cannot be accepted as a Photo ID document. A government issued photo ID card is mandatory.",
  },
  {
    Question:
      "How do I know my beneficiary's details for a cheque issued in my name",
    Answer:
      "To know your beneficiary's details for a cheque issued by you / issuer name for a cheque credited in your account, please contact any of our bank branches. To download a Service Brochure, click here For more details, Contact Us",
  },
  {
    Question:
      "From where can I enquire about the status of my request to change the residential address of my M&N  Bank account",
    Answer:
      "Please revert with the following details for us to look into the matter: Date of submission of request for address change The branch where the request was submitted Your Customer ID or Account number (in case, the same has not been mentioned earlier) Your new address Kindly visit the URL to access information for the complete address and contact details of our Branches as well as our PhoneBanking numbers. The primary benefit of this account is that it enables the account holder to track reimbursements you receive from your company separately.",
  },
  {
    Question:
      "What are the modes of accident covered under Personal Accidental Death Cover",
    Answer:
      "Accidental Death resulting from bodily injury due accident only under civilian condition (off duty)",
  },
  {
    Question:
      "How do I know my beneficiary's details for a cheque issued in my name",
    Answer:
      "To know your beneficiary's details for a cheque issued by you / issuer name for a cheque credited in your account, please contact any of our bank branches. To download a Service Brochure, click here For more details, Contact Us",
  },
  {
    Question:
      "From where can I enquire about the status of my request to change the residential address of my M&N  Bank account",
    Answer:
      "Please revert with the following details for us to look into the matter: Date of submission of request for address change The branch where the request was submitted Your Customer ID or Account number (in case, the same has not been mentioned earlier) Your new address Kindly visit the URL to access information for the complete address and contact details of our Branches as well as our PhoneBanking numbers. The primary benefit of this account is that it enables the account holder to track reimbursements you receive from your company separately.",
  },
  {
    Question:
      "Is employment confirmation mandatory for me to open a Defence Salary Account",
    Answer:
      "Yes, employment confirmation is required to ensure that you are an employee of the company.",
  },
  {
    Question:
      "What are the eligibility criteria for Personal Accident Death Cover",
    Answer:
      "Eligibility: The following are the broad Terms & Conditions of the captioned cover on salary account and Titanium Royale Debit card Accidental Death resulting from bodily injury due accident only (for Defence: under civilian condition (off duty) ) Accidental Death resulting from bodily injury which directly and independently of all other causes results in Death within twelve (12) months of the event date On the event date, the account holder Is a bonafide employees (aged less than 70 years ) of the organization to whom the specific offer has been extended Is holding a Salary Account under the Corporate Salary Account Program with M&N  Bank and has received salary credit in the month or month prior Should have carried out at least one purchase transaction using the Debit Card, within 6 months prior to the date of loss. In case of Air Accidental Death claim ticket should have been purchased using Debit Card linked to Salary Account Cover provided only to the primary account holder",
  },
  {
    Question:
      "What is the procedure to add/modify or delete a nominee for all my accounts and deposits",
    Answer:
      "To add/modify or delete a nominee you will need to fill the nomination form and submit it to your nearest branch. The branch will assist you after the form has been submitted by you.For more details, Contact Us",
  },
  {
    Question:
      "Can a Defence ID card be accepted as a Photo ID document (Defense Salary Account)",
    Answer: "A Defence ID can be accepted as a Photo ID document.",
  },
  {
    Question: "How long will it take to update a change of address",
    Answer:
      "Your mailing address will be updated within 7 working days once the application, with any supporting documents, is received and found to be in order. The change in address will also be confirmed through system generated mailers sent to the old as well as the new addresses. If you do not receive any update after the stipulated time mentioned above, we request you to Contact Us with the following details in order to enable us to assist you further: The date when you submitted your request The complete Branch address where the request was submitted. Click here to see details of all our bank branches The name of the executive and complete address of the executiveâ€™s source branch, if the form is handed over to an executive",
  },
  {
    Question: "What is the time taken to realize outstation cheques",
    Answer:
      "The indicative time taken for the realization of out-station cheques is given below: Cheques drawn where M&N  Bank has a branch, credit will be given on receipt of clear funds in: Main metro locations (Mumbai, Chennai, Kolkata, New Delhi): 7 working days Metro centers and state capitals (other than those of North Eastern states and Sikkim): Maximum period of 10 working days. In all other centers where we have branches: maximum period of 14 working days. Cheques drawn on non-branch locations where we have a tie-up with correspondent bank, credit will be given on receipt of clear funds: Within a maximum period of 14 working days Cheques drawn on non-branch locations where we do not have a tie-up with correspondent bank, credit will be given on receipt of clear funds: Within a maximum period of 14 working days For more details on the outstation cheque collection policy, click hereFor other queries, Contact Us",
  },
  {
    Question: "How can I stop a cheque payment",
    Answer:
      "To make a Stop Payment request on an issued Cheque, kindly follow the steps mentioned below: Log in to your NetBanking account Click on the Stop Payment of Cheque option available under Request menu on the left hand side of the web page Select the Account Number (if more than 1 account) Enter first/Start cheque number to the last/End cheque number, with a reason for stopping the payment. Click on Continue. On the next web page, you can verify and click on Confirm tab to confirm the stop payment request. To make a stop payment request on a single cheque, enter the same number in both the fields provided. Stop payment of cheques through NetBanking is free of charge. You may obtain the cheque series from PhoneBanking and then use NetBanking to stop the cheques. Alternatively, you could use PhoneBanking or the branch to make a Stop Payment request for a cheque. Read more about fees and charges applicable to stop cheques here. These charges attract a Service Tax and an Educational Cess as applicable in terms with the current Finance Bill.",
  },
  {
    Question:
      "Can I use my existing Salary Account if I have changed employers",
    Answer:
      "Yes, In case an arrangement exists, we request you to visit the nearest branch along with a letter or an e-mail received from the official Corporate email ID. The letter / e-mail should have your complete name and account number and state that you have joined the corporate.",
  },
  {
    Question:
      "Can a Company ID card be accepted as a Photo ID document (Basic Savings Bank Deposit Account - Salary)",
    Answer:
      "No, a Company ID cannot be accepted as a Photo ID document. A government issued photo ID card is mandatory.",
  },
  {
    Question:
      "Is address proof a mandatory requirement (Basic Savings Bank Deposit Account - Salary)",
    Answer: "Yes. address proof is mandatory",
  },
  {
    Question: "How can I stop a cheque payment",
    Answer:
      "To make a Stop Payment request on an issued Cheque, kindly follow the steps mentioned below: Log in to your NetBanking account Click on the Stop Payment of Cheque option available under Request menu on the left hand side of the web page Select the Account Number (if more than 1 account) Enter first/Start cheque number to the last/End cheque number, with a reason for stopping the payment. Click on Continue. On the next web page, you can verify and click on Confirm tab to confirm the stop payment request. To make a stop payment request on a single cheque, enter the same number in both the fields provided. Stop payment of cheques through NetBanking is free of charge. You may obtain the cheque series from PhoneBanking and then use NetBanking to stop the cheques. Alternatively, you could use PhoneBanking or the branch to make a Stop Payment request for a cheque. Read more about fees and charges applicable to stop cheques here. These charges attract a Service Tax and an Educational Cess as applicable in terms with the current Finance Bill.",
  },
  {
    Question:
      "Can I use my existing Basic Savings Bank Deposit Account - Salary if I have changed employers",
    Answer:
      "Yes, In case an arrangement exists, we request you to visit the nearest branch along with a letter or an e-mail received from the official Corporate email ID. The letter / e-mail should have your complete name and account number and state that you have joined the corporate.",
  },
  {
    Question: "What is the time taken to realize outstation cheques",
    Answer:
      "The indicative time taken for the realization of out-station cheques is given below: Cheques drawn where M&N  Bank has a branch, credit will be given on receipt of clear funds in: Main metro locations (Mumbai, Chennai, Kolkata, New Delhi): 7 working days Metro centers and state capitals (other than those of North Eastern states and Sikkim): Maximum period of 10 working days. In all other centers where we have branches: maximum period of 14 working days. Cheques drawn on non-branch locations where we have a tie-up with correspondent bank, credit will be given on receipt of clear funds: Within a maximum period of 14 working days Cheques drawn on non-branch locations where we do not have a tie-up with correspondent bank, credit will be given on receipt of clear funds: Within a maximum period of 14 working days For more details on the outstation cheque collection policy, click hereFor other queries, Contact Us",
  },
  {
    Question:
      "Is employment confirmation mandatory for me to open a Basic Savings Bank Deposit Account - Salary",
    Answer:
      "To ensure that you are an employee of the company a confirmation of employment is necessary.",
  },
  {
    Question:
      "What is the procedure to add/modify or delete a nominee for all my accounts and deposits",
    Answer:
      "To add/modify or delete a nominee you will need to fill the nomination form and submit it to your nearest branch. The branch will assist you after the form has been submitted by you.For more details, Contact Us",
  },
  {
    Question: "How long will it take to update a change of address",
    Answer:
      "Your mailing address will be updated within 7 working days once the application, with any supporting documents, is received and found to be in order. The change in address will also be confirmed through system generated mailers sent to the old as well as the new addresses. If you do not receive any update after the stipulated time mentioned above, we request you to Contact Us with the following details in order to enable us to assist you further: The date when you submitted your request The complete Branch address where the request was submitted. Click here to see details of all our bank branches The name of the executive and complete address of the executiveâ€™s source branch, if the form is handed over to an executive",
  },
  {
    Question:
      "How do I know my beneficiary's details for a cheque issued in my name",
    Answer:
      "To know your beneficiary's details for a cheque issued by you / issuer name for a cheque credited in your account, please contact any of our bank branches. To download a Service Brochure, click here For more details, Contact Us",
  },
  {
    Question:
      "From where can I enquire about the status of my request to change the residential address of my M&N  Bank account",
    Answer:
      "Please revert with the following details for us to look into the matter: Date of submission of request for address change The branch where the request was submitted Your Customer ID or Account number (in case, the same has not been mentioned earlier) Your new address Kindly visit the URL to access information for the complete address and contact details of our Branches as well as our PhoneBanking numbers. The primary benefit of this account is that it enables the account holder to track reimbursements you receive from your company separately.",
  },
  {
    Question:
      "How do I know my beneficiary's details for a cheque issued in my name",
    Answer:
      "To know your beneficiary's details for a cheque issued by you / issuer name for a cheque credited in your account, please contact any of our bank branches. To download a Service Brochure, click here For more details, Contact Us",
  },
  {
    Question:
      "From where can I enquire about the status of my request to change the residential address of my M&N  Bank account",
    Answer:
      "Please revert with the following details for us to look into the matter: Date of submission of request for address change The branch where the request was submitted Your Customer ID or Account number (in case, the same has not been mentioned earlier) Your new address Kindly visit the URL to access information for the complete address and contact details of our Branches as well as our PhoneBanking numbers. The primary benefit of this account is that it enables the account holder to track reimbursements you receive from your company separately.",
  },
  {
    Question:
      "What is the procedure to add/modify or delete a nominee for all my accounts and deposits",
    Answer:
      "To add/modify or delete a nominee you will need to fill the nomination form and submit it to your nearest branch. The branch will assist you after the form has been submitted by you.For more details, Contact Us",
  },
  {
    Question: "What do I need to do to open a joint account",
    Answer:
      "The Reimbursement Account has to be in the same order as your Salary Savings Account. In case your Salary savings account is a joint account then a separate introduction is not required and you only need to add the name in the (Account Opening Document) AOD.",
  },
  {
    Question:
      "Will I be able to access both my accounts at all establishments/ATMs through a single Debit Card",
    Answer:
      "Your existing Debit Card will be linked to both accounts. Any additional card will be charged at the regular rates. You will be able to select either account to transact at M&N  Bank ATMs. At other VISA/PLUS ATMs (Other Bankâ€™s ATMs) you may or may not have access to both accounts. When such an option is unavailable, you can only access your salary account. If you are a VISA Electron Debit Cardholder you can access only your Salary Account at merchant locations for transactions and not your Reimbursement Account. If you are a Maestro Debit Cardholder may be able to select between your Salary Account and Reimbursement Account at merchant locations.",
  },
  {
    Question: "Will I earn interest on the Reimbursement Account",
    Answer:
      "The Reimbursement Account is value added benefit given to the salary account holder and hence is a non-interest bearing account.",
  },
  {
    Question: "Why do I need a Reimbursement Account",
    Answer:
      "A Reimbursement Account enables you to separate your regular monthly salary from the monthly reimbursements you receive from your company. This helps you track reimbursements separately.",
  },
  {
    Question:
      "Will I be entitled to the same kind of benefits on this account as my Salary account",
    Answer:
      "The features & benefits on the Reimbursement account are as follows: Click Here for features & benefits on the Reimbursement account.",
  },
  {
    Question: "What is the time taken to realize outstation cheques",
    Answer:
      "The indicative time taken for the realization of out-station cheques is given below: Cheques drawn where M&N  Bank has a branch, credit will be given on receipt of clear funds in: Main metro locations (Mumbai, Chennai, Kolkata, New Delhi): 7 working days Metro centers and state capitals (other than those of North Eastern states and Sikkim): Maximum period of 10 working days. In all other centers where we have branches: maximum period of 14 working days. Cheques drawn on non-branch locations where we have a tie-up with correspondent bank, credit will be given on receipt of clear funds: Within a maximum period of 14 working days Cheques drawn on non-branch locations where we do not have a tie-up with correspondent bank, credit will be given on receipt of clear funds: Within a maximum period of 14 working days For more details on the outstation cheque collection policy, click hereFor other queries, Contact Us",
  },
  {
    Question: "How long will it take to update a change of address",
    Answer:
      "Your mailing address will be updated within 7 working days once the application, with any supporting documents, is received and found to be in order. The change in address will also be confirmed through system generated mailers sent to the old as well as the new addresses. If you do not receive any update after the stipulated time mentioned above, we request you to Contact Us with the following details in order to enable us to assist you further: The date when you submitted your request The complete Branch address where the request was submitted. Click here to see details of all our bank branches The name of the executive and complete address of the executiveâ€™s source branch, if the form is handed over to an executive",
  },
  {
    Question: "How can I stop a cheque payment",
    Answer:
      "To make a Stop Payment request on an issued Cheque, kindly follow the steps mentioned below: Log in to your NetBanking account Click on the Stop Payment of Cheque option available under Request menu on the left hand side of the web page Select the Account Number (if more than 1 account) Enter first/Start cheque number to the last/End cheque number, with a reason for stopping the payment. Click on Continue. On the next web page, you can verify and click on Confirm tab to confirm the stop payment request. To make a stop payment request on a single cheque, enter the same number in both the fields provided. Stop payment of cheques through NetBanking is free of charge. You may obtain the cheque series from PhoneBanking and then use NetBanking to stop the cheques. Alternatively, you could use PhoneBanking or the branch to make a Stop Payment request for a cheque. Read more about fees and charges applicable to stop cheques here. These charges attract a Service Tax and an Educational Cess as applicable in terms with the current Finance Bill.",
  },
  {
    Question:
      "Can I use this account for regular cheque/ cash deposits & withdrawals",
    Answer:
      "Yes, you can use it as a regular account for typical banking transactions.",
  },
  {
    Question: "Can I have multiple Zero Balance Salary Account with your Bank",
    Answer: "NO,One Person can Avail only one Zero Balance Salary Account.",
  },
  {
    Question:
      "What is the rate of interest I will earn on the balance in my Savings Account",
    Answer:
      "Interest on a Savings Account is paid at 4.00% p.a. on a daily end of day balance, w.e.f. May 3, 2011.",
  },
  {
    Question:
      "What happens if I don't use my savings account for a very long time",
    Answer:
      "The account becomes dormant if there are no customer initiated transactions (excludes system generated transactions like credit interest, debit interest), in the account for a continuous period of two years. If the account status is 'Dormant', transactions through Direct Banking Channels like ATM, NetBanking, PhoneBanking are not be allowed by the Bank.",
  },
  {
    Question: "How do I register for Email Statement/s",
    Answer:
      "We request you to follow the steps mentioned below to register for an Email Statement of your Account: Step 1) Log in to Net Banking Step 2) On the left hand menu under 'Requestâ€™, click on â€˜Email Statement Registrationâ€™ Step 3) After reading the Terms and Conditions, tick on the text box and then click on â€˜Continueâ€™ and then â€˜Confirmâ€™ Alternatively, you may submit the attached form to your nearest branch to register for the email statement facility. In case you are unable to visit a branch, we request you to send the form by post or courier. Find your nearest M&N  Bank Branch. Note / Important: Email statements are currently free of charge. Dispatch of the physical statements will discontinue once you register for Email Statement. For Savings Account Customers Only the Primary Account holder will be eligible for the Email Statement facility. In case you are a secondary account holder, you will not receive any Email Statements. For Current Account Holders Only a Sole Current Account holder can avail of this registration facility. For Managed Customers Combined Email Statements for all accounts linked to the Primary Customer ID will be provided across Savings and Current Accounts and Fixed Deposits. For any other queries or to know the status of an existing application, please call up PhoneBanking or write to us mentioning the details given below: M&N  Bank Branch /mode where your request was submitted Date when your request was submitted View more",
  },
  {
    Question: "How can I change / add the email ID in my account",
    Answer:
      "We request you to follow the procedure mentioned below to change your email ID:We request you to follow either of procedure mentioned below to change / add your email ID: 1) Request through branch:Step 1) Fill the application form available at the Branch (duly signed by all the holders). Step 2) If you are unable to visit an M&N  Bank Branch, you can send the Form by post or courier. Note / Important: Instructions received through Net Banking, scan copy, fax or email will not be processed for security and authentication purposes. Updates for InstaAlerts (if registered) need to be done separately. InstaAlerts Updates: Please follow the steps mentioned below to update your Email ID online for InstaAlerts (in case you are registered for the InstaAlerts facility): Step 1) Log in to your NetBanking and click on InstaAlerts located at the top right corner of the web page Step 2) Click on Unsubscribe Alerts on the left hand pane of the web page Step 3) Check the Email option and select Continueâ€ and then â€œConfirmâ€ Step 4) Click on Subscribe for Alerts in the left hand pane of the web page Step 5) Check the Email option and enter your new mobile number, then click on â€œContinueâ€ and â€œConfirmâ€ Step 6) Go to Manage Alerts and select the required option 2) Request through Phone Banking:We request you to call up our PhoneBanking to change / add your email address. View more",
  },
  {
    Question: "How do I update my PAN number",
    Answer:
      "We request you to follow either of the following procedure mentioned below to update you PAN number: 1) Request through branch: Step 1) Submit a written request specifying your updated PAN number Step 2) Give a self-attested photocopy of your PAN card. (carry originals for verification) 2) Request through Netbanking: We are glad to inform you that the PAN can be updated online from your NetBanking. Please follow the below steps to update your PAN online : Log in to NetBanking with your Customer Identification Number and NetBanking Password (IPIN) Click on 'Contact details' on the top right hand corner & Select Edit Pan number / Click on 'Add/Update PAN number' on the Accounts tabs Update your 10 digit PAN Click on Confirm Note :1. The submitted PAN will be updated within 5 working days, post validation of the PAN with the income tax records. 2. In case of any mismatch of the submitted PAN with Income Tax records, the updation request will be rejected and customer will be intimated. 3. In case of any reject, the customer will need to visit the nearest branch with copy of the PAN card for updation on Bank records. Please note in some cases of difference in name on PAN Card, the customer may be asked to submit additional documents. 4. In the absence of PAN detail on Bank records, the interest earned on Fixed Deposits will be subject to penal TDS at 20% (if applicable) View more",
  },
  {
    Question: "What is the time taken to realize outstation cheques",
    Answer:
      "The indicative time taken for the realization of outstation cheques is given below: Cheques drawn where M&N  Bank has a branch, credit will be given on receipt of clear funds in: Main metro locations (Mumbai, Chennai, Kolkata, New Delhi): 7 working days Metro centers and state capitals (other than those of North Eastern states and Sikkim): Maximum period of 10 working days. In all other centres where we have branches: maximum period of 14 working days. Cheques drawn on non-branch locations where we have a tie-up with correspondent banks, credit will be given on receipt of clear funds: Within a maximum period of 14 working days Cheques drawn on non-branch locations where we do not have a tie-up with correspondent banks, credit will be given on receipt of clear funds: Within a maximum period of 14 working days For more details on the outstation cheque collection policy, click here. For other queries, Contact Us. View more",
  },
  {
    Question: "How can I request for Physical Statement/s",
    Answer:
      "Statements for the period of 2 years can be downloaded through NetBanking. We request you to follow the steps mentioned below to request for a statement of your Account. Step 1) Log in to Net Banking Steps 2) On the left hand pane under â€˜Requestâ€™ option select â€˜Account Statementâ€™ Step 3) Select the Account number and Period for which the statement is required Step 4) Click on â€˜Continueâ€™ and â€˜Confirmâ€™ The account statement will be delivered to your address within 4 working day Alternatively you may request for a statement of your account through M&N  Bank PhoneBanking M&N  Bank ATM Any M&N  Bank Branch Charges applicable per duplicate Statement if requested through Branch Rs.100 Phone banking (Non-IVR) & ATM Rs.50 Net banking, Phone banking (IVR), & Mobile banking Rs.30 Email Nil As per the Finance Bill 2009, all fees and charges mentioned above will attract Service Tax @ 10% and Education Cess @ 3% of the service tax amount effective 24th February 2009. If you wish to know more about Account Statements or want to know its status if requested, please call up PhoneBanking or write to us with full details viz. date of request, mode of request and period of request. View more",
  },
  {
    Question: "Reissuance of ATM/Debit Card PIN",
    Answer:
      "For reissuance of your ATM / Debit PIN, please choose any of the following modes: A. Through NetBanking - Click on Debit card. Select Pin Regeneration Select the card number. Click on continue Select the Reason for Regeneration Check the mailing address and confirm. Click on â€˜Terms and conditionsâ€™ and confirm B. Through Branch - Please download Application Form The Application Form should be duly filled and signed by all Account Holder/s Submit the duly filled Application Form at the nearest Branch On receipt of Form and successful verification, the new ATM/Debit Card PIN will be sent to your mailing address To verify your mailing address in our records, please log into NetBanking (Go to â€œMy Contact Details) C. Through PhoneBanking - Validate your Telephone Identification Number (TIN) View more",
  },
  {
    Question: "How can I change / update the address for my account",
    Answer:
      "We request you to follow the below steps to update /change your address. You can Personally Visit your nearest Branch or You can send your request through courier, Post or Bearer to the nearest branch : 1) Click here to download the form or Fill the application form available at the Branch 2) The application form needs to be duly filled and signed by the account holder. 3) Please attach a copy of Address proof to the address change request. List of Valid Address proof documents. 4) If you are visiting the Branch, please carry your original documentation for verification. If you are sending the request through post, then please attach a copy of self-attested address proof. Note / Important: Your mailing address will be updated within 7 working days after receipt of complete documentation. Joint account holders need to fill separate request for address change You may view the updated address by logging on to NetBanking under My Contact Details. For any other queries or to know the status of an existing application, please call up PhoneBanking or write to us with the details mentioned below. M&N  Bank Branch where your request was submitted Date when your request was submitted Your complete new address and PIN code View more",
  },
  {
    Question: "How do I activate a 'Dormant' Savings Account",
    Answer:
      "We request you to follow the steps mentioned below to activate your account: Step 1) Approach the branch in person. Step 2) Submit a written request for activation of your dormant account, signed as per operating instructions in the account. Step 3) Furnish proof of identity and Address (carry the original for verification) Step 4) Initiate a transaction and your account will be activated once again.",
  },
  {
    Question: "How Do I Change / Add my Mobile Number",
    Answer:
      "We request you to follow the procedure mentioned below to change your Mobile Number Step 1) Fill the application form available at the Branch (duly signed by all the holders). Step 2) If you are unable to visit an M&N  Bank Branch, you can send the form by post or courier. Note / Important: Instruction received through Net Banking, or scan copy, fax or email will not be processed for security and authentication purpose. Updates for InstaAlerts and / or Mobile Banking (if registered) need to be done separately. InstaAlerts Updates: Please submit your requirement at your nearest branch, through a written letter duly signed by all account holders. In case you are unable to visit a branch, you can send the letter by post or courier. Mobile Banking Updates/InstaQuery Updates: Please cancel InstaQuery on your old number and then re-register for InstaQuery on your new number by following the process mentioned below: Log in to Net Banking with your Customer Identification Number and NetBanking Password (IPIN). Click on InstaQuery Registration in the top right hand corner Select De-register for InstaQuery from the left hand side menu From the list shown, select the mobile number that needs to be de-registered Click on â€˜Continueâ€™ Select â€˜Confirmâ€™ Your InstaQuery de-registration request will be processed online Subsequently, you need to re-register for InstaQuery on the new number as below: Log in to NetBanking with your Customer Identification Number and NetBanking Password (IPIN). Click on InstaQuery Registration on the top right hand corner Select Subscribe for InstaQuery from the left hand side menu Choose your Account Number from the list of all accounts linked to your Customer Identification number. (All the account level transactions will be effective for the Primary Account selected by you at the time of registration. The primary account can be changed at a later stage using the 'Change Primary Account' facility in InstaQuery.) Provide your 10 digit mobile number along with the country code. Note that all Reliance CDMA customers need to provide a 10 digit mobile number only, without the country code. Click on the Check box which states â€˜I accept Terms and Conditionsâ€™. Click on â€˜Confirmâ€™. Your request will be processed online. Alternatively, please submit the e-age banking form to a branch to avail of the InstaQuery facility. The form is available on www.M&N bank.com, Please check for the availability of the service with your cellular service provider. View more",
  },
  {
    Question:
      "How can you transfer your Savings Account from one branch to another",
    Answer:
      "Following is the process to be followed to transfer your account from one branch to another: An account transfer form, signed by all applicants, given at any of our branches. We recommend that you submit the form at the branch that you want your account transferred to. There will be no change in your account number. You can continue to use your existing chequebook, debit card etc",
  },
  {
    Question: "What are the documents required to open a New Savings Account",
    Answer:
      "In order to open a new Savings Account, simply walk into the nearest M&N  Bank and speak to a customer service executive. Remember to carry the following documents (original for verification and self-attested copies for submission): Identity Proof Address Proof Latest passport size photographs Click here to see the List of valid identity/addres proof.",
  },
  {
    Question: "What is the frequency of interest payout for a Savings Account",
    Answer:
      "Interest earned on your Savings Account balance shall be credited to your account on Quarterly basis.",
  },
  {
    Question:
      "Can I get a  Debit Card linked to my Institutional Savings Account",
    Answer:
      "Yes. Business Debit Cards are issued to Authorised Signatories in the account. This is done provided the mode of operation is â€˜Singlyâ€™ OR â€˜Either or Survivorâ€™ and the operating instructions allow the signatory to sign for amounts above Rs. 1.25 lakh. This is because the combined - ATM & POS - per day limit on the Business Debit Card is Rs.1.25 lakh.",
  },
  {
    Question:
      "What is the general documentation requirement to open an Institutional Savings Account",
    Answer:
      "The following documents are required: Account opening form for non-individuals to be completed and signed by all authorized signatories Registration proof with any state regulatory authorities Certificate of Registration with the Local Charities Commissioner (for charitable trusts) Income Tax registration u/s 12A for entities as specified in RBI circular Certified Copy of the Trust Deed / Bye-laws / MOA/ Constitution Proof of address of the Trust Certified Copy of the Resolution from Board of Trustees / governing body defining who is going to be the authorized signatory in the account / authorizing the opening and conduct of the account Proof of appointment of present Trustees/ governing body members in case they are not listed in the Trust Deed / bye-laws / constitutional document PAN Card / Form 60 as may be applicable FCRA declaration for receipt / non-receipt of foreign contribution into the account Beneficial Ownership declaration (only for Trusts) Proof of identity and photographs of all trustees authorised to operate the account View more",
  },
  {
    Question:
      "Can unregistered institutions open an Institutional Savings Account",
    Answer:
      "No. Accounts of only registered trusts, societies, associations, clubs can be opened.",
  },
  {
    Question: "Can transactions be done at any M&N  Bank branches",
    Answer:
      "Yes. You can transact at any M&N  Bank across the country. Charges as mentioned in the Fees and charges section will apply.",
  },
  {
    Question:
      "My institution will start receiving foreign contribution. Can I receive the same in the Institutional Savings Account",
    Answer:
      "No. The institutional Savings Account cannot be used for receiving foreign contribution. You will need to open a separate FCRA account for receiving foreign contribution.",
  },
  {
    Question:
      "Can funds be credited to an FCRA account simply after the account is opened",
    Answer:
      "No. Funds can be credited to the FCRA account only after the approval from Ministry of Home Affairs (MHA) is received for that account. Till then, the account will be blocked.",
  },
  {
    Question:
      "Is there an AMB (Average Monthly Balance) declaration required to be submitted along with the documents for an Institutional Savings Account",
    Answer:
      "No. There is no AMB declaration required since it is a Zero Balance Account.",
  },
  {
    Question:
      "Can NetBanking facility (financial rights) be enjoyed by  authorized signatories in the Institutional Savings Account",
    Answer:
      "Yes. We do offer NetBanking financial rights to authorized signatories. You need to fill up an application form along with a Board Resolution in order to avail this facility.",
  },
  {
    Question:
      "What is the AMB (Average Monthly Balance) requirement of the Institutional Savings Account",
    Answer: "An Institutional Savings Account is a ZERO BALANCE account.",
  },
  {
    Question: "Do I need to close my account when my kid attains majority",
    Answer:
      "No, the existing account can be converted to a regular savings account. To convert the account the following will be required: AML section on the SB Regular AOF should be updated for the minor turned major Customers will also fill up the Kidâ€™s Advantage account conversion form Identity Proof Address proof Photograph Proof of becoming major like Birth certificate, Passport etc",
  },
  {
    Question: "How long the Standing Instruction given will be valid",
    Answer:
      "Please note that Standing Instruction to transfer any amount from your account to your Kid's Advantage account every month is a mandatory requirement for this account and is valid for a minimum tenure of 1 year. Post the same you need to submit a fresh request at nearest M&N  Bank branch to continue the standing instructions.",
  },
  {
    Question:
      "Is the primary Customer ID of the Kids Advantage account will be same as my Customer ID",
    Answer:
      "The primary Customer ID issued under your kids name for the Kid's Advantage account will be different from your Customer ID. You should use the primary customer ID to open the email statement you receive for your Kid's Advantage account.",
  },
  {
    Question:
      "What are the documents required to open a Women's Savings Account",
    Answer:
      "To open a Savings Account you have to: Submit your identity proof and address proof along with your latest passport size photographs Submit self-attested copies and originals for verification View more",
  },
  {
    Question: "What is the procedure to follow if my Debit Card PIN is blocked",
    Answer:
      "Please note that if you enter an incorrect PIN three times in the ATM, your access gets blocked for security reasons. It gets activated after 24 hours. Kindly use your Debit / ATM Card at the ATM after 24 hours with the same PIN available with you. If your account still remains inaccessible, please apply for new PIN. You can apply for regeneration of your ATM / Debit PIN in following ways: Fill-up the new PIN application form and submit it at any of our branches. On receipt of the form and successful verification, we will process a new ATM PIN and send it to your mailing address, as registered in our records. Submit a request at PhoneBanking, after validation with your Telephone Identification Number (TIN). For every PIN Regeneration request, charges of Rs. 50 + Service Tax + Educational Cess is applicable. For more details, Contact Us View more",
  },
  {
    Question:
      "Why is 2nd Level authentication made mandatory for all Card related online transactions",
    Answer:
      "All online card transactions, as per RBIâ€™s mandate, need to have a second level authentication when a transaction is made. Hence the cards need to be registered for Verified by Visa(VBV)or MasterCard Secure Code to complete an online transaction. A transaction can be carried out only on those websites that are Verified by Visa or MasterCard Secure Code enabled. Thus when you are making an online transaction on these websites you will be prompted to register for the service, if you have not registered till date. You can fill the required details and complete the transaction after registering. You can also register your card for Verified by Visa or MasterCard Secure Code here. View more",
  },
  {
    Question: "Can I use my Debit Card to pay online",
    Answer:
      "Currently your Debit Card can be used to make purchases from online merchants who have the Verified by Visa/ MasterCard SecureCode certification displayed on their web site. Learn more about using your Debit card for making online purchases here.",
  },
  {
    Question: "What should I do if my Debit Card is not working",
    Answer:
      "If there is a technical problem because of which your card is not working, we request you to contact us on our Phone Banking center or branch and hotlist/block the said card. Please make a request to issue a new card for your account which will be free of cost and should be delivered to you in 7 working days time once issued. For more details on PhoneBanking numbers and their timings, click here. For a comprehensive list of branches, click here. View more",
  },
  {
    Question:
      "How do I enable International Usage on my M&N  Bank Rewards Debit Card",
    Answer:
      "Please find below the steps to enable International Usage for you M&N  Bank Rewards Debit Card: Steps to Enable International Usage on Debit Card: Log on to NetBanking Click on Cards tab and go to Debit Cards menu Click on Request Select 'Set International / Domestic Usage' Select the option 'Card to be enabled for International and Domestic/ Use' Steps to Modify Daily International Usage on Debit Card Log on to NetBanking Click on Cards tab and go to Debit Cards menu Click on Request Select 'Modify International Limit' Set your daily international limit",
  },
  {
    Question:
      "What are the Debit Card transaction fees if I swipe my card at Petrol pumps or Railway stations",
    Answer:
      "The following are the transaction charges applicable when you use the Debit Card at: Petrol pumps: Rs. 10 or 2.5% of the transaction amount (whichever is greater). Railway Stations: Flat charge of Rs. 30 per ticket + 1.8% of the transaction amount. IRCTC: Transaction charge of 1.8% of the transaction amount Please note that there are no transaction fees applicable at other merchant locations. These charges attract a Service Tax and an Swachh Bharat Cess as applicable, in terms with the current Finance Bill. View more",
  },
  {
    Question: "What is the procedure to replace a damaged Debit Card",
    Answer:
      "We request you to contact the Bank using Phone Banking (available 24x7), where you can Hotlist your card immediately and simultaneously request for re-issuance of a new card. You may also submit a written instruction at the nearest branch to hotlist and re-issuance of ATM / Debit Card. Replacement/Reissuance Charges for Debit Cards - Rs. 200 + applicable taxes (W.e.f 1st Decâ€™16). For more details, Contact Us. View more",
  },
  {
    Question:
      "Why is the customer required to fill a cardholder dispute form (CDF) to report transaction dispute",
    Answer:
      "A duly filled in Cardholder Dispute Form (CDF) mentioning all the required details of the disputed transaction(s) and the exact nature of dispute, aids the Cardholder as well as the Bank to initiate accurate investigation with the respective Merchant / Member Bank.Pls click on link below to view the cardholder dispute form: http://www.M&N bank.com/assets/pdf/Cardholder_Dispute_Form.pdfNOTE: A detailed email mentioning all the required details and supporting documents (if any), as mentioned in the CDF, can also be written to [email protected]",
  },
  {
    Question:
      "What is the time frame to resolve Domestic ATM transaction disputes",
    Answer: "7 working days from receipt of the dispute.",
  },
  {
    Question: "What is the time frame to report Debit Card transaction dispute",
    Answer:
      "Transaction dispute needs to be reported in writing within 30 days from the transaction date.",
  },
  {
    Question:
      "Which documents are to be submitted with respect to the failed/ disputed transaction",
    Answer:
      "The Debit Cardholder must submit the following documents along with the dully filled Cardholder Dispute Form (CDF). Transaction typeDocuments to attached Transaction declined but funds are debited from the account Void charge-slip OR email/letter from merchant confirming transaction not completed Amount debited but payment made through an alternate mode Proof of payment by alternate mode Excess amount debited Proof of actual amount authorized/agreed with the merchant Transaction cancelled but refund from merchant not credited / Damaged goods/ Quality of the product or services is not as agreed Cancellation confirmation from the merchant/ refund confirmation It is strongly recommended to check if the amount has already been credited /adjusted into your e-wallet / subscriber account in case of ecommerce transactions.",
  },
  {
    Question:
      "How do I report such service/merchant related transaction dispute incurred using my Debit Card transaction",
    Answer:
      "We strongly recommended that for all service related disputes, the Debit Cardholder must first attempt to contact the merchant to resolve the dispute which enables prompt resolution. Considering all attempts have been made to resolve dispute with the merchant, you may call PhoneBanking team for raising exact nature of dispute and send relevant supporting document with respect to failed / disputed transactions with complete transaction(s) details to [email protected] ] OR submit the same at your nearest M&N  Bank branch.",
  },
  {
    Question: "What is a service dispute",
    Answer:
      "Following transactions are categorized as service dispute. Transaction declined but funds are debited from the account Amount debited but payment made through an alternate mode Excess amount debited Transaction cancelled but refund from merchant not credited Dual Debits /Duplicate debits for the same merchant, amount, date and time Damaged goods/ Quality of the product or services is not as agreed.",
  },
  {
    Question:
      "What is the time frame to resolve Purchase/ Online & International ATM transaction disputes",
    Answer:
      "Approximately 45 to 120 days from receipt of the dispute depending upon the relevant franchise's ( e.g. Visa / Master / Rupay / Diners etc.) dispute resolution cycle.",
  },
  {
    Question:
      "Are there charges I should know about Imperia Platinum Chip Debit Card",
    Answer:
      "Another benefit of the EasyShop Platinum Debit card is that there are absolutely no transaction charges to worry about when shopping at a merchant location. Any Fuel surcharge levied will be reversed within 75 days from the date of levy of the surcharge(upto a maximum of Rs. 750 per month per card. You can use your card charge-free at all M&N  Bank ATMs, but remember to check the associated fees when using other bank ATMs. Please also remember that charges will be levied at Railway stations. This is as per industry practice. View more",
  },
  {
    Question:
      "What should I do in the case of a void transaction Imperia Platinum Chip Debit Card",
    Answer:
      "Just fax us a copy of the void transaction slip. You can also send it to or submit the same at your nearest M&N  Bank branch. For PhoneBanking numbers Click Here .",
  },
  {
    Question: "Where can I use my EasyShop Platinum Debit Card",
    Answer:
      "Just look for the Visa logo when shopping. If you'd like to use an ATM, it should have the Visa or PLUS logo. And remember, you can use your EasyShop Platinum Debit Card at all M&N  Bank ATMs just like a normal card.",
  },
  {
    Question:
      "Are there any transaction limits for Imperia Platinum Chip Debit Card",
    Answer:
      "Depending on the balance in your account, it is possible to withdraw up to Rs. 1 lakh at the ATM daily, and spend Rs 2.75 lakhs daily. These limits have been set for your card security.",
  },
  {
    Question:
      "What should I do in the case of a void transaction for Platinum Debit Card",
    Answer:
      "Just fax us a copy of the void transaction slip. You can also send it to or submit the same at your nearest M&N  Bank branch. For PhoneBanking numbers Click Here .",
  },
  {
    Question: "Where can I use my EasyShop Platinum Debit Card",
    Answer:
      "Just look for the Visa logo when shopping. If you'd like to use an ATM, it should have the Visa or PLUS logo. And remember, you can use your EasyShop Platinum Debit Card at all M&N  Bank ATMs just like a normal card.",
  },
  {
    Question: "Are there transaction limits for Platinum Debit Card",
    Answer:
      "Depending on the balance in your account, it is possible to withdraw up to Rs. 1 lakh at the ATM daily, and spend Rs. 2.75 lacs daily. These limits have been set for your card security.",
  },
  {
    Question: "Are there charges I should know about Platinum Debit Card",
    Answer:
      "Another benefit of the EasyShop Platinum Debit card is that there are absolutely no transaction charges to when shopping at a merchant location. You can use your card charge-free at all M&N  Bank ATMs, but remember to check the associated fees when using other bank ATMs. Please also remember that charges will be levied at Railway stations. This is as per industry practice. The annual Charges for Easy Shop Platinum Debit Card is Rs.750 View more",
  },
  {
    Question:
      "What should I do in the case of a void transaction for Titanium Royale Debit Card",
    Answer:
      "Just fax us a copy of the void transaction slip. You can also send it to or submit the same at your nearest M&N  Bank branch. For PhoneBanking numbers Click Here .",
  },
  {
    Question: "Where can I use my EasyShop Titanium Royale Debit Card",
    Answer:
      "Just look for the MasterCard logo when shopping. If you'd like to use an ATM, it should have the Master or Cirrus logo. And remember, you can use your EasyShop Titanium Royale Debit Card at all M&N  Bank ATMs just like a normal card.",
  },
  {
    Question:
      "Are there charges I should know about Titanium Royale Debit Card",
    Answer:
      "Another benefit of the EasyShop Titanium Royale Debit card is that there are absolutely no transaction charges when shopping at a merchant location. Any Fuel surcharge levied will be reversed within 75 days from the date of levy of the surcharge(upto a maximum of Rs. 750 per month per card. You can use your card charge-free at all M&N  Bank ATMs, but remember to check the associated fees when using other bank ATMs. Please also remember that charges will be levied at Railway stations. This is as per industry practice. View more",
  },
  {
    Question: "Are there transaction limits for Titanium Royale Debit Card",
    Answer:
      "Depending on the balance in your account, it is possible to withdraw up to Rs. 75,000 at the ATM daily, and spend Rs 1.75 lacs daily. These limits have been set for your card security.",
  },
  {
    Question:
      "What should I do in the case of a void transaction for Gold Debit Card",
    Answer:
      "Just fax us a copy of the void transaction slip. You can also send it to or submit the same at your nearest M&N  Bank branch. For PhoneBanking numbers Click Here.",
  },
  {
    Question:
      "How do I claim Personal Accident Death Cover for Gold Debit Card",
    Answer:
      "Nominees and legal heirs should visit their nearest M&N  Bank branch. We will help with the documents required, and, when these are complete, we will liaise with the relevant insurance company to resolve the claim. This is a special service for our EasyShop Gold Debit Card holders. Remember to provide us with all documents within one month of death.",
  },
  {
    Question: "Where can I use my EasyShop Gold Debit Card",
    Answer:
      "Just look for the VISA logo when shopping, and if using an ATM check for the VISA/PLUS logo.",
  },
  {
    Question: "Are there extra charges for Gold Debit Card",
    Answer:
      "You can be sure that there are no transaction charges when using your card at a merchant location. There are also no petrol surcharges, or fees for using an M&N  Bank ATM. Just remember to check for usage charge information if you access other bank ATMs.",
  },
  {
    Question: "Are there transaction limits for Gold Debit Card",
    Answer:
      "Subject to the balance in your account, the daily limits are Rs. 50,000 at ATMs and Rs. 2.75 lacs at merchant locations. These limits have been set for the security of your card.",
  },
  {
    Question: "Where can I use my EasyShop Titanium Debit Card",
    Answer:
      "Your card can be used at all M&N  Bank ATMs, just like a normal card. When shopping at merchant locations, just look out for the MasterCard logo, and at ATMs check for the Master and Cirrus logo.",
  },
  {
    Question: "Are there any charges to be aware of for Titanium Debit Card",
    Answer: "Check the associated fees here.",
  },
  {
    Question: "What are the transaction limits for Titanium Debit Card",
    Answer:
      "The daily limits are Rs. 50,000 at the ATM and Rs. 1.75 lacs at merchant locations. This is subject to the balance in your account, and is for your account security.",
  },
  {
    Question:
      "What should I do in the case of a void transaction for Titanium Debit Card",
    Answer:
      "Just fax us a copy of the void transaction slip. You can also send it to or submit the same at your nearest M&N  Bank branch. For PhoneBanking numbers Click Here.",
  },
  {
    Question: "What should I do in the case of a void transaction",
    Answer:
      "Just fax us a copy of the void transaction slip. You can send it to one of our PhoneBanking numbers or your nearest M&N  Bank branch.",
  },
  {
    Question:
      "What should I do in the case of a void transaction for International Debit Card",
    Answer:
      "Just fax us a copy of the void transaction slip. You can also send it to or submit the same at your nearest M&N  Bank branch. For PhoneBanking numbers Click Here.",
  },
  {
    Question: "Are there charges I should know about International Debit Card",
    Answer:
      "Another benefit of the EasyShop Platinum Debit card is that there are absolutely no transaction charges to when shopping at a merchant location. Fuel surcharge levied at select BPCL petrol pumps will be reversed within 75 days from the date of levy of the surcharge. Just make sure your card is swiped at M&N  Bankâ€™s terminal to avail petrol surcharge waiver. You can use your card charge-free at all M&N  Bank ATMs, but remember to check the associated fees when using other bank ATMs. Please also remember that charges will be levied at Railway stations. This is as per industry practice. View more",
  },
  {
    Question: "Where can I use my EasyShop International Debit Card",
    Answer:
      "Anywhere you see the Visa logo, and at any ATM displaying the Visa or PLUS logo. Remember, your card can be used at all M&N  Bank ATMs just like a normal ATM card.",
  },
  {
    Question: "Are there transaction limits for Debit Card",
    Answer:
      "A daily ATM limit of Rs. 25,000 for withdrawals, and Rs. 1,25,000 at merchant establishments .",
  },
  {
    Question: "Are there extra charges for International Business Debit Card",
    Answer:
      "You can be sure that there are no transaction charges when using your card at a merchant location. There are also no petrol surcharges, or fees for using an M&N  Bank ATM. Just remember to check for usage charge information if you access other bank ATMs.",
  },
  {
    Question: "Where can I use my EasyShop Business Debit Card",
    Answer:
      "Just look for the MasterCard logo when shopping, and if using an ATM check for the MasterCard/Cirrus logo.",
  },
  {
    Question:
      "What should I do in the case of a void transaction for International Business Debit Card",
    Answer:
      "Just fax us a copy of the void transaction slip. You can also send it to or submit the same at your nearest M&N  Bank branch. For PhoneBanking numbers Click Here.",
  },
  {
    Question: "Are there transaction limits for Business Debit Card",
    Answer:
      "Subject to the balance in your account, the daily limits are Rs. 50,000 at ATMs and Rs. 1.75 lacs at merchant locations. These limits have been set for the security of your card.",
  },
  {
    Question:
      "What should I do in the case of a void transaction for Womans Advantage Debit Card",
    Answer:
      "Just fax us a copy of the void transaction slip. You can also send it to or submit the same at your nearest M&N  Bank branch. For PhoneBanking numbers Click Here.",
  },
  {
    Question: "Where can I use my EasyShop Womanâ€™s Advantage Debit Card",
    Answer:
      "Your card will be valid the world over â€“ just look for the VISA sign.",
  },
  {
    Question: "Are there extra charges for Womans Advantage Debit Card",
    Answer:
      "There are absolutely no transaction charges to think about when using your card at a merchant location. There are also no fees for using an M&N  Bank ATM. Just remember to check for usage charge information if you access other bank ATMs.",
  },
  {
    Question: "What if Womans Advantage Debit Card is lost or stolen",
    Answer: "You will not have any liability for fraudulent transactions.",
  },
  {
    Question: "Are there transaction limits for Womans Advantage Debit Card",
    Answer:
      "Subject to the balance in your account, the daily limits are Rs. 25,000 at ATMs and Rs. 1.25 lacs at merchant locations. These limits have been set for the security of your card.",
  },
  {
    Question: "Are there extra charges NRO Debit Card",
    Answer:
      "There are absolutely no transaction charges when using your card at a merchant location. Just remember that at petrol pumps and railways you will be charged as per industry practice.",
  },
  {
    Question: "Where can I use my EasyShop NRO Debit Card",
    Answer:
      "Look for the VISA logo at merchant locations, and the VISA/PLUS sign at ATMs.",
  },
  {
    Question:
      "What should I do in the case of a void transaction for NRO Debit Card",
    Answer:
      "Just fax us a copy of the void transaction slip. You can also send it to or submit the same at your nearest M&N  Bank branch. For PhoneBanking numbers Click Here.",
  },
  {
    Question: "Are there transaction limits for NRO Debit Card",
    Answer:
      "Subject to the balance in your account, the daily limits are Rs. 25,000 at ATMs and Rs. 1.75 lacs at merchant locations in India. These limits have been set for the security of your card.",
  },
  {
    Question:
      "Can the JetPrivilege M&N  Bank World Debit Card be taken by public / private / partnership firm",
    Answer:
      "JetPrivilege M&N  Bank Debit Card can be issued to the authorised signatories of public / private / partnership firms.",
  },
  {
    Question:
      "How will I earn the JPMiles on my JetPrivilege M&N  Bank World Card",
    Answer:
      "On your JetPrivilege M&N  Bank World Debit Card, you will earn JPMiles for all your retail spends in the ratio of 2 JPMiles per INR 150 spent.Spends JPMiles will be transferred into your JetPrivilege membership within a period of 40 working days of the transaction date.",
  },
  {
    Question:
      "When will I get my Enrollment Benefits on the JetPrivilege â€“ M&N  Bank World Debit Card",
    Answer:
      "Your Rs. 750/- discount voucher code will be sent to you to your registered email ID within 7 days of payment of annual fee for your Debit Card.",
  },
  {
    Question: "Can a chip card be used for online transactions",
    Answer:
      "Yes the chip card can be used for online transactions. The JetPrivilege M&N  Bank World Debit Card has to be registered for 'MasterCard SecureCodeâ€™ which ensures safe online transactions after which the card can be used online.",
  },
  {
    Question:
      "Will the Rs.750 discount voucher be applicable only on booking done on jetairways.com",
    Answer:
      "Yes, the Rs.750 discount voucher can be used only for online booking of a RETURN FLIGHT on Jet Airways flights through Jet Airways websites only. This discount is against the base fare.",
  },
  {
    Question: "What if I want to use my Debit Card internationally",
    Answer:
      "RuPay Platinum Debit Card can only be used in India. To get a Debit Card that can be used internationally, please visit the nearest branch and request for a Visa / MasterCard Debit Card. Kindly note all new Visa / MasterCard Debit Cards are only activated for domestic usage, as per RBI guideline. To instantly enable international usage on your Visa / MasterCard Debit Card, please log in to NetBanking > Debit Cards (tab) > Set International / Domestic Usage.",
  },
  {
    Question: "Can I use the RuPay Platinum Debit Card to pay online",
    Answer:
      "Currently your RuPay Platinum Debit Card can be used to make purchases from Domestic online merchants who have the RuPay PaySecure certification displayed on their website.",
  },
  {
    Question: "Where can the RuPay Platinum Debit Card be used",
    Answer:
      "This M&N  Bank RuPay Platinum Debit Card is enabled for both domestic and International transactions. You can use your debit card for shopping at Merchant outlet and cash withdrawal at both Domestic and International locations. Additionally your card can be used online on domestic websites.",
  },
  {
    Question:
      "Can I use the RuPay ATM card at Merchant outlets or on Ecom website",
    Answer:
      "No, the ATM card can be used on to withdraw money from ATM machines only. The ATM cards cannot be used for payment at Merchant outlets or on Online payments",
  },
  {
    Question:
      "What should I do in the case of a void transaction for Rewards Debit Card",
    Answer:
      "Just fax us a copy of the void transaction slip. You can also send it to [email protected] or submit the same at your nearest M&N  Bank branch. For PhoneBanking numbers click here.",
  },
  {
    Question: "What are the transaction limits for Rewards Debit Card",
    Answer:
      "The daily limits are Rs. 50,000 at the ATM and Rs. 2, 75,000 at merchant locations as well as online transactions. This is subject to the balance in your account, and is for your account security.",
  },
  {
    Question:
      "Are there charges I should know about M&N  Bank Rewards Debit Card",
    Answer:
      "Another benefit of the Rewards Debit card is that there are absolutely no transaction charges when shopping at a merchant location.",
  },
  {
    Question: "Can a chip card be used for online transactions",
    Answer:
      "Yes the chip card can be used for online transactions. The M&N  Bank Rewards Debit Card has to be registered for 'Verified by Visaâ€™ which ensures safe online transactions after which the card can be used online.",
  },
  {
    Question: "What is Times Points",
    Answer:
      "Times points is a unique loyalty program which allows you to earn reward points for all your digital media usage (create/consume/share etc.) across digital properties of Times Internet Limited",
  },
  {
    Question:
      "Where should I contact or write to know about the existing offers on my cards",
    Answer:
      "You do not have to call or write anywhere, you can know about the list of exciting offers on www.timespoints.com/debit.",
  },
  {
    Question: "Where should I contact or write for my doubts or queries",
    Answer:
      "For all Times points related queries, you are requested to write to [email protected]",
  },
  {
    Question: "How Can I get my Times Points Debit Card",
    Answer:
      "If you are an existing M&N  Bank account holder following are the process to get a Times Points Debit Card: 1. Please visit the nearest M&N  Bank branch and apply for Times Points Debit card 2. Please visit M&N  Bank NetBanking and Upgrade your existing card to Times Points Debit Card 3. Call Phone banking and put a request for new request for Times Points Debit Card(in case you do not have any debit card) or request for upgrade of your card to Times Point Debit card. In case you do not have existing account with M&N  bank then we would request you to visit nearest branch to open an account and request for Times Points Debit card.",
  },
  {
    Question:
      "Except for digital media consumption, what is the other medium of earning Times Points",
    Answer:
      "M&N  bank Times Points Debit Card gives customer unique opportunity to earn Times Points even when they are not online. Customer can earn times point by simply using their debit card for their all spends on Point of Sale or Ecommerce transaction.",
  },
  {
    Question:
      "If I hotlist my card, will I get deregister from the Times points program",
    Answer:
      "No, your Times Points account will remain active and you can keep using www.timespoint.com as earlier.",
  },
  {
    Question: "How do I reset my password",
    Answer:
      "An immediate email will be sent to you after the card is issued to you for setting up your password. For resetting or changing the password you will have to login to www.timespoint.com and visit the settings tab. In case you forget the password of your account, you can try for Forget Password and a password reset mail will be sent to you.",
  },
  {
    Question: "Why Should I take this card",
    Answer:
      "This is an Unique proposition from M&N  Bank and Times Internet Limited to provide you with opportunities to accumulate points while spending as well as using media contents e.g. You can use debit card to buy mobile /laptop etc. and earn Times points or you can surf through the Times Internet Limited properties to earn Times points. The times points can be redeemed on www.timespoint.com against attractive offers and gifts.",
  },
  {
    Question: "How much of Times points will I earn for each activity on TIL",
    Answer:
      "The number of points to be earned for each activity is dynamic and it ranges from 1-5. The points to be earned will be visible to you while you are logged in to your account.",
  },
  {
    Question: "Where can I burn my accumulated Times points",
    Answer:
      "You can use the accumulated Times points on www.timespoint.com. You will be able to avail attractive offers and gifts using the Times points.",
  },
  {
    Question: "When will I get my enrollment Times points",
    Answer:
      "Your enrollment Times points will be credited into your account within 72 hours of the 1st transaction using your Times Points Debit Card. Your account will be credited with one time 500 times point enrolment benefits.",
  },
  {
    Question: "How long can I keep my earned Times points",
    Answer:
      "When you earn points, your points earned are valid for 12 months from the date of earning. The points will expire on the 1st of every month.",
  },
  {
    Question: "What are the Terms and Conditions for the offers at my disposal",
    Answer:
      "Please visit www.timespoints.com/debit for present offers and T&C.",
  },
  {
    Question: "What is the validity of the offers",
    Answer:
      "The offers has a validity of Minimum 3 months and maximum of 12 months.",
  },
  {
    Question:
      "I am already member of Times points, do I need to register again",
    Answer:
      "If your e-mail ID in the existing registration on times point and the one given to M&N  Bank is same then you donâ€™t have to register, however in case of different e-mail ID or no e-mail ID in existing Times Points account, you will be automatically registered on times points using your e-mail ID given to M&N  Bank and a confirmation mail will be sent to your email ID.",
  },
  {
    Question: "Which all Times group digital properties offer times points",
    Answer:
      "While times points is a constantly growing entity, at present users are rewarded for their digital media usage across pages listed below: www.timesofindia.com www.speakingtree.in www.economictimes.com ww.itimes.com www.maharashtratimes.com www.eisamay.com www.gaana.com www.navgujratsamay.com www.navbharattimes.com",
  },
  {
    Question:
      "Does customer need to log-in to every Times Internet Limited page for earning Times Points",
    Answer:
      "Yes. Customer needs to log-in to earn times points for activities done on any website.",
  },
  {
    Question: "Where can I check the Times points earned for my transactions",
    Answer:
      "You can login to the www.timespoint.com using your username and password to check the times point earned.",
  },
  {
    Question:
      "What do I do if I have an issue related to the product using Times points from portal/link",
    Answer:
      "If there is any issue with the product purchased using Times points, we would request you to write to [email protected] Additionally you can always write to for any problem related to Times Points Debit Card. You are requested to mention your registered email id/ registered mobile no to identify yourself while writing to us to track your issue and resolve the same.",
  },
  {
    Question:
      "How much am I going to be charged yearly for Times Points Debit Card",
    Answer:
      "The annual charges for Times Points Debit Card is Rs. 650/- +Taxes applicable.",
  },
  {
    Question: "How can I earn Times Points",
    Answer:
      "Welcome Benefit 500 Times Points will be gifted after you use the card to shop for the first times. Earn Times Points every time you shop. Get 2 Times Points for every Rs. 150 spent. Earn Times Points based on the activities on the Times Internet Limited digital pages. The list of Times Internet Limited digital properties are www.timesofindia.com, www.speakingtree.in, www.economictimes.com , www.itimes.com , www.maharashtratimes.com , www.eisamay.com , www.gaana.com , www.navgujratsamay.com , www.navbharattimes.com Please note, you need to be logged in to your Times Points account for earning Times Points while consuming, sharing & creating content on above listed websites.",
  },
  {
    Question:
      "If I get a new card (reissue), will my Times point carry forward",
    Answer:
      "Yes, your accumulated Times point will be carried forward to the new card.",
  },
  {
    Question: "What are the benefits of Times Points Debit Card",
    Answer:
      "Your Times Points Debit Card Offers 1. A Welcome benefits to choose one from a bouquet of upto 20 offers 2. You will be entitled to a one time offer of 500 bonus Times points. 3. You will provided with Great deals and discounts all throughout the year. 4. You will be able to redeem your Times points earned from your activities on TIL and Times Debit card Spends and avail attractive offers.",
  },
  {
    Question: "Will I get notification about the expiry of my Times points",
    Answer:
      "Yes, you will be notified through email on the expiry of your Times points. The emails notification will be sent to you from Times Internet Limited (TIL).",
  },
  {
    Question:
      "I am not registered for times points program; can I apply for Times Point Debit card",
    Answer:
      "Yes, you can apply for times points debit card. Basis your e-mail ID and mobile number provided to M&N  Bank, youâ€™ll be registered for Times Point. An e-mailer will be sent to you with your registration details.",
  },
  {
    Question: "How do I register for Times Points",
    Answer:
      "As a Times Points Debit Card holder you will be auto-registered for the Times points loyalty program. The registration will trigger an auto-generated mail to your bank registered email id. Please follow the simple steps (Section A): Please check for an email in your banks registered email inbox sent from Times Points. Please open the email and look for a link for setting up your password. The link will redirect you to www.timespoint.com website and ask you to set your password. Your profile will be completed and you can start earning Times Points for all your surfing and other activities If you are an existing member to Times Points 1) In case you have registered using your mobile number or different email id, you will be auto-registered for the Times points loyalty program with M&N  Bank registered email. Please follow the simple steps mentioned in Section A Kindly note, your existing Times Points account will remain as is and points earn with your existing ID will not be added to your new Times Points account In case you have registered for Times Points account using your same email id which is registered with M&N  bank, you do not need to do any further registration and you will continue to enjoy Times Points benefits",
  },
  {
    Question: "Where do I redeem Times Points",
    Answer:
      "Please login to www.timespoint.com using your registered email id and follow the simple steps: Click on the redeem tab and view the offers Select an offer and click on Redeem Enter delivery location with pin code verification Mention contact details and click on â€œContinueâ€ Review and confirm your order. On successful redemption you will receive a confirmation on your registered email id. You can manage your Times Points thru an Times Points App available on iOS& Android Platform Please check for the confirmation email In case of query regarding registration to Times Points account, earning and redemption of Times Point please write to [email protected]",
  },
  {
    Question:
      "Is there any Times points Apps which I can download on my mobile",
    Answer:
      "Yes, you can download the app for your Android mobile from Google Playstore or for your iPhone from App Store.",
  },
  {
    Question:
      "If I am having two member Id can I merge both the IDs and points",
    Answer:
      "No, 2 IDs cannot be merged. The Times Points Debit Card linked Times Points account will be based on your M&N  Bank registered email id. You will have to use the same account to do activity and accumulate times points.",
  },
  {
    Question: "Which are the offers I am eligible as a Times Debit Card holder",
    Answer:
      "You will be able to choose one out of more than 20 welcome offers from leading e-com merchants in India. Additionally there will be more than 350 regular offers to avail at any point of time during the year. The minimum discounts on the offers would be 10% in addition to the merchants own discounts.",
  },
  {
    Question: "Do I need to mandatorily register",
    Answer:
      "Yes, to avail the offers and earn times points you need to register and activate the account.",
  },
  {
    Question:
      "Is there any Personal Accidental Death Cover for Times Point Debit Card holders",
    Answer:
      "Yes. There is an Accelerated insurance cover of 10 lacs in case of death due to by Air / Road / Rail. For more information and Terms and condition you are requested to visit www.M&N bank.com.",
  },
  {
    Question: "What should I share while calling TIL to identify myself",
    Answer:
      "Presently we do not have Tele service. You are requested to write to us for any query, request or complain to [email protected]",
  },
  {
    Question: "What do I do if I am not able to avail merchant offers",
    Answer:
      "Do not worry if you are not able to avail the offers at your disposal. Any issue related merchant or code not working or bar code not getting read, just write to [email protected]",
  },
  {
    Question:
      "Are there any exclusive benefits that come with the Times Points Debit Card",
    Answer:
      "The Times Points Debit Card also provides exclusive discounts of minimum 10% throughout the year. These offers can be availed at merchant establishment.",
  },
  {
    Question:
      "I am already registered for Times Points program; what happens to my existing Times Points ID if I apply for Times point debit card",
    Answer:
      "If the e-mail address in your existing times point account, and the one given to M&N  Bank is same, then all the Times Points earned through debit card transactions will be credited to existing Times Point account. In case of different e-mail addresses, a new Times Point account will be registered using the e-mail ID given to M&N  bank.",
  },
  {
    Question: "What if I forget my ATM PIN",
    Answer:
      "You can call the M&N  bank PhoneBanking to request for re-issuance of PIN or place a request through Prepaid NetBanking. A new PIN will be sent across to your registered mailing address held on record with the bank.",
  },
  {
    Question: "How can I check the balance on my M&N  Bank ForexPlus Card",
    Answer:
      "You can check the balance on ForexPlus card with the help of NetBanking facility. You will need to use the card number as user ID & IPIN issued to you as part of the card kit to login to NetBanking facility. Alternately, you can also contact our PhoneBanking services to check the balance on your ForexPlus card.",
  },
  {
    Question: "Who can purchase ForexPlus Card",
    Answer:
      "ForexPlus card can only be used for making payments outside India except for Nepal & Bhutan. Whenever the cardholder is using his card he must be present at the place of transaction & need to sign the chargeslips. Thus, we issue ForexPlus card to customers travelling abroad basis valid documentation proof.",
  },
  {
    Question: "Can I load ForexPlus card by making payment in Cash",
    Answer: "No, ForexPlus card cannot be loaded against payment of cash.",
  },
  {
    Question: "How do I know if an ATM will accept my ForexPlus Card",
    Answer:
      "ForexPlus cards are accepted at Visa / MasterCard ATMs. Please look out for the VISA/PLUS/MasterCard logo while searching for ATM.",
  },
  {
    Question:
      "What documents should I submit when I purchase the M&N  Bank ForexPlus card",
    Answer:
      "M&N  Bank Savings / Current account holders need to just submit completed application form, copy of ticket or the Visa and form A2 (or any other documentation as mandated under prevalant FEMA guidelines)If you don't have M&N  Bank Savings / Current account, you need to submit completed application form, copyof ticket or the Visa and form A2 (or any other Forex documentation as mandated under prevalant FEMA guidelines) as well as a Photocopy of your valid Passport.",
  },
  {
    Question: "How does this card work",
    Answer:
      "Your M&N  Bank ForexPlus card will be activated with the required AUD / AED / CAD / CHF/ Euro / GBP / JPY / SGD and USD within 4 hours from the bank getting the clear funds from you. Once actived, the card can be used at any international location for making payments at POS terminals or to withdraw cash at ATMs. (Usage of the card is not allowed in India, Nepal and Bhutan.) M&N  Bank ForexPlus card works just like any Debit / Credit Card for making payments at Merchant Establishments that have an electronic terminal. The transaction amount is deducted from available balance on the ForexPlus card. M&N  Bank ForexPlus card is accepted at all Merchant Establishments displaying the Visa / Mastercard symbol. The card can be used to withdraw cash at all Visa / Mastercard ATMs worldwide. Irrespective of the currency loaded on the card, the cash will be dispensed based on the currencies supported at the ATMs. Please ensure that you remember the PIN given to you with the card pack, the PIN is unique for every card and cannot be changed at any domestic or international ATM. View more",
  },
  {
    Question: "Can I use the DCC/ MCC option at the time of transaction",
    Answer:
      "Whenever ForexPlus cardholder opts for DCC/MCC option on DCC/MCC enabled POS/ATM terminals, his/her transaction passes through cross currency transactions twice. It is not advisable for a ForexPlus cardholder to opt for DCC/MCC while using ForexPlus card for making payments. Please note that every cross currency transaction attracts currency conversion charges at applicable rates. Apart from this, the cardholder will also get penalised due to fluctuation in currency conversion rate. View more",
  },
  {
    Question:
      "Do I need to pay additional amount over and above Cash withdrawal Charges levied by the M&N  Bank for ATM transaction",
    Answer:
      "In certain countires ATM Service providers are authorized to charge surcharge/convenience fees from the cardholders for accessing the ATM to withdraw money. These charges are levied by the ATM service provider over and above the charges levied by the M&N  Bank, and M&N  Bank bank has no control over the charges as these charges are not levied by the bank. These charges are normally displayed to the customer during the transaction and the customer has the option to either proceed with the transaction or abort if the charges are not acceptable to the customer. View more",
  },
  {
    Question: "What currencies are available",
    Answer:
      "There are ten currencies offered: Australian Dollar (AUD) Dirhams (AED) Canadian Dollar (CAD) Euro (EUR) Japanese Yen (JPY) Singapore Dollars (SGD) Sterling Pound (GBP) Swedish Krona (SEK) Swiss Franc (CHF) US Dollar (USD) View more",
  },
  {
    Question: "Where do I get this card",
    Answer:
      "ForexPlus card is available over the counter at M&N  Bank branches. You simply need to walk into our branch with required documentation and walk out with ForexPlus card. The card will get activated within 4 hours from realization of funds. Alternatively, the customer can apply for card through NetBanking login also.In case the customer applies the card through NetBanking the card will be delivered to the customer within 2 working days. This facility is available at select locations only.",
  },
  {
    Question: "How soon can the card be used after it is purchased",
    Answer:
      "Your card will be activated & loaded with required currency within 4 hours from the bank having received clear funds from you. The card will beready for use post activation.",
  },
  {
    Question: "How can I cancel my Forex Plus Card",
    Answer:
      "To cancel your Forex Plus Card, we request you to contact the PhoneBanking team or walk into your nearest M&N  Bank branch and place a request towards cancellation. Your request will be processed within one working day of us receiving the request. There are no charges towards the cancellation of a Forex Plus card. However, currency conversion tax as applicable from time to time will be deducted at the time of providing credit to you. Kindly visit the following URL to access information for the complete address and contact details of our Branches and PhoneBanking centers: View more",
  },
  {
    Question: "How do I activate e-commerce on my card",
    Answer:
      "Follow 2 simple steps: Step 1: Log on to Prepaid Card Net Banking. Step 2: Enable your e-commerce transaction facility to make purchases.",
  },
  {
    Question: "How do I top-up the value of my card when I am abroad",
    Answer:
      "ForexPlus card can also be loaded on your behalf by someone authorized by you. Authorised person has to visit M&N  Bank branch with the necessary documents and funds. Weâ€™ll take care of the rest.",
  },
  {
    Question: "Whom should I contact if my card is lost or stolen",
    Answer:
      "Immediately report the loss of your M&N  Bank ForexPlus Card by calling M&N  Bank PhoneBanking. You will not be liable for transactions on your Card Account (if any) from the moment your report is registered with the bank. Alternately you can hotlist the card with the help of Prepaid NetBanking facility.",
  },
  {
    Question: "What is the M&N  Bank ForexPlus card",
    Answer:
      "M&N  Bank ForexPlus card is a magnetic strip based prepaid card introduced in partnership with Visa / Mastercard International. The card offers you a convenient and secure way to carry forex. This card offers you the freedom to shop anywhere in the world and provides access to the currency of your destination at competitive market rates. It can be used at all Visa / Mastercard ATMs and Merchant establishment worldwide. This card cannot be used for making payments in India, Nepal or Bhutan.",
  },
  {
    Question: "What is the maximum value for which the Card can be used",
    Answer:
      "There is no limit imposed on the usage of ForexPlus Card. Customer's can withdraw/utilise any amount, upto the value loaded on ForexPlus card at any ATM/POS. However, there are some ATMs service providers which have put in per day / per transaction limit towards cash dispense which cannot be changed by the Bank. In such cases the cardholder might need to do multiple transactions if he wants to withdraw any amount higher than that allowed in one transaction.",
  },
  {
    Question:
      "I have renewed my passport with new number. Do I need to update my new Passport number in my ForexPlus Card",
    Answer:
      "Yes, We request you to get in touch with nearby branch along with original & copy of your passport to get the new passport number updated in the bank's records. Passport number is key validation criteria to check caller authenticity when you contact our 24 x 7 PhoneBanking service, hence it is recommended to update Passport number at the earliest.",
  },
  {
    Question: "What does DCC/ MCC stand for",
    Answer:
      "DCC stands for Dynamic Currency Conversion whereas MCC stands for Multiple Currency Conversoin. DCC / MCC at ATM / POS gives the cardholder an option to initiate a transaction in the currency of his choice. It also assists the cardholder to know the exact transaction value in the currency selected at the time of transaction.",
  },
  {
    Question:
      "Do I need to have M&N  Bank account to purchase the M&N  Bank ForexPlus card",
    Answer:
      "No, you don't need to have an account with M&N  Bank to purchase the ForexPlus card. You can just walk into any of our M&N  bank branches in India and purchase it over the counter on submission of relevant KYC documents.",
  },
  {
    Question: "What happens if my card is lost",
    Answer:
      "In case your card gets lost or stolen, all you have to do is call M&N  Bank 24x7 PhoneBanking immediately and report the loss of your card. The card can also be hotlisted using our Prepaid NetBanking facility In case you have opted for a back-up card, then you can request to activate back-up card and transfer balance on your hotlisted card to the back-up card. Balance transfer will be carried out instantaneously.",
  },
  {
    Question: "How many days in advance can I purchase foreign exchange",
    Answer:
      "You can purchase foreign exchange up to 60 days in advance from the date of departure.",
  },
  {
    Question: "How much foreign exchange can I retain after the foreign trip",
    Answer:
      "After returning from the overseas trip, you are required to surrender unspent foreign exchange held by you within 180 days of return. You can retain foreign exchange up to USD 2,000 (or equivalent) for future use after returning back to India.",
  },
  {
    Question: "Can the value of the card be topped up",
    Answer:
      "Yes, your ForexPlus Card can be reloaded multiple times in future till the card gets expired: You can authorize the Bank to debit your M&N  Bank account by giving an M&N  Bank cheque or make payment using a local cheque drawn on M&N  Bank and reload the card for desired value. Reload requests can be made by any authorized person on your behalf. The person authorised by you for the same will need to come to bank branch and will need to provide the necessary documents to the bank to carry out reload. On receipt of the application form and the funds, your card will get reloaded for the desired amount. M&N  Bank customers can also place a request to reload the card through M&N  Bank PhoneBanking services. Incase the Card is issued by your corporate/employer, reload requests received through them will be acted upon by M&N  Bank. View more",
  },
  {
    Question: "What if I Forget my Activation Code / IPIN",
    Answer:
      "Incase you have forgotten your Activation Code/IPIN, you are requested to kindly call M&N  Bank PhoneBanking and place in a new request for IPIN, which will be sent instantly to your registered Email ID / Mobile number.",
  },
  {
    Question: "What is the maximum value for which the Card can be used",
    Answer:
      "There is no limit imposed on the usage of ForexPlus card. Customer's can withdraw/utilise any amount, upto the value loaded on card at any ATM/POS. However, there are some ATMs service providers which have put in per day / per transaction limit towards cash dispense which cannot be changed by the Bank. In such cases the cardholder might need to do multiple transactions if he wants to withdraw any amount higher than that allowed in one transaction.",
  },
  {
    Question:
      "How much is the currency conversion service tax applicable at the time of Load, Reload and Refund",
    Answer:
      "Following are the currency conversion service tax slabs applicable at the time of Load, Reload and Refund: Buy and Sell Forex Currency Service Tax Amount Up to Rs. 1 lakh 0.14% of the gross value or Rs. 35/- whichever is higher From Rs. 1 lakh to Rs 10 Lakhs Rs. 140 plus 0.07% of the amount exceeding Rs. 1 lakh From Rs. 10 lakhs and above Rs. 770 plus 0.014% of the amount exceeding Rs. 10 Lakhs, subject to a maximum of Rs. 7000",
  },
  {
    Question: "What currencies are available",
    Answer:
      "There are three currencies offered: Euro (EUR) Sterling Pound (GBP) US Dollar (USD)",
  },
  {
    Question: "How do I know if an ATM will accept my ForexPlus Chip Card",
    Answer:
      "ForexPlus Chip cards are accepted at Visa / MasterCard ATMs. Please look out for the VISA/PLUS/MasterCard logo while searching for ATM.",
  },
  {
    Question:
      "What documents should I submit when I purchase the M&N  Bank ForexPlus Chip card",
    Answer:
      "M&N  Bank Savings / Current account holders need to just submit completed application form, copy of ticket or the Visa and form A2 (or any other documentation as mandated under prevalant FEMA guidelines) If you don't have M&N  Bank Savings / Current account, you need to submit completed application form, copy of ticket or the Visa and form A2 (or any other Forex documentation as mandated under prevalant FEMA guidelines) as well as a Photocopy of your valid Passport.",
  },
  {
    Question: "Where do I get this card",
    Answer:
      "ForexPlus Chip card is available over the counter at M&N  Bank branches. You simply need to walk into our branch with required documentation and walk out with ForexPlus Chip card. The card will get activated within 4 hours from realization of funds. Alternatively, the customer can apply for card through NetBanking login also.In case the customer applies the card through NetBanking the card will be delivered to the customer within 2 working days. This facility is available at select locations only.",
  },
  {
    Question: "How soon can the card be used after it is purchased",
    Answer:
      "Your card will be activated & loaded with required currency within 4 hours from the bank having received clear funds from you. The card will be ready for use post activation.",
  },
  {
    Question:
      "I have renewed my passport with new number. Do I need to update my new Passport number in my ForexPlus Chip Card",
    Answer:
      "Yes, We request you to get in touch with nearby branch along with original & copy of your passport to get the new passport number updated in the bank's records. Passport number is key validation criteria to check caller authenticity when you contact our 24 x 7 PhoneBanking service, hence it is recommended to update Passport number at the earliest.",
  },
  {
    Question: "What is the maximum value for which the Card can be used",
    Answer:
      "There is no limit imposed on the usage of ForexPlus Chip Card. Customer's can withdraw/utilise any amount, upto the value loaded on ForexPlus Chip card at any ATM/POS. However, there are some ATMs service providers which have put in per day / per transaction limit towards cash dispense which cannot be changed by the Bank. In such cases the cardholder might need to do multiple transactions if he wants to withdraw any amount higher than that allowed in one transaction.",
  },
  {
    Question:
      "Are there any transactions for which this Card should not be used",
    Answer:
      "Yes, your ForexPlus Chip card should not be used towards temporary charge blocks - e.g. paying deposits at hotels, hiring of cars etc. Incase you have paid these deposits using ForexPlus Chip card and the hotel/car rental agency etc. settles the transaction for an amount lesser than the amount blocked or you make final payment through any different mode, the balance amount will get credited into your account only after 35 days from the transaction date. Note: the Bank reserves the right to charge the Card holder for any unauthorized amounts.",
  },
  {
    Question: "Can a non Traveller purchase ForexPlus Chip Card",
    Answer:
      "No, ForexPlus Chip Card can only be issued to Travellers. ForexPlus Card is valid for making payments in countries other than India, Nepal & Bhutan. Whenever the cardholder is using his card he must be present at the place of transaction & need to sign the chargeslips. If the cardholder is a non - traveller he can not be present at the time of transaction processing, hence ForexPlus Chip Card can not be issued to a Non- traveller.",
  },
  {
    Question: "Can I load ForexPlus Chip card by making payment in Cash",
    Answer: "No, ForexPlus Chip card cannot be loaded against payment of cash.",
  },
  {
    Question: "Whom should I contact if my card is lost or stolen",
    Answer:
      "Immediately report the loss of your ForexPlus Chip Card by calling M&N  Bank PhoneBanking. You will not be liable for transactions on your Card Account (if any) from the moment your report is registered with the bank. Alternately you can hotlist the card with the help of Prepaid NetBanking facility.",
  },
  {
    Question: "Can I use the DCC/ MCC option at the time of transaction",
    Answer:
      "Whenever ForexPlus cardholder opts for DCC/MCC option on DCC/MCC enabled POS/ATM terminals, his/her transaction passes through cross currency transactions twice. It is not advisable for a ForexPlus cardholder to opt for DCC/MCC while using ForexPlus Chip card for making payments. Please note that every cross currency transaction attracts currency conversion charges at applicable rates. Apart from this, the cardholder will also get penalised due to fluctuation in currency conversion rate.",
  },
  {
    Question: "Can I issue Cheque for loading of ForexPlus Chip Card",
    Answer:
      "Customer can load ForexPlus Chip card by issuance of cheque against the amount to be loaded. However, cards will be loaded post realisation of the cheque deposited by the customer. The exchange rate applicable will be for the day on which funds are realized and card is activated",
  },
  {
    Question: "Can the ATM PIN be changed",
    Answer:
      "No, the ATM PIN cannot be changed at the ATM. In case you have forgotten or lost the PIN, you will need to request for a new PIN with the help of PhoneBanking or thorugh Prepaid NetBanking.",
  },
  {
    Question: "What is M&N  Bank ForexPlus Chip card",
    Answer:
      "M&N  Bank ForexPlus Chip card is a magnetic strip based prepaid card introduced in partnership with Visa / Mastercard International. The card offers you a convenient and secure way to carry forex. This card offers you the freedom to shop anywhere in the world and provides access to the currency of your destination at competitive market rates. It can be used at all Visa / Mastercard ATMs and Merchant establishment worldwide. This card cannot be used for making payments in India, Nepal or Bhutan.",
  },
  {
    Question: "What if I forget my ATM PIN",
    Answer:
      "You can call the M&N  bank PhoneBanking to request for re-issuance of PIN or place a request through Prepaid NetBanking. A new PIN will be sent across to your registered mailing address held on record with the bank.",
  },
  {
    Question: "How do I activate e-commerce",
    Answer:
      "Just log on to NetBanking and enable your e-commerce transaction facility.",
  },
  {
    Question: "How can I cancel my ForexPlus Chip Card",
    Answer:
      "To cancel your Forex Plus Chip Card, we request you to contact the PhoneBanking team or walk into your nearest M&N  Bank branch and place a request towards cancellation. Your request will be processed within one working day of us receiving the request. There are no charges towards the cancellation of a Forex Plus Chip card. However, currency conversion tax as applicable from time to time will be deducted at the time of providing credit to you. Kindly visit the following URL to access information for the complete address and contact details of our Branches and PhoneBanking centers:",
  },
  {
    Question: "How do I top-up the value of my card when I am abroad",
    Answer:
      "ForexPlus Chip card can also be loaded on your behalf by someone authorized by you. Authorised person has to visit M&N  Bank branch with the necessary documents and funds. Weâ€™ll take care of the rest.",
  },
  {
    Question: "How can I check the balance on my M&N  Bank ForexPlus Chip Card",
    Answer:
      "You can check the balance on ForexPlus Chip card with the help of NetBanking facility. You will need to use the card number as user ID & IPIN issued to you as part of the card kit to login to NetBanking facility. Alternately, you can also contact our PhoneBanking services to check the balance on your ForexPlus card.",
  },
  {
    Question:
      "Do I need to have M&N  Bank account to purchase the M&N  Bank ForexPlus Chip card",
    Answer:
      "No, you don't need to have an account with M&N  Bank to purchase the ForexPlus Chip card. You can just walk into any of our M&N  bank branches in India and purchase it over the counter on submission of relevant KYC documents.",
  },
  {
    Question: "What does DCC/ MCC stand for",
    Answer:
      "DCC stands for Dynamic Currency Conversion whereas MCC stands for Multiple Currency Conversoin. DCC / MCC at ATM / POS gives the cardholder an option to initiate a transaction in the currency of his choice. It also assists the cardholder to know the exact transaction value in the currency selected at the time of transaction.",
  },
  {
    Question: "How much foreign exchange can I retain after the foreign trip",
    Answer:
      "After returning from the overseas trip, you are required to surrender unspent foreign exchange held by you within 180 days of return. You can retain foreign exchange up to USD 2,000 (or equivalent) for future use after returning back to India.",
  },
  {
    Question: "Can the value of the card be topped up",
    Answer:
      "Yes, your ForexPlus Chip Card can be reloaded multiple times in future till the card gets expired: You can authorize the Bank to debit your M&N  Bank account by giving an M&N  Bank cheque or make payment using a local cheque drawn on M&N  Bank and reload the card for desired value. Reload requests can be made by any authorized person on your behalf. The person authorised by you for the same will need to come to bank branch and will need to provide the necessary documents to the bank to carry out reload. On receipt of the application form and the funds, your card will get reloaded for the desired amount. M&N  Bank customers can also place a request to reload the card through M&N  Bank PhoneBanking services. Incase the Card is issued by your corporate/employer, reload requests received through them will be acted upon by M&N  Bank.",
  },
  {
    Question: "Can I use the DCC/ MCC option at the time of transaction",
    Answer:
      "Whenever ForexPlus Chip Cardholder opts for DCC/MCC option on DCC/MCC enabled POS/ATM terminals, his/her transaction passes through cross currency transactions twice. It is not advisable for a ForexPlus Chip Cardholder to opt for DCC/MCC while using ForexPlus Platinum card for making payments. Please note that every cross currency transaction attracts currency conversion charges at applicable rates. Apart from this, the cardholder will also get penalised due to fluctuation in currency conversion rate.",
  },
  {
    Question: "What happens if my card is lost",
    Answer:
      "In case your card gets lost or stolen, all you have to do is call M&N  Bank PhoneBanking immediately and report the loss of your card. This facility is available 24 hrs. on all days. In case if you have been issued a back-up card in the kit, you can activate the back-up card by calling M&N  Bank Phone Banking or through Prepaid NetBanking. Once the back-up card is activated, all the funds from primary card will be transferred automatically to the back up card.",
  },
  {
    Question: "How can I cancel my Forex Plus Card",
    Answer:
      "To cancel your ForexPlus Chip Card, we request you visit our your nearest M&N  Bank branch and place a request towards cancellation the of the card. Your request will be processed within one working day of us receiving the request and the available balance on the card will be refunded back to your account. Incase you do not have an account with us then a demand draft shall be issued for the respective refund amount. There are no charges towards the cancellation of a ForexPlus Chip Card. However, currency conversion tax as applicable from time to time will be deducted at the time of providing credit to you. Kindly visit the following URL to access information for the complete address and contact details of our Branches and PhoneBanking centers:",
  },
  {
    Question:
      "I'm not a traveller, can I still benefit from the ForexPlus Chip Card",
    Answer:
      "The ForexPlus Chip Card is only for travellers, and cannot be issued to non-travellers",
  },
  {
    Question: "What if I Forget my Activation Code / IPIN",
    Answer:
      "Incase you have forgotten your Activation Code/IPIN, you are requested to kindly call M&N  Bank PhoneBanking and place in a new request for IPIN, which will be sent instantly to your registered Email ID / Mobile number.",
  },
  {
    Question: "Can I load ForexPlus Chip Card by making payment in Cash",
    Answer: "No, ForexPlus Chip Card cannot be loaded against payment of cash.",
  },
  {
    Question:
      "I have renewed my passport with new number. Do I need to update my new Passport number in my ForexPlus Platinum Card",
    Answer:
      "Yes, We request you to get in touch with nearby branch along with original & copy of your passport to get the new passport number updated in the bank's records. Passport number is key validation criteria to check caller authenticity when you contact our 24 x 7 PhoneBanking service, hence it is recommended to update Passport number at the earliest.",
  },
  {
    Question: "What currencies are available",
    Answer:
      "There are five currencies offered: Euro (EUR) Sterling Pound (GBP) US Dollar (USD) Thailand Baht (THB) HongKong Dollar (HKD)",
  },
  {
    Question: "What is M&N  Bank ForexPlus Platinum (Chip) card",
    Answer:
      "M&N  Bank ForexPlus Platinum (Chip) card is an embedded chip based Prepaid card introduced in partnership with VISA International. It offers you a convenient and secure way to carry your Forex. This card gives you the freedom to shop anywhere in the world and provides access to the currency of your destination at competitive market rates. It can be used at all VISA ATMs and Merchant Establishments worldwide. This card cannot be used for payments in India, Nepal or Bhutan.",
  },
  {
    Question: "How do I top-up the value of my card when I am abroad",
    Answer:
      "ForexPlus Platinum card can also be loaded on your behalf by someone authorized by you. Authorised person has to visit M&N  Bank branch with the necessary documents and funds. Weâ€™ll take care of the rest.",
  },
  {
    Question: "What if I forget my ATM PIN",
    Answer:
      "You can call the M&N  bank PhoneBanking to request for re-issuance of PIN or place a request through Prepaid NetBanking. A new PIN will be sent across to your registered mailing address held on record with the bank.",
  },
  {
    Question:
      "Do I need to pay additional amount over and above Cash withdrawal Charges levied by the M&N  Bank for ATM transaction",
    Answer:
      "In certain countires ATM Service providers are authorized to charge surcharge/convenience fees from the cardholders for accessing the ATM to withdraw money. These charges are levied by the ATM service provider over and above the charges levied by the M&N  Bank, and M&N  Bank bank has no control over the charges as these charges are not levied by the bank.These charges are normally displayed to the customer during the transaction and the customer has the option to either proceed with the transaction or abort if the charges are not acceptable to the customer.",
  },
  {
    Question: "How soon can the card be used after it is purchased",
    Answer:
      "Your card will be activated & loaded with required currency within 4 hours from the bank having received clear funds from you. The card will beready for use post activation.",
  },
  {
    Question: "Whom should I contact if my card is lost or stolen",
    Answer:
      "Immediately report the loss of your ForexPlus Platinum Card by calling M&N  Bank PhoneBanking. You will not be liable for transactions on your Card Account (if any) from the moment your report is registered with the bank. Alternately you can hotlist the card with the help of Prepaid NetBanking facility.",
  },
  {
    Question:
      "What are the currencies available for M&N  Bank ForexPlus Platinum card",
    Answer:
      "The M&N  Bank ForexPlus Platinum card is currently available in 5 currencies, i.e. USD, Euro, GBP, HKD and THB.",
  },
  {
    Question:
      "Do I need to have M&N  Bank account to purchase the M&N  Bank ForexPlus Platinum card",
    Answer:
      "No, you don't need to have an account with M&N  Bank to purchase the ForexPlus Chip card. You can just walk into any of our M&N  bank branches in India and purchase it over the counter on submission of relevant KYC documents.",
  },
  {
    Question: "What is the maximum value for which the Card can be used",
    Answer:
      "There is no limit imposed on the usage of ForexPlus Platinum Card. Customer's can withdraw/utilise any amount, upto the value loaded on ForexPlus Platinum card at any ATM/POS. However, there are some ATMs service providers which have put in per day / per transaction limit towards cash dispense which cannot be changed by the Bank. In such cases the cardholder might need to do multiple transactions if he wants to withdraw any amount higher than that allowed in one transaction.",
  },
  {
    Question:
      "What do I need to know about the M&N  Bank ForexPlus Platinum Card",
    Answer:
      "Embedded with a chip, this ForexPlus card offers you a convenient and secure way to carry your Forex. With the M&N  Bank ForexPlus Platinum card you can shop anywhere in the world.",
  },
  {
    Question: "Can a non-traveller purchase ForexPlus Card",
    Answer:
      "No. ForexPlus Cards can only be issued to travellers. A ForexPlus Card is valid for making payments in countries other India, Nepal and Bhutan whenever you are using your card you must be present at the place of transaction and have to sign the charge slips. As you are a non-traveller you cannot be present at the time of the transaction processing. Hence, ForexPlus Platinum Cards cannot be issued to non-travellers.",
  },
  {
    Question:
      "How can I check the balance on my M&N  Bank ForexPlus Platinum Card",
    Answer:
      "You can check the balance on ForexPlus Platinum card with the help of NetBanking facility. You will need to use the card number as user ID & IPIN issued to you as part of the card kit to login to NetBanking facility. Alternately, you can also contact our PhoneBanking services to check the balance on your ForexPlus card.",
  },
  {
    Question: "Whom should I contact if my card is lost or stolen",
    Answer:
      "Immediately report the loss of your M&N  Bank ForexPlus Platinum Card by calling M&N  Bank Phone Banking. You will not be liable for transactions on your Card Account (if any) from the moment your report is registered with the bank.",
  },
  {
    Question: "Do I need to pay any charges for availing GCAS",
    Answer:
      "In case you avail of GCAS services, charges as per Visa Guidelines will be charged to you. Details of charges are as follows: Reporting Lost/ Stolen Card : Nil Emergency Replacement of Card : USD 25 Emergency Cash Requirement : USD 25 View more",
  },
  {
    Question: "How can I cancel my ForexPlus Platinum Card",
    Answer:
      "To cancel your Forex Plus Platinum Card, we request you to contact the PhoneBanking team or walk into your nearest M&N  Bank branch and place a request towards cancellation. Your request will be processed within one working day of us receiving the request. There are no charges towards the cancellation of a Forex Plus Platinum card. However, currency conversion tax as applicable from time to time will be deducted at the time of providing credit to you. Kindly visit the following URL to access information for the complete address and contact details of our Branches and PhoneBanking centers",
  },
  {
    Question: "How does this card work",
    Answer:
      "Your M&N  Bank ForexPlus Platinum card will be activated with the required Euro / GBP and USD within 4 hours from the bank getting the clear funds from you. Once actived, the card can be used at any international location for making payments at POS terminals or to withdraw cash at ATMs. (Usage of the card is not allowed in India, Nepal and Bhutan.) M&N  Bank ForexPlus Platinum card works just like any Debit / Credit Card for making payments at Merchant Establishments that have an electronic terminal. The transaction amount is deducted from available balance on the ForexPlus card. M&N  Bank ForexPlus Platinum card is accepted at all Merchant Establishments displaying the Visa / Mastercard symbol. The card can be used to withdraw cash at all Visa / Mastercard ATMs worldwide. Irrespective of the currency loaded on the card, the cash will be dispensed based on the currencies supported at the ATMs. Please ensure that you remember the PIN given to you with the card pack, the PIN is unique for every card and cannot be changed at any domestic or international ATM. View more",
  },
  {
    Question:
      "Are there any transactions for which this Card should not be used",
    Answer:
      "Yes, your ForexPlus card should not be used towards temporary charge blocks - e.g. paying deposits at hotels, hiring of cars etc. Incase you have paid these deposits using ForexPlus card and the hotel/car rental agency etc. settles the transaction for an amount lesser than the amount blocked or you make final payment through any different mode, the balance amount will get credited into your account only after 30 days from the transaction date. Note: the Bank reserves the right to charge the Card holder for any unauthorized amounts.",
  },
  {
    Question: "Can I issue Cheque for loading of ForexPlus Platinum Card",
    Answer:
      "Customer can load ForexPlus Platinum card by issuance of cheque against the amount to be loaded. However, cards will be loaded post realisation of the cheque deposited by the customer. The exchange rate applicable will be for the day on which funds are realized and card is activated",
  },
  {
    Question: "How do I activate e-commerce on my card",
    Answer:
      "Follow 2 simple steps: Step 1: Log on to Prepaid Card Net Banking. Step 2: Enable your e-commerce transaction facility to make purchases.",
  },
  {
    Question: "What services I can avail on GCAS",
    Answer:
      "You can avail the following services through GCAS: a) Report loss of card or hotlist your card b) Request for a Replacement Card c) Request for the requirement of Emergency cash View more",
  },
  {
    Question: "Can the ATM PIN be changed",
    Answer:
      "No, the ATM PIN cannot be changed at the ATM. In case you have forgotten or lost the PIN, you will need to request for a new PIN with the help of PhoneBanking or thorugh Prepaid NetBanking",
  },
  {
    Question: "Can I use the DCC/ MCC option at the time of transaction",
    Answer:
      "Whenever ForexPlus cardholder opts for DCC/MCC option on DCC/MCC enabled POS/ATM terminals, his/her transaction passes through cross currency transactions twice. It is not advisable for a ForexPlus cardholder to opt for DCC/MCC while using ForexPlus Platinum card for making payments. Please note that every cross currency transaction attracts currency conversion charges at applicable rates. Apart from this, the cardholder will also get penalised due to fluctuation in currency conversion rate.",
  },
  {
    Question:
      "How will I know which ATMs accept the M&N  Bank ForexPlus Platinum Card",
    Answer:
      "All ATMs displaying the VISA Logo will accept the M&N  Bank ForexPlus Platinum Card.",
  },
  {
    Question:
      "How can I avail of Global Customer Assistance Services (GCAS) for my ForexPlus Platinum Card",
    Answer:
      "You can call the VISA call centre numbers to avail the services available on Global Customer Assistance Services. Click here for Country wise Visa Call Centre numbers.",
  },
  {
    Question: "How do I know if an ATM will accept my ForexPlus Platinum Card",
    Answer:
      "ForexPlus Platinum cards are accepted at Visa ATMs. Please look out for the VISA/PLUS logo while searching for ATM.",
  },
  {
    Question: "Can I load Forex card by making payment in Cash",
    Answer:
      "No, Forex card can not be loaded against payment of cash. In case existing bank customer need to load his/her forex card by making payment in Cash then, the customer need to deposit cash in his/her account and then issue cheque or debit instruction to load the card.",
  },
  {
    Question:
      "What documents should I submit when I purchase the M&N  Bank ForexPlus Platinum card",
    Answer:
      "M&N  Bank Savings / Current account holders need to just submit completed application form, copy of ticket or the Visa and form A2 (or any other documentation as mandated under prevalant FEMA guidelines) If you don't have M&N  Bank Savings / Current account, you need to submit completed application form, copyof ticket or the Visa and form A2 (or any other Forex documentation as mandated under prevalant FEMA guidelines) as well as a Photocopy of your valid Passport.",
  },
  {
    Question: "Where do I get this card",
    Answer:
      "ForexPlus Platinum card is available over the counter at M&N  Bank branches. You simply need to walk into our branch with required documentation and walk out with ForexPlus Platinum card. The card will get activated within 4 hours from realization of funds. Alternatively, the customer can apply for card through NetBanking login also.In case the customer applies the card through NetBanking the card will be delivered to the customer within 2 working days. This facility is available at select locations only.",
  },
  {
    Question: "What happens if my card is lost",
    Answer:
      "In case your card gets lost or stolen, all you have to do is call M&N  Bank 24x7 PhoneBanking immediately and report the loss of your card. The card can also be hotlisted using our Prepaid NetBanking facilityIn case you have opted for a back-up card, then you can request to activate back-up card and transfer balance on your hotlisted card to the back-up card. Balance transfer will be carried out instantaneously.",
  },
  {
    Question: "What does DCC/ MCC stand for",
    Answer:
      "DCC stands for Dynamic Currency Conversion whereas MCC stands for Multiple Currency Conversoin. DCC / MCC at ATM / POS gives the cardholder an option to initiate a transaction in the currency of his choice. It also assists the cardholder to know the exact transaction value in the currency selected at the time of transaction.",
  },
  {
    Question: "Can I load ForexPlus Platinum card by making payment in Cash",
    Answer:
      "No, ForexPlus Platinum card cannot be loaded against payment of cash.",
  },
  {
    Question: "Who can purchase ForexPlus Platinum Card",
    Answer:
      "ForexPlus Platinum card can only be used for making payments outside India except for Nepal & Bhutan. Whenever the cardholder is using his card he must be present at the place of transaction & need to sign the chargeslips. Thus, we issue ForexPlus Chip card to customers travelling abroad basis valid documentation proof.",
  },
  {
    Question: "How much foreign exchange can I retain after the foreign trip",
    Answer:
      "After returning from the overseas trip, you are required to surrender unspent foreign exchange held by you within 180 days of return. You can retain foreign exchange up to USD 2,000 (or equivalent) for future use after returning back to India.",
  },
  {
    Question: "Can the value of the card be topped up",
    Answer:
      "Yes, your ForexPlus Platinum Card can be reloaded multiple times in future till the card gets expired: You can authorize the Bank to debit your M&N  Bank account by giving an M&N  Bank cheque or make payment using a local cheque drawn on M&N  Bank and reload the card for desired value. Reload requests can be made by any authorized person on your behalf. The person authorised by you for the same will need to come to bank branch and will need to provide the necessary documents to the bank to carry out reload. On receipt of the application form and the funds, your card will get reloaded for the desired amount. M&N  Bank customers can also place a request to reload the card through M&N  Bank PhoneBanking services. Incase the Card is issued by your corporate/employer, reload requests received through them will be acted upon by M&N  Bank.",
  },
  {
    Question: "How is the value topped up",
    Answer:
      "GiftPlus cards are non reloadable in nature and hence cannot be topped up.",
  },
  {
    Question: "How do I purchase M&N  Bank GiftPlus card",
    Answer:
      "GiftPlus cards are available in all M&N  bank branches. You can also purchase GiftPlus card online, through our NetBanking service.Detailed steps for online purchase is mentioned below:Log on NetBanking.Go to Accounts section and select Purchase Gift Card.GiftPlus Card can be personalised with the beneficiary name as provided by you. You will need to have Financial rights (TPT) for this transaction.",
  },
  {
    Question: "Can I load GiftPlus card by making payment in Cash",
    Answer:
      "No, GiftPlus card cannot be loaded against payment of cash. GiftPlus card can be loaded by way of a Direct debit to your M&N  Bank account, local cheque drawn on M&N  Bank or demand draft",
  },
  {
    Question: "Can the value of the card be topped up",
    Answer:
      "Gifting we believe is special to the occasion and hence you cannot reload this card. Every occasion is a new occasion and deserves a new card.",
  },
  {
    Question: "How soon can I get a GitfPlus card",
    Answer:
      "In our bank branches, GiftPlus Card can be availed of from over the counter. These cards however are non-personalised. If a personalised card is requested online or at any branch, the TAT is 5-7 working days.The convenience of online purchase is that the card will be delivered to the address specified in your instructions",
  },
  {
    Question: "Can  Gift plus card used outside India",
    Answer:
      "GiftPlus Card is a INR Prepaid card, which can be used only in India.",
  },
  {
    Question: "Is there a fee levied for the use of the card",
    Answer:
      "No, there is no charge on the usage of the card. However, there are charges for reissuance.Any Surcharge on account of card usage would be applicable on this card and is Nonrefundable by Bank",
  },
  {
    Question: "How soon can I use the card after I have purchased it",
    Answer:
      "Your card will be activated with the loaded amount within a few hours after the bank has received clear funds from you. Once activated, the card is ready for use.",
  },
  {
    Question:
      "What documents should I submit when I purchase an M&N  Bank Giftplus card",
    Answer:
      "If you are an existing M&N  Bank Current or Savings Account holder then you just need to submit the Giftplus card application form. If you are not an existing M&N  Bank Current or Savings Account holder then you need to submit the Giftplus card application form along with your ID proof and address proof.",
  },
  {
    Question: "Is there a load amount limit",
    Answer:
      "Yes, a card balance cannot be more than Rs. 50,000 at any given point in time.",
  },
  {
    Question: "What are the charges on the card",
    Answer:
      "The usage of the card is not charged but the reissuance of the card is charged Rs. 100 per reissuance.",
  },
  {
    Question: "What if I forget my ATM PIN",
    Answer:
      "You can call your local M&N  bank PhoneBanking number and ask for a new PIN to be reissued to you. The PIN however will be delivered to the purchaser's address with the bank. You can request for a new PIN over the Internet through your Giftplus card account.",
  },
  {
    Question: "Who should I contact if my card is lost or stolen",
    Answer:
      "In case your card gets lost or stolen, all you have to do is call M&N  Bank PhoneBanking immediately and report the loss of your card. This facility is available 24 hrs. on all days. The card can also be hotlisted using our Prepaid card NetBanking facility on www.M&N bank.com. A new Card will be issued and the residual balance on your hotlisted Card will be transferred to your new Card.New card will be issued only basis the request received from the purchaser.The request for balance transfer from old card to new card will be honored only basis the request received from purchaser",
  },
  {
    Question: "Can the ATM PIN be changed",
    Answer: "No, the ATM PIN cannot be changed.",
  },
  {
    Question:
      "Do I need to have an M&N  Bank account to purchase an M&N  Bank Giftplus card",
    Answer:
      "No, you dont need to have an M&N  Bank account to purchase a Giftplus card. Simply walk into any M&N  Bank branch in India, submit your KYC documents and purchase an M&N  Bank Giftplus card over the counter.Mode of payment : Cheque/DD",
  },
  {
    Question: "Are there any transactions for which I cannot use the Card",
    Answer:
      "Yes, the card cannot be used to withdraw cash. It can only be used for POS transactions. Note: The Bank reserves the right to charge the Cardholder for any unauthorized amounts.",
  },
  {
    Question: "What is the M&N  Bank Giftplus card",
    Answer:
      "M&N  Bank's GiftPlus card is a magnetic strip based prepaid card brought to you in partnership with VISA",
  },
  {
    Question: "How soon can I get a FoodPlus card",
    Answer:
      "FoodPlus card is a personalized VISA Card and the TAT for receiving a personalized card is 7 working days.",
  },
  {
    Question:
      "Will I be able to Transfer money to Food plus card from my account or from any other account",
    Answer:
      "Food Plus card is a corporate card, any instruction with regards to load / reload and BT in the card can be done only on the basis of Corporate Instructions to the Bank. Individual Cardholder requests cannot be Processed.",
  },
  {
    Question: "What happens if the PIN is forgotten",
    Answer:
      "The cardholder should call PhoneBanking and ask for a reissuance. Remember that the PIN will be delivered to the purchaser's address.",
  },
  {
    Question: "What is M&N  Bank's FoodPlus card",
    Answer:
      "It is an electronic VISA prepaid card issued to corporate organizations.",
  },
  {
    Question: "What do I need to know about the M&N  Bank FoodPlus Card",
    Answer:
      "The M&N  Bank FoodPlus Card is an electronic prepaid card designed for meal allowances.",
  },
  {
    Question: "Can I use the card to withdraw cash",
    Answer: "No, it cannot be used for cash withdrawls at ATM.",
  },
  {
    Question: "How can I load/reload  my FoodPlus card",
    Answer:
      "Your FoodPlus card can be loaded/reloaded only basis the instructions received from your employer.",
  },
  {
    Question: "Is there a load amount limit",
    Answer:
      "Card balances cannot be more than Rs.10,000/-* at any given point of time, additionally, the cumulative amount of load/reload also cannot exceed Rs.10,000/-* in a month",
  },
  {
    Question: "Is there a usage limit",
    Answer:
      "Rs 10,000 per transaction for cash withdrawals No usage limit on POS usage",
  },
  {
    Question: "How soon can I get a MoneyPlus card",
    Answer:
      "MoneyPlus card is a personalized VISA Card and the TAT for receiving a personalized card is 7 working days.",
  },
  {
    Question: "Is there a load amount limit",
    Answer:
      "Card balances cannot be more than Rs. 50,000 at any given point in time.",
  },
  {
    Question: "What is the M&N  Bank MoneyPlus Card",
    Answer:
      "It is an electronic prepaid card issued to corporate organizations.",
  },
  {
    Question: "How do I top up the value a card",
    Answer:
      "Loading and reloading is as per the corporate instructions. It is not possible for cardholders to request a reload.",
  },
  {
    Question: "How to set the ATM PIN",
    Answer:
      "Please note that the Bank does not provide ATM PIN for your M&N  Bank Multi Currency ForexPlus Platinum Card. You need to set the ATM PIN online by using M&N  Bank Prepaid Card NetBanking service. In future also you can use the NetBanking service to reset your ATM PIN.",
  },
  {
    Question: "What options should I choose to withdraw cash from the ATM",
    Answer:
      "At the time of cash withdrawal across VISA/Plus ATMs abroad, the screen will display 3 options for the type of account you carry out transactions in: Credit Saving Checking Please choose the credit option for transaction to be successful or if this option is not available then only choose the checking option.",
  },
  {
    Question: "What services can I avail on GCAS",
    Answer:
      "You can avail following services Through GCAS Emergency Card Replacement Emergency Cash Disbursement Cardholder Inquiry Service Lost and Stolen Card Reporting Emergency Legal Assistance Emergency Medical Assistance Emergency Message service Emergency Ticket Replacement Assistance Emergency Translation Service Lost Luggage Assistance Note: Visa Charges are applicable",
  },
  {
    Question: "Do I need to load all currencies on the card",
    Answer:
      "You can load only the currency of your choice depending on your need.",
  },
  {
    Question:
      "How can I avail of Global Customer Assistance Services (GCAS) for my M&N  Bank Multi Currency ForexPlus Platinum Card",
    Answer:
      "You can call The following Toll free numbers for visa GCAS United States: 1-866-765-9644, United Kingdom: 0800-169-5189, Australia: 1800-450946, Canada: 1-866-639-1911, France: 0800-904349, Germany: 08001822891, Singapore: 800-4481- 250, Hong Kong: 800-900-782, Japan: 00531-44-002 Alternatively, you can place a collect call through your local operator to +1 443 641 2004 Or for Country wise VISA call center numbers click the following link << Visa Global Customer Assistance>>",
  },
  {
    Question:
      "Do I need to pay an additional amount over and above the Cash withdrawal Charges levied by M&N  Bank for ATM transactions",
    Answer:
      "The Banks in the U.S. are given right by the local federal laws to charge Surcharge/fees from other Bank customer's accessing their ATM to withdraw money. Accordingly many ATMs in US do levy charges for withdrawing from their ATM over and above the charges levied by the M&N  Bank. Similarly, there are certain ATMs across other countries which may levy a charge for transactions done by other bank customers. This charge is normally displayed to the customer during the transaction and the customer has the option to either proceed with the transaction or abort it.",
  },
  {
    Question:
      "What if I donâ€™t have sufficient balance in the wallet corresponding to currency of transaction",
    Answer:
      "If the balance in your wallet corresponding to currency of transaction goes down then your Card checks for balances in the other currency wallets and transaction is processed by debiting the currency wallet with sufficient balance by converting the wallet currency into the currency of transaction. In this case currency conversion charges are applicable. Please note that in such a scenario entire transaction amount would be debited from currency wallet with sufficient balance.",
  },
  {
    Question: "What if I forget or lose the activation code",
    Answer:
      "You will have to enter your M&N  Bank Multi Currency ForexPlus Platinum Card number and other requisite details on the M&N  Bank Prepaid card NetBanking login page. After you fill the requisite details your activation code will be sent to you on your registered email account.",
  },
  {
    Question:
      "Do I need to have an M&N  Bank account to purchase M&N  Bank Multi Currency ForexPlus Platinum Card",
    Answer:
      "No, you don't need to have an account with M&N  Bank to purchase the M&N  Bank Multi Currency ForexPlus Platinum Card. You can just walk into any of our M&N  bank branches in India and purchase it over the counter.",
  },
  {
    Question: "What is activation code",
    Answer:
      "The activation code is required to activate your M&N  Bank Multi Currency ForexPlus Platinum Card NetBanking service.",
  },
  {
    Question: "What is the validity period of my Card",
    Answer: "Your Card is valid for 5 years.",
  },
  {
    Question: "Which currencies can I carry on the card",
    Answer:
      "You can carry following currencies on your M&N  Bank Multi Currency ForexPlus Platinum Card - Australian Dollar, United Arab Emirates Dirham, Canadian Dollar, Euro, Japanese Yen, Singapore Dollar, Sterling Pound, Swiss Franc, Swedish Krona and US Dollar.",
  },
  {
    Question: "Whom should I contact if my Card is lost or stolen",
    Answer:
      "Immediately report the loss of your M&N  Bank Multi Currency ForexPlus Platinum Card by calling M&N  Bank PhoneBanking. You will not be liable for transactions on your Card Account (if any) from the moment card loss is registered with the bank. You can also hotlist the card by using NetBanking services.",
  },
  {
    Question: "Can the value of the Card be topped up",
    Answer:
      "Top-ups or reloads can be carried out in 2 ways a) You can authorize the Bank to debit your account by giving an M&N  Bank cheque, cash or a local cheque drawn on M&N  Bank to reload the Card. b) The Card can also be reloaded by another person, authorized by you to reload your Card. The authorized person will need to visit the M&N  Bank branch with the money and will need to provide the necessary documents to the bank. On receipt of the application form and the funds, your Card will be reloaded with the desired amount.",
  },
  {
    Question: "Can this Card be used in India",
    Answer: "No, this Card cannot be used in India, Nepal and Bhutan.",
  },
  {
    Question: "How much Foreign exchange can I load into the card",
    Answer:
      "You can load the currencies as per the limits prescribed by FEMA guidelines.",
  },
  {
    Question: "How does this Card work",
    Answer:
      "Your M&N  Bank Multi Currency ForexPlus Platinum Card will be activated and loaded with the Currencies as per your instructions. Once active, the card can be used at any International location across all currencies. (Usage of the card is not allowed in India, Nepal and Bhutan)",
  },
  {
    Question: "How do I get the activation code",
    Answer:
      "Your activation code is provided to you in your M&N  Bank Multi Currency ForexPlus Platinum Card kit and can be found on the Card Mailer beneath the card plastic.",
  },
  {
    Question: "How do I get the NetBanking PIN",
    Answer:
      "Please note that the Bank does not provide NetBanking PIN (IPIN) for your M&N  Bank Multi Currency ForexPlus Platinum Card. You need to set the IPIN online by using M&N  Bank Prepaid Card NetBanking service. In future also you can use the NetBanking service to reset your NetBanking PIN.",
  },
  {
    Question: "How many currencies can I carry on the card",
    Answer:
      "You can carry a maximum 10 currencies on your M&N  Bank Multi Currency ForexPlus Platinum Card",
  },
  {
    Question:
      "Are there any transactions for which the Card   should not be used",
    Answer:
      "Yes, your Card should not be used for temporary charges - e.g. paying deposits at hotels, hiring of cars etc. In case you have paid these deposits using your M&N  Bank Multi Currency ForexPlus Platinum Card and the hotel/car rental agency etc. settles for an amount less than the deposited amount or you pay through a different mode the balance amount will be credited to your account only after 35 days from the transaction date.",
  },
  {
    Question: "Can I get a refund towards residual Forex on my return",
    Answer:
      "After you return you can choose to cash out any residual foreign currency on your Card. The zero value or partially loaded card plastic can still be with you and you can reload it or use it till the validity of the card, which is 5 years.",
  },
  {
    Question: "Can I reload my Card while I am abroad",
    Answer:
      "You can reload the Card through a person appointed by you. The authorized person can reload the card by visiting any of the M&N  Bank branch.",
  },
  {
    Question: "Can I transfer currency on my Card from one wallet to other",
    Answer:
      "You can transfer balance of one currency wallet to other currency wallets depending on your need using the NetBanking facility. Currency conversion charges as decided by the Bank from time to time would be applicable for such transfers and would be communicated to you at the time of transfer.",
  },
  {
    Question: "Can I use the Card to pay in any currency",
    Answer:
      "Yes the Card can be used to pay in any currency apart from those loaded in the Card. The Card itself converts the balance in the currency wallets to the currency of transaction. Currency conversion charges will be applicable.",
  },
  {
    Question: "What if I Forget my Activation Code",
    Answer:
      "Visit M&N  bank Prepaid NetBanking option and select Forgot Activation Code and provide your card number, Date of Birth and passport number. The code will be sent to your registered email ID. Click here to see the demo.",
  },
  {
    Question: "How can I cancel my Multicurrency Platinum ForexPlus Card",
    Answer:
      "To cancel your Multicurrency card, we request you visit our your nearest M&N  Bank branch and place a request towards cancellation the of the card. Your request will be processed within one working day of us receiving the request and the available balance on the card will be refunded back to your account. Incase you do not have an account with us then a demand draft shall be issued for the respective refund amount. There are no charges towards the cancellation of a Multicurrency card. However, currency conversion tax as applicable from time to time will be deducted at the time of providing credit to you. Kindly visit the following URL to access information for the complete address and contact details of our Branches and PhoneBanking centers:",
  },
  {
    Question:
      "Do I need to have M&N  Bank account to purchase the Multicurrency Platinum ForexPlus Chip card",
    Answer:
      "No, you don't need to have an account with M&N  Bank to purchase the Multicurrency card. You can just walk into any of our M&N  bank branches in India and purchase it over the counter.",
  },
  {
    Question:
      "What documents should I submit when I purchase the M&N  Bank Multicurrency Platinum ForexPlus Chip card",
    Answer:
      "M&N  Bank Savings / Current account holders need to just submit completed application form and copy of valid Passport (or any other documentation as mandated under prevalent LRS guidelines) If you don't have M&N  Bank Savings / Current account, you need to submit completed application form, copy of valid Passport and copy of Ticket or Visa (or any other documentation as mandated under prevalent LRS guidelines) .",
  },
  {
    Question: "What is the maximum value for which the Card can be used",
    Answer:
      "There is no limit imposed on the usage of Platinum Multicurrency card. Customer's can withdraw/utilise any amount, upto the value loaded on Platinum Multicurrency card at any ATM/POS. However, there are some ATMs service providers which have put in per day / per transaction limit towards cash dispense which cannot be changed by the Bank. In such cases the cardholder might need to do multiple transactions if he wants to withdraw any amount higher than that allowed in one transaction.",
  },
  {
    Question:
      "Is Multicurrency Platinum ForexPlus Chip card enabled for Verified by VISA (VBV)",
    Answer:
      "Ypes, Multicurrency card offered on VISA platform are pre-enabled for Verified by VISA that allows you to securely perform Ecommerce transactions. Following are the steps to perform Ecommerce transaction with VBV participating merchants: Select the goods or services you want from a online store and proceed to the payment page. Enter your M&N  Bank Multicurrency Platinum ForexPlus Chip card Visa number and the online store will connect with M&N  Bank to check whether your Card is secured with Verified by Visa. Enter your IPIN (used for login to Prepaid NetBanking) and M&N  Bank will then confirm your identity to the merchant. Your payment is authorized and your order is placed.",
  },
  {
    Question: "What happens if my card is lost",
    Answer:
      "In case your card gets lost or stolen, all you have to do is call M&N  Bank PhoneBanking immediately and report the loss of your card. This facility is available 24 hrs. on all days. In case if you have been issued a back-up card in the kit, you can activate the back-up card by calling M&N  Bank Phone Banking or through Prepaid NetBanking. Once the back-up card is activated, all the funds from primary card will be transferred automatically to the back up card.",
  },
  {
    Question: "Can the value of the card be topped up",
    Answer:
      "Yes, your Multicurrency card can be reloaded multiple times in future till the card gets expired. Existing bank customers can reload their Multicurrency card through M&N  Bank NetBanking by selecting Reload Forex Card under the option of Cards tab. Alternatively existing customers can also place in a request to reload the card through M&N  Bank PhoneBanking service. Incase the Card is issued by your corporate/employer, reload requests received through them will be acted upon by M&N  Bank.",
  },
  {
    Question: "Can I use the card to pay in any currency",
    Answer:
      "Yes, the card is accepted for payment in any currency apart from those loaded on the card. Please note that cross currency conversion charges will be applicable while processing such transactions.",
  },
  {
    Question:
      "Do I need to activate Multicurrency Platinum ForexPlus Chip card for Ecommerce transactions",
    Answer:
      "You Multicurrency card is pre-activated to perform Ecommerce transactions once your card is loaded with the Forex currency required.",
  },
  {
    Question:
      "Can I issue cheques to load the Multicurrency Platinum ForexPlus Chip card",
    Answer:
      "Customer can load Multicurrency card by issuance of cheque against the amount to be loaded. However, cards will be loaded post realisation of the cheque deposited by the customer. The exchange rate applicable will be for the day on which funds are realized and card is activated.",
  },
  {
    Question: "Are there extra charges to be aware of",
    Answer:
      "A few things to note - US Banks are given the right to add a surcharge to other bank customers accessing their ATMs. There are also certain ATMs in other countries that may levy a charge for transactions made by non-bank customers. These fees are normally displayed during the transaction. Check for this, so that you can either proceed with or end the transaction.",
  },
  {
    Question:
      "I'm not a traveller, can I still benefit from the Multicurrency Card",
    Answer:
      "The Multicurrency Platinum ForexPlus Chip Card is only for travellers, and cannot be issued to non-travellers",
  },
  {
    Question:
      "What if the customer is passing by a terminal and a Contactless transaction takes place",
    Answer:
      "The Contactless technology works when the card is waved at a maximum range of 4 cms. Hence, even if the customer is at a small distance from the terminal, no accidental transaction can take place, Plus the cashier must first enter the amount on the PoS machine before the card is tapped/ waved and the payment is processed",
  },
  {
    Question:
      "Is there any difference in the process for ATM and Internet transaction for this Contactless Card",
    Answer:
      "There is no difference in the transaction process for ATM & Internet transactions. For ATM transactions you need to enter the PIN and for Internet transaction you need to enter your 3D secure PIN or OTP",
  },
  {
    Question: "What services can I avail on GCAS",
    Answer:
      "You can avail following services through GCAS Emergency Card Replacement Emergency Cash Disbursement Cardholder Inquiry Service Lost and Stolen Card Reporting Note: Visa Charges are applicable",
  },
  {
    Question: "What if I forget my ATM PIN",
    Answer:
      "Customer can reset ATM PIN by following the below steps: Login to Prepaid NetBanking using IPIN Select My Request ->Set ATM PIN -> Selects the Active Card (Radio Button) Answer the secret question. Mention DOB, Card Expiry and submit Enter the new ATM PIN to be set and finally submit. You will then get an SMS / email alert on your registered mobile number / email address",
  },
  {
    Question: "Which are the currencies that can be loaded on the card",
    Answer:
      "There are 23 currencies offered which can be loaded on the card: Australian Dollar (AUD) Dirhams (AED) Canadian Dollar (CAD) Euro (EUR) Japanese Yen (JPY) Singapore Dollars (SGD) Sterling Pound (GBP) Swiss Franc (CHF) US Dollar (USD) Swedish Krona (SEK) HongKong Dollar (HKD) Thailand Baht (THB) South African Rand (ZAR) Oman Riyal (OMR) New Zealand Dollar (NZD) Danish Krone (DKK) Norwegian Krone (NOK) Saudi Riyal (SAR) Malaysian Ringgit (MYR) Korean Won (KRW) Kuwait Dinar (KWD) Bahrain Dinar (BHD) Qatari Riyal (QAR)",
  },
  {
    Question:
      "How much is the currency conversion service tax applicable at the time of Load, Reload and Refund",
    Answer:
      "Following are the currency conversion service tax slabs applicable at the time of Load, Reload and Refund: Buy and Sell Forex Currency Service Tax Amount Up to Rs. 1 lakh 0.14% of the gross value or Rs. 35/- whichever is higher From Rs. 1 lakh to Rs 10 Lakhs Rs. 140 plus 0.07% of the amount exceeding Rs. 1 lakh From Rs. 10 lakhs and above Rs. 770 plus 0.014% of the amount exceeding Rs. 10 Lakhs, subject to a maximum of Rs. 7000",
  },
  {
    Question:
      "How to set Prepaid NetBanking Login User ID / Password for the first time",
    Answer:
      "You may have received IPIN or Activation Code in the kit provided to you. The Activation Code will be printed on the card mailer below the card whereas the IPIN will be printed on the PIN mailer along with ATM PIN. The Activation Code / IPIN is required to set your NetBanking Password for your Multicurrency card for the first time. Following steps should be followed for setting NetBanking User ID / Password for the first time using Activation Code / IPIN: Visit M&N  Bank website and select Prepaid NetBanking Enter the Card Number in User ID/Card Number field and the Activation Code / IPIN (mentioned in the PIN mailer) in the Password field. Input User ID of your choice for future login purpose Select the secret question from a dropdown menu and provide the answer Mention the new Password and reconfirm the same With the new User Id and Password you can then login to access your card account",
  },
  {
    Question: "What are the authorization scenarios",
    Answer:
      "When the card holder performs a payment transaction, the debit would take place on the priority as per the grid provided belowScenario 1 - If the customer has local currency (depending on country of transaction) wallet with sufficient balance then the transaction will be processed using the balances on the local currency walletScenario 2 â€“ If the local currency is part of the offered multiple currencies on the card but customer does not have sufficient balance in local currency wallet, however if the customer has sufficient balance (equivalent to local currency) on default currency wallet (EUR) then the transaction will be processed using the balances on the default currency wallet. Value from the default currency will be converted to local currency using cross currency conversion rate decided by the Bank. This rate will be calculated with a 2% markup on the IBR cross currency rateScenario 3 â€“ If the local currency is part of the offered multiple currencies on the card but customer does not have sufficient balance in local currency wallet as well as default currency wallet (EUR) however if the customer has sufficient balance (equivalent to local currency) on any other currency wallet then the transaction will be processed using the balances from the respective currency wallet. The card will look for balances across all the currency wallets in following order of priority as decided by the Bank1. EUR2. GBP3. AUD4. CAD5. SGD6. AED7. JPY8. CHF9. SEK10. HKD11. THB12. ZAR13. NZD14. OMR15. DKK16. NOK17. SAR18. MYR19. KRW20. BHD21. QAR22. KWD23. USDValue from the respective currency will be converted to local currency using cross currency conversion rate decided by the Bank. This rate will be calculated with a 2% markup on the IBR cross currency rateScenario 4 - If the customer transacts in currency which is not offered on the card, the transaction will be processed by debiting default currency (EUR) wallet. Cross currency conversion would take place as per existing Visa / MasterCard rates (3%) applicable for single currency cards. In case the default currency wallet does not have sufficient balance then funds would be pulled from wallet with sufficient funds and converted to the default currency using Bankâ€™s currency conversion rate. Partial transactions in different currency wallets are not allowed. If the customer does not have sufficient balance to process the transactions individually in any of the currency wallets, the transaction is declined even if the collective balances on the card across all currencies is sufficient to process the transaction",
  },
  {
    Question:
      "How can I check the balance on my M&N  Bank Multicurrency ForexPlus Chip card",
    Answer:
      "You can check the balance on all the active currency wallets on Multicurrency card with the help of Prepaid NetBanking facility. Alternately, you can also contact our PhoneBanking services to check the balance on your Multicurrency card.",
  },
  {
    Question:
      "Are there any transactions for which this Card should not be used",
    Answer:
      "Yes, your Multicurrency ForexPlus Platinum card should not be used towards temporary charge blocks - e.g. paying deposits at hotels, hiring of cars etc. Incase you have paid these deposits using ForexPlus Platinum Multicurrency card and the hotel/car rental agency etc. settles the transaction for an amount lesser than the amount blocked or you make final payment through any different mode, the balance amount will get credited into your account only after 30 days from the transaction date. Note: The Bank reserves the right to charge the Card holder for any unauthorized amounts.",
  },
  {
    Question:
      "Do I need to pay additional amount over and above Cash withdrawal Charges levied by the M&N  Bank for ATM transaction",
    Answer:
      "In certain countries ATM Service providers are authorized to charge surcharge/convenience fees from the cardholders for accessing the ATM to withdraw money. These charges are levied by the ATM service provider over and above the charges levied by the M&N  Bank, and M&N  Bank bank has no control over the charges as these charges are not levied by the bank.These charges are normally displayed to the customer during the transaction and the customer has the option to either proceed with the transaction or abort if the charges are not acceptable to the customer.",
  },
  {
    Question: "What does DCC/ MCC stand for",
    Answer:
      "DCC stands for Dynamic Currency Conversion whereas MCC stands for Multiple Currency Conversoin. DCC / MCC at ATM / POS gives the cardholder an option to initiate a transaction in the currency of his choice. It also assists the cardholder to know the exact transaction value in the currency selected at the time of transaction.",
  },
  {
    Question: "How to use Contactless Mutlicurrency ForexPlus Card",
    Answer:
      "Look for Visa payWave/ MasterCard PayPass mark and contactless logo at the Point of Sale terminal machine at merchant outlet Check the transaction amount displayed on the machine screen and tap/ wave your Contactless MultiCurrency Card from a 4 cm range Enter your 4-digit ATM PIN on the machine, if prompted A green light will signal indicating that the transaction is complete",
  },
  {
    Question: "What is the M&N  Bank Contactless MulticurrencyForexPlus card",
    Answer:
      "M&N  Bank Contactless Multicurrency ForexPluscard is an embedded chip based prepaid forex card introduced in partnership with VISA/MasterCard International. It is the first card to offer you the option of carrying upto 23 currencies simultaneously in a single card in a convenient and secure way. This card gives you the freedom to shop anywhere in the world and provides access to the currency of your destination at competitive market rates. It can be used at all VISA/MasterCard affiliated ATMs and merchant establishments worldwide. This card cannot be used for payments in India, Nepal or Bhutan.",
  },
  {
    Question: "How many days in advance can I purchase foreign exchange",
    Answer:
      "You can purchase foreign exchange up to 60 days in advance from the date of departure.",
  },
  {
    Question: "How do I know if an ATM will accept my Multicurrency Card",
    Answer: "Look out for the VISA logo.",
  },
  {
    Question: "Where do I get this card",
    Answer:
      "Contactless Multicurrency ForexPlus cardis available over the counter at M&N  Bank branches. You simply need to walk into our branch with required documentation and walk out with the Multicurrency card. The card will get activated within 5 to 6 hours from realization of funds. Alternatively existing bank customers can apply for the card by logging in to M&N  Bank NetBanking by selecting Purchase Forex Card option under Cards tab.",
  },
  {
    Question: "Can I use the DCC/ MCC option at the time of transaction",
    Answer:
      "Whenever Platinum Multicurrency cardholder opts for DCC/MCC option on DCC/MCC enabled POS/ATM terminals, his/her transaction passes through cross currency transactions twice. It is not advisable for a ForexPlus cardholder to opt for DCC/MCC while using ForexPlus Platinum card for making payments.Please note that every cross currency transaction attracts currency conversion charges at applicable rates. Apart from this, the cardholder will also get penalised due to fluctuation in currency conversion rate.",
  },
  {
    Question:
      "How can I avail of Global Customer Assistance Services (GCAS) for my Multicurrency Card",
    Answer:
      "You can call the VISA call centre numbers to avail VISAâ€™s Global Customer Assistance Services. You can find a countrywise list of GCAS numbers at http://www.visa-asia.com/ap/Subscription/gcas.jsp",
  },
  {
    Question:
      "What are the exchange rates applicable when I use my Travel Card for transactions (Cash withdrawal at ATMs and point of sale transactions at Merchant Outlets)",
    Answer:
      "If the transaction is done in base currency (currency with which the card was loaded), there is no exchange rate applicable. However, for transactions other than the base currency, exchange rates / conversion rates from the base currency to the local currency would be applicable.",
  },
  {
    Question: "How does Contactless MultiCurrency ForexPlus card work",
    Answer:
      "Your M&N  Bank Contactless Multicurrency ForexPlus card will be activated with the required currencies within 5 to 6 hours from the bank getting the clear funds from you. Once active, the card can be used at any international location for making payments at POS terminals or to withdraw cash at ATMs. (Usage of the card is not allowed in India, Nepal and Bhutan.) M&N  Bank Contactless MultiCurrency ForexPlus Card has a chip & a radio frequency antenna embedded. When the Contactless Card is tapped/ waved against the terminal enabled for contactless payments the card transmits payment details wirelessly, eliminating the need to insert it. Account details are communicated to the reader and then processed through the secure Visa/ MasterCard acceptance network in the usual way M&N  Bank Contactless Multicurrency ForexPlus card works just like any Debit / Credit Card for making payments at Merchant Establishments that have an electronic terminal. The transaction amount is deducted from available balance on the Multicurrency card. M&N  Bank Contactless Multicurrency ForexPlus card is accepted at all Merchant Establishments displaying the VISA/MasterCard symbol. The card can be used to withdraw cash at all VISA/MasterCard ATMs worldwide. Irrespective of the currency loaded on the card, the cash will be dispensed based on the currencies supported at the ATMs. Please note that you can select /change your ATM PIN with the help of Prepaid NetBanking facility for Multicurrency Cards.",
  },
  {
    Question:
      "Can I load multiple currencies on one Multicurrency Platinum ForexPlus Chip card",
    Answer:
      "Yes, you can carry more than one currency on your Multicurrency card. Only M&N  Bank Multicurrency Platinum ForexPlus Chip card gives you the power of carrying multiple currencies on just one card. So now forget to apply for a new card every time you visit a different country.",
  },
  {
    Question:
      "What should I do if my Multicurrency Platinum ForexPlus Chip card has expired but there is an unutilised balance on the card",
    Answer:
      "If your Card has expired before all funds have been utilised, you can contact M&N  Bank PhoneBanking or any of our M&N  Bank branch for placing a refund request of the un-utilised balance. In case you wish you get a replacement card, you can place a request at any of our M&N  Bank branch",
  },
  {
    Question: "What if the balance in the currency of transaction goes down",
    Answer:
      "The card has inbuilt intelligence to process the transaction if any of the currency wallets has sufficient fund to authorize the transaction. If the currency wallet corresponding to the transaction currency does not have sufficient balance, the payment is processed by debiting the currency wallet with sufficient balance. By default the card first checks the Euro wallet and subsequently other currencies. Please note that if none of currency wallets have sufficient balance then the transaction will be declined even if collectively across the wallets the card has sufficient balance. Please note that cross currency conversion charges will be applicable in cases where the transaction is processed by utilizing funds from different currency wallet.",
  },
  {
    Question: "How does this card work",
    Answer:
      "Your M&N  Bank Multicurrency Platinum ForexPlus Chip card will be activated with the required currencies within 5 to 6 hours from the bank getting the clear funds from you. Once active, the card can be used at any international location for making payments at POS terminals or to withdraw cash at ATMs. (Usage of the card is not allowed in India, Nepal and Bhutan.) M&N  Bank Multicurrency Platinum ForexPlus Chip card works just like any Debit / Credit Card for making payments at Merchant Establishments that have an electronic terminal. The transaction amount is deducted from available balance on the Multicurrency card. M&N  Bank Multicurrency Platinum ForexPlus Chip card is accepted at all Merchant Establishments displaying the VISA/MasterCard symbol. The card can be used to withdraw cash at all VISA/MasterCard ATMs worldwide. Irrespective of the currency loaded on the card, the cash will be dispensed based on the currencies supported at the ATMs. Please note that you can select /change your ATM PIN with the help of Prepaid NetBanking facility for Multicurrency Cards.",
  },
  {
    Question: "What are the charges towards availing GCAS services",
    Answer:
      "Following are the charges for availing GCAS facility offered by Visa: Cardholder Inquiry Service: US $ 5 per inquiry Lost/Stolen Card reporting: US $ 35 per card Emergency Card Replacement: US $ 175 Emergency Cash Disbursement: US $ 175",
  },
  {
    Question: "What should  I do and whom to contact if  my card is lost",
    Answer:
      "In case your card gets lost or stolen, all you have to do is call M&N  Bank PhoneBanking immediately and report the loss of your card. This facility is available 24 hrs on all days. The card can also be hotlisted using our Prepaid card NetBanking facility on www.M&N bank.com",
  },
  {
    Question: "Can I load Hajj Umrah ForexPlus card by making payment in Cash",
    Answer:
      "Hajj Umrah ForexPlus card Can be loaded against payment of cash upto a maximum value of Rs. 49,999.",
  },
  {
    Question:
      "I'm not a traveller, can I still benefit from the Hajj Umrah ForexPlus Card",
    Answer:
      "The Hajj Umrah ForexPlus Card is designed only for overseas travellers, and cannot be issued to non-travellers.",
  },
  {
    Question:
      "Are there any transactions for which this card should not be used",
    Answer:
      "Yes, your Hajj Umrah ForexPlus card should not be used towards temporary charge blocks - e.g. paying deposits at hotels, hiring of cars etc. Incase you have paid these deposits using Hajj Umrah ForexPlus card and the hotel/car rental agency etc. settles the transaction for an amount lesser than the amount blocked or you make final payment through any different mode, the balance amount will get credited into your account only after 30 days from the transaction date.Note: The Bank reserves the right to charge the Card holder for any unauthorized amounts.",
  },
  {
    Question: "Can I issue cheques to load the Hajj Umrah ForexPlus Card",
    Answer:
      "Customer can load Hajj Umrah ForexPlus card by issuance of cheque against the amount to be loaded. However, cards will be loaded post realisation of the cheque deposited by the customer. The exchange rate applicable will be for the day on which funds are realized and card is activated.",
  },
  {
    Question: "What is the M&N  Bank Hajj Umrah ForexPlus card",
    Answer:
      "The M&N  Bank Hajj Umrah ForexPlus card is an embedded Chip based Prepaid Forex card introduced in partnership with VISA International. It is the first card exclusively designed for Hajj Umrah pilgrims to carry currency in a convenient and secure way. The card holders are also entitled for exclusive discounts & gift voucher at select merchant outlets in Saudi Arabia. The card can be used at all VISA ATMs and merchant establishments worldwide. This card cannot be used for payments in India, Nepal or Bhutan.",
  },
  {
    Question:
      "What documents should I submit when I purchase the M&N  Bank Hajj Umrah ForexPlus card",
    Answer:
      "Completed ForexPlus card Application Form Form A2 A photocopy of your Passport OR self attested copy of the Hajj receipt and manifest Additional address Proof in case current address of the customer is not matching with the address updated on Passport",
  },
  {
    Question:
      "Do I need to have M&N  Bank account to purchase the Hajj Umrah ForexPlus Card",
    Answer:
      "You can just walk into any of our M&N  bank branches in India and purchase it over the counter after submission of necessary documents.",
  },
  {
    Question: "What is the maximum value for which the Card can be used",
    Answer:
      "There is no limit imposed on the usage of Hajj Umrah ForexPlus card. Customers can withdraw/utilise any amount up to the value loaded on Hajj Umrah ForexPlus card at any ATM/POS. However, there are some ATMs service providers which have put in per day / per transaction limit towards cash dispense which cannot be changed by M&N  Bank. In such cases the cardholder might need to do multiple transactions if he wants to withdraw any amount higher than that allowed in one transaction.",
  },
  {
    Question: "How does this card work",
    Answer:
      "Your M&N  Bank Hajj Umrah ForexPlus card will be activated with SAR within 4 hours from the bank getting the clear funds from you. Once activated, the card can be used at any international location for making payments at POS terminals or to withdraw cash at ATMs. (Usage of the card is not allowed in India, Nepal and Bhutan.) M&N  Bank Hajj Umrah ForexPlus card works just like any Debit / Credit Card for making payments at Merchant Establishments that have an electronic terminal. The transaction amount is deducted from available balance on the Hajj Umrah ForexPlus card. M&N  Bank Hajj Umrah ForexPlus card is accepted at all Merchant Establishments displaying the Visa symbol. The card can be used to withdraw cash at all Visa ATMs worldwide. Irrespective of the currency loaded on the card, the cash will be dispensed based on the currencies supported at the ATMs. Please note that you can select /change your ATM PIN with the help of NetBanking facility for Multicurrency Cards.",
  },
  {
    Question: "What currencies are available",
    Answer: "Currencies offered:Saudi Riyal (SAR)",
  },
  {
    Question: "Where do I get this card",
    Answer:
      "Hajj Umrah ForexPlus Card is available over the counter at M&N  Bank branches. You simply need to walk into our branch with required documentation and walk out with the card. The card will get activated within 5 to 6 hours from realization of funds.",
  },
  {
    Question: "What is the M&N  Bank Apollo Medical Benefits Card",
    Answer:
      "It is an electronic Prepaid Card issued to corporate organizations for offering medical allowance/reimbursement to their employees.",
  },
  {
    Question: "Where can I contact for offers/service related issues",
    Answer:
      "You can call the Apollo customer care service centre number 1860 500 1066 or write to [email protected]",
  },
  {
    Question: "Where can I contact for any card or transaction related issue",
    Answer:
      "Please call customer service centre number 07666 155 220 or write to [email protected]",
  },
  {
    Question: "How soon can I get the M&N  Bank Apollo Medical Benefits Card",
    Answer:
      "M&N  Bank Apollo Medical Benefits Card will be available to you within 15 working days from the date of completion of formalities.",
  },
  {
    Question: "Is there a usage limit",
    Answer:
      "No upper limit for usage limit on Point of Sale transactions. Usage restricted to the available balance in card.",
  },
  {
    Question: "Is there a load amount limit",
    Answer:
      "Card balances cannot exceed Rs. 10,000 at any given point in time and cumulative monthly load and reload is limited to Rs. 10,000.",
  },
  {
    Question: "How do I top up the value of the card",
    Answer:
      "Loading and reloading is as per the corporate instructions. Request from cardholder for reloading the card cannot be accepted.",
  },
  {
    Question:
      "In case the card is lost or stolen or misused where I can hotlist my card",
    Answer:
      "Card can be hot listed by calling/writing to customer service centre at the phone number and/or email address listed on the back of your card.",
  },
  {
    Question: "Can I use my Medical benefit card outside India",
    Answer:
      "No. Medical Benefit card is INR prepaid card which can be used only in India.",
  },
  {
    Question: "Where I can use the card",
    Answer:
      "M&N  Bank Apollo Medical Benefits Card can be used at medical outlets, pharmacies, hospitals, diagnostic centres, dental and laboratories displaying VISA logo.",
  },
  {
    Question: "Where I can view my card balance and card history",
    Answer:
      "Card balance and card history can be viewed at www.M&N bank.com after due login or can be accessed by calling/writing to customer service centre at the phone number and/or E-mail address listed on the back of your card.",
  },
  {
    Question: "Where do I get this card",
    Answer:
      "ISIC ForexPlus Card is available over the counter at M&N  Bank branches. You simply need to walk into our branch with required documentation and walk out with ISIC ForexPlus Card. The card will get activated within 4 hours from realization of funds. Also you can apply by visiting www.M&N bank.com -> Apply Online section or www.M&N bank.com/personal/products/cards/prepaid-cards -> ISIC Student ID ForexPlus Card -> Buy Forex Card",
  },
  {
    Question: "Whom should I contact if my card is lost or stolen",
    Answer:
      "Immediately report the loss of your ISIC ForexPlus Chip Card by calling M&N  Bank PhoneBanking. You will not be liable for transactions on your Card Account (if any) from the moment your report is registered with the bank. Alternately you can hotlist the card with the help of Prepaid NetBanking facility.",
  },
  {
    Question:
      "How can I check the balance on my M&N  Bank ISIC ForexPlus Chip Card",
    Answer:
      "You can check the balance on ISIC ForexPlus Chip card with the help of NetBanking facility. You will need to use the card number as user ID & IPIN issued to you as part of the card kit to login to NetBanking facility. Alternately, you can also contact our PhoneBanking services to check the balance on your ISIC ForexPlus Chip Card.",
  },
  {
    Question: "How much foreign exchange can I retain after the foreign trip",
    Answer:
      "After returning from the overseas trip, you are required to surrender unspent foreign exchange held by you within 180 days of return. You can retain foreign exchange up to USD 2,000 (or equivalent) for future use after returning back to India.",
  },
  {
    Question: "What happens if my card is lost",
    Answer:
      "In case your card gets lost or stolen, all you have to do is call M&N  Bank PhoneBanking immediately and report the loss of your card. This facility is available 24 hrs on all days. The card can also be hotlisted using our Prepaid card NetBanking facility on www.M&N bank.com",
  },
  {
    Question: "How do I top-up the value of my card when I am abroad",
    Answer:
      "ISIC M&N  Bank ForexPlus Card can also be loaded on your behalf by someone authorized (blood relatives only) by you. Authorised person has to visit M&N  Bank branch with the necessary documents and funds. Weâ€™ll take care of the rest. You can reload your ISIC ForexPlus Card multiple times in future till the card gets expired: You can authorize the Bank to debit your M&N  Bank account by giving an M&N  Bank cheque or make payment using a local cheque drawn on M&N  Bank and reload the card for desired value. Reload requests can be made by any authorized person (blood relatives only) on your behalf. The person authorised by you for the same will need to come to bank branch and will need to provide the necessary documents to the bank to carry out reload. On receipt of the application form and the funds, your card will get reloaded for the desired amount. M&N  Bank customers can also place a request to reload the card through M&N  Bank PhoneBanking or M&N  Bank NetBanking.",
  },
  {
    Question:
      "What documents should I submit when I purchase the ISIC M&N  Bank ForexPlus Card",
    Answer:
      "Customers have to provide the following documents: Completed ISIC M&N  Bank ForexPlus Card application Form Form A2 Appointment Letter / Admission Letter / University Identity Card Scanned copy passport size photograph with white background A photocopy of Passport Additional document for non M&N  Bank Customer - Visa Copy or Ticket Copy",
  },
  {
    Question:
      "I have renewed my passport with new number. Do I need to update my new Passport number in my ISIC ForexPlus Chip Card",
    Answer:
      "Yes, we request you to get in touch with nearby branch along with original & copy of your passport to get the new passport number updated in the bank's records. Passport number is key validation criteria to check caller authenticity when you contact our 24 x 7 PhoneBanking service, hence it is recommended to update Passport number at the earliest.",
  },
  {
    Question: "Can I issue Cheque for loading of ISIC M&N  Bank ForexPlus Card",
    Answer:
      "Customer can load ISIC ForexPlus card by issuance of cheque against the amount to be loaded. However, cards will be loaded post realisation of the cheque deposited by the customer. The exchange rate applicable will be for the day on which funds are realized and card is activated",
  },
  {
    Question:
      "How do I know if an ATM will accept my ISIC M&N  Bank ForexPlus Card",
    Answer:
      "ISIC ForexPlus cards are accepted at MasterCard ATMs. Please look out for the MasterCard logo while searching for ATM.",
  },
  {
    Question: "What is the validity of the ISIC M&N  Bank ForexPlus Card",
    Answer: "The ISIC ForexPlus card shall be valid for period for 1year.",
  },
  {
    Question:
      "Do I need to have M&N  Bank account to purchase the ISIC M&N  Bank ForexPlus Chip Card",
    Answer:
      "No, you don't need to have an account with M&N  Bank to purchase the ISIC ForexPlus Chip card. You can just walk into any of our M&N  bank branches in India and purchase it over the counter on submission of relevant KYC and mandatory documents.",
  },
  {
    Question: "What does DCC/ MCC stand for",
    Answer:
      "DCC stands for Dynamic Currency Conversion whereas MCC stands for Multiple Currency Conversoin. DCC / MCC at ATM / POS gives the cardholder an option to initiate a transaction in the currency of his choice. It also assists the cardholder to know the exact transaction value in the currency selected at the time of transaction.",
  },
  {
    Question: "What if I forget my ATM PIN",
    Answer:
      "You can call the M&N  bank PhoneBanking to request for re-issuance of PIN or place a request through Prepaid NetBanking. A new PIN will be sent across to your registered mailing address held on record with the bank.",
  },
  {
    Question:
      "How do i get my card reissued post the expiry of the ISIC ForexPlus Chip Card",
    Answer:
      "You simply need to walk into our M&N  Bank branch with the required documentation and walk out with new ISIC ForexPlus Chip card. The new card issued to you will get activated within 4 hours and the available funds in expired card will be get automatically transferred to the new card.",
  },
  {
    Question: "Can the ATM PIN be changed",
    Answer:
      "No, the ATM PIN cannot be changed at the ATM. In case you have forgotten or lost the PIN, you will need to request for a new PIN with the help of PhoneBanking or through Prepaid NetBanking.",
  },
  {
    Question: "How soon can the card be used after it is purchased",
    Answer:
      "Your card will be activated & loaded with required currency within 4 hours from the bank having received clear funds from you. The card will be ready for use post activation.",
  },
  {
    Question: "How can I cancel my ISIC M&N  Bank ForexPlus Card",
    Answer:
      "To cancel your ISIC ForexPlus Card, we request you to contact the PhoneBanking team or walk into your nearest M&N  Bank branch and place a request towards cancellation. Your request will be processed within one working day of us receiving the request. There are no charges towards the cancellation of a ISIC ForexPlus Card. However, currency conversion tax as applicable from time to time will be deducted at the time of providing credit to you.Kindly visit the following URL to access information for the complete address and contact details of our Branches and PhoneBanking centers:",
  },
  {
    Question: "How does this card work",
    Answer:
      "Your ISIC M&N  Bank ForexPlus Chip card will be activated with the required Euro / GBP and USD within 4 hours from the bank getting the clear funds from you. Once active, the card can be used at any international location for making payments at POS terminals or to withdraw cash at ATMs. (Usage of the card is not allowed in India, Nepal and Bhutan.) ISIC M&N  Bank ForexPlus Chip card works just like any Debit / Credit Card for making payments at Merchant Establishments that have an electronic terminal. The transaction amount is deducted from available balance on the ISIC ForexPlus Chip card. The ISIC M&N  Bank ForexPlus Chip card is accepted at all Merchant Establishments displaying the MasterCard symbol. The card can be used to withdraw cash at all MasterCard ATMs worldwide. Irrespective of the currency loaded on the card, the cash will be dispensed based on the currencies supported at the ATMs. Please ensure that you remember the PIN given to you with the card pack, the PIN is unique for every card and cannot be changed at any domestic or international ATM.",
  },
  {
    Question: "What is ISIC M&N  Bank ForexPlus card",
    Answer:
      "ISIC M&N  Bank ForexPlus Card is a magnetic strip based prepaid card introduced in partnership with MasterCard International. The card offers you a convenient and secure way to carry forex. This card offers you the freedom to shop anywhere in the world and provides access to the currency of your destination at competitive market rates. It can be used at all MasterCard ATMs and Merchant establishment worldwide. This card cannot be used for making payments in India, Nepal or Bhutan.",
  },
  {
    Question: "How do I activate e-commerce",
    Answer:
      "Just log on to NetBanking and enable your e-commerce transaction facility.",
  },
  {
    Question: "How do I top-up the value of my card when I am abroad",
    Answer:
      "ISIC ForexPlus Card can also be loaded on your behalf by someone authorized by you. Authorised person has to visit M&N  Bank branch with the necessary documents and funds. Weâ€™ll take care of the rest. You can reload your ISIC ForexPlus card multiple times in future till the card gets expired: You can authorize the Bank to debit your M&N  Bank account by giving an M&N  Bank cheque or make payment using a local cheque drawn on M&N  Bank and reload the card for desired value. Reload requests can be made by any authorized person on your behalf. The person authorised by you for the same will need to come to bank branch and will need to provide the necessary documents to the bank to carry out reload. On receipt of the application form and the funds, your card will get reloaded for the desired amount. M&N  Bank customers can also place a request to reload the card through M&N  Bank PhoneBanking or M&N  Bank NetBanking.",
  },
  {
    Question: "Can a non Traveller purchase ISIC ForexPlus Card",
    Answer:
      "No, ISIC ForexPlus Card can only be issued to Students travelling abroad to pursue higher education. ISIC ForexPlus Card is valid for making payments in countries other than India, Nepal & Bhutan. Whenever the cardholder is using his card he must be present at the place of transaction & need to sign the charge slip.",
  },
  {
    Question: "Can I load ISIC ForexPlus card by making payment in Cash",
    Answer: "No, ISIC ForexPlus card cannot be loaded against payment of cash.",
  },
  {
    Question: "What do I need to know about ISIC M&N  Bank ForexPlus Card",
    Answer:
      "Embedded with a chip, this ForexPlus card offers you a convenient and secure way to carry your Forex. With the ISIC M&N  Bank ForexPlus card you can shop anywhere in the world.",
  },
  {
    Question:
      "Are there any transactions for which this Card should not be used",
    Answer:
      "Yes, your ISIC ForexPlus Card should not be used towards temporary charge blocks - e.g. paying deposits at hotels, hiring of cars etc. In case you have paid these deposits using ForexPlus Card and the hotel/car rental agency etc. settles the transaction for an amount lesser than the amount blocked or you make final payment through any different mode, the balance amount will get credited into your account only after 30 days from the transaction date. Note: The Bank reserves the right to charge the Card holder for any unauthorized amounts.",
  },
  {
    Question:
      "Do I need to pay additional amount over and above Cash withdrawal Charges levied by the M&N  Bank for ATM transaction",
    Answer:
      "In certain countires ATM Service providers are authorized to charge surcharge/convenience fees from the cardholders for accessing the ATM to withdraw money. These charges are levied by the ATM service provider over and above the charges levied by the M&N  Bank, and M&N  Bank bank has no control over the charges as these charges are not levied by the bank.These charges are normally displayed to the customer during the transaction and the customer has the option to either proceed with the transaction or abort if the charges are not acceptable to the customer.",
  },
  {
    Question: "What currencies are available",
    Answer:
      "There are three currencies offered: Euro (EUR) Sterling Pound (GBP) US Dollar (USD)",
  },
  {
    Question: "Can I use the DCC/ MCC option at the time of transaction",
    Answer:
      "Whenever ISIC ForexPlus cardholder opts for DCC/MCC option on DCC/MCC enabled POS/ATM terminals, his/her transaction passes through cross currency transactions twice. It is not advisable for a ISIC ForexPlus cardholder to opt for DCC/MCC while using ISIC ForexPlus Chip card for making payments. Please note that every cross currency transaction attracts currency conversion charges at applicable rates. Apart from this, the cardholder will also get penalised due to fluctuation in currency conversion rate.",
  },
  {
    Question: "How many days in advance can I purchase foreign exchange",
    Answer:
      "You can purchase foreign exchange up to 60 days in advance from the date of departure.",
  },
  {
    Question: "Can the value of the card be topped up",
    Answer:
      "Yes, your ISIC ForexPlus Chip Card can be reloaded multiple times in future till the card gets expired: You can authorize the Bank to debit your M&N  Bank account by giving an M&N  Bank cheque or make payment using a local cheque drawn on M&N  Bank and reload the card for desired value. Reload requests can be made by any authorized person on your behalf. The person authorised by you for the same will need to come to bank branch and will need to provide the necessary documents to the bank to carry out reload. On receipt of the application form and the funds, your card will get reloaded for the desired amount. M&N  Bank customers can also place a request to reload the card through M&N  Bank PhoneBanking or M&N  Bank NetBanking.",
  },
  {
    Question: "What is the maximum value for which the Card can be used",
    Answer:
      "There is no limit imposed on the usage of ISIC ForexPlus Card. Customers can withdraw/utilise any amount, upto the value loaded on the card at any ATM/POS. However, there are some ATMs service providers which have put in per day / per transaction limit towards cash dispense which cannot be changed by the Bank. In such cases the cardholder might need to do multiple transactions if he wants to withdraw any amount higher than that allowed in one transaction.",
  },
  {
    Question: "What is the VBV Password",
    Answer:
      "VBV password is a secure code password, which will be used for authenticating any transaction through M&N  Bank eGiftPlus Card. Your M&N  Bank eGiftPlus Card IPIN will be your VBV Password.",
  },
  {
    Question:
      "Can I load the M&N  Bank eGiftPlus Card by making payments in Cash",
    Answer:
      "No, the M&N  Bank eGiftPlus Card can be only purchased by making payment through NetBanking or via your Debit/Credit Card.",
  },
  {
    Question: "How soon can I get an eGiftPlus Card",
    Answer:
      "The beneficiary will get a real-time instant delivery of the M&N  Bank eGiftPlus Card",
  },
  {
    Question: "Why should I buy the eGiftPlus Card",
    Answer:
      "The Card comes with the following benefits: Instant issuance Instant activation Instant delivery Easy access to card details & balance Accepted at all major e-commerce sites Personalised card",
  },
  {
    Question:
      "What is the maximum amount I can load on the M&N  Bank eGiftPlus Card",
    Answer:
      "For M&N  Bank customers, Rs.50,000 For non-M&N  Bank customers, Rs.10,000 for each eGiftPlus Card.",
  },
  {
    Question:
      "How the M&N  Bank eGiftPlus Card is different from the GiftPlus Card",
    Answer:
      "GiftPlus card is a physical card which you can use at over 150 million Visa outlets across the country, whereas the M&N  Bank eGiftPlus Card is a personalised virtual Card that you can use at all major e-commerce sites. You can also write a personalised message and choose a design of your choice, basis on what occasion you want to gift them for.",
  },
  {
    Question:
      "What documents should I submit when I purchase an M&N  Bank eGiftPlus Card",
    Answer: "There no need for any documents to be submitted.",
  },
  {
    Question:
      "Do I need to have an account M&N  Bank account to purchase the M&N  Bank eGiftPlus Card",
    Answer:
      "No, you do not need to have a M&N  Bank account to purchase this. You can use any bank's NetBanking or Debit/Credit Card. (Visa, Master, Diners)",
  },
  {
    Question: "Whom should I contact if my Card is lost or stolen",
    Answer:
      "You can contact the below mentioned Customer Care number 022-33271010 or e-mail",
  },
  {
    Question: "Can I change the ATM PIN",
    Answer:
      "There is no ATM PIN applicable for the M&N  Bank eGiftPlus Card. Only an IPIN is required to use M&N  Bank eGiftPlus Card.",
  },
  {
    Question: "Are there any transactions for which I cannot use the Card",
    Answer:
      "M&N  Bank eGiftPlus Card can only be used on e-commerce websites. This Card will not be usable on websites which are restricted by the Govt. of India.",
  },
  {
    Question: "Who can purchase the M&N  Bank eGiftPlus Card",
    Answer:
      "All M&N  Bank & non M&N  Bank Customers can buy M&N  Bank eGiftPlus Card Purchase Limit per card For M&N  Bank: Rs.50,000 & Non-M&N  Bank customers: Rs.10,000",
  },
  {
    Question: "Where do I get this card",
    Answer:
      "Regalia ForexPlus Card is available over the counter at M&N  Bank branches. You simply need to walk into our branch with required documentation and walk out with the Regalia ForexPlus Card. The card will get activated within 5 to 6 hours from realization of funds. Alternatively, existing bank customers can apply for the card by logging in to M&N  Bank NetBanking by selecting Purchase Forex Card option under Cards tab.",
  },
  {
    Question:
      "How can I check the balance on my M&N  Bank Regalia ForexPlus Card",
    Answer:
      "You can check the balance of your Regalia ForexPlus Card with the help of Prepaid NetBanking facility. Alternately, you can also contact our Phone Banking services to check the balance on your Regalia ForexPlus Card. While in India, you may check the balances on M&N  Bank ATMs without any charge",
  },
  {
    Question:
      "Do I need to have M&N  Bank account to purchase the Regalia ForexPlus Card",
    Answer:
      "No, you don't need to have an account with M&N  Bank to purchase Regalia ForexPlus Card. You can just walk into any of our M&N  bank branches in India and purchase it over the counter.",
  },
  {
    Question:
      "Do I need to pay additional amount over and above Cash Withdrawal Charges levied by the M&N  Bank for ATM transaction",
    Answer:
      "In certain countries ATM Service providers are authorized to charge surcharge/convenience fees from the cardholders for accessing the ATM to withdraw money. These charges are levied by the ATM service provider over and above the charges levied by the M&N  Bank, and M&N  Bank has no control over the charges as these charges are not levied by the bank. These charges are normally displayed to you during the transaction and you have an option to either proceed with the transaction or abort if the charges are not acceptable.",
  },
  {
    Question:
      "What should I do if my Regalia ForexPlus Card has expired but there is an unutilised balance on the card",
    Answer:
      "If your Card has expired before all funds have been utilised, you can contact M&N  Bank Phone Banking or any of our M&N  Bank branch for placing a refund request of the un-utilised balance. In case you wish you get a replacement card, you can place a request at any of our M&N  Bank branch",
  },
  {
    Question:
      "When will my rewards be credited to my member account with my Participating Reward Provider",
    Answer:
      "Generally, your account will be credited within 2-3 weeks however at times it may take upto 8 weeks of your purchase. For more queries on â€˜Thanks Againâ€™ Reward program, please visit http://in.thanksagain.com/faq/",
  },
  {
    Question: "Do I need to register for program",
    Answer:
      "Yes, Customer need to register himself on www.thanksagain.com for earning the reward points. Unless you register yourself, you cannot earn any reward points",
  },
  {
    Question: "Where I can earn â€˜Thanks Againâ€™ Reward Points",
    Answer:
      "You can earn reward points on merchants registered with â€˜Thanks Againâ€™ reward program, located in & around airports",
  },
  {
    Question: "Where I can redeem my â€˜Thanks Againâ€™ Reward points",
    Answer:
      "You can redeem points for leading domestic Airline Miles & Hotel Loyalty Points programs. As per existing arrangement, you can redeem the points against JetMiles or against Taj InnerCircle program",
  },
  {
    Question: "Where can the Regalia ForexPlus Card be used",
    Answer:
      "Anywhere that the Contactless payment PoS machine is available, the card can be used to tap/ wave and pay. If the machine is not available, the Contactless Card can be still being used for swipe or dip transactions.",
  },
  {
    Question: "Which are the currencies that can be loaded on the card",
    Answer:
      "You can load only one currency i.e. USD on your Regalia ForexPlus Card. However, you can transact in any currency",
  },
  {
    Question: "Which Rewarding Merchants participate",
    Answer:
      "You will have access to thousands of Participating Rewarding Merchants located throughout North America. To locate a Participating Rewarding Merchant near you, please use our online locator. If you donâ€™t find a Participating Rewarding Merchant location near you, be sure to check back frequently as we are always adding new merchants to the program.",
  },
  {
    Question: "How can I cancel my Regalia ForexPlus Card",
    Answer:
      "To cancel your Regalia ForexPlus Card, we request you visit our your nearest M&N  Bank branch or contact your RM and place a request towards cancellation the of the card. Your request will be processed within one working day of us receiving the request and the available balance on the card will be refunded back to your account. In case you do not have an account with us then a demand draft shall be issued for the respective refund amount. There are no charges towards the cancellation of a Regalia ForexPlus Card. However, Service tax on currency conversion, as applicable from time to time will be deducted at the time of providing credit to you.",
  },
  {
    Question: "How close does the â€˜tap/ waveâ€™ have to be to the reader",
    Answer:
      "You need to touch the reader with the card or bring it close to the terminal screens (within 4 cms)",
  },
  {
    Question: "How do I know if an ATM will accept my Regalia ForexPlus Card",
    Answer: "Look out for the MasterCard logo.",
  },
  {
    Question: "How does Regalia ForexPlus Card work",
    Answer:
      "Your Regalia ForexPlus Card will be activated with the required currencies within 5 to 6 hours from the bank getting the clear funds from you. Once active, the card can be used at any international location for making payments at POS terminals or to withdraw cash at ATMs. (Usage of the card is not allowed in India, Nepal and Bhutan.) Regalia ForexPlus Card has a chip & a radio frequency antenna embedded. When the Contactless Card is tapped/ waved against the terminal enabled for contactless payments the card transmits payment details wirelessly, eliminating the need to insert it. Account details are communicated to the reader and then processed through the secure MasterCard acceptance network in the usual way Regalia ForexPlus Card works just like any Debit / Credit Card for making payments at Merchant Establishments that have an electronic terminal. The transaction amount is deducted from available balance on the Regalia ForexPlus Card. Regalia ForexPlus Card is accepted at all Merchant Establishments displaying the MasterCard symbol. The card can be used to withdraw cash at all MasterCard ATMs worldwide. Irrespective of the currency loaded on the card, the cash will be dispensed based on the currencies supported at the ATMs. Please note that you can select /change your ATM PIN with the help of Prepaid NetBanking facility for Regalia ForexPlus Cards.",
  },
  {
    Question: "How is My Reward Calculated",
    Answer:
      "The Participating Rewarding Merchant contributes a reward that is calculated using the total purchase price, including taxes, less credits for returns or cancellations, for qualifying purchases.",
  },
  {
    Question: "How many days in advance can I purchase foreign exchange",
    Answer:
      "You can purchase foreign exchange up to 180 days in advance from the date of departure.",
  },
  {
    Question: "What is the Regalia ForexPlus Card",
    Answer:
      "Regalia ForexPlus Card is specially designed considering the requirement for valued customer of the bank who are frequent visitors abroad. This card ensures the convenience, safety & cost effectiveness while using the card. You need not have to carry multiple currencies in various wallets nor you need to swap the funds within wallets while travelling to another country. This card is issued only in one currency and comes with exclusive feature of Zero Cross Currency Conversion Charges, â€˜Thanks Againâ€™ reward program, ATM Access Fee waiver, & Complimentary Lounge Access. Hence you are free to transact in any currency as per your wish. This card is an embedded chip based prepaid forex card introduced in partnership with MasterCard International. This card gives you the freedom to shop anywhere in the world and provides access to the currency of your destination at competitive market rates. It can be used at all MasterCard affiliated ATMs and merchant establishments worldwide. This card cannot be used for making payments in foreign currencies in India, Nepal or Bhutan. This card also comes with General Purpose Reloadable card wallet (GPR wallet) in INR currency where you can get your Regalia ForexPlus Card encashed & use the same in India for ATM cash withdrawals & at merchant outlets or at ecom merchants for purchases in INR currency.",
  },
  {
    Question:
      "How much is the Service Tax on Cross Currency Conversion, applicable at the time of Load, Reload and Refund",
    Answer:
      "Following are the currency conversion service tax slabs applicable at the time of Load, Reload and Refund. For more details on other charges applicable on Regalia ForexPlus Card refer section Fees and Charges Buy and Sell Forex CurrencyService Tax Amount Up to Rs. 1 lakh 0.15% of the gross value or Rs. 37.5/- whichever is higher From Rs. 1 lakh to Rs 10 Lakhs Rs. 150 plus 0.075% of the amount exceeding Rs. 1 lakh From Rs. 10 lakhs and above Rs. 825 plus 0.015% of the amount exceeding Rs. 10 Lakhs, subject to a maximum of Rs. 7500 (including Swachh Bharat Cess and Krishi Kalyan cess as applicable)",
  },
  {
    Question:
      "What are the exchange rates applicable when I use my Travel Card for transactions (Cash withdrawal at ATMs and point of sale transactions at Merchant Outlets)",
    Answer:
      "If the transaction is done in base currency (currency with which the card was loaded), there is no exchange rate applicable. However, for transactions other than the base currency, exchange rates / conversion rates from the base currency to the local currency would be applicable.",
  },
  {
    Question:
      "Are there any transactions for which this Card should not be used",
    Answer:
      "Yes, your Regalia ForexPlus Card should not be used towards temporary charge blocks - e.g. paying deposits at hotels, hiring of cars etc. In case you have paid these deposits using Regalia ForexPlus Card and the hotel/car rental agency etc. settles the transaction for an amount lesser than the amount blocked or you make final payment through any different mode, the balance amount will get credited into your account only after 30 days from the transaction date. Note: The Bank reserves the right to charge the Card holder for any unauthorized amounts.",
  },
  {
    Question: "Can I issue cheques to load the Regalia ForexPlus Card",
    Answer:
      "You can load Regalia ForexPlus Card by issuance of cheque against the amount to be loaded and charges as applicable. However, cards will be loaded post realisation of the cheque deposited by you. The exchange rate applicable will be for the day on which funds are realized and card is activated.",
  },
  {
    Question: "Can I load multiple currencies on one Regalia ForexPlus Card",
    Answer:
      "No. Your Regalia ForexPlus Card can only be loaded in USD currency. As a feature of the card, no cross currency conversion charges will be levied for using the card in any currency other than USD. Your transaction value will get converted in USD currency @ rate applied by MasterCard. No additional cost will be levied.",
  },
  {
    Question: "Can I load Regalia ForexPlus Card by making payment in Cash",
    Answer:
      "No, Regalia ForexPlus Card cannot be loaded against payment of cash.",
  },
  {
    Question: "Can I Login to Check My Account",
    Answer:
      "You may check your accrued awards by logging in on the website or mobile app. However, please be aware that it generally takes up to 1-3 days for the points earned to reflect in your Thanks Again membership account and 2-3 weeks for your accrued awards to be posted to your member statement with your Participating Reward Provider.",
  },
  {
    Question: "Can I redeem my reward points abroad",
    Answer:
      "No. You cannot redeem â€˜Thanks Againâ€™ reward point abroad. You need to redeem the same within options available in India only.",
  },
  {
    Question: "Can I use the card to pay in any currency",
    Answer:
      "Yes, the card is accepted for payment in any currency apart from those loaded on the card. No cross currency conversion charges will be applicable while processing such transactions. - Exchange rate used will be the MasterCard wholesale exchange rate prevailing at the time of the transaction. - Exchange rate used will be the Midrate prevailing at the time of the transaction.",
  },
  {
    Question: "Can I use the DCC/ MCC option at the time of transaction",
    Answer:
      "Whenever Regalia ForexPlus Cardholder opts for DCC/MCC option on DCC/MCC enabled POS/ATM terminals, his/her transaction passes through cross currency transactions twice. It is not advisable for a ForexPlus cardholder to opt for DCC/MCC while using ForexPlus card for making payments. Please note that every cross currency transaction attracts currency conversion charges at applicable rates. Apart from this, the cardholder will also get penalised due to fluctuation in currency conversion rate.",
  },
  {
    Question: "Can the value of the card be topped up",
    Answer:
      "Yes, your Regalia ForexPlus Card can be reloaded multiple times in future till the card gets expired. -Existing bank customers can reload their Regalia ForexPlus Card through M&N  Bank NetBanking / Mobile Banking by selecting Reload Forex Card under the option of Cards tab. -Alternatively, existing customers can also place in a request to reload the card through M&N  Bank Phone Banking service or Prepaid NetBanking.",
  },
  {
    Question:
      "Do I need to activate Regalia ForexPlus Card for Ecommerce transactions",
    Answer:
      "Your Regalia ForexPlus Card is pre-activated to perform Ecommerce transactions once your card is loaded with the Forex currency required.",
  },
  {
    Question: "How secure is making payment through Regalia ForexPlus Card",
    Answer:
      "Much more secure than carrying cash. Regalia ForexPlus Card uses the same secure technology as chip & PIN so you can feel totally confident when you are using it to pay. Our technology uses the chip on your card to generate unique cryptograms and digital signatures to protect your payments.",
  },
  {
    Question:
      "How to set Prepaid NetBanking Login User ID / Password for the first time",
    Answer:
      "You may have received IPIN or Activation Code in the kit provided to you. The Activation Code will be printed on the card mailer below the card whereas the IPIN will be printed on the PIN mailer along with ATM PIN. The Activation Code / IPIN is required to set your NetBanking Password for your Regalia ForexPlus Card for the first time. Following steps should be followed for setting NetBanking User ID / Password for the first time using Activation Code / IPIN: -Visit M&N  Bank website and select Prepaid NetBanking -Enter the Card Number in User ID/Card Number field and the Activation Code / IPIN (mentioned in the PIN mailer) in the Password field. -Input User ID of your choice for future login purpose -Select the secret question from a dropdown menu and provide the answer -Mention the new Password and reconfirm the same -With the new User Id and Password, you can then login to access your card account",
  },
  {
    Question: "How to use the card at contactless terminals",
    Answer:
      "1. Look for MasterCard PayPass mark and contactless logo at the Point of Sale terminal machine at merchant outlet 2. Check the transaction amount displayed on the machine screen and tap/ wave your Contactless Regalia ForexPlus Card from a 4 cm range 3. Enter your 4-digit ATM PIN on the machine, if prompted 4. A green light will signal indicating that the transaction is complete",
  },
  {
    Question: "How will I know if the transaction is successful",
    Answer:
      "You will receive a charge slip from the merchant, and also receive an Emailer/ SMS on registered contact details once the transaction is successful",
  },
  {
    Question:
      "I'm not a traveller, can I still benefit from the Regalia ForexPlus Card",
    Answer:
      "The Regalia ForexPlus Card is only for travellers, and cannot be issued to non-travellers.",
  },
  {
    Question: "Is Regalia ForexPlus Card enabled for MasterCard Secure Pass",
    Answer:
      "Yes, Regalia ForexPlus Card offered on MasterCard platform are pre-enabled for MasterCard Secure Pass that allows you to securely perform Ecommerce transactions. Following are the steps to perform Ecommerce transaction with MasterCard Secure Pass participating merchants: - Select the goods or services you want from an online store and proceed to the payment page. - Enter your Regalia ForexPlus Card number and the online store will connect with M&N  Bank to check whether your Card is secured with MasterCard Secure Pass. - To validate the transaction, you can either select to enter your Prepaid NetBanking password (used for login to Prepaid NetBanking) or select receiving OTP (One Time Password) on your registered mobile number and M&N  Bank will then confirm your identity to the merchant. - Your payment is authorized and your order is placed.",
  },
  {
    Question:
      "Is there any difference in the process for ATM and Internet transaction for this Contactless Card",
    Answer:
      "There is no difference in the transaction process for ATM & Internet transactions. For ATM transactions you need to enter the PIN and for Internet transaction you need to enter your 3D secure PIN or OTP",
  },
  {
    Question:
      "What documents should I submit when I purchase the Regalia ForexPlus Card",
    Answer:
      "M&N  Bank Savings / Current account holders need to just submit completed application form and copy of self-attested valid Passport (or any other documentation as mandated under prevalent LRS guidelines). If you don't have M&N  Bank Savings / Current account, you need to submit completed application form, copy of self-attested valid Passport and copy of self-attested Ticket or Visa (or any other documentation as mandated under prevalent LRS guidelines).",
  },
  {
    Question: "What does DCC/ MCC stand for",
    Answer:
      "DCC stands for Dynamic Currency Conversion whereas MCC stands for Multiple Currency Conversion. DCC / MCC at ATM / POS gives the cardholder an option to initiate a transaction in the currency of his choice. It also assists the cardholder to know the exact transaction value in the currency selected at the time of transaction.",
  },
  {
    Question: "What if I Already Earn Rewards with My Card",
    Answer:
      "If you register a reward card that already earns miles, points, or cash back, the rewards that you earn via Thanks Again will be awarded in addition to the rewards that you already may earn.",
  },
  {
    Question: "What if I forget my Prepaid NetBanking login Password",
    Answer:
      "If you have forgotten the Password, then the same can be changed by selecting the option of Forgot Password available on the Prepaid NetBanking login page.",
  },
  {
    Question: "What is the maximum value for which the Card can be used",
    Answer:
      "There is no limit imposed on the usage of Regalia ForexPlus Card. You can withdraw/utilise any amount, upto the value loaded on Regalia ForexPlus Card at any ATM/POS. However, there are some ATMs service providers which have put in per day / per transaction limit towards cash dispense which cannot be changed by the Bank. In such cases the cardholder might need to do multiple transactions if he wants to withdraw any amount higher than that allowed in one transaction.",
  },
  {
    Question: "What options should I choose to withdraw cash from the ATM",
    Answer:
      "Generally, the options available at the ATM for cash withdrawal are Checking, Credit, and Savings. You should choose the Checking/Current option. In case the Checking /Current option is not available, you should select the Credit option.",
  },
  {
    Question: "What should I do and whom to contact if my card is lost",
    Answer:
      "In case your card gets lost or stolen, all you have to do is call M&N  Bank Phone Banking immediately and report the loss of your card. This facility is available 24 hrs on all days. The card can also be hotlisted using our Prepaid card NetBanking facility on www.M&N bank.com",
  },
  {
    Question: "Are there extra charges to be aware of",
    Answer:
      "A few things to note - US Banks are given the right to add a surcharge to other bank customers accessing their ATMs. There are also certain ATMs in other countries that may levy a charge for transactions made by non-bank customers. These fees are normally displayed during the transaction. Check for this, so that you can either proceed with or end the transaction.",
  },
  {
    Question: "Can I use e-Monies NEFT for foreign remittances",
    Answer:
      "This is a service designed only for remitting Indian Rupees within India.",
  },
  {
    Question:
      "Is the e-Monies NEFT system better than the existing RBI-EFT system",
    Answer:
      "E-Monies NEFT has no restrictions, because itâ€™s based on a centralized network. Thatâ€™s not the case for the RBI-EFT system, which is confined to just 15 centres.",
  },
  {
    Question: "What information is required to use the e-monies NEFT service",
    Answer:
      "To use this service, you should provide the beneficiary details (name and account number), and the name and IFSC of the beneficiary bank branch.",
  },
  {
    Question:
      "If the money is not credited to the beneficiaryâ€™s account while using the e-monies NEFT service, will I get it back",
    Answer:
      "Your funds will be returned to your account if they are not credited.",
  },
  {
    Question: "How does the e-monies NEFT service differ from RGTS and EFT",
    Answer:
      "E-Monies NEFT is an electronic payment system, used to transfer funds to any part of India. It works on â€˜net settlementâ€™, unlike RTGS that works on â€˜gross settlementâ€™, and EFT which is restricted to only 15 centres.",
  },
  {
    Question:
      "What are the charges for the e-monies National Electronic Funds Transfer service",
    Answer:
      "NEFT transactions on NetBanking are charged as below: Amounts up to Rs. 10,000 - Rs.2.5 (exclusive of taxes) per transaction Amounts from Rs.10,001 to Rs.1 lakh - Rs. 5 (exclusive of taxes) per transaction Amounts above Rs. 1 lakh up to Rs. 2 lakh - Rs. 15 (exclusive of taxes) per transactionAmounts above Rs.2 lakh â€“ Rs.25 (exclusive of taxes) per transaction View more",
  },
  {
    Question: "How do I check the IFSC of the receiving branch",
    Answer:
      "Just ask your beneficiary to get the IFSC from his or her branch. They can also find it in their cheque book - the IFSC is in the cheque leaf.",
  },
  {
    Question:
      "How is RTGS different from National Electronic Funds Transfer (NEFT)",
    Answer:
      "NEFT is an electronic fund transfer system that operates on a deferred net settlement (DNS) basis, which settles transactions in batches. In DNS, the settlement takes place at a definite time and all transactions are held up till that instant. Any transaction initiated after a designated settlement time will have to wait till the next designated settlement time. RTGS is different because transactions are processed continuously. View more",
  },
  {
    Question: "What is RTGS Funds Transfer",
    Answer:
      "'RTGS' stands for 'Real Time Gross Settlement'. The RTGS system is a funds transfer mechanism where transfer of money takes place from one bank to another on a 'real time' and on a 'gross' basis. This is the fastest possible money transfer system through banking channels. 'Real time' means no waiting period; transactions are settled as soon as they are processed. 'Gross settlement' means the transaction is finalized on its own, without it being bunched with any other transaction. View more",
  },
  {
    Question: "Are there minimum or maximum limits for RTGS transfers",
    Answer:
      "The RTGS system has been designed for large value transactions. The minimum amount to be remitted through RTGS is Rs. 2 Lakhs. There is no upper ceiling for RTGS transactions. The only change to this is RTGS transactions done through NetBanking, when the maximum amount of funds that can be transferred per Customer ID per day is Rs. 10 Lakhs. View more",
  },
  {
    Question:
      "What information do I need to provide when using the RTGS funds transfer service",
    Answer:
      "When using RTGS Funds Transfers, there are a few essential details to provide: Amount to be remitted Account number from where the funds will be debited Name of the beneficiary bank, and the name of the beneficiary customer Account number of the beneficiary customer Sender to receiver information, if there is one The IFSC code of the receiving branch View more",
  },
  {
    Question: "What are the charges for the RTGS funds transfer service",
    Answer:
      "Effective 15 November, 2010; RTGS transactions on NetBanking are charged as below : Rs. 2 lac to Rs. 5 lac - Rs. 25 (inclusive of taxes) per transaction Above Rs. 5 lac - Rs. 50 (inclusive of taxes) per transaction Note: RTGS transfers can be done for amounts exceeding Rs. 2,00,000 only whereas for NEFT there are no such amount restrictions.",
  },
  {
    Question:
      "How long does it take for funds to be transferred from one account to another",
    Answer:
      "Real-time means that beneficiary branches are expected to receive the funds as soon as they are transferred by the remitting bank. The beneficiary bank must credit the beneficiary's account within 30 minutes of receiving the funds transfer message.",
  },
  {
    Question:
      "If the money is not credited successfully, will the remitting customer get the funds back",
    Answer:
      "With RTGS, the receiving bank should credit the account of the beneficiary instantly. If for some reason the money cannot be credited, the receiving bank has to return the money to the remitting bank within 1 hour. As soon as the money is returned, the original debit entry in the customer's account is reversed.",
  },
  {
    Question:
      "What do you mean by exclusions under the Accidental Protection Plan - Hospital Cash",
    Answer:
      "Exclusions are situations or conditions where M&N  ERGO is not liable to pay the benefits to the insured person in the event of an accident.",
  },
  {
    Question:
      "Can I include my spouse in this the Accidental Protection Plan - Hospital Cash policy",
    Answer:
      "Yes, you can include your spouse and up to 2 children in the policy.",
  },
  {
    Question: "How do I make a claim",
    Answer:
      "You can make a claim by calling our toll-free number 1800-226-226 (MTNL or BSNL) or 1800-2-700-700 (any line) or 022 6638 4800 (local/STD charges apply). We will then assist you with the submission of the documents required and the process will be completed within 7 working days, once all the required documents are submitted.",
  },
  {
    Question: "When does my Revive Policy for Personal Accident start",
    Answer:
      "It will commence within 15 days from the date of receipt of the form and premium payment.",
  },
  {
    Question:
      "What plans are available under  the Revive Policy for Personal Accident",
    Answer:
      "M&N  ERGO offers a wide range of sums insured ranging from Rs. 2.5 Lakhs to Rs. 15 Lakhs, with four plan options to choose from: Self Plan Self and Family Plan Self + Dependent Parents Add-On Self and Family + Dependent Parents Add-On",
  },
  {
    Question:
      "What benefit do I get from the Revive Policy for Personal Accident if I break my bones",
    Answer:
      "You get 10% of the sum insured up to Rs. 50,000 (for dependent parents) if you break your bones in an accident.",
  },
  {
    Question:
      "Is there an age limit to buy an  Accidental Protection Plan - Hospital Cash policy",
    Answer: "We can insure anyone between the age of 18 and 69 years.",
  },
  {
    Question:
      "Who can be a beneficiary under the Accidental Protection Plan - Hospital Cash",
    Answer: "A beneficiary can be any member of your family.",
  },
  {
    Question:
      "How do I renew my Accidental Protection Plan - Hospital Cash policy",
    Answer:
      "We will send you renewal reminders. The number of days in advance the reminder is sent depends on the pay plan you have opted for. Pay plan break up: Cheque â€“ 45 days Credit Card â€“ 60 days View more",
  },
  {
    Question: "Will I get a renewed Revive Policy for Personal Accident policy",
    Answer: "Yes, you will receive a renewed policy.",
  },
  {
    Question: "What is the definition of a dependent child",
    Answer:
      "A dependent child is an unmarried child between the age of 3 months and 18 years, or up to 21 years if in full time education, residing with the insured person.",
  },
  {
    Question:
      "Does  the Accidental Protection Plan - Hospital Cash policy cover natural death and daily sickness as well",
    Answer: "This policy only covers accidental death.",
  },
  {
    Question:
      "Does this the Revive Policy for Personal Accident cover natural death and daily sickness",
    Answer: "This policy only covers accidental death.",
  },
  {
    Question:
      "What benefit do I get from the Accidental Protection Plan - Hospital Cash policy if I break my bones",
    Answer:
      "You will be paid up to Rs. 50,000 if you break your bones in an accident.",
  },
  {
    Question:
      "How do I make my premium payments for my Accidental Protection Plan - Hospital Cash policy",
    Answer:
      "This is an annual policy where the premium can be made online via Credit Card, NetBanking or Cheque.",
  },
  {
    Question: "What is an accident",
    Answer:
      "An accident is any sudden or unexpected event, which leads to permanent physical disability or accidental death.",
  },
  {
    Question:
      "When does my Accidental Protection Plan - Hospital Cash policy start",
    Answer:
      "Your policy will commence within 15 days from the date of receipt of the form and premium payment.",
  },
  {
    Question: "What is the definition of a dependent child",
    Answer:
      "A dependent child is an unmarried child between the age of 3 months and 18 years, or up to 21 years if in full time education, residing with the insured person.",
  },
  {
    Question:
      "Does  the Accidental Protection Plan - Hospital Cash policy have a hospital cash benefit",
    Answer:
      "Yes hospital cash provides a benefit of Rs. 1,000 for every day up to a maximum of 30 days in case of hospitalization due to an accident.",
  },
  {
    Question: "What is the cancellation procedure",
    Answer:
      "The policy can be cancelled with a notice period of 30 days. The premium paid by you will be returned on a pro-rata basis or 25% of the annual premium, whichever is higher will be retained. Any cancellation request sent after 30 days of commencement of the policy will be refunded on a pro-rata basis.",
  },
  {
    Question:
      "Does this the Revive Policy for Personal Accident have hospital cash benefit",
    Answer:
      "Yes, hospital cash provides a benefit of Rs. 250 every day up to a maximum of 30 days in case of hospitalization due to an accident.",
  },
  {
    Question:
      "What do you mean by exclusions under the Revive Policy for Personal Accident",
    Answer:
      "Exclusions are situations or conditions where in M&N  ERGO is not liable to pay the benefits to the insured person in the event of an accident.",
  },
  {
    Question:
      "How many members can be included under the Family Plan of the Revive Policy for Personal Accident",
    Answer:
      "You can include your spouse and up to 2 children under the Family Plan.",
  },
  {
    Question:
      "Is there an age limit to opt for a Revive Policy for Personal Accident",
    Answer:
      "A Revive Policy is open to anyone between the age of 18 and 65 years.",
  },
  {
    Question: "Why should I purchase Critical Illness Insurance",
    Answer:
      "Critical Illness Insurance provides you and your family with additional financial security on the diagnosis of a critical illness. The policy provides a lump sum amount which could be used for: Cost of care and treatment Recuperation aids Pay off of debts Any loss in income owing to a decrease in ability to earn View more",
  },
  {
    Question: "What is Critical Illness Insurance",
    Answer:
      "Critical Illness Insurance is a policy that pays out a lump sum amount up to the sum insured upon diagnosis of a critical illness covered under the policy.",
  },
  {
    Question:
      "Can I make multiple claims for the same or any other listed Critical Illness",
    Answer:
      "No, you can make only one claim during the lifetime of the policy.",
  },
  {
    Question:
      "What is meant by disease under the Critical Illness - Platinum Plan",
    Answer:
      "Disease is a pathological condition of a part, organ or system resulting from various causes such as infection, pathological process or environmental stress and characterized by an identifiable group of signs or symptoms.",
  },
  {
    Question: "What are the available plans under the Critical Illness policy",
    Answer:
      "You can choose to be insured for any of the following amounts: Rs. 2,50,000, Rs. 5,00,000, Rs.7,50,000 or Rs. 10,00,000.",
  },
  {
    Question:
      "Who do I contact in the case of a claim under the Critical Illness policy",
    Answer:
      "In the case of a claim under the policy, you should immediately intimate us on our helpline number. On receipt of the intimation, we will register the claim and assign a unique claim reference number which will be communicated to the insured and may be used for all future correspondence.",
  },
  {
    Question:
      "What are the benefits under  the Critical Illness - Platinum Plan",
    Answer:
      "The company will pay the sum insured as a lump sum on the first diagnosis of any one of the following critical illnesses, provided that the insured person survives a period of 30 days from the date of the first diagnosis. The following critical illnesses are covered under our plan: Heart Attack (Myocardial Infarction ) Coronary Artery Bypass Surgery Stroke Cancer Kidney Failure Major Organ Transplant Multiple Sclerosis Paralysis View more",
  },
  {
    Question: "What is a Benefit Policy",
    Answer:
      "Under a Benefit Policy the insurance company pays the policy holder a lump sum amount, on the occurrence of an insured event.",
  },
  {
    Question:
      "What are the medical tests that I need to undergo to enrol myself for the  - Platinum Plan policy",
    Answer:
      "No pre-policy medical check up is required for individuals up to the age of 45 years.",
  },
  {
    Question: "What documents are required at the time of a claim",
    Answer:
      "The insured shall arrange for submission of the following documents required to process a claim within 45 days from the date of intimation. Duly completed claim form Original discharge summary Consultation note/ relevant treatment papers All relevant medical reports along with supporting invoices and doctors requisition advising the same Original and final hospitalization bills with detailed break-up Pharmacy Bills along with prescriptions Any other documents as may be required by the company On receipt of the claim documents the claim will be processed in accordance with the terms and conditions of the policy. View more",
  },
  {
    Question:
      "How do I make a claim under the Accidental Protection Plan - Hospital Cash policy",
    Answer:
      "You can make a claim by calling our toll-free number 1800-226-226 (MTNL or BSNL) or 1800-2-700-700 (Any Line) or 022 6638 4800 (Local/STD charges apply). We will then assist you with the submission of the required documents and the process will be completed within 7 working days, once all the required documents are submitted.",
  },
  {
    Question:
      "What do you mean by pre-existing diseases not covered under the Critical Illness plan",
    Answer:
      "A pre-existing disease is any condition, ailment, injury or related condition for which the insured person had signs or symptoms and/or was diagnosed and/or received medical advice or treatment prior to the first policy with the company",
  },
  {
    Question: "Is there any tax exemption under the Health Suraksha policy",
    Answer:
      "Yes, you can avail up to Rs. 15,000 as tax benefit under 'Section 80D'. In case you are a senior citizen, you can avail up to Rs. 20,000 as tax benefit under 'Section 80D'. Subject to changes in Tax laws",
  },
  {
    Question:
      "Is there any eligibility criterion to purchase this the Critical Illness policy",
    Answer:
      "A Critical Illness policy covers individuals in the age group of 5 years to 45 years. Children between 5 years and 18 years will be covered only when both the parents are also insured under the policy.",
  },
  {
    Question:
      "What is meant by disease under the Critical Illness - Platinum Plan",
    Answer:
      "Disease is a pathological condition of a part, organ or system resulting from various causes such as infection, pathological process or environmental stress and characterized by an identifiable group of signs or symptoms.",
  },
  {
    Question:
      "Can I make multiple claims for the same or any other listed Critical Illness",
    Answer:
      "No, you can make only one claim during the lifetime of the policy.",
  },
  {
    Question:
      "Are there any eligibility criteria to purchase this the Critical Illness - Platinum Plan",
    Answer:
      "A Critical Illness policy covers individuals in the age group of 5 years to 45 years. Children between 5 and 18 years will be covered only if both parents are also insured under the policy.",
  },
  {
    Question: "What is Critical Illness insurance",
    Answer:
      "Critical Illness insurance is a policy that pays out a lump sum under â€˜Section 80Dâ€™. In the case of senior citizens you can avail up to Rs. 20,000 as tax benefit under â€˜Section 80Dâ€™.",
  },
  {
    Question: "Why should I buy Critical Illness insurance",
    Answer:
      "Critical Illness insurance provides you and your family additional financial security on the diagnosis of a critical illness. The policy provides a lump sum amount which could be used for: Cost of care and treatment Recuperation aid Debts pay off Any lost in income due to a decrease in ability to work View more",
  },
  {
    Question:
      "How do I make a claim under the Accidental Protection Plan - Hospital Cash policy",
    Answer:
      "You can make a claim by calling our toll-free number 1800-226-226 (MTNL or BSNL) or 1800-2-700-700 (Any Line) or 022 6638 4800 (Local/STD charges apply). We will then assist you with the submission of the required documents and the process will be completed within 7 working days, once all the required documents are submitted.",
  },
  {
    Question: "What documents are required at the time of a claim",
    Answer:
      "The insured shall arrange for submission of the following documents required to process a claim within 45 days from the date of intimation. Duly completed claim form Original discharge summary Consultation note/ relevant treatment papers All relevant medical reports along with supporting invoices and doctors requisition advising the same Original and final hospitalization bills with detailed break-up Pharmacy Bills along with prescriptions Any other documents as may be required by the company On receipt of the claim documents the claim will be processed in accordance with the terms and conditions of the policy. View more",
  },
  {
    Question:
      "Who do I contact in the case of a claim under the Critical Illness - Platinum Plan",
    Answer:
      "In the case of a claim under the policy, you should immediately intimate us on our helpline numbers.",
  },
  {
    Question:
      "What are the medical tests that I need to undergo to enrol myself for the  - Platinum Plan policy",
    Answer:
      "No pre-policy medical check up is required for individuals up to the age of 45 years.",
  },
  {
    Question: "Why should I buy Critical Illness insurance",
    Answer:
      "Critical Illness insurance provides you and your family additional financial security on the diagnosis of a critical illness. The policy provides a lump sum amount which could be used for: Cost of care and treatment Recuperation aid Debts pay off Any lost in income due to a decrease in ability to work View more",
  },
  {
    Question:
      "What are the benefits under  the Critical Illness - Platinum Plan",
    Answer:
      "The company will pay the sum insured as a lump sum on the first diagnosis of any one of the following critical illnesses, provided that the insured person survives a period of 30 days from the date of the first diagnosis. The following critical illnesses are covered under our plan: Heart Attack (Myocardial Infarction ) Coronary Artery Bypass Surgery Stroke Cancer Kidney Failure Major Organ Transplant Multiple Sclerosis Paralysis View more",
  },
  {
    Question: "Is there any tax exemption under the Health Suraksha policy",
    Answer:
      "Yes, you can avail up to Rs. 15,000 as tax benefit under 'Section 80D'. In case you are a senior citizen, you can avail up to Rs. 20,000 as tax benefit under 'Section 80D'. Subject to changes in Tax laws",
  },
  {
    Question:
      "What do you mean by pre-existing diseases not covered under the Critical Illness - Platinum plan",
    Answer:
      "A pre-existing disease is any condition, ailment, injury or related condition for which the insured person had signs or symptoms and/or was diagnosed and/or received medical advice or treatment prior to the first policy with the company.",
  },
  {
    Question: "What is cumulative bonus",
    Answer:
      "Cumulative bonus is an increase in the sum insured by a specified percentage of every claim free year subject to a certain maximum, provided that the policy is renewed without any break. Under the Health Suraksha policy, you can avail a 5% cumulative bonus for every claim free year upto 50% of SI..",
  },
  {
    Question: "What is meant by Day Care Procedures",
    Answer:
      "Day Care Procedures are the medical procedures/surgeries wherein the person does not need to be hospitalised for more than 24 hours due to technological advancement.",
  },
  {
    Question: "What are Pre and Post hospitalisation expenses",
    Answer:
      "Pre-hospitalisation expenses means medical expenses incurred for a specified number of days prior to hospitalisation for any disease, illness or injury sustained which is covered under the Policy. Post-hospitalisation expenses means medical expenses incurred for a specified number of days after discharge from the hospital. In 'Health Suraksha' the pre-hospitalisation period is 60 days while the post-hospitalisation period is 90 days.",
  },
  {
    Question: "What are the benefits of a health card",
    Answer:
      "A health card mentions the contact details and contact numbers of the TPA. In case of a medical emergency, you can call these numbers for queries, clarifications or to seek any kind of assistance. Moreover, you need to display your health card at the time of admission into the hospital.",
  },
  {
    Question: "Do I need to pay for hospitalisation",
    Answer:
      "If you are admitted in any of our network hospitals, you can avail a cashless facility. We will directly reimburse all the admissible expenses to the hospital. However, in case of non-network hospitals you will have to settle hospital bills at the time of discharge and consequently, the same will be reimbursed to you by us.",
  },
  {
    Question:
      "What are the medical tests that I need to undergo to enrol myself for  the Critical Illness policy",
    Answer:
      "No pre-policy medical check up is required for anyone up to the age of 45 years.",
  },
  {
    Question: "What is Family Floater and what are its features",
    Answer:
      "Family Floater is a policy wherein the entire family of the insured comprising of the insured and his/her dependents, are covered under a single sum insured. The advantages of such a policy are: All member of the family (as defined above) can be covered under one policy. A Single Premium is payable for the entire family The amount of the sum insured floats over the entire family, i.e. the limit can be used by any member of the family, any number of times. You do not have to keep track of renewals for different members. Just a single renewal date has to be remembered. View more",
  },
  {
    Question: "What is meant by disease",
    Answer:
      "Disease means a pathological condition of a part, organ or system resulting from various causes such as infection, pathological process or environmental stress and characterised by an identifiable group of signs or symptoms.",
  },
  {
    Question:
      "What are domiciliary hospitalisation expenses under the Health Suraksha policy",
    Answer:
      "Domiciliary hospitalisation means medical treatment for a period exceeding 3 days for such illness, disease or injury which in the normal course would require care and treatment at a hospital/nursing home but is actually taken while confined at home in India, but only under the following circumstances: The condition of the patient is such that he/she cannot be taken to the hospital/nursing home The patient cannot be taken to the hospital/nursing home as a result of lack of accommodation therein View more",
  },
  {
    Question:
      "How do I make a claim under the Accidental Protection Plan - Hospital Cash policy",
    Answer:
      "You can make a claim by calling our toll-free number 1800-226-226 (MTNL or BSNL) or 1800-2-700-700 (Any Line) or 022 6638 4800 (Local/STD charges apply). We will then assist you with the submission of the required documents and the process will be completed within 7 working days, once all the required documents are submitted.",
  },
  {
    Question: "What is meant by Network Hospitals",
    Answer:
      "These are hospitals that form part of the company's network (part of the company's tie-up list). For a complete list of network hospitals, log on to our website www.M&N ergo.com",
  },
  {
    Question:
      "Are there any special discounts available under the Health Suraksha policy",
    Answer:
      "The policy provides a family discount of 10%, if 3 or more family members are covered under a single policy on an individual sum insured basis.",
  },
  {
    Question: "What do you mean by pre-existing diseases",
    Answer:
      "Any condition, ailment, injury of related condition(s) for which the insured person has had signs or symptoms and/or was diagnosed and/or has received medical advice/treatment within 48 months prior to the insuredâ€™s first policy with the company.",
  },
  {
    Question: "What is a hospital/nursing home",
    Answer:
      "A hospital/nursing home means an establishment which: is registered as such with a local authority and is under the supervision of a registered and qualified Medical Practitioner and operates for the reception, care and treatment of sick, ailing or injured persons as inpatients provides organized facilities for diagnosis and medical and surgical treatment at all times; and is not primarily a day clinic, rest or convalescent home or similar establishment and is not, other than incidentally, a place for the treatment of alcoholics or drug addicts or a rehabilitation centre;OR has a fully equipped operation theatre of its own wherever surgical operations are carried out provides nursing care and has a physician or a staff of physicians actually on the premises at all times at least 10 in-patient beds at all times View more",
  },
  {
    Question:
      "Are all Health Suraksha policy holders eligible for a health card",
    Answer:
      "Yes, all policy holders are eligible for a health card as it is an important component of the policy.",
  },
  {
    Question: "Why do I need health insurance",
    Answer:
      "Health Insurance will protect you and your family against any financial contingency arising due to a medical emergency.",
  },
  {
    Question: "What is covered under the Ayush benefit",
    Answer:
      "Under the Ayush benefit expenses are reimbursed for in-patient treatment taken under Ayurveda, Unani, Sidha or Homeopathy.",
  },
  {
    Question: "What are the benefits under  the Health Suraksha policy",
    Answer:
      "Health Suraksha offers optimum health coverage at affordable prices. The plan not only covers hospitalisation expenses due to accidents or illness but also extends to cover pre and post hospitalisation expenses, day care procedures, domiciliary treatment, organ donor expenses, emergency ambulance and ayush benefit.",
  },
  {
    Question: "What is an injury or injuries",
    Answer:
      "Injury or injuries means any physical, external or accidental bodily injury occurring suddenly in time and resulting solely and independently of any other cause or any physical defect or infirmity existing before the period of insurance.",
  },
  {
    Question: "What is meant by non-network hospitals",
    Answer:
      "These hospitals do not form part of the companyâ€™s tie-up list. The bills are settled by the Insured and the relevant documents and bills are subsequently submitted to the TPA. The amount consequently, is reimbursed to the insured.",
  },
  {
    Question: "What is meant by Organ Donor Expense",
    Answer:
      "Organ Donor Expenses are all the hospitalisation expenses incurred by the donor for the donation of an organ (excluding the cost of the organ) to the insured during the course of an organ transplant.",
  },
  {
    Question: "What do you mean by pre-existing diseases",
    Answer:
      "Any condition, ailment, injury of related condition(s) for which the insured person has had signs or symptoms and/or was diagnosed and/or has received medical advice/treatment within 48 months prior to the insuredâ€™s first policy with the company.",
  },
  {
    Question:
      "Who do I contact to submit a claim under Health Suraksha policy in case of hospitalisation",
    Answer:
      "For hospitalization /claim, customer can contact via Call: 1800 200 1999 / 1860 2000 700 Fax: 1860 2000 600 Email: [email protected] Through IPO: Login to Insurance Portfolio Organizer (IPO) from M&N  Ergo website home page",
  },
  {
    Question: "Is there any tax exemption under the Health Suraksha policy",
    Answer:
      "Yes, you can avail up to Rs. 15,000 as tax benefit under 'Section 80D'. In case you are a senior citizen, you can avail up to Rs. 20,000 as tax benefit under 'Section 80D'. Subject to changes in Tax laws",
  },
  {
    Question: "What are the plans available under this policy",
    Answer:
      "You can insure yourself for Rs. 3 Lakhs, Rs. 4 Lakhs or Rs. 5 Lakhs. You can choose from any of the four plans mentioned below: 1 Adult 2 Adults 2 Adults and 1 Child 2 Adults and 2 Children The policy offers the option to cover on an individual sum insured basis or a family floater basis. View more",
  },
  {
    Question:
      "Is there any eligibility criterion to purchase this the Health Suraksha policy",
    Answer:
      "A Health Suraksha policy is open to individuals from the age of 3 months to 65 years. There is no entry age limit unlike other policies",
  },
  {
    Question: "What is the benefit of broken bones under this policy",
    Answer:
      "Pays 10 % of Sum Insured upto 50,000(for dependent parents), if an accident results in broken bones",
  },
  {
    Question: "How do I make a claim",
    Answer:
      "You can make a claim by calling our Toll free number 1800-226-226 (MTNL or BSNL Line) or 1800-2-700-700 (Any Line) or 022 66384800 ( Local / STD charges apply). We will then assist you with the submission of the documents required and the process will be completed within 7 working days, once all the required documents are submitted.",
  },
  {
    Question: "How do I renew my policy",
    Answer:
      "We will send you renewal reminders. The number of days advance reminder depends upon the pay plan opted for.Payplansbreakup : Cheque-45daysCredit Card â€“ 60 days",
  },
  {
    Question:
      "Will my accident policy cover me even if I am out of the country",
    Answer:
      "Yes the accident policy will cover you even if you are out of the country. The sum insured will be paid to you in Indian Rupees in case of a claim i.e. the claim will be paid out in India only",
  },
  {
    Question: "Does this policy have hospital cash benefit",
    Answer:
      "Yes, depending on the plan selected hospital cash provides a benefit up to Rs. 500 everyday upto a maximum of 45 days in case of hospitalization due to an accident.",
  },
  {
    Question: "Does this policy cover natural death and daily sickness also",
    Answer: "This policy only covers accidental death.",
  },
  {
    Question: "What is the definition of a dependent child",
    Answer:
      "Dependent child means an unmarried dependent child residing with the insured person between the age of 3 months and up to 18 years or up to the age of 21 if in full time education.",
  },
  {
    Question: "Who can be the beneficiary",
    Answer: "The beneficiary could be any member of your family.",
  },
  {
    Question: "How many members can be included under the Family Plan",
    Answer:
      "You can include your spouse as well as two dependent children under the Family Plan.",
  },
  {
    Question: "What kind of documentation is required",
    Answer:
      "The best part of this policy is that it has hassle free documentation. All you need to do is fill the complete proposal form with relevant details and sign it .Tick any one plan and attach a cheque or fill the credit card details in the form.",
  },
  {
    Question: "What do you mean by exclusions",
    Answer:
      "Exclusions are situations or conditions where in M&N  ERGO is not liable to pay the benefits to the insured person in the event of an accident.",
  },
  {
    Question: "When does my policy start",
    Answer:
      "This will be commenced within 15 days from the date of receipt of form & premium payment",
  },
  {
    Question:
      "Is there an age limit for opting Individual Personal Accident Plan 2 policy",
    Answer: "It is open to everyone from the age of 18 years to 65 years.",
  },
  {
    Question: "What are the benefits payable under this policy",
    Answer:
      "Now you can protect your entire family with Individual Personal Accident Plan 2 against accidental injuries. The policy provides the benefits to you and your family, for Accidental Death, Permanent Disability, Broken Bones, Burns due to an accident. It also provides benefit of Ambulance cost and hospital cash.",
  },
  {
    Question: "How do I make my premium payments",
    Answer:
      "This is an annual policy, where the premium can be made via Credit Card or Cheque",
  },
  {
    Question: "Can I include my parents in this policy",
    Answer:
      "Yes, you can include your dependent parents up to 70 years. The plan provides add on benefits for your dependent parents with an affordable flat rate. Now you can give back a small measure of the love and concern they showed for you.",
  },
  {
    Question: "What kind of benefits is my spouse and children entitled to",
    Answer:
      "100% of the sum insured in case of accidental death, permanent disability, broken bones, burns,Hospital cash of the spouse & 10% of the sum insured in case of accidental death or permanent disability of the children.",
  },
  {
    Question: "What are the available plans with under this policy",
    Answer:
      "M&N  ERGO offers you a wide range of Sum Insured, from Rs. 2.5 lakh to 15 lakh with four plan options to choose.Self PlanSelf & Family PlanSelf + Dependent Parents Add-onSelf & Family Plan + Dependent Parents Add-on",
  },
  {
    Question: "Will I get a renewed policy",
    Answer: "Yes, you shall receive the renewed policy",
  },
  {
    Question: "What is the Cancellation procedure",
    Answer:
      "The policy can be cancelled with a notice period of 30 days. The premium paid by you will be returned on a pro-rata basis or 25% of the annual premium whichever is higher would be retained. Any cancellation request sent after 30 days of the commencement of the policy will be refunded on pro - rata basis.",
  },
  {
    Question: "How do I make my premium payments",
    Answer:
      "This is an annual policy, where the premium can be made online via Credit Card/Netbanking or Cheque",
  },
  {
    Question: "What is an accident",
    Answer:
      "Accident or Accidental means a sudden, unforeseen and involuntary event caused by external, visible & violent means",
  },
  {
    Question: "Can I include my parents in this policy",
    Answer:
      "Yes, you can include your dependent parents up to 65 years. The plan provides add on benefits for your dependent parents with an affordable flat rate. Now you can give back a small measure of the love and concern they showed for you.",
  },
  {
    Question: "How do I renew my policy",
    Answer:
      "We will send you renewal reminders. The number of days advance reminder depends upon the pay plan opted for. Payplansbreakup : Cheque-45days Credit Card â€“ 60 days",
  },
  {
    Question: "What is an accident",
    Answer:
      "Accidentmeans a sudden, unforeseen and involuntary event caused by external, visible & violent means.",
  },
  {
    Question: "What is the Cancellation procedure",
    Answer:
      "The policy can be cancelled with a notice period of 30 days. The premium paid by you will be returned on a pro-rata basis or 25% of the annual premium whichever is higher would be retained. Any cancellation request sent after 30 days of the commencement of the policy will be refunded on pro - rata basis.",
  },
  {
    Question: "How do I make my premium payments",
    Answer:
      "This is an annual policy, where the premium can be made via Credit Card or Cheque.",
  },
  {
    Question: "What is an accident",
    Answer:
      "Accidentmeans a sudden, unforeseen and involuntary event caused by external, visible & violent means.",
  },
  {
    Question:
      "Is there an age limit for opting M&N  Ergo Personal Accident Insurance policy",
    Answer:
      "Personal Accident Insurance is open to everyone from the age of 18 years to 65 years.",
  },
  {
    Question:
      "Till what age the M&N  Ergo Personal Accident Insurance policy can be renewed",
    Answer: "Personal Accident Insurance policy can be renewed for life long",
  },
  {
    Question: "What do you mean by exclusions",
    Answer:
      "Exclusions are situations or conditions where in M&N  ERGO is not liable to pay the benefits to the insured person in the event of an accident.",
  },
  {
    Question: "Does this policy cover natural death and daily sickness also",
    Answer: "This policy only covers accidental death.",
  },
  {
    Question: "Who can be the beneficiary",
    Answer: "The beneficiary could be any member of your family.",
  },
  {
    Question:
      "Will my accident policy cover me even if I am out of the country",
    Answer:
      "Yes the accident policy will cover you even if you are out of the country. The sum insured will be paid to you in Indian Rupees in case of a claim i.e. the claim will be paid out in India only.",
  },
  {
    Question:
      "Does the threshold/deductible limit consist of single claim or multiple claims",
    Answer:
      "Threshold/ deductable limit is an aggregate deductible which the customer has to pay either from his pocket or through other Mediclaim, beyond aggregate deductible (crossed in single claim or in multiple claims in a policy year) full claim amount will be paid by M&N  Ergo General Insurance. Example-1: Single Claim in a policy year Deductible Sum Insured in M&N  Ergo General Insurance Insured Super Top up Policy Claim amt assessed Deductible Exhaustion Balance Deductible Claim amt payable by other policy / saving Claim amt payable by M&N  Ergo General Insurance Insured Super Top up Policy At inception 200,000 800,000 0 0 200,000 0 0 Claim 1 200,000 800,000 10,000,00 2,00,000 0 2,00,000 8,00,000 Example-2: Multiple Claims in a policy year Deductible Sum Insured in M&N  Ergo General Insurance Insured Super Top up Policy Claim amt assessed Deductible Exhaustion Balance Deductible Claim amt payable by other policy / saving Claim amt payable by M&N  Ergo General Insurance Insured Super Top up Policy At inception 200,000 800,000 0 0 200,000 0 0 Claim 1 200,000 800,000 150,000 150,000 50,000 150,000 0 Claim 2 200,000 800,000 300,000 50,000 0 50,000 250,000 Claim 3 200,000 800,000 550,000 0 0 0 550,000 View more",
  },
  {
    Question: "Is there any co-payment applied on this policy",
    Answer:
      "All person(s) named covered under the policy above the age of 80 years (age last birthday) shall bear a co-pay of 10% for each and every claim.",
  },
  {
    Question: "Do I need to undergo medical test for buying this policy",
    Answer:
      "You are not required to undergo any medical tests up to the age of 55 years, except if you have declared any pre-existing diseases or ailments at the time of applying for the policy. In such cases and for applicants above age 55 years, one has to undergo the specified medical tests.",
  },
  {
    Question: "What are the Medical test charges",
    Answer:
      "Pre agreed charges for health check up with our network provider are Rs 1000/- and Rs.1200/- per person for SET1 & SET2 respectively. On acceptance of proposals, we will reimburse 50% of the expenses.",
  },
  {
    Question: "What is the minimum and maximum deductible in this plan",
    Answer:
      "You can choose minimum of Rs. 2,00,000 and maximum of Rs. 5,00,000 aggregate deductible in this policy.",
  },
  {
    Question: "What is the entry & exit age for this policy",
    Answer:
      "One can be a proposer under the Policy from the age of 18 years to 65 years. You can insure your children from the age of 91 days to the age of 23 years.",
  },
  {
    Question:
      "Can I also include my parents and parent- in-laws in this policy",
    Answer:
      "Yes, you can include your parents and parent- in-laws in the same Policy on an Individual Sum Insured basis and in a separate Policy on floater Sum Insured basis.",
  },
  {
    Question:
      "Is it mandatory to inform change in health condition in writing while renewing Super Top Up plan",
    Answer:
      "No. There is no such obligation under the Policy. Once we have accepted the proposal, member will be eligible for life time renewal.",
  },
  {
    Question:
      "If the claim amount is 6 lakhs, how much will be paid by M&N  Ergo General Insurance",
    Answer: "Whatever is over and above the threshold limit will be paid.",
  },
  {
    Question: "What are the documents required",
    Answer:
      "Please refer Policy wordings for exhaustive list of claims documents required. We will not ask for anything over and above the list given in Policy.",
  },
  {
    Question:
      "Will the continuity benefit (2years) be given on Super Top Up plan as well",
    Answer:
      "Continuity benefit will not be available in Super Top Up plan as portability benefits are not available in this product.",
  },
  {
    Question: "Does pre-existing cover start after 4 years or 3 years",
    Answer:
      "The Policy covers expenses incurred for the treatment of diseases that you have before taking the Policy. Such will be covered only after 36 months of continuous coverage.",
  },
  {
    Question:
      "Chemo & dialysis does not required local or general anesthesia will it be cover under day care",
    Answer:
      "Yes, since chemo & dialysis are recurring procedures and does not require local or general anesthesia, in this context all such procedures will be covered & paid under day care procedures.",
  },
  {
    Question: "Do we have any loading on pre-existing ailments",
    Answer:
      "Yes, there were will be loading on pre existing ailments which will be arrived at after health check up of the customer. Acceptance of the proposal will be subject to medical underwriting.",
  },
  {
    Question:
      "A person undergoes for dialysis 4 times in a week will it be covered if the basic deductible is exhausted",
    Answer:
      "Yes, any illness payable under the Policy for which threshold gets exhausted, will be paid under Super top up.",
  },
  {
    Question: "Can I cover my family members in this policy",
    Answer:
      "You can cover your family members as given below in a single Policy on Individual Sum Insured basis. Brother, Sister, Grand Son, Grand Daughter, Daughter in Law, Son in Law, Nephew, Niece, Grand Mother and Grand Father.",
  },
  {
    Question:
      "Will I get tax benefit if I cover my family on individual Sum Insured basis",
    Answer: "Yes, you will get Tax benefit under section 80D.",
  },
  {
    Question: "What will be the start date of my insurance policy",
    Answer:
      "Your insurance cover starts from the commencement date indicated by you in the proposal form or receipt of the premium by us, whichever is later.",
  },
  {
    Question:
      "If I have a home insurance policy with two different companies, will I benefit from both",
    Answer:
      "If you have a policy with two insurance companies, at the time of the claim both insurance companies will pay on a proportionate basis.",
  },
  {
    Question: "Is there an age limit on the property for it to be insured",
    Answer: "No there is no age limit to buy a home insurance policy.",
  },
  {
    Question:
      "What are the documents required to be submitted in case of a home burglary claim",
    Answer:
      "The original invoice has to be submitted, giving the value of the items stolen. In addition to this you also have to give the replacement cost/repair cost, FIR, Final police report and claim form.",
  },
  {
    Question:
      "What happens to the home insurance policy if the insured house is sold",
    Answer:
      "From the time the transfer of ownership becomes effective, the policy stands cancelled and the insured ceases to be an insured under the policy. We will then refund the premium for the balance of the insured period.",
  },
  {
    Question: "What is the difference between burglary, theft and larceny",
    Answer:
      "Burglary is when there is forceful entry in the premises in order to rob. Theft is when there is a robbery without any evidence of forceful entry in the premises. Larceny is when a known person on the premises has robbed or stolen the insuredâ€™s belongings.",
  },
  {
    Question: "Can a HUF/ Leased (Mhada/Cidco) property be insured",
    Answer:
      "If you have financial interest in the property as owner or lessor then you can insure the property.",
  },
  {
    Question: "When is an FIR necessary in a Home Insurance claim",
    Answer:
      "A police FIR is mandatory in the case of: Burglary Theft Malicious Damage Riot and Strike Terrorism",
  },
  {
    Question: "What happens after the Home Insurance claim is registered",
    Answer:
      "The surveyor contacts the customer in 48 hours. The claim form is sent to the customerâ€™s correspondence address within 7 working days.",
  },
  {
    Question: "How will I know my Home Insurance policy is due for renewal",
    Answer:
      "The renewal notice for a home insurance policy is sent 30 to 45 days in advance of the expiry of the policy.",
  },
  {
    Question:
      "What is the Home Insurance premium charged for fire and special peril cover and burglary and theft cover",
    Answer:
      "The premium charged is Rs. 70 per Rs. 1 lakh for fire and special peril and Rs. 240 per Rs. 1 lakh for burglary and theft.",
  },
  {
    Question: "Do you offer any discounts for Home Insurance",
    Answer:
      "Yes, we do. The discounts available are: 24 hour security guard â€“ 5% Burglar Alarm â€“ 5% Both â€“ 15%",
  },
  {
    Question: "Can a laptop be covered under a Home Insurance policy",
    Answer:
      "Yes, it is covered only while it is in the insured residential premises.",
  },
  {
    Question: "How do we value the property under home insurance",
    Answer:
      "Property valuation is done by multiplying the built up area of the property with the cost of construction per square feet.",
  },
  {
    Question:
      "Is an FIR necessary for a property damage claim under the Home Insurance policy",
    Answer:
      "An FIR is mandatory in case of Malicious Damage, Riot and Strike, Terrorism, Burglary, Theft & Larceny claims.. However, it is not necessary in the case of floods, storms, earthquakes, lightning, subsidence or impact damage due to aircraft loss.",
  },
  {
    Question:
      "Can an entire society or building be covered under your Home Insurance policy",
    Answer: "No, an entire society cannot be covered under this product",
  },
  {
    Question: "What property is not covered under home insurance",
    Answer:
      "The following properties are not covered: Properties under construction 'Kutcha' Constructions Residence-cum-office properties Residence-cum-shop Land View more",
  },
  {
    Question:
      "What are the eligibility criteria to avail a Home Insurance policy",
    Answer:
      "Any resident Indian who is the owner of the property & which is located in India can purchase a Multi Year Home Insurance Policy.",
  },
  {
    Question: "Why do I need a Childrenâ€™s Plan",
    Answer:
      "As a parent, your priority is your childâ€™s future and being able to meet their dreams and aspirations. Providing a good education, establishing a professional career or even a modest wedding is becoming an expensive proposition with each passing year. Costs are increasing fast. Just imagine how much you will need when your young children tale these important steps in life in the future. With our Childrenâ€™s Plans, you can start building regular savings today to help you secure your childâ€™s immediate and future needs even when you are not around.",
  },
  {
    Question: "Will I also be able to save tax through a Childrenâ€™s Plan",
    Answer:
      "Yes, you will be eligible for tax benefits under Section 80C and Section 10(10D) of the Income Tax Act, 1961, subject to the provisions contained therein (tax benefits are subject to change in the tax laws. Please refer to the Tax Benefits section for more details).",
  },
  {
    Question:
      "What are the factors to consider while buying a Childrenâ€™s Plan",
    Answer:
      "Consider the inflated costs of a normal educational course or any other requirements that your child might have in the future. This should be your targeted savings amount, which you would want to receive when the policy matures. Ideally, the term you should choose for the plan is when your child is in a position to require the money. Thereafter, you need to sit with your Relationship Manager to work out the amount to be invested and the level of protection required.",
  },
  {
    Question:
      "Does M&N  SL offer Unit Linked plans within its entire range of Childrenâ€™s Plans",
    Answer: "Yes, the plan name is M&N  Young star super premium plan.",
  },
  {
    Question: "Should I buy a plan in my Childâ€™s name or in my own name",
    Answer:
      "When purchasing a Life Insurance plan, it is important to remember that its main purpose is to replace an income that is lost in case of the unfortunate demise of the chief bread winner of the family (Life Assured). A child rarely has an income and therefore has no reason to be insured. If the Insurance Plan is taken in name of the child, the plan gets derailed in case of the unfortunate demise of the parent. Thus, the very objective of any Childrenâ€™s Plan is undermined if the plan is acquired in the childâ€™s name. Therefore, as far as possible, make sure that you, as a parent, are the Life Assured and the nominee or the beneficiary is your child.",
  },
  {
    Question: "What is the surrender benefit",
    Answer:
      "If you surrender before completion of the 5th policy year, your Fund Value less applicable charges will be moved to the DPF and the proceeds from DPF will be paid out on the completion of the lock-in period. If you surrender after completion of the 5th policy year your Fund Value will be paid out to you. Upon payment of this benefit the policy terminates and no further benefits are payable. Please refer to the policy document for further details on Surrender.",
  },
  {
    Question: "Can I take any loan",
    Answer: "Policy loan is not offered in this plan",
  },
  {
    Question: "What are the exclusions available under the Plan",
    Answer:
      "In case of death due to suicide within 12 months from the date of inception of the policy or from the date of the revival of the policy, the nominee or beneficiary of the policyholder shall be entitled to the fund value, as available on the date of death.Any charges recovered subsequent to the date of death shall be paid back to the nominee or beneficiary along with the death benefit. For detailed exclusions for the plan options please refer to product brochure carefully and/or consult Relationship Manager.",
  },
  {
    Question: "What are the fund choices",
    Answer:
      "The plan offers 4 funds of varying risk & return profiles. Income Fund, Balanced Fund, BlueChip Fund and Opportunities Fund",
  },
  {
    Question: "What are the Plan option available",
    Answer:
      "There are 8 Plan options available under the Plan ProGrowth Super II. Please refer to the product brochure for details.",
  },
  {
    Question: "What is the Settlement Option",
    Answer:
      "In Settlement Option the Fund value is paid in periodical installments over a period which may extend up to 5 years. The value of installment payable on the date specified shall be subject to investment risk i.e. the NAV may go up or down depending upon the performance of the funds chosen by you. Your money will remain invested in the funds chosen by you and is subject to the same investment risks as during the policy term. During the Settlement period, the risk cover will cease, Fund Management Charge will continue to be deducted and no other charges shall be levied. Partial withdrawals and switches shall not be allowed during this period. Complete withdrawal may be allowed at any time during this period without levying any charge. At the end of this 5-year period, the balance units will be redeemed at the then prevailing unit price and the fund value will be paid to you.",
  },
  {
    Question: "What is the min-max age at entry/maturity",
    Answer: "Click here to view the min-max age at entry/maturity",
  },
  {
    Question: "What is the Maturity Benefit under the plan",
    Answer:
      "On maturity, the policy holder will receive the sum assured plus accrued bonuses on full payment of premiums due throughout the premium paying term.",
  },
  {
    Question: "What is the premium frequency available under the policy",
    Answer:
      "The premiums can be paid annually, half-yearly, quarterly and annually",
  },
  {
    Question: "Can the plan be offered under limited underwriting",
    Answer:
      "The plan can be applied for by filling in the Short Medical Questionnaire (SMQ), which may not require you to go for medicals.",
  },
  {
    Question: "Do I have an option to avail of loans under the policy",
    Answer:
      "The policyholder can avail a loan under the policy, provided the policy has acquired a surrender value and subject to terms and conditions as the company may specify from time to time.",
  },
  {
    Question: "When does the plan acquire Guaranteed Surrender value",
    Answer:
      "The plan will acquire a Guaranteed Surrender Value provided 2 full years' premium has been paid for a premium paying term of 7 years 3 full years' premium has been paid for a premium paying term of 10 years",
  },
  {
    Question: "What is the limited pay term available under the plan",
    Answer:
      "With M&N  Lifepay premiums for 7 years for policy terms of 10 and 15 years or pay premiums for 10 years for policy term of 15 and 20 years.",
  },
  {
    Question: "What is the Death-Benefit under the plan",
    Answer:
      "On death of the life assured, provided all due premiums are paid, the company would pay the higher of the following Sum Assured 10 times annualised premium 105% of the premiums* paid (Premiums are excluding any taxes paid on the premium or any extra premiums) plus accrued bonuses, if any, to the nominee.",
  },
  {
    Question: "What is the exclusion in the plan",
    Answer:
      "In case of death due to suicide, within 12 months from the date of inception of the policy, the nominee of the policyholder shall be entitled to 80% of the premiums paid provided the policy is in-force or from the date of revival of the policy, the nominee of the policyholder shall be entitled to the amount which is higher of 80% of the premiums paid till date of death or the surrender value as available on death of death.",
  },
  {
    Question: "What is a retirement plan",
    Answer:
      "Retirement Plans refers to insurance plans which aim to offer you income/ pension after retirement when you may not have any other adequate source of income.",
  },
  {
    Question: "Will automatic conversion of vesting benefit to annuity happen",
    Answer:
      "Policyholder needs to purchase an annuity plan â€“ by filling the annuity proposal form. Submit all relevant documents and annuity payout will occur as per the timeline.",
  },
  {
    Question: "What are the additional servicing charges",
    Answer:
      "Rs. 250 per request on. Premium collection related services such as cheque pick-up/premium payment via outstation cheques/drop-box deposit. Cheque bounce/cancellation of cheque. Request for duplicate documents such as duplicate premium receipt, duplicate policy document. Cancellation/failure of ECS/SI due to an error at clientâ€™s end or fresh request of ECS / SI mandate initiated by client. Premiums paid via credit card, the company may charge up to 2% of installment premium depending on the credit card used",
  },
  {
    Question: "What type of bonuses is this plan eligible for",
    Answer:
      "Bonuses are as a percentage of the sum assured on vesting. Reversionary bonus, if declared, will be added every year annually. Interim and terminal bonuses, if declared.",
  },
  {
    Question: "What are the conditions on revival",
    Answer:
      "You will need to pay all the outstanding premiums and interest on the outstanding premiums and applicable taxes. Charge of Rs 250 shall be levied for processing the revival. The revival period shall be of two years from date of lapsation/paid up as specified by the current regulations.",
  },
  {
    Question: "Why can't I have liquidity of complete amount on surrender",
    Answer:
      "The plan aims to help in creating fund for retirement. Annuitisation of surrender benefit is mandated by the Regulator in the interest of the customer. Annuitisation ensures that the aim of the policy is not compromised for other financial needs.",
  },
  {
    Question: "Can the vesting age be post-poned or pre-poned",
    Answer:
      "No, policy term canâ€™t be changed thus vesting age canâ€™t be pre or postponed",
  },
  {
    Question: "Are all additions guaranteed",
    Answer:
      "Yes, they are guaranteed to be paid for every completed policy term",
  },
  {
    Question: "Is sum assured a death benefit",
    Answer:
      "Sum is assured for the vesting benefit. Death benefit is all the premiums paid till date @ 6.p.a. compounded.",
  },
  {
    Question: "What are the conditions on revival",
    Answer:
      "All the outstanding premiums and interest on the outstanding premiums and applicable taxes. Charge of Rs 250 shall be levied for processing the revival. The revival period shall be of two years as specified by the current regulations.",
  },
  {
    Question: "Will sum assured be used to calculate any benefits",
    Answer:
      "Yes, guaranteed additions and vesting addition is a percentage of this sum assured on vesting",
  },
  {
    Question: "Should I choose a Unit Linked or a non â€“ Unit Linked plan",
    Answer:
      "If your financial profile does not allow you to take risks through exposure to equity, bonus-based endowment plans are the most suitable for you. If that is not the case, unit-linked plans are the ideal vehicle for you to plan for your familyâ€™s future financial needs. Unit-linked plans are associated with transparent charging structure and certain flexibility, besides possessing the potential to deliver a higher amount on maturity.",
  },
  {
    Question: "What do you mean by â€˜switching fundsâ€™",
    Answer:
      "Switching between funds implies that the policy holder can transfer his investments from one fund to another fund under the plan. This is usually done to change oneâ€™s investment pattern or strategy based on changes in the financial markets. For instance, one may want to switch from an equity based fund to a debt fund when the equity markets are on a downslide.",
  },
  {
    Question: "What are the different types of Savings Plans",
    Answer:
      "You may choose between a traditional endowment plan and unit-linked insurance plan depending on a number of factors including your risk profile, your understanding of different financial instruments and your ability to track your investments regularly. Therefore , those who are well aware of the financial markets, are willing to bear the investment risk and desire a higher return can look at unit linked products and vice versa.",
  },
  {
    Question: "How can a policyholder track the performance of a policy fund",
    Answer:
      "You can also track the daily NAV of your funds on our website or check them in leading newspapers.",
  },
  {
    Question: "Can I take this plan without going for medicals",
    Answer:
      "Yes this plan can be taken by filling short medical questionnaires subject to underwriting guidelines. For more details contact our Relationship Manager.",
  },
  {
    Question: "What is the premium frequency available under the Plan",
    Answer:
      "The plan is a single premium Savings cum Investment Plan with a fixed policy term of 15 years.",
  },
  {
    Question: "What is the surrender benefit under the plan",
    Answer:
      "If you surrender before completion of the 5th policy year, your Fund Value less applicable charges will be moved to If you surrender before the end of the 5 years from commencement of the policy, Your fund value (as on date of surrender) will be moved to the â€˜Discontinued Policy Fundâ€™ and will earn a minimum guaranteed return as specified by IRDA. The minimum guaranteed interest rate applicable to the â€˜Discontinued Policy Fundâ€™ shall be 4% p.a. Such rate may be changed in the future if the IRDA revises the minimum rate for discontinued policies. A Fund Management Charge of 0.50% p.a. will be levied on the â€˜Discontinued Policy Fundâ€™. The Discontinued Policy Fund (SFIN:ULIF05110/03/11DiscontdPF101) shall be a unit fund which will invest 100% of assets in Government Securities and/or Money Market Instruments. Your fund value as held in the â€˜Discontinued Policy Fundâ€™ will be payable to you at end of the 5th policy year. In case of the death of the Life Assured or Policyholder, before the payment of the surrender benefit, the amount in the Discontinued Policy Fund will be paid out immediately. If you surrender your policy after completion 5 years from commencement of the policy, your fund value will be paid to you. Once any surrender payment has been made, the policy terminates and no further benefits are payable.",
  },
  {
    Question: "Can I take any loan",
    Answer: "Policy loan is not offered in this plan",
  },
  {
    Question: "What are the fund choices",
    Answer:
      "The plan offers 4 funds of varying risk & return profiles. Income Fund, Balanced Fund, BlueChip Fund and Opportunities Fund.",
  },
  {
    Question: "What is the Settlement Option",
    Answer:
      "In Settlement Option the Fund value is paid in periodical installments over a period which may extend up to 5 years. The value of installment payable on the date specified shall be subject to investment risk i.e. the NAV may go up or down depending upon the performance of the funds chosen by you. Your money will remain invested in the funds chosen by you and is subject to the same investment risks as during the policy term. During the Settlement period, the risk cover will cease, Fund Management Charge will continue to be deducted and no other charges shall be levied. Partial withdrawals and switches shall not be allowed during this period. Complete withdrawal may be allowed at any time during this period without levying any charge. At the end of this 5-year period, the balance units will be redeemed at the then prevailing unit price and the fund value will be paid to you.",
  },
  {
    Question: "Can I take any loan",
    Answer: "Policy loan is not offered in this plan",
  },
  {
    Question: "What are the fund choices",
    Answer:
      "The plan offers 4 funds of varying risk & return profiles. Income Fund, Balanced Fund, BlueChip Fund and Opportunities Fund",
  },
  {
    Question: "What happens if premiums are not paid",
    Answer:
      "If you have not paid your premium by the expiry of the grace period, you will have following options: to revive the Policy within a period of 2 years from the date of discontinuance, or to completely withdraw from the Policy without any risk cover, or to convert the policy into paid-up policy (available on discontinuance after completion of the 5 policy years) If you do not communicate to us on the above options, the following treatment will be applicable Discontinuance before completion of 5 years from commencement of the policy: Fund Value less applicable charges will be moved to â€˜Discontinued Policy Fund (DPF)â€™.The proceeds from DPF will be paid out upon the completion of the lock-in period. Discontinuance on and after completion of the 5 years from commencement of the policy : Fund Value will be paid out to you. You have the option to revive a discontinued policy within two consecutive years from the date of discontinuance of the policy, subject to payment of all due & unpaid premiums and our underwriting policy",
  },
  {
    Question: "What is the surrender benefit",
    Answer:
      "If you surrender before completion of the 5th policy year, your Fund Value less applicable charges will be moved to the DPF and the proceeds from DPF will be paid out on the completion of the lock-in period. If you surrender after completion of the 5th policy year your Fund Value will be paid out to you. Upon payment of this benefit the policy terminates and no further benefits are payable. Please refer to the policy document for further details on Surrender.",
  },
  {
    Question: "What is the Settlement Option",
    Answer:
      "In Settlement Option the Fund value is paid in periodical installments over a period which may extend up to 5 years. The value of installment payable on the date specified shall be subject to investment risk i.e. the NAV may go up or down depending upon the performance of the funds chosen by you. Your money will remain invested in the funds chosen by you and is subject to the same investment risks as during the policy term. During the Settlement period, the risk cover will cease, Fund Management Charge will continue to be deducted and no other charges shall be levied. Partial withdrawals and switches shall not be allowed during this period. Complete withdrawal may be allowed at any time during this period without levying any charge. At the end of this 5-year period, the balance units will be redeemed at the then prevailing unit price and the fund value will be paid to you.",
  },
  {
    Question: "What are the fund choices",
    Answer:
      "The plan offers 4 funds of varying risk & return profiles. Income Fund, Balanced Fund, BlueChip Fund and Opportunities Fund",
  },
  {
    Question: "Can I take any loan",
    Answer: "Policy loan is not offered in this plan",
  },
  {
    Question: "What is the surrender benefit",
    Answer:
      "If you surrender before completion of the 5th policy year, your Fund Value less applicable charges will be moved to the DPF and the proceeds from DPF will be paid out on the completion of the lock-in period. If you surrender after completion of the 5th policy year your Fund Value will be paid out to you. Upon payment of this benefit the policy terminates and no further benefits are payable. Please refer to the policy document for further details on Surrender.",
  },
  {
    Question: "What happens if premiums are not paid",
    Answer:
      "If you have not paid your premium by the expiry of the grace period, you will have following options: to revive the Policy within a period of 2 years from the date of discontinuance, or to completely withdraw from the Policy without any risk cover, or to convert the policy into paid-up policy (available on discontinuance after completion of the 5 policy years) If you do not communicate to us on the above options, the following treatment will be applicableDiscontinuance before completion of 5 years from commencement of the policy: Fund Value less applicable charges will be moved to â€˜Discontinued Policy Fund (DPF)â€™.The proceeds from DPF will be paid out upon the completion of the lock-in period.Discontinuance on and after completion of the 5 years from commencement of the policy : Fund Value will be paid out to you You have the option to revive a discontinued policy within two consecutive years from the date of discontinuance of the policy, subject to payment of all due & unpaid premiums and our underwriting policy",
  },
  {
    Question: "What is the Settlement Option",
    Answer:
      "In Settlement Option the Fund value is paid in periodical installments over a period which may extend up to 5 years. The value of installment payable on the date specified shall be subject to investment risk i.e. the NAV may go up or down depending upon the performance of the funds chosen by you. Your money will remain invested in the funds chosen by you and is subject to the same investment risks as during the policy term. During the Settlement period, the risk cover will cease, Fund Management Charge will continue to be deducted and no other charges shall be levied. Partial withdrawals and switches shall not be allowed during this period. Complete withdrawal may be allowed at any time during this period without levying any charge. At the end of this 5-year period, the balance units will be redeemed at the then prevailing unit price and the fund value will be paid to you.",
  },
  {
    Question: "What are the different types of Savings Plans",
    Answer:
      "You may choose between a traditional endowment plan and a unit-linked insurance plan depending on a number of factors including your risk profile, your understanding of different financial instruments and your ability to track your investments regularly. Therefore , those who are well aware of the financial markets, are willing to bear the investment risk and desire a higher return can look at unit linked products and vice versa.",
  },
  {
    Question: "What is meant by a â€˜With Profitsâ€™ plan",
    Answer:
      "â€˜With Profitsâ€™ plans are plans where the premiums are invested in the â€˜with profitâ€™ This fund invests in a variety of assets to earn returns on your policy, which are shared with the policyholderâ€™s in the form of bonuses which are declared annually. And once declared these bonuses are guaranteed.",
  },
  {
    Question: "Should I choose a Unit Linked or a non â€“ Unit Linked plan",
    Answer:
      "If your financial profile does not allow you to take risks through exposure to equity, bonus-based endowment plans are the most suitable for you. If that is not the case, unit-linked plans are the ideal vehicle for you to plan for your familyâ€™s future financial needs. Unit-linked plans are associated with transparent charging structure and certain flexibility, besides possessing the potential to deliver a higher amount on maturity.",
  },
  {
    Question: "What are the benefits of a retirement plan",
    Answer:
      "Retirement Plans provide you with a steady flow of income post retirement so that you can continue to live a financially independent life.",
  },
  {
    Question: "What is an Retirement Plan",
    Answer:
      "Retirement Plans refer to insurance plans which aim to offer you income/ pension after retirement when you may not have any other adequate source of income.",
  },
  {
    Question: "What is M&N  Life New Immediate Annuity Plan",
    Answer:
      "The M&N  Immediate Annuity is a contract that uses your capital to provide you with a guaranteed gross income throughout your lifetime or over a period of your choice. This is the perfect way to plan for your expenses after your retirement. This means you can plan your life the way you want it to be, safe in the knowledge that your gross income will not fall during the period you have selected. This is the perfect way to plan for your expenses after your retirement. The M&N  Immediate Annuity plan offers a number of options to meet all your income needs.",
  },
  {
    Question: "Why do I need Health Insurance",
    Answer:
      "Medical emergencies come un-announced. Cost of healthcare can be enormous. In the absence of health insurance, this expense has to be borne out of pocket. This has an adverse impact on the financial situation of the family. World over long term illnesses are known to be the reason behind a familyâ€™s slide down the social ladder. Health Insurance cover provides the much needed financial assistance and will ensure that you access healthcare facilities when you need them the most without worrying about the medical expenses.",
  },
  {
    Question: "Is Health Insurance the same as Life Insurance",
    Answer:
      "Life insurance covers the risk of untimely death. Health insurance covers the risk of incurring unplanned medical expenses due to unforeseen medical emergencies.",
  },
  {
    Question: "What is the policy term of the plan",
    Answer: "The policy term is of whole life.",
  },
  {
    Question:
      "Will the policyholder get a premium discount in cases where there is no claim submitted in the previous year",
    Answer:
      "No, the Policyholder will not get any premium discount as the premiums are guaranteed or fixed for a period of three years from the date of inception or renewal of the policy. However, in the absence of claims in any year, the policyholder will be rewarded with the increase in Sum Insured through Multiplier Benefit.",
  },
  {
    Question: "Who all can be covered under the Family Floater Plan",
    Answer:
      "Policyholder can cover his lawful spouse, parents and parents-in-law subject to a maximum age of 70 years at entry and dependent children's age of 91 days and above.",
  },
  {
    Question:
      "Which are the factors one should consider while choosing a Health Insurance Plan",
    Answer:
      "We should check for the following factors while choosing a Health Insurance Policy: Guaranteed Renewability Types of exclusions and period of exclusion Any extra premium to be paid Day care procedure coverage Type and amount of No Claim bonus Availability of cash less service Longer duration of policy with Life Long renewability Shorter duration of pre-existing disease exclusion Sum insured high enough to provide adequate protection No change in premium every year, even if you claim Availability of no claim bonus Number of Day Care procedures covered Coverage for maternity and its complications Availability of Hospital Cash Benefit Cashless service at large network of hospitals View more",
  },
  {
    Question:
      "Can the policyholder get cashless services in case of hospitalization in a non-network hospital",
    Answer:
      "No, the policyholder will not get any cashless service in a non-network hospital.",
  },
  {
    Question: "What are Tax Benefits",
    Answer:
      "As per prevailing income tax laws, M&N  Life Health Assure Plan is eligible for Tax Benefits u/s 80D of Income Tax Act.",
  },
  {
    Question: "Why should I buy M&N  Life Health Assure Plan",
    Answer:
      "M&N  Life Health Assure Plan provides reimbursement for unforeseen medical expenses and it comes with following unique features: Premium guarantee for three years i.e. premium does not change even after a claim has been made. If there is no claim under the policy , then your cover will be doubled after 2 claim-free years under multiplier benefit Plan offers Guaranteed Lifetime Renewability subject to prevailing premium rates",
  },
  {
    Question: "What is the amount of tax that can be saved",
    Answer:
      "As per Section 80D, the premium paid for medical insurance is deductible from an individualâ€™s income up to Rs. 15,000 per year. However, in case of a Senior Citizen (60 years and above) the applicable limit is Rs. 20,000 per year.If the medical insurance premium has been paid for oneâ€™s parents, an additional deduction of Rs. 15,000 can be claimed under section 80D every year. If oneâ€™s parents are Senior Citizens, an additional amount of Rs. 20,000 can be claimed. Thus, a policy holder can deduct up to Rs. 35,000 from his taxable income for medical insurance premiums paid.Premiums paid in cash will not qualify for tax benefit. Note: You cannot claim premiums paid for your in-laws or siblings (brothers and sisters). View more",
  },
  {
    Question:
      "Will a policyholder's premium increase in the next year if he makes a claim in the current year",
    Answer:
      "No, the premium will not increase as premiums are guaranteed or fixed for a period of three years from the date of inception of the policy.",
  },
  {
    Question: "Where can the policyholder get the list of Network Hospitals",
    Answer:
      "The list of Network Hospitals is enclosed along with the Policy Document. The Policyholder can also visit the M&N  Life website, www.M&N life.com, for the most updated list.",
  },
  {
    Question: "Can I insure my children in the Family Floater Plan",
    Answer: "Yes, you can insure your children from the age of 91 days.",
  },
  {
    Question:
      "What is the difference between fixed benefit health insurance plans and reimbursement health insurance plans",
    Answer:
      "Fixed benefit plans cover the risk associated with a rare critical illness and provide predetermined sum insured upon diagnosis of few covered conditions. Payment under fixed benefit plans is usually made upon diagnosis and is not linked to the medical expense that the life insured may incur for treatment of such condition. Such plans help one to compensate for loss of income that arises due to long period of treatment and recuperation that may be required. Such policies pay the benefits only once and then the cover ceases. Reimbursement plans provide for reimbursement of actual medical expenses incurred in a hospital. These medical expenses could range from low amounts incurred in treatment of common ailments like malaria or dengue to significant expenses incurred in treatment of critical illnesses. Such policies do not cease on payment of claim once and continue to pay the claims every year subject to continuous renewals. View more",
  },
  {
    Question: "What are the services offered by TPA",
    Answer:
      "The services offered by TPA are given below: 24x7 assistance to policyholders through the toll free number Assistance for authorizing and processing cashless facilities Claim processing and reimbursement of claims",
  },
  {
    Question: "What is Health Insurance",
    Answer:
      "Health insurance is a type of insurance coverage that covers the cost of an insured individual's medical and surgical expenses.",
  },
  {
    Question:
      "What is the co pay that will need to be borne by the Life Insured in case of hospitalization in non network hospitals",
    Answer:
      "The Life Insured has to bear a co-pay of 20% of the total hospital bill if they get hospitalized in any non-network hospital.",
  },
  {
    Question: "What is the maximum age limit for buying this Plan",
    Answer: "The maximum age allowed at entry is 70 years of age.",
  },
  {
    Question: "What is the Maturity Benefit under the plan",
    Answer:
      "Fund Value on the prevailing on the date of Maturity will be paid to the policyholder.",
  },
  {
    Question: "What is the min-max age at entry/maturity",
    Answer:
      "Minimum Maximum Policy Term (years) 10 10 Age at Entry Age (years) 14 55 Age at Maturity (years) NA 65 Premium Paying term 5 years",
  },
  {
    Question: "What is the premium frequency available under policy",
    Answer: "Only annual mode is allowed under the plan.",
  },
  {
    Question: "Can the plan be offered under limited underwriting",
    Answer:
      "The plan can be applied for by filing in the Short Medical Questionnaire (SMQ), which may not require you to go for medicals subject to prevailing underwriting conditions.",
  },
  {
    Question: "What is the exclusion in the plan",
    Answer:
      "In case of death due to suicide within 12 months from the date of inception of the policy or from the date of the revival of the policy, the nominee or beneficiary of the policyholder shall be entitled to the fund value, as available on the date of death. Any charges recovered subsequent to the date of death shall be paid back to the nominee or beneficiary along with the death benefit.",
  },
  {
    Question: "Do I have the option to avail a loan under the policy",
    Answer: "No, the policy does not provide any loan facility.",
  },
  {
    Question: "Can I withdraw before maturity",
    Answer:
      "You can make lump sum partial withdrawals from your funds after 5 years of your policy, subject to terms & conditions. Please refer to product brochure for details.",
  },
  {
    Question: "What is the Surrender Benefit",
    Answer:
      "If you surrender before completion of the 5 years from commencement of the policy, your fund value, less discontinued charges, will be moved to the 'Discontinued Policy Fund'. The amount allocated to the 'Discontinued Policy Fund', with accrued interest, will be paid out on the completion of the lock-in period. Discontinuance charge will be deducted. If you surrender after completion of the 5 years from commencement of the policy, your fund value will be paid out immediately. Upon payment of this benefit, the policy terminates and no further benefits are payable. Please refer to product brochure for details",
  },
  {
    Question: "What happens if Premiums are not paid",
    Answer:
      "This plan has a grace period of 30 days. You are expected to pay your annual premium through-out the policy term. Discontinuance before completion of 5 years from commencement of the policy: If you have not paid your premium by the expiry of the grace period, then you will have the following options: To revive the policy within a period of 2 years from the date of discontinuance, or To completely withdraw from the policy without any risk cover Your policy will be discontinued if: You do not exercise any of the above mentioned options; or You choose to completely withdraw from the policy without any risk cover Until the discontinuance of the policy, the risk cover will remain in-force and policy charges will continue to be deducted. Once the policy is discontinued, the risk cover will cease and the fund value (as on date of discontinuance) less the applicable Discontinuance Charge (Please see the Charges section for details of the Discontinuance Charges) will be moved to the 'Discontinued Policy Fund'. The minimum guaranteed interest rate applicable to the 'Discontinued Policy Fund' shall be 4% p.a. Such rate may be changed in the future if the IRDA revises the minimum rate for discontinued policies. The Discontinued Policy Fund (SFIN: ULIF05110/03/11DiscontdPF101) shall be a unit fund which will invest 100% of assets in Government Securities and/or Money Market Instruments. Any excess income earned in the discontinued fund over and above the minimum guaranteed interest rate shall also be apportioned to the 'Discontinued Policy Fund'. A Fund Management Charge of 0.50% p.a. will be levied for amounts in the 'Discontinued Policy Fund' If a discontinued policy is not revived, the proceeds will be paid out upon the completion of the lock-in period of five years. In the instances where the revival period is not completed at the end of the lock-in period, the policyholder can opt to receive the proceeds either upon the completion of the lock-in period or upon the completion of revival period. If, in such cases, the policyholder does not exercise any option, then the proceeds will be paid upon the completion of the lock-in period. After the payment of the discontinuance benefit, the policy shall terminate and no further benefits shall be payable under the policy. View more",
  },
  {
    Question: "What is the Death-Benefit under the plan",
    Answer:
      "On death of the life assured, provided all due premiums are paid, Before the attainment of 60 years of age, the nominee will receive the higher of the following Sum assured (less all withdrawals made during the two year period immediately preceding the date of death) The total fund value On or after the attainment of age 60 years, the nominee will receive the higher of the following Sum assured (less all withdrawals made after attainment of age 58) The total fund value Minimum Death Benefit would be at least 105% of the annual premiums paid The policy will terminate thereafter and no more benefit will be payable. View more",
  },
  {
    Question: "What is the exclusion in the plan",
    Answer:
      "In case of death due to suicide, within 12 months; From the date of inception of the policy, the nominee of the policyholder shall be entitled to 80% of the premiums paid, provided the policy is in-force. From the date of revival of the policy, the nominee of the policyholder shall be entitled to an amount which is higher of 80% of the premiums paid till the date of death or the surrender value as available on the date of death.",
  },
  {
    Question: "When does the plan acquire Guaranteed Surrender value",
    Answer:
      "The policy will acquire a Guaranteed Surrender Value (GSV) provided 2 full yearsâ€™ premium has been paid for premium payment term of 8 years and 3 full yearsâ€™ premium have been paid for premium payment term of 10 and 12 years.",
  },
  {
    Question: "Do I have option to avail loan under the policy",
    Answer:
      "The policyholder can avail Loan under the policy provided the policy has acquired a surrender value and subject to terms and conditions as the Company may specify from time to time.",
  },
  {
    Question: "Is there any option available for monthly payout",
    Answer:
      "Yes the plan provides the option to the policyholder to receive the future payouts monthly instead of yearly. In such cases, the monthly payout shall be 8% of the annual payout.",
  },
  {
    Question: "What is the Guaranteed Base Income under the plan",
    Answer:
      "Guaranteed Base Income is expressed as percentage of the Sum Assured on Maturity. This guaranteed amount is known to you at the inception and payable at the end of each year during the payout period as per your chosen plan option. The percentages are as follows: Option Guaranteed Base Income as % of Sum Assured on Maturity Annual GBI Total GBI for entire premium payment term 1 12.5% 100% 2 10.0% 100% 3 12.0% 120% 4 10.0% 120% 5 10.0% 120% 6 8.0% 120%",
  },
  {
    Question: "What is the Death Benefit under the plan",
    Answer:
      "On death of the life assured during the term of the policy, provided all due premiums are paid; the nominee will receive the higher of the following: Sum Assured on Death + Accrued Reversionary Bonuses + Interim Bonus (if any) + Terminal Bonus (if any) 105% of premiums# paid till dateWhere, the Sum Assured on Death shall be the higher of: Sum Assured on Maturity 10 times Annualised Premium# for entry age up to 50 years and 7 times Annualised Premium# for entry age greater than 50 years #excludes any underwriting extra premiums, modal loadings and any taxes paid On death of the life assured during the payout period, the Death Benefit payable shall not be reduced by the survival benefits already paid. On payment of the Death Benefit during the policy term, the policy will terminate and no future payouts will be payable.",
  },
  {
    Question: "What is the premium frequency available under policy",
    Answer:
      "The premiums can be paid Annually, Half-Yearly, Quarterly and Monthly",
  },
  {
    Question: "What is the premium frequency available under policy",
    Answer:
      "The premiums can be paid annually, half-yearly, quarterly and annually.",
  },
  {
    Question: "What is the minimum/maximum Policy term/Premium payment term",
    Answer:
      "Minimum Maximum Premium Paying Term (years) 5, 8 and 10 Policy Term (years) 15 25 Sum Assured (Rs) Will depend upon premium, premium payment term and policy term",
  },
  {
    Question: "What is the minimum/maximum age at entry/maturity",
    Answer:
      "Eligibility Criteria Minimum Maximum Age at Entry Age (years) 30 days * 45 Age at Maturity (years) 18 70 All ages mentioned above are age last birthday. * The minimum age at maturity should be 18 years.",
  },
  {
    Question: "What is the exclusion in the plan",
    Answer:
      "In case of death due to suicide, within 12 months; From the date of inception of the policy, the nominee of the policyholder shall be entitled to 80% of the premiums paid, provided the policy is in-force From the date of revival of the policy, the nominee of the policyholder shall be entitled to the amount which is higher of 80% of the premiums paid till date of death or the surrender value as available on the date of death.",
  },
  {
    Question: "What is the Maturity Benefit under the plan",
    Answer:
      "The plan offers guaranteed additions (GA) as a percentage of sum assured accrued for each completed policy year payable at maturity. Policy term (Yrs) GA as % of Sum Assured 15 to 19 years 8% 20 to 25 years 9% On your survival, at end of the policy term, you will receive a lump sum benefit as the aggregate of: Sum Assured Accrued Guaranteed Additions Your Aggregate Maturity benefit as percentage of Sum Assured as per term chosen is as follows: Policy term 15 16 17 18 19 20 21 22 23 24 25 Maturity benefit as percentage of Sum Assured 220% 228% 236% 244% 252% 280% 289% 298% 307% 316% 325%",
  },
  {
    Question: "When does the plan acquire Guaranteed Surrender value",
    Answer:
      "The policy will acquire a Guaranteed Surrender Value (GSV) provided first 2 yearsâ€™ premiums have been paid for premium paying term of 5 and 8 years first 3 yearsâ€™ premiums have been paid for premium paying term of 10 years",
  },
  {
    Question: "Can the plan be offered under limited underwriting",
    Answer:
      "The plan can be applied by filing in the Short Medical Questionnaire (SMQ), which may not require you to go for medicals.",
  },
  {
    Question: "What is the Death-Benefit under the plan",
    Answer:
      "On death during the policy term, provided the policy is in force, the nominee will receive the higher of the following: Sum Assured 10 times the Annualized Premium* 105% of the premiums* paid till date In addition to the above, accrued guaranteed additions would be payable on death. *The Premium amount excludes any underwriting extra premiums and any taxes paid. On payment of the Death Benefit, the policy will terminate and no more benefits will be payable. View more",
  },
  {
    Question: "When does the plan acquire Guaranteed Surrender value",
    Answer:
      "The policy will acquire a Guaranteed Surrender Value (GSV) provided 2 full yearsâ€™ premium has been paid for premium payment term of 7 years and 3 full yearsâ€™ premium have been paid for premium payment term of 10 years or more.",
  },
  {
    Question: "What is the premium frequency available under policy",
    Answer:
      "The premiums can be paid annually, half-yearly, quarterly and annually",
  },
  {
    Question: "How do I choose from options available under this plan",
    Answer:
      "At policy inception, based on your childâ€™s future needs you can choose one of the three available Maturity Benefit Options. These options are: a) Aspiration: if you choose this option, you will receive a lump sum payout the end of your policy term. You can use this money to fund your childâ€™s marriage or any other large expense.b) Academia: if you choose this option, you will receive guaranteed payouts during the last 5 policy years. The first guaranteed payout shall be higher than subsequent guaranteed payouts. You can use these payouts to fund your childâ€™s college education in future.c) Career:if you choose this option, you will receive guaranteed payouts during the last 5 policy years. The last guaranteed payout shall be higher than previous guaranteed payouts. You can use these payouts to fund your childâ€™s schooling or college expenses in future. Also at policy inception, based on the level of protection you need for your childâ€™s financial planning, you can choose one of the two Death benefit options. These options are: a)case of unfortunate demise of life assured during the policy term, the nominee receives Basic Death benefit + accrued Guaranteed Additions + accrued Bonuses, if any. After the payment of death benefit, the policy terminates.b)case of unfortunate demise of life assured during the policy term, the nominee receives Basic Death benefit. All future outstanding premiums under the policy will be waived. The contract shall continue and the benefits as per Survival benefit and Maturity Benefit shall be available. Where Basic Death benefit is defined as higher of: Sum Assured on Death 105% of Premiums paid The Sum Assured on Death shall be the higher of: Sum Assured on Maturity 10 times Annualised Premium for entry age up to 50 years and 7 times Annualised Premium for entry age greater than 50 years",
  },
  {
    Question: "Do I have option to avail loan under the policy",
    Answer:
      "The policyholder can avail Loan under the policy provided the policy has acquired a surrender value and subject to terms and conditions as the Company may specify from time to time.",
  },
  {
    Question: "Can I take monthly payouts instead of annual payouts",
    Answer:
      "Yes.The policyholder shall have an option to receive the survival benefits (other than the final payout, payable on maturity) in monthly installments. If so opted for, the monthly survival benefit shall be: 8.5% of the annual survival payout, payable over a period of 12 months, with the first installment being paid on the policy anniversary on which annual survival payout falls due",
  },
  {
    Question: "What is the exclusion in the plan",
    Answer:
      "In case of death due to suicide, within 12 months; From the date of inception of the policy, the nominee of the policyholder shall be entitled to 80% of the premiums paid, provided the policy is in-force. From the date of revival of the policy, the nominee of the policyholder shall be entitled to an amount which is higher of 80% of the premiums paid till the date of death or the surrender value as available on the date of death.",
  },
  {
    Question:
      "Will the basic death benefit amount be reduced by the survival benefits already paid",
    Answer:
      "No. On death of the life assured after the commencement of survival benefits under Academia and Career maturity benefit options, the Death Benefit payable shall not be reduced by the survival benefits already paid.",
  },
  {
    Question: "What payouts will I get under different plan options",
    Answer:
      "The table below specifies the series of money back/endowment payouts, payable at the end of each year, for a premium paying or a fully paid-up policy. Maturity Benefit Option Year of Payout Aspiration Academia Career 5th year before Maturity - 30% of SA 15 % of SA 4th year before Maturity - 15 % of SA 15 % of SA 3rd year before Maturity - 15 % of SA 15 % of SA 2nd year before Maturity - 15 % of SA 15 % of SA 1st year before Maturity - 15 % of SA 15 % of SA At Maturity 100% of SA + GA + accrued bonuses 15 % of SA + GA + accrued bonuses 40 % of SA + GA + accrued bonuses Total 100% of SA + GA + accrued bonuses 105% of SA + GA + accrued bonuses 115% of SA + GA + accrued bonuses SA: Sum Assured on maturity. GA: Guaranteed Additions",
  },
  {
    Question:
      "Can I change my maturity/death benefit options during the policy term",
    Answer:
      "No. You choose your maturity benefit option and death benefit option at policy inception and they cannot be changed during the policy term.",
  },
  {
    Question: "What are Guaranteed Additions under this plan",
    Answer:
      "The plan provides you with additional boosters in the form of guaranteed additions where the premium payment term is 10 years or more, provided the policy is in force. The Guaranteed Additions are payable at maturity. These guaranteed additions are declared over and above bonuses. The Guaranteed Additions shall accrue at the end of every policy year as specified below: Policy Term Guaranteed Additions (% of Sum Assured on Maturity) <= 19 years 3 % p.a. for first 5 policy years, nil thereafter >=20 years 5 % p.a. for first 5 policy years, nil thereafter",
  },
  {
    Question: "What is the Death-Benefit under the plan",
    Answer:
      "The table below captures the available death benefits during the policy term under various options. Death Benefit Options Death Benefitsbenefit + accrued Guaranteed Additions + accrued Bonuses, if anyDeath benefit + Premium Waiver The table below describes each of the above benefits in detail. Basic Death Benefit The basic death benefit shall be the higher of: Sum Assured on Death 105% of Premiums paid The Sum Assured on Death shall be the higher of: Sum Assured on Maturity 10 times Annualised Premium for entry age up to 50 years and 7 times Annualised Premium for entry age greater than 50 years Premium Waiver All future outstanding premiums under the policy will be waived. The contract shall continue and the benefits as per Survival benefit and Maturity Benefit shall be available. For the purpose of computation of Death Benefit, the premiums shall exclude any underwriting extra premiums, any loadings for modal premiums and any taxes paid such as service tax and education cess. For more details on risk factors, terms and conditions, please read the Product Brochure carefully before taking a decision.",
  },
  {
    Question: "What is the Policy term/Premium payment term",
    Answer: "Policy Term 10 Year Premium Payment Term Single",
  },
  {
    Question: "Can the plan be offered under limited underwriting",
    Answer:
      "The plan can be applied by filing in the Short Medical Questionnaire (SMQ), which may not require you to go for medicals.",
  },
  {
    Question: "Do I have option to avail loan under the policy",
    Answer: "Policy loans are not allowed.",
  },
  {
    Question: "What happens in case of me wanting to surrender my policy",
    Answer:
      "On request for surrender from you, the risk coverage will cease with immediate effect.If you surrender before the end of the 5 years from commencement of the policy, Your fund value (as on date of surrender) will be moved to the â€˜Discontinued Policy Fundâ€™ and will earn a minimum guaranteed return as specified by IRDA. The minimum guaranteed interest rate applicable to the â€˜Discontinued Policy Fundâ€™ shall be 4% p.a. Such rate may be changed in the future if the IRDA revises the minimum rate for discontinued policies. A fund management charge of 0.50% p.a. will be levied on the â€˜Discontinued Policy Fundâ€™ Your fund value as held in the â€˜Discontinued Policy Fundâ€™ will be payable to you at end of the 5th policy year In case of the death of the life assured or policyholder, before the payment of the surrender benefit, the amount in the Discontinued Policy Fund will be paid out immediately. If you surrender your policy after completion of 5 years from commencement of the policy, your fund value will be paid to you. On surrender, no additional charges will be levied.Once any surrender payment has been made the policy terminates and no further benefits are payable.",
  },
  {
    Question: "What is the min-max age at entry/maturity",
    Answer:
      "Eligibility Criteria Minimum Maximum Age at Entry Age (years) 14 65 Age at Maturity (years) NA 75 All ages mentioned above are age last birthday.",
  },
  {
    Question: "What is the exclusion in the plan",
    Answer:
      "In case of death due to suicide within 12 months from the date of inception of the policy or from the date of the revival of the policy, the nominee or beneficiary of the policyholder shall be entitled to the fund value, as available on the date of death. Any charges recovered subsequent to the date of death shall be paid back to the nominee or beneficiary along with the death benefit.",
  },
  {
    Question: "What are the charges under this policy",
    Answer:
      "Premium Allocation Charge:This is a premium-based charge. After deducting this charge from your premiums, the remainder is invested to buy units. The remaining percentage of your premium is called the Premium Allocation Rate. The Premium Allocation Rate and Premium Allocation Charge are given in the table below. Single Premium Single Premium Top-Ups Premium Allocation Rate 97.50% 99% Premium Allocation Charge 2.50% 1% Fund Management Charge (FMC): The daily unit price already includes the fund management charge of 1.35% per annum charged daily, of the fundâ€™s value. Policy Administration Charge: The Policy Administration Charge is 0.13% per month of the total premiums paid (including any single premium top-ups).The charge will be deducted monthly, subject to a maximum charge of Rs. 500 per month. This charge will be taken by cancelling units proportionately from each of the fund(s) you have chosen. Mortality Charge:Every month a charge will be levied for providing you with the death cover in your policy. The amount of the charge taken each month depends on your age and level of cover. This charge will be taken by cancelling units proportionately from each of the fund(s) you have chosen. Miscellaneous Charges: You may be charged for Additional Servicing Request(s). Contact your Relationship Manager for further details *Statutory Charges â€“ Service Tax and Education Cess is payable at the applicable rates for all unit linked products.",
  },
  {
    Question: "What is the Death-Benefit under the plan",
    Answer:
      "In case of the Life Assuredâ€™s unfortunate demise, the nominee will receive the benefit as defined below - Death Summary of Death Benefit Before attainment of age 60 years The nominee will receive the higher of the following Sum Assured (less all withdrawals except from the top-up fund value, made during the two year period immediately preceding the date of death) The total fund value. The policy will terminate thereafter and no more benefit will be payable. On or after attainment of age 60 years The nominee will receive the higher of the following Sum Assured (less all withdrawals except from the top-up fund value made after attainment of age 58) The total fund value. The policy will terminate thereafter and no more benefit will be payable.",
  },
  {
    Question: "What is the policy term available under the plan",
    Answer: "Policy Term of 10 to 40 years is available under the plan.",
  },
  {
    Question: "Is this plan only available online",
    Answer:
      "M&N  Life Click 2 Protect Plus is an offline term plan. One can buy this plan now offline as well online.",
  },
  {
    Question: "Why is M&N  Life C2P+ Extra Life Cover important",
    Answer:
      "C2P Plus Extra Life Option, provides double the benefit in case of death due to accident.",
  },
  {
    Question: "Does this plan offer tax benefits",
    Answer:
      "Premiums paid by an individual under this plan are eligible for tax benefits under Section 80C of the Income Tax Act, 1961, subject to the conditions/ limits specified therein. Under Section 10 (10D) of the Income Tax Act, 1961, the benefits received from this policy are exempt from tax, subject to the conditions specified therein. Please note that the above mentioned benefits are as per the current tax rules. You are requested to consult your tax advisor.",
  },
  {
    Question: "How long will my family get the monthly income for",
    Answer:
      "Under Income Option, you family would get monthly income for 15 years. Under Income Plus Option, your family would get monthly income for 10 years â€“ level or increasing.",
  },
  {
    Question: "What is the difference between Income and Income Plus Option",
    Answer:
      "On the death of the Life Assured under Income Option, 10% of the death benefit is paid as lump sum upon death and the remaining 90% of the death benefit shall be paid as monthly income over next 15 years. On the death of Life Assured under Income Plus Option, 100% of the death benefit is payable as a lump sum benefit and a monthly income of 0.5% of sum assured is paid for 10 years. Also in this option, there is an option to choose Level Income or Increasing Income.",
  },
  {
    Question: "I am a NRI. Can I Invest in this plan",
    Answer:
      "NRIs can invest in this plan by filling a mandatory NRI questionnaire.",
  },
  {
    Question: "What is the limited mode of premium pay",
    Answer:
      "A limited premium payment policy requires you to pay premiums for a term lesser than your policy term.",
  },
  {
    Question: "Is there a loan facility in my policy",
    Answer: "No policy loans are available for this product.",
  },
  {
    Question: "Can I do a partial withdraw from my fund",
    Answer:
      "You can withdraw money from your funds to meet any future financial emergencies. Lump sum partial withdrawals can be made from your funds after 5 complete policy years, provided the Life Assured is at least 18 years of age.",
  },
  {
    Question: "Can I terminate my policy",
    Answer:
      "You can surrender you policy subject to a lock in period of 5 years. No discontinuance charge is charged in this policy. Please refer to product brochure for more details on discontinuance of premiums and surrender of policy.",
  },
  {
    Question: "For how many years can I stay invested in this plan",
    Answer:
      "You can choose a policy term of 5 years to 20 years under this plan.",
  },
  {
    Question: "Why is this plan good for me",
    Answer:
      "M&N  Life Click 2 Invest â€“ ULIP, lets you enjoy market linked returns along with valuable financial protection for your family. This plan has minimal charges which help your fund value grow faster. The key features of this plan are: Minimal Charge Structure Choose from a range of 8 fund options Premium payment options of Single Pay, 5 Pay, 7 Pay, 10 Pay or Regular Pay Policy Term of 5 to 20 years Tax exemption under Sec 80C and Sec 10(10D) of IT Act, 1961",
  },
  {
    Question: "What are the charges applicable for this plan",
    Answer:
      "M&N  Life Click 2 Invest â€“ ULIP offers a minimal charge structure as stated below: Premium Allocation Charge: Nil Policy Administration Charge: Nil Discontinuance Charge: Nil Fund Management Charge: 1.35% p.a. of the fund value, charged daily Mortality Charge: The amount of the charge taken each month depends on your age and level of cover In addition, only if you request for partial withdrawal, fund switch and premium redirection a charge of Rs 250 per request or a reduced charge of Rs 25 per request (if executed through the companyâ€™s web portal) will be charged. First 4 partial withdrawals, 4 fund switches and 4 premium redirections in a policy year are free.",
  },
  {
    Question: "What is the maximum amount I can invest",
    Answer:
      "There is no limit on maximum amount that you can invest in this plan, subject to underwriting.",
  },
  {
    Question: "What is the minimum premium that needs to be paid",
    Answer:
      "Minimum premium amounts for various premium payment frequencies are as follows: Single: Rs. 24,000 Annual: Rs. 12,000 Half-yearly: Rs. 6,000 Quarterly: Rs. 3,000 Monthly: Rs. 1,000",
  },
  {
    Question: "Can I surrender this policy",
    Answer:
      "Yes you can surrender your policy. Once you surrender your policy, your risk cover will cease and surrender benefit will be paid out depending upon the year in which the policy is surrendered. Please refer to product brochure for more details.",
  },
  {
    Question: "How is this plan different from other ULIPs",
    Answer:
      "M&N  Life Click 2 Invest â€“ ULIP offers: Minimal Charge Structure Premium Payment Term options of single/5 pay/7 pay and regular pay Policy term of 5 to 20 years 8 Fund options Wide entry age range from 0 to 65 years",
  },
  {
    Question: "What kind of returns will I get by investing in this plan",
    Answer:
      "In this policy, the investment risk in investment portfolio is borne by the policyholder. Based on the performance of the funds chosen by you, NAV per unit will be calculated. Fund Value will be calculated by multiplying balance units in your fund by the then prevailing NAV price. Below is a sample illustration for a 30 year old male at an assumed investment return of 8% p.a. [email protected]% for 50k Premium Policy Term (years) 20 15 10 5 Regular Pay 20,30,002 12,68,672 7,09,694 2,66,551 Single Pay 1,71,697 1,26,261 92,702 68,063 5 Pay 7,53,609 5,53,310 4,06,582 NA 7 Pay 10,01,084 7,35,010 5,39,654 NA 10 Pay 13,16,517 9,66,604 NA NA Sum Assured multiple is 1.25 times for Single Premium and 10 times for other premium modes",
  },
  {
    Question: "Are there medicals involved to buy this plan",
    Answer: "Yes",
  },
  {
    Question: "What is the frequency in which I can invest my money",
    Answer: "Single, Annual, Half-yearly, quarterly or monthly",
  },
  {
    Question: "What are the various fund options in this plan",
    Answer:
      "There are 8 fund options to choose from in this plan Equity Plus Fund Diversified Equity Fund Blue Chip Fund Opportunities Fund Balanced Fund Income Fund Bond Fund Conservative Fund",
  },
  {
    Question: "Can I save tax by investing in this policy",
    Answer:
      "Premiums paid by an individual or HUF under this plan are eligible for tax benefits under Section 80C of the Income Tax Act, 1961, subject to the conditions/ limits specified therein. Under Section 10 (10D) of the Income Tax Act, 1961, the benefits received from this policy are exempt from tax, subject to the conditions specified therein. Please note that the above mentioned benefits are as per the current tax rules. Your tax benefits may change if the tax rules are changed. You are requested to consult your tax advisor.",
  },
  {
    Question: "Can I buy more than one policy",
    Answer:
      "You can buy more than one policy subject to successful underwriting",
  },
  {
    Question: "What is a settlement option",
    Answer:
      "Under settlement option, you can also take your fund value at maturity in periodical installments.",
  },
  {
    Question: "How is the Fund Value calculated",
    Answer:
      "Fund Value will be calculated by multiplying balance units in your fund by the then prevailing NAV price.",
  },
  {
    Question: "What do I get at the end of the policy term",
    Answer:
      "At the end of your policy term i.e. at maturity, you will receive your Fund Value.",
  },
  {
    Question: "What will my family receive in case of my unfortunate demise",
    Answer:
      "In case of the Life Assuredâ€™s unfortunate demise, the nominee will receive the higher of the following: Sum Assured, Fund Value, 105% of the premium(s) paid.",
  },
  {
    Question: "Is there any protection cover in this plan",
    Answer:
      "Yes. In case of the Life Assuredâ€™s unfortunate demise, the nominee will receive the higher of the following: Sum Assured, Fund Value, 105% of the premium(s) paid. The Sum Assured for your policy will be as follows: Single Premium 125% of Single Premium Regular & Limited Premium (Age at Entry <= 55 years) 10 x annualized premium Regular & Limited Premium (Age at Entry > 55 years) 7 x annualized premium",
  },
  {
    Question: "What are the different plan options under the plan",
    Answer:
      "The plan options available under M&N  Life Sampoorn Samridhi Plus are :- Endowment â€“ policy terminates after the maturity payout Endowment with Whole Life â€“ life cover continues after the maturity payout till 100 years of age",
  },
  {
    Question: "What will I be getting on maturity",
    Answer:
      "At the end of the policy term, provided all due premiums have been paid, you will receive the aggregate of: Sum Assured on Maturity Accrued Guaranteed Additions Accrued Reversionary Bonuses Interim Bonus (if any) Terminal Bonus (if any)",
  },
  {
    Question: "What is the exclusion in the plan",
    Answer:
      "In case of death due to suicide, within 12 months; From the date of inception of the policy, the nominee of the policyholder shall be entitled to 80% of the premiums paid, provided the policy is in-force. From the date of revival of the policy, the nominee of the policyholder shall be entitled to an amount which is higher of 80% of the premiums paid till the date of death or the surrender value as available on the date of death. For exclusions related to accidental death benefit, please refer the sales brochure or contact your Relationship manager.",
  },
  {
    Question:
      "What is the limited premium payment term available under this policy",
    Answer: "Policy term minus 5 years.",
  },
  {
    Question: "What are the guaranteed benefits that are there in the policy",
    Answer:
      "The Product offers two types of guaranteed benefits: 1. Guaranteed Additions â€“ 3% to 5% of â€˜Sum Assured on Maturityâ€˜ accrue during first 5 policy years, payable at maturity or death, whichever is earlier, provided the policy is in force Policy Term Guaranteed Additions (% of Sum Assured on Maturity) 15 years to 19 years 3 % p.a. 20 years to 24 years 4 % p.a. >=25 years 5 % p.a. 2. Sum Assured on Maturity â€“ 100% of 'Sum Assured on Maturity' is payable at maturity, provided the policy is in force.",
  },
  {
    Question: "What is the death benefit under this plan",
    Answer:
      "On death of the life assured during the policy term, provided all due premiums have been paid, the nominee will receive the higher of the following: Sum Assured on Death + Accrued Guaranteed Additions + Accrued Reversionary Bonuses + Interim bonus (if any) + Terminal bonus (if any) 105% of premiums* paid till date Where Sum Assured on Death shall be the higher of: Sum Assured on Maturity 10 times Annualized Premium* for entry age up to 50 years and 7 times Annualized Premium* for entry age greater than 50 years *excludes any underwriting extra premiums, modal loadings and taxes paid",
  },
  {
    Question: "Is there any Accidental Death Benefit in the policy",
    Answer:
      "Yes. In case of death due to accident during the term of the policy, an additional benefit equal to 'Sum Assured on Death' is payable. This amount is payable provided the life assured is aged 18 years & above on the date of death.",
  },
  {
    Question:
      "What are the premium paying frequencies that are available under this policy",
    Answer:
      "The premium payment frequencies under this plan are Annual, Half yearly, Quarterly and Monthly.",
  },
  {
    Question: "Do I have option to avail loan under the policy",
    Answer:
      "The policyholder can avail Loan under the policy provided the policy has acquired a surrender value and subject to terms and conditions as the Company may specify from time to time.",
  },
  {
    Question:
      "What is the duration of the policy term in case I choose 'Endowment' or 'Endowment with Whole Life' option",
    Answer:
      "Policy Term is the period at the end of which the maturity benefit will be paid. One can choose a policy term of 15 to 40 years. In case of â€œEndowmentâ€ Option, the life insurance cover will cease after policy term. In case of â€œEndowment with Whole Lifeâ€, the life insurance cover shall continue even after the policy term, till the age of 100 years.",
  },
  {
    Question: "When does the plan acquire Guaranteed Surrender value",
    Answer:
      "The policy will acquire a Guaranteed Surrender Value (GSV) provided 2 full yearsâ€™ premium has been paid. The GSV shall be aggregate of: Percentage of total premiums paid Percentage of accrued bonuses and accrued guaranteed additions Please refer the sales brochure or contact your Relationship manager to know the percentage factors for GSV",
  },
  {
    Question: "What is the M&N  Life Cancer Care Policy",
    Answer:
      "M&N  Life brings to you a comprehensive Cancer Care plan that provides financial protection for both early and major stage of cancer with several unique features like: This is a plan that not only gives pay outs but also a waiver on premium for the next 3 policy years on diagnosis of early stage of cancer There is an increased benefit where the Sum insured under the policy increases every year under the Gold and Platinum option. Also, there is an income benefit under the Platinum option",
  },
  {
    Question: "What are the Plan Options available for this product",
    Answer:
      "There are 3 plan options available in this product namely Silver, Gold and Platinum. The base benefit is applicable on all the 3 options. The increased benefit is applicable on Gold and Platinum options where as income benefit is applicable only on the Platinum option.",
  },
  {
    Question: "What is the discounted Premium on higher Sum Assured",
    Answer:
      "There would be rebates in the form of lower premium rates for incremental Sum Insured over & above Rs. 10,00,000.",
  },
  {
    Question: "Would I have to go for any medicals",
    Answer: "No, there would not be medical tests involved in this plan.",
  },
  {
    Question: "Can I opt for this plan if I have a pre existing Cancer",
    Answer:
      "No, you are not eligible for the plan if you have pre existing Cancer.",
  },
  {
    Question: "Is there any death benefit for this plan",
    Answer:
      "M&N  Life Cancer Care plan aims to aid the expenses to survive through the dreaded disease like Cancer. Hence it has benefits linked to diagnosis and treatment of disease and no death benefit is payable.",
  },
  {
    Question: "Is there any maturity benefit for this plan",
    Answer: "No, there is no maturity benefit available under this plan.",
  },
  {
    Question: "Is there any Surrender benefit for this plan",
    Answer: "No, there is no surrender value available under this plan.",
  },
  {
    Question: "Can I save tax by investing in this policy",
    Answer:
      "Premiums paid by an individual or HUF under this plan are eligible for tax benefits under Section 80C of the Income Tax Act, 1961, subject to the conditions/ limits specified therein. Under Section 10 (10D) of the Income Tax Act, 1961, the benefits received from this policy are exempt from tax, subject to the conditions specified therein. Please note that the above mentioned benefits are as per the current tax rules. Your tax benefits may change if the tax rules are changed. You are requested to consult your tax advisor.",
  },
  {
    Question: "What is Extra Life Option in the policy",
    Answer:
      "You can opt for Extra life Option underthe plan. In case of death due to accident during the term of the policy, an additional Sum Assured will be payable to the Nominee in addition to the Death Benefit under the Plan. Please refer to product brochure for further details and/or consult Relationship Manager.",
  },
  {
    Question: "What are the Plan options available",
    Answer:
      "There are 3 Plan Options available under M&N  Life Sampoorn Nivesh as mentioned below: 1.3.You can choose any one of the above options on inception based on your requirements. Please refer to the product brochure for more detailsand/or consult Relationship Manager.",
  },
  {
    Question: "What are the exclusions available under the Plan",
    Answer:
      "In case of death due to suicide within 12 months from the date of inception of the policy or from the date of the revival of the policy, the nominee or beneficiary of the policyholder shall be entitled to the fund value, as available on the date of death. Any charges recovered subsequent to the date of death shall be paid back to the nominee or beneficiary along with the death benefit. In case, the Policyholder has opted Extra Life Option under the Plan, the Accidental Death Benefit will be payable subject to terms and conditions. For detailed exclusions please refer to product brochure carefully and/or consult Relationship Manager.",
  },
  {
    Question: "Can I do any free switch or premium redirection under the plan",
    Answer:
      "Yes. You get 4 Free Fund Switch / Premium Redirection in a given policy year to create your own investment strategy. Please refer to product brochure for more details and/or consult Relationship Manager.",
  },
  {
    Question: "What are the fund options",
    Answer:
      "The plan offers 8 Funds (including 4 New Funds) of varying risk and return profiles. The Policyholder has the option to choose any one or more funds based on his/her Risk Appetite. The Fund Options available under the Plan are Equity Plus Fund, Diversified Equity Fund, BlueChip Fund, Opportunities Fund, Balanced Fund, Income Fund, Bond Fund and Conservative Fund",
  },
  {
    Question: "Can I take any loan",
    Answer: "Policy loan is not offered in this plan.",
  },
  {
    Question: "How is the Fund Value calculated",
    Answer:
      "Fund Value will be calculated by multiplying balance units in your fund by the then prevailing NAV price. Please refer to product brochure for more details and/or consult Relationship Manager.",
  },
  {
    Question: "What is the surrender benefit",
    Answer:
      "If you surrender before completion of the 5th policy year, your Fund Value less applicable charges will be moved to the DPF after deducting applicable charges, if any and the proceeds from DPF will be paid out on the completion of the lock-in period. If you surrender after completion of the 5th policy year your Fund Value will be paid out to you. Upon payment of this benefit the policy terminates and no further benefits are payable. Please refer to the Product Brochure for further details and/or consult Relationship Manager.",
  },
  {
    Question: "What is the minimum premium that needs to be paid",
    Answer:
      "Minimum premium amounts for various premium payment frequencies are as follows: Single: Rs. 24,000 Annual: Rs. 24,000 Half-yearly: Rs. 12,000 Quarterly: Rs. 6,000 Monthly: Rs. 2,000",
  },
  {
    Question: "What is the death benefit under this plan",
    Answer:
      "The Death Benefit will depend on the Benefit Option opted under the Plan on inception. In case of unfortunate demise of the life assured during the policy term, the nominee will be paid:Higher of Sum Assured or Fund Valueâ€“ Sum Assured + Fund Valueâ€“ Sum Assured + Waiver of Premium till maturity + Fund Value on maturity This is subject to minimum payment of 105% of the total premiums paid. Please refer to product brochure for more details and/or consult Relationship Manager.",
  },
  {
    Question: "What is the maximum amount I can invest",
    Answer:
      "There is no limit on maximum amount that you can invest under this plan, subject to underwriting.",
  },
  {
    Question:
      "What are the premium paying frequencies that are available under this policy",
    Answer:
      "The premium payment frequencies under this plan are Annual, Half yearly, Quarterly and Monthly or Single",
  },
  {
    Question: "For how many years can I stay invested in this plan",
    Answer:
      "You can choose a policy term of 10 years or 15 to 25 years under this plan.",
  },
  {
    Question: "Is there any Loyalty Additions under the Plan",
    Answer:
      "Yes. Loyalty additions (as percentage of the average fund value) will be added to the fund value every alternate year starting from the end of 11th policy year for limited and regular premium payment policies. For single premium policies, the Loyalty Additions will be 1.50% of the average fund value. The Loyalty Addition shall be payable at the end of every policy year from year 10 to 14 (both inclusive).Please refer to product brochure for more detailsand/or consult Relationship Manager.",
  },
  {
    Question: "What do I receive on Maturity",
    Answer:
      "You will receive the Fund Value on maturity as a lump sum amount or you can choose to receive the same over a period of 5 years through Settlement Option.",
  },
  {
    Question: "What happens if premiums are not paid",
    Answer:
      "In case the Policyholder has not paid the premium by the expiry of the grace period, he/she will have the following options: to revive the Policy within a period of 2 years from the date of discontinuance, or to completely withdraw from the Policy without any risk cover, or to convert the policy into paid-up policy (available only on discontinuance after completion of the 5 policy years) If you do not communicate to us on the above options, the following treatment will be applicable Discontinuance before completion of 5 years from commencement of the policy: Fund Value less applicable charges will be moved to â€˜Discontinued Policy Fund (DPF)â€™.The proceeds from DPF will be paid out upon the completion of the lock-in period. Discontinuance on and after completion of the 5 years from commencement of the policy: Fund Value will be paid out to you. You have the option to revive a discontinued policy within two consecutive years from the date of discontinuance of the policy, subject to payment of all due & unpaid premiums and our underwriting policy.",
  },
  {
    Question: "What is the Settlement Option",
    Answer:
      "In Settlement Option the Fund value is paid in periodical installments over a period which may extend up to 5 years. The value of installment payable on the date specified shall be subject to investment risk i.e. the NAV may go up or down depending upon the performance of the funds chosen by you. Your money will remain invested in the funds chosen by you and is subject to the same investment risks as during the policy term. During the Settlement period, the risk cover will cease, Fund Management Charge will continue to be deducted and no other charges shall be levied. Partial withdrawals and switches shall not be allowed during this period. Complete withdrawal may be allowed at any time during this period without levying any charge. At the end of this 5-year period, the balance units will be redeemed at the then prevailing unit price and the fund value will be paid to you.",
  },
  {
    Question: "Can I buy more than one policy",
    Answer:
      "You can buy more than one policy subject to successful underwriting.",
  },
  {
    Question: "Can I do a partial withdraw from my fund",
    Answer:
      "You can withdraw money from your funds to meet any future financial emergencies. Lump sum partial withdrawals can be made from your funds after 5 complete policy years, provided the Life Assured is at least 18 years of age. Get 4 Free Partial Withdrawals in a policy year. Please refer to product brochure for more details and/or consult Relationship Manager.",
  },
  {
    Question: "What are the features that are available with M&N  Life Uday",
    Answer:
      "The features available with M&N  Life Uday are : Easy Issuance on the basis of Declaration of Good Health (DOGH) Guaranteed Additions to boost your maturity value In-built Accidental Death Benefit in case of death due to an accident Auto-Cover Continuance even if you miss paying a premium",
  },
  {
    Question:
      "What is the minimum premium that I need to pay in order to take an M&N  Life Uday Policy",
    Answer:
      "M&N  Life Uday low ticket size which makes it affordable for customers from all income segments. The minimum premiums have been outlined below : Frequency of Premium Payment Minimum Installment Premium Maximum Installment Premium Annual Rs. 5,000 No limit2 Half-Yearly Rs. 2,500 Quarterly Rs. 1,250 Monthly Rs. 500 1The minimum premium amounts are exclusive of applicable service tax and education cess. 2The acceptance of any case is subject to Board approved underwriting policy. 3If you opt for the monthly premium frequency, three months premiums in advance on the date of commencement of policy shall be accepted, as a prerequisite to allow monthly mode of premium payment.",
  },
  {
    Question: "What if I miss one of my due premiums",
    Answer:
      "We understand that you may not be in the best of financial health always. Keeping this in mind, we have incorporated the Auto Cover Continuance feature in M&N  Life Uday. Under this feature, for a reduced paid-up policy the full death benefit shall continue for a period of one year (Auto Cover Continuation period) from the date of first unpaid premium. Auto Cover Continuance applies only to the basic death benefit and not to the additional accidental death benefit. At the time of payment of death benefit during the Auto Cover Continuation period the due but unpaid premium shall not be deducted from the benefit payable. The basic death benefit payable during this one year shall be the higher of: Sum Assured on Death + Accrued Guaranteed Additions + Accrued Reversionary Bonus (if any) + Interim Bonus (if any) + Terminal Bonus(if any) 105% of Premiums paid During the auto cover continuance period, the additional accidental death benefit shall be reduced to paid-up Sum Assured on Death. The Guaranteed Additions and Reversionary Bonuses accrued till due date of first unpaid premium shall become payable on death and no further Guaranteed Additions or Reversionary Bonus shall accrue to the policy.",
  },
  {
    Question: "When does my policy acquire a Guaranteed Surrender Value (GSV)",
    Answer:
      "It is advisable to continue your policy in order to enjoy full benefits of your policy. However, we understand that in certain circumstances you may want to surrender your policy.The policy will acquire a Guaranteed Surrender Value (GSV) provided 2 full yearsâ€™ premium has been paid for premium payment term of less than 10 years and 3 full yearsâ€™ premium have been paid for premium payment term of 10 years and above.The GSV shall be the aggregate of: Percentage of total premiums paid Percentage of accrued bonuses & accrued guaranteed additions Premiums will exclude any underwriting extra premiums and any taxes paid For details on GSV percentage (factors), please refer to the Product Brochure.",
  },
  {
    Question:
      "Can I take a loan under M&N  Life Uday in case I need money during any emergencies",
    Answer:
      "Yes. You can take a policy loan under this policy provided that your policy has acquired a surrender value and subject to terms and conditions that the company may specify from time to time.",
  },
  {
    Question:
      "What are the minimum and maximum age limits for investing in M&N  Life Uday",
    Answer:
      "The age limits for M&N  Life Uday have been highlighted below : Minimum Entry Age 18 Years Maximum Entry Age 55 Years Minimum Maturity Age 30 Years Maximum Maturity Age 70 Years",
  },
  {
    Question:
      "What is the rate of Guaranteed Additions that s available in this policy",
    Answer:
      "Provided the policy is in force and all due premiums have been paid, you will receive Guaranteed Additions of 3% p.a for the first 5 years of your policy over and above the Bonus that will be declared.",
  },
  {
    Question:
      "What is the death benefit that I receive if I choose M&N  Life Uday",
    Answer:
      "On the unfortunate event of your death during the policy term, the nominee will receive the higher of : Sum Assured on Death + Accrued Guaranteed Additions + Accrued Reversionary Bonuses (if any) + Interim Bonus (if any) + Terminal Bonus (if any) 105% of Premiums paid The Sum Assured on Death shall be the higher of: Sum Assured on Maturity An absolute amount assured to be paid on death, which in this case, is equal to the Sum Assured on Maturity 10 times Annualised Premium for entry age up to 50 years and 7 times Annualized Premium for entry age greater than 50 years An additional benefit equal to 100% of â€˜Sum Assured on Deathâ€™ will be payable in case of death due to an accident.",
  },
  {
    Question:
      "What is the maturity benefit that I receive if I invest in this plan",
    Answer:
      "On survival till the end of the policy term, you will receive a lump sum amount which will be the aggregate of : Sum Assured on Maturity Accrued Guaranteed Additions Accrued Reversionary Bonus Interim Bonus (if any) Terminal Bonus (if any)",
  },
  {
    Question: "Is there any discount if I choose higher premiums",
    Answer:
      "Yes. To reward you for your showing faith in the M&N  Life Uday policy, there is a High Sum Assured Rebate. The conditions are mentioned below : Sum Assured on Maturity(Rs) PPT 8 years PPT 10 years Less than 2,00,000 Nil Nil 2,00,000 to 4,99,999 5 2.5 5,00,000 or above 7.5 5",
  },
  {
    Question:
      "What are the Policy Terms and Premium Payment Term options available under M&N  Life Uday",
    Answer:
      "You have an option to select a Policy Term of 12 years or 15 years. For a 12 year term, the premium payment term is 8 years while for a 15 year term, you have the option of selecting a premium payment term of 8 years or 10 years.",
  },
  {
    Question: "What if I need the money for an emergency",
    Answer:
      "My money is locked with you.This is a pension plan which accumulates your money for the retirement kitty. Since this is for old age, it has a restricted liquidity. You can withdraw maximum up to 1/3rd of the money in case of an emergency after 5 years of commencement of the plan. However, the rest must be converted into annuity, and will be paid periodically.",
  },
  {
    Question: "What is so special about this product",
    Answer:
      "M&N  Life APP has benefits such as: Capital Guarantee of 101% - 135% - APP is a unit linked plan that provides you the upside of the equity markets. However, to protect you from the market downfall, you have the Assured Vesting Benefit of 101% -135%, depending on the Premium Paying Term and Policy Term combination. This means that your capital is completely protected from any downside Pension Multipliers â€“ As a Loyalty benefit, Pension Multipliers would be added to the fund value every alternate year starting from the end of 11th policy year. These additions will be equivalent to 1% of average fund value for the immediate preceding two years, subject to the policy being in force and all premiums paid till date. Early start to boost your corpus â€“ With APP you can start your retirement planning as early as 18 years. The earlier you start, you would gain from the power of compounding and be able to build a bigger corpus before your retirement Lower vesting age limits â€“ The minimum vesting age of APP is 45 years, this would help you to plan for early retirement",
  },
  {
    Question: "What would be the annuity rates at the time of maturity",
    Answer:
      "Annuity rates are a function of prevailing market conditions at the time the annuity is bought. Other factors that determine annuity rate are - gender, age, annuity option chosen & premium band. Hence, it would not be possible to commit on the annuity rate at this point.",
  },
  {
    Question: "I have 30 years to my retirement. Why do I need to plan now",
    Answer:
      "This is the best part of your life. You have time on your side. So you can act now and ensure a smooth retirement. Please remember that retirement is inevitable & early planning for retirement is really helpful. The earlier you start investing in your retirement, the bigger would be your retirement kitty, thanks to the power of compounding. You can actually build up a larger sum with a comparatively smaller investment if you start early. So please think about this and act now.",
  },
  {
    Question: "Are top-ups allowed in this plan",
    Answer: "There isnâ€™t any provision of top-up premiums in this plan.",
  },
  {
    Question:
      "What are the steps involved to purchase this policy quickly in case I am travelling and do not have much time",
    Answer:
      "Taking you through the procedure and form filling - only KYC documents, signature on proposal form and payment instrument are required. You can also pay online through M&N  Bank NetBanking, Debit card or Credit card. This being a pension plan, you donâ€™t need to go through any medicals. After your form is logged in, you would receive a verification call the next day. Once the verification call is closed with an affirmative from your end, your policy would be issued and the Policy Bond would be delivered to your Demat Account. This Demat Account is completely free of cost. Thus it would not take much time.",
  },
  {
    Question:
      "I donâ€™t want to wait till 60 years for retirement. Is there a way out",
    Answer:
      "This plan has a minimum vesting age of 45 years only, which would help to plan for an early retirement. You donâ€™t need to wait till 60 years of age. However, once you have fixed your vesting age, it is recommended that you continue for the entire term.",
  },
  {
    Question: "What is the M&N  Life Assured Pension Plan",
    Answer:
      "The Assured Pension Plan is a Unit Linked Pension Plan recently launched by M&N  Life. This plan aims to help you plan for a steady income source for retirement. You can choose from a variety of Premium paying & policy term options as per your comfort and plan your retirement. M&N  Life APP provides you the benefit of equity participation with the comfort of a capital guarantee. To boost your fund value, you also have the pension multipliers that are added to your fund post 11th year.",
  },
  {
    Question: "Why should I buy M&N  Life Assured Pension Plan",
    Answer:
      "One of the biggest challenges of planning for your retirement is to ensure that you have saved enough money during your working years that will take care of your expenses once you retire. Given the rising cost of living, increased life expectancy and inflation, it is always wise to invest in a Pension Plan. M&N  Life Assured Pension Plan can help you achieve your retirement goals by planning for it well in advance.",
  },
  {
    Question:
      "M&N  Life APP is a ULIP Plan. Why donâ€™t I get to choose the funds in this plan",
    Answer:
      "M&N  Life APP provides you a guarantee (between 101% -135%) of the premiums paid. This is why the choice of funds are predefined as per the Equity Backing Ratio and is not available for customised allocation by customers.",
  },
  {
    Question: "Are there any tax benefits available",
    Answer:
      "The premiums paid by you are eligible for tax benefits under Section 80CCC of the Income Tax Act, 1961. Up to 1/3rd of the policy proceeds can be taken as tax-free commuted value, as prescribed under Sec 10 (10A) of the Income Tax Act, 1961.",
  },
  {
    Question:
      "I have other sources of income. Do I still need to plan for retirement",
    Answer:
      "Diversification of income source is good. However, as you get older, you might not be able to work the way you can now. The other sources of income might not turn out to be as successful as they are today. Hence, it is prudent to plan for your retirement through a pension plan.",
  },
  {
    Question: "How would you utilise my funds",
    Answer:
      "Your funds will be invested into Equity and Debt instruments as per the Equity Backing Ratio defined by the company. This is to provide you with maximum returns from market upside, as well as protect your capital from any downfall.",
  },
  {
    Question: "Do I get a life cover from this plan",
    Answer:
      "APP being a Pension plan does not have a life cover; however, the death benefit is higher of FV or 105% of the premiums paid till date.",
  },
  {
    Question: "Can I exercise the freelook option in this policy",
    Answer:
      "In case you are not agreeable to any of our terms or conditions, you have the option of returning the policy to M&N  Life stating the reasons thereof, within 15 days of receipt of the policy bond.",
  },
  {
    Question: "Can I get a loan or partial withdrawal on this plan",
    Answer:
      "You cannot avail any loan or make partial withdrawal from this plan.",
  },
  {
    Question: "When do I get to choose the annuity option",
    Answer:
      "You need to give a default option now, i.e., at the time of purchase of this policy. However, depending on your situation, you always have the option to change/ alter the annuity option at the time of maturity of the pension policy. M&N  Life will get in touch with you 3-6 months before the maturity of the policy and you can revisit your annuity choice options then. In case you donâ€™t revert to M&N  Life at that point of time, the default annuity options chosen earlier would be considered and your annuity payments would commence. However, after commencement of annuity you wonâ€™t be able to make any further alterations.",
  },
  {
    Question: "What is M&N  Life Easy Health Plan",
    Answer:
      "M&N  Life Easy Health is a fixed benefit, health insurance plan that provides coverage against Critical Illnesses, specified Surgeries and also provides Daily Hospital Cash Benefit in case of hospitalization. This cover will be available for a period of 5 years.",
  },
  {
    Question:
      "What are the different plan options available under this product",
    Answer:
      "You can select 1 or a combination of 2 or 3 benefits available under this plan. There are 7 plan options that you can select from. They are as follows: PLAN OPTION BENEFITS COVERED 1 Daily Hospital Cash Benefit 2 Surgical Benefit 3 Critical Illness Benefit 4 Daily Hospital Cash Benefit + Surgical Benefit 5 Surgical Benefit + Critical Illness Benefit 6 Daily Hospital Cash Benefit + Critical Illness Benefit 7 Daily Hospital Cash Benefit + Surgical Benefit + Critical Illness Benefit",
  },
  {
    Question: "Would I have to go for any medicals",
    Answer: "No, there would not be medical tests involved with this plan.",
  },
  {
    Question:
      "What are the different Sum Insured options available underthis product",
    Answer:
      "There are 10 different Sum Insured options to select from, starting as low as Rs.25,000. The different options available are as follows: OPTION SUM ASSURED 1 Rs 25,000 2 Rs 50,000 3 Rs 75,000 4 Rs 1,00,000 5 Rs 1,50,000 6 Rs 2,00,000 7 Rs 2,50,000 8 Rs 3,00,000 9 Rs 4,00,000 10 Rs 5,00,000",
  },
  {
    Question: "Are there any Tax benefits with this product",
    Answer:
      "Yes, you may be eligible for tax benefits under section 80D of the Income Tax Act 1961.Please note that the above mentioned benefits are as per the current tax laws. Your tax benefits may change if the tax laws are changed. It is advisable to re-confirm the same with your tax consultant.",
  },
  {
    Question: "Are there any exclusions under this product",
    Answer:
      "Unless expressly stated to the contrary in this Policy, M&N  Life will not make any payment for any claim in respect of any Life Assured if it is directly or indirectly caused by, arises from or is in any way attributable to any of the following: Treatment for congenital disease or deformity, including physical defects present from birth will not be covered by the policy. Hospitalization and/or surgery is/are not in accordance with the diagnosis and treatment of the condition for which the hospital confinement or surgery was required; Any condition with respect to the covered benefits, for which the insured had signs or symptoms, and/or was diagnosed, and/or received medical advice/treatment within the waiting period. Elective surgery or treatment which is not medically necessary; Weight reduction or weight improvement regardless of whether the same is caused (directly or indirectly) by a medical condition; Study and treatment of sleep apnoea; Routine eye tests, any dental treatment or surgery of cosmetic nature, extraction of impacted tooth/teeth, orthodontics or orthognathic surgery, or tempero-mandibular joint disorder except as necessitated by an accidental injury and warranting hospitalization Outpatient treatment Hospitalization and/or surgery relating to infertility or impotency, sex change or any treatment related to it, abortion, sterilization and contraception including any complications relating thereto; Hospitalization and/or surgery for treatment arising from pregnancy and itâ€™s complications which shall include childbirth or miscarriage; Hospitalisation primarily for any purpose which in routine could have been carried out on an out-patient basis and which is not followed by an active treatment or intervention during the period of hospitalization. Experimental or unproven procedures or treatments, devices or pharmacological regimens of any description (not recognized by Indian Medical Council) or hospitalization for treatment under any system other than allopathy; Any mental or psychiatric condition including but not limited to insanity, mental or nervous breakdown / disorder, depression, dementia, or psychosomatic disorders. Alzheimerâ€™s disease will also be excluded from all the covered benefits except Critical Illness. Convalescence, rest cure, sanatorium treatment, rehabilitation measures, respite care, long term nursing care or custodial care and general debility or exhaustion (run down condition) Directly or indirectly arising from alcohol, drug or unless taken in accordance to the dosage and duration as prescribed by the independent medical practitioner substance abuse and any illness or accidental physical injury which may be suffered after consumption of intoxicating substances, liquors or drugs; Directly or indirectly arising from or consequent upon war, invasion, acts of foreign enemies, hostilities (whether war be declared or not), civil war, terrorism, rebellion, active participation in strikes, riots or civil commotion, revolution, insurrection or military or usurped power and Sexually transmitted diseases or any treatment in the presence of HIV infection Acquired Cosmetic or plastic surgery except to the extent that such surgery is necessary for the repair of damage caused solely by accidental injuries, cancer or burns. Treatment of xanthelesema, , acne and alopecia; circumcision unless necessary for treatment of a disease or necessitated due to an accident Nuclear disaster, radioactive contamination and/or release of nuclear or atomic energy; Injury or illness caused by intentionally self-inflicted injuries; or any attempts of suicide while sane or insane; or deliberate exposure to exceptional danger (except in an attempt to save human life); Injury or illness caused by violation or attempted violation of the law, or resistance to arrest; or by active participation in an act with criminal intent. Injury or illness caused by professional sports, racing of any kind, scuba diving, aerial sports, activities such as hand-gliding, ballooning, and any other hazardous activities or sports unless agreed by special endorsement; Hospitalization where the Life Assured is a donor for any organ transplant; Any injury, sickness or disease received as a result of aviation, gliding or any form of aerial flight other than on a scheduled commercial airline as a bona fide passenger (whether fare paying or not), pilot or crew member Treatment to relieve symptoms caused by ageing, puberty, or other natural physiological cause, such as menopause and hearing loss caused by maturing or ageing. Artificial life maintenance, including life support machine use, where such treatment will not result in recovery or restoration of the previous state of health. Treatment of abnormalities, deformities, or Illnesses present only because they have been passed down through the generations of the family. Treatment for, or related to developmental problems, including Learning difficulties, such as dyslexia and behavioural problems, including Attention Deficit Hyperactivity Disorder (ADHD). In addition to the above, no Critical Illness Benefit will be payable for any of the following: Date of diagnosis within 90 days from date of commencement or reinstatement of cover Critical Illness Benefit, where death occurs within 30 days of the date of diagnosis Policy in the lapsed condition as on the date of diagnosis Any more than one claim in respect of Critical Illness Benefit Non-fulfilment of eligibility criteria for Critical Illness Benefit covered under the policy",
  },
  {
    Question: "What if I donâ€™t/miss to pay premiums",
    Answer:
      "Premium(s) due on this policy should be paid on or before the premium due date. You are advised to pay the premium in time to continue enjoying the benefits of this policy. However, in case you are unable to do so, you have a grace period after the premium due date within which you can pay the due premium. Grace period available for annual frequency is 30 days whereas there is no grace period for one time/ single payment frequency. If you pay the due premium within grace period the policy will continue without any break. Following conditions will apply during grace period. The cover under the policy shall remain in-force during the grace period Should a valid claim arise under the policy during the grace period, but before the payment of due premium, M&N  Life shall still honour the claim. In such cases, the due and unpaid premium will be deducted from any benefit payable.",
  },
  {
    Question: "What if I donâ€™t/miss to pay premiums even in the Grace period",
    Answer:
      "In the event of non-payment of premiums due under the policy by the expiry of the grace period, the policy will lapse with effect from the premium due date. The cover will cease and no benefits will be payable in case of lapsed policy.",
  },
  {
    Question: "Can I reinstate the policy if it is lapsed",
    Answer:
      "If your policy is lapsed, you may request M&N  Life in writing to revive your policy within 2 consecutive years from the date of first unpaid premium. The following conditions will apply in case of revival of the policy: All pending premium should be immediately paid along with any interest that is advised by M&N  Life. The current interest rate used for revival is 10.5% p.a. Any agreement to revive or reinstate would be subject to satisfactory evidence of good health Reinstatement request will attract the following : If the policy is revived within 60 days, only the remaining part of all time bound exclusions and waiting periods will apply If the policy is revived after 60 days, all time bound exclusions and waiting periods will be applied afresh",
  },
  {
    Question: "Is there any death benefit under this product",
    Answer: "There is no death benefit payable under this product.",
  },
  {
    Question: "Is there any Surrender benefit under this product",
    Answer:
      "There is no surrender value available under this plan for regular pay. Under single pay, only if all the options chosen by the policyholder are surrendered and no claims are made, the policy can be surrendered. The surrender value would be calculated as following: 70% x Single Premium x(1- M/P ) Where, M : policy month of surrender P : policy term in months",
  },
  {
    Question: "What are the different benefits available under this product",
    Answer:
      "There are 3 separate benefits available under this product namely:- Surgical Benefit: Avail up to 100% of Sum Insured in case of 138 surgeries Critical Illness Benefit: Get 100% of Sum Insured if diagnosed with any one of 18 Critical Illnesses Daily Hospital Cash Benefit: Avail Daily Hospital Cash of 1% of Sum Insured per day (Non ICU room) and 2% of Sum Insured per day (ICU) You can select 1, 2 or all the 3 plan benefits at the time of purchasing the policy.",
  },
  {
    Question: "Are there any other terms and Conditions",
    Answer:
      "Yes, there are various terms and conditions associated with this plan. For detailed information, please read the SalesBrochure carefully.",
  },
  {
    Question: "Is there any maturity benefit under this product",
    Answer: "There is no maturity benefit available under this product.",
  },
  {
    Question: "How will the Pay Out happen for this plan",
    Answer:
      "The payout will depend upon the plan benefit(s) chosen. Daily Hospital Cash Benefit (DHCB) 1. In case of hospitalization, due to any injury, sickness or disease, you will receive 1% of Sum Insured as DHCB if admitted in Non ICU room and 2% of Sum Insured if admitted in ICU room. 2. The benefit will be payable as a lump sum amount after the completion of each continuous hospitalization for more than 24 hours as a result of injury, sickness or disease. The benefit amount payable will be calculated as mentioned below: Daily Hospital Cash Benefit * (Number of Days admitted - 1) 3. Daily Hospital Cash Benefit will be payable for a maximum of 20 days per year in case the Life Assured is admitted in Non ICU room and Twice the Daily Hospital Cash Benefit will be payable for a maximum of 10 days per year if admitted in ICU room. 4. Daily Hospital Cash Benefit will be payable subject to a maximum of 60 and 30 days if admitted in Non ICU and ICU rooms respectively, during the entire policy term. 5. The ICU and non ICU benefits will be independent of each other and subject to their respective limits 6. There is a waiting period of 60 days from the date of commencement or reinstatement of the cover. Waiting period will not be applicable for accidental injury. Surgical Benefit (SB) 1. Surgical Benefit will be payable if the Life Assured has undergone any of the 138 surgeries mentioned in Annexure 2 of the Sales Brochure, provided the surgery is done: a. by a qualified surgeon for a surgical operation and b. performed at a hospital due to injury or c. sickness for covered surgical procedures advised by an independent medical practitioner and the policy is in force during the policy term 2. In case the Life Assured has to undergo a surgery during the policy term, the benefit payable shall be ascertained on the basis of the Category of the Surgery as shown below: CATEGORY** SUM ASSURED (%) 1 100% 2 60% 3 40% 4 20% 3. You are entitled to make multiple claims up to a maximum of 100% of Sum Insured during the policy term. 4. The policyholder shall not be allowed to claim for the same surgery more than once. However, multiple claims from the same category can be made. 5. In case 100% of the Sum Insured has been used up, the cover for Surgical Benefit will cease for the Life Assured for the remaining policy term. However, other benefits (such as Daily Hospital Cash Benefit and Critical Illness Benefit, if applicable) will continue to be in force. 6. There is a waiting period of 60 days from the date of commencement / reinstatement of the cover. Waiting period will not be applicable in case of accidental injury. Critical Illness Benefit (CIB) 1. Lump sum benefit equal to 100% of the Sum Insured shall be payable in case the Life Assured is diagnosed with any of the 18 Critical Illness specified in the Sales Brochure. 2. A 30 day survival period is applicable for the Critical Illness Benefit. This refers to the period from the diagnosis of the Critical Illness that the Life Assured must survive for the Critical Illness Benefit to be payable. 3. Critical Illness Benefit will be payable only once during the entire policy term. 4. Once the Critical Illness Benefit is paid, the benefit will cease for the Life Assured for the remaining policy term. However, other benefits (such as Daily Hospital Cash Benefit and Surgical Benefit, if applicable) will continue to be in force. 5. There is a waiting period of 90 days for Critical Illness Benefit from the date of commencement/ reinstatement of the cover, except in cases where the Critical Illness occurs as a result of an accident (e.g., Major Head Trauma).",
  },
  {
    Question: "What is the policy term available under this product",
    Answer:
      "There is a fixed policy term of 5 years. Further, you shall only pay premiums for the benefit(s) as long as the complete payout for that benefit has not happened. The policyholder shall have the option to choose one of the above plan options only at the time of policy inception.",
  },
  {
    Question:
      "What are the premium payment frequencies available under this product",
    Answer:
      "You can choose to pay your premiums either annually(Regular Premium) or one time(Single Premium).",
  },
  {
    Question: "Is there any eligibility criteria under this product",
    Answer:
      "Eligibility Criteria for Easy Health includes: Minimum Entry Age: 18 years Maximum Entry Age: 65 years Minimum Maturity Age: 23 years Maximum Maturity Age: 70 years Policy Term: 5 years Note â€“ Age is taken as on last birthday",
  },
  {
    Question:
      "What are the minimum and maximum premiums available under this product",
    Answer:
      "The minimum and maximum premium amounts differ depending on if single or annual mode of premium payment is selected. The minimum premium under the product is: 1. Rs 2,184 for Single Pay 2. Rs 676 for Regular Pay The maximum premium under the product is: 1. Rs 4,04,279 for Single Pay 2. Rs 1,22,068 for Regular Pay These premium amounts are exclusive of applicable taxes and Swach Bharat Cess.",
  },
  {
    Question: "What is M&N  Life Capital Shield",
    Answer:
      "M&N  Life Capital Shield is a non-par Unit Linked Plan. It is an investment-cum-insurance plan that offers the potential of better returns, by investing a part of your money in equity and the balance in debt, while also providing you with life cover. The allocation of your money to debt fund shall systematically increase over time to protect your capital.",
  },
  {
    Question: "What is the Policy Term available in this plan",
    Answer: "Capital Shield provides a Policy Term of 10 years.",
  },
  {
    Question: "What is the Death Benefit this plan",
    Answer:
      "In case of the Life Assuredâ€™s unfortunate demise during the Policy term, provided all due premiums have been paid, the nominee will be paid the â€œSum Assured on Deathâ€. The â€œSum Assured on Deathâ€ shall be the highest of: - Sum Assured less an amount# for Partial withdrawals made, if any (as detailed below) - Fund value - 105% of total premiums paid till the date of death* #The partial withdrawals to be deducted from the Sum Assured shall be: For death before attainment of age 60 - all partial withdrawals made during the two year period immediately preceding the date of death of the Life Assured. For death on or after attainment of age 60 - all partial withdrawals made after attainment of age 58 years of the Life Assured. Upon payment of the death benefit, the Policy shall terminate and no further benefits are payable.",
  },
  {
    Question: "What is the Maturity Benefit available under this plan",
    Answer:
      "Your policy matures at the end of the policy term and all your risk cover ceases. On maturity of the policy, provided all due premiums have been paid, the Life Assured will receive higher of: - Fund Value - Assured Maturity Benefit (as defined below) Assured Maturity Benefit = (101% * â€œTotal Premiumsâ€ paid till date) less the Total Partial Withdrawals made till date (if any) Where â€œTotal Premiumsâ€ shall be: - For Single Pay policies : Single Premium - For Limited Pay policies : 5 times the Annualised Premium Please note that the Assured Maturity Benefit will be paid only on policy maturity provided all due premiums have been paid and will not apply on death or surrender. Upon payment of the maturity benefit, the Policy shall terminate and no further benefits are payable.",
  },
  {
    Question: "Are there any exclusions in this plan",
    Answer:
      "In case of death due to suicide within 12 months from the date of inception of the policy or from the date of the revival of the policy, the nominee or beneficiary of the policyholder shall be entitled to the fund value, as available on the date of death. Any charges recovered subsequent to the date of death shall be paid back to the nominee or beneficiary along with the death benefit.",
  },
  {
    Question: "What are the age limits for this plan",
    Answer:
      "The age limits for this plan include: Minimum Entry Age 8 years Maximum Entry Age 60 years Minimum Maturity Age 18 years Maximum Maturity Age 70 years",
  },
  {
    Question: "What are the key features of this plan",
    Answer:
      "- Protect your investment from market risks with an Assured Maturity Benefit of 101% of the Total Premiums paid - Pay premiums only once or for a limited period of 5 years - Get increasing Loyalty Additions from the end of the 6th policy year onwards to boost the Fund Value - Stay protected during the entire policy term with life insurance cover",
  },
  {
    Question: "What is the difference between Life and Extra Life options",
    Answer:
      "In addition to the benefits under Life Option, you get an additional Extra Life Sum Assured upon death due to Accident under Extra Life option. Customer has the flexibility to select the amount of Extra Life Sum Assured (maximum up to Base Sum Assured)",
  },
  {
    Question: "What are the benefits available under Income option",
    Answer:
      "This option provides the nominee with a Lump sum benefit and a regular stream of level/ increasing monthly income on death of Life Assured. The customer has to select this Lump sum benefit, amount of monthly income, income term for which the income payout will happen (up to 20 years) and a simple rate of increase in income.",
  },
  {
    Question:
      "What is the difference between Income and Extra Life Income options",
    Answer:
      "In addition to the benefits under Income Option, you get an additional Extra Life Sum Assured upon death due to Accident under Extra Life Income option. This additional Sum Assured will be payable partly as Lump sum and partly as income benefit on accidental death.",
  },
  {
    Question:
      "What is the difference between 3D Life and 3D Life Long Protection options",
    Answer:
      "In addition to the benefits under 3D Life Option, Life Assured is covered for whole life under 3D Life Long Protection option. Premiums under this option have to be paid only till an age of 65.",
  },
  {
    Question: "What is Life Stage Protection feature",
    Answer:
      "Under this feature, you have the option to increase the basic Sum Assured without underwriting on any of the below specified events in the life of the Life Assured 1stMarriage: 50% of Sum Assured subject to a maximum of Rs. 50 lakhs Birth of 1st child: 25% of Sum Assured subject to a maximum of Rs. 25 lakhs Birth of 2nd child: 25% of Sum Assured subject to a maximum of Rs. 25 lakhs This feature is available under all plan options",
  },
  {
    Question: "What is Accidental Total Permanent Disability (ATPD)",
    Answer:
      "ATPD means when the life assured is totally, continuously and permanently disabled and meets either of the two definitions below: Unable to Work: Disability as a result of injury or accident and is thereby rendered totally incapable of being engaged in any work or any occupation or employment for any compensation, remuneration or profit and he/she is unlikely to ever be able to do so. Physical Impairments: The life assured suffers an injury/accident due to which there is total and irrecoverable loss of: i. The use of two limbs; or ii. The sight of both eyes; or iii. The use of one limb and the sight of one eye; or iv. Loss by severance of two or more limbs at or above wrists or ankles; or v. The total and irrecoverable loss of sight of one eye and loss by severance of one limb at or above wrist or ankle. The disabilities as stated under â€œUnable to Workâ€ and â€œPhysical Impairmentsâ€ must have lasted, without interruption, for at least 6 consecutive months and must, in the opinion of a medical practitioner (as defined below), be deemed permanent. The benefit will commence upon the completion of this uninterrupted period of 6 months. However, for the disabilities mentioned in (iv) and (v) under Part (2), such 6 months period would not be applicable and the benefit will commence immediately.",
  },
  {
    Question:
      "How many Critical Illnesses are covered under 3D Life & 3D Life Long Protection options and what is the benefit associated with them",
    Answer:
      "These plan options provide Waiver of Premium benefit if the Life Assured is diagnosed with any of the 34 covered Critical Illness.",
  },
  {
    Question: "What is Top up option",
    Answer:
      "This option provides for a systematic increase of your cover from 1st policy anniversary onwards. This option is available under all plan options and has to be opted at policy inception.",
  },
  {
    Question: "What is the Policy Term available under this plan",
    Answer:
      "For all options other than Life Long Protection and 3D Life Long Protection options â€“ 5 to 40 years For Life Long Protection and 3D Life Long Protection options â€“ Whole of Life",
  },
  {
    Question: "How many plan options are available under this plan",
    Answer:
      "The following plan options are available under this plan. 1. Life Option 2. 3D Life Option 3. Extra Life Option 4. Income Option 5. Extra Life Income Option 6. Income Replacement Option 7. Return of Premium Option 8. Life Long Protection Option 9. 3D Life Long Protection Option The customer shall have to choose an option at the inception of the policy. The option once selected cannot be changed at a later date.",
  },
  {
    Question: "Is this plan only available online",
    Answer: "No, this plan is available on both Online and Offline platforms",
  },
  {
    Question: "What is the difference between Life and 3D Life options",
    Answer:
      "In addition to the benefits under Life Option, you will receive an additional benefit of waiver of your future premiums upon diagnosis of Critical Illness under 3D Life option",
  },
  {
    Question:
      "What is the difference between Life and Return of Premium options",
    Answer:
      "In addition to the benefits under Life Option, upon survival of the Life Assured till the end of the Policy term, Total premiums paid till date will be returned back as maturity benefit",
  },
  {
    Question:
      "What is the difference between Life and Life Long Protection options",
    Answer:
      "In addition to the benefits under Life Option, Life Assured is covered for whole life under Life Long Protection option. Premiums under this option have to be paid only till an age of 65.",
  },
  {
    Question: "Are there any alterations allowed under this plan",
    Answer:
      "You shall have the option to alter the premium payment frequency at any Policy anniversary",
  },
  {
    Question: "Does this plan offer tax benefits",
    Answer:
      "Premiums paid by an individual or HUF under this plan are eligible for tax benefits under Section 80C of the Income Tax Act, 1961, subject to the conditions/ limits specified therein. Under Section 10 (10D) of the Income Tax Act, 1961, the benefits received from this policy are exempt from tax, subject to the conditions specified therein. Please note that the above mentioned benefits are as per the current tax rules. Your tax benefits may change if the tax rules are changed. You are requested to consult your tax advisor.",
  },
  {
    Question: "What are the benefits available under Life Option",
    Answer:
      "Under this option your nominee will get a Lump sum Benefit on death or diagnosis of Terminal Illness. Your future premiums will be waived upon Accidental Total Permanent Disability. These benefits are available under all plan options",
  },
  {
    Question: "What does 3D stand for in M&N  Life Click 2 Protect 3D Plus",
    Answer:
      "3D stands for Death, Disease & Disability. M&N  Life Click 2 Protect 3D Plus is a comprehensive term plan that provides protection against these 3D's.",
  },
  {
    Question: "Do I need to have Auto Insurance",
    Answer:
      "Yes, the Motor Vehicle Act states that every motor vehicle plying on the road has to be insured with a Liability Only policy at the very least.",
  },
  {
    Question: "Do I need to lodge an FIR in case of an accident",
    Answer:
      "You will need to lodge an FIR in the following circumstances: Any third party personal injury or death due to an accident involving your vehicle Any personal injury or death of a paid driver Any personal injury or death of an owner-driver Any personal injury or death of a passenger Any third party property damage Theft of the entire vehicle Theft of accessories, stereo-recorders, other vehicle parts",
  },
  {
    Question:
      "During the policy period, if I add accessories like a music system in my vehicle, are they also covered",
    Answer:
      "Yes, they will be, as long as you make a written request to us with a description of the accessory along with its value. You may also have to pay an additional premium.",
  },
  {
    Question: "What is IDV (Insuredâ€™s Declared Value)",
    Answer:
      "The Insured's Declared Value (IDV) of the vehicle will be deemed to be the 'SUM INSURED' and it will be fixed at the commencement of each policy period for each insured vehicle. The IDV of the vehicle is to be fixed on the basis of the manufacturerâ€™s listed selling price of the brand and model as the vehicle proposed for insurance at the commencement of insurance/renewal, and adjusted for depreciation (as per the schedule specified below). The IDV of the side car and/or accessories, if any, filled to the vehicle but not included in the manufacturerâ€™s listed selling price of the vehicle is also likewise to be fixed. Age of the vehicles % depreciation to fix IDV Not exceeding 6 months 5% Exceeding 6 months but not exceeding 1 year 15% Exceeding 1 year but not exceeding 2 years 20% Exceeding 2 years but not exceeding 3 years 30% Exceeding 3 years but not exceeding 4 years 40% Exceeding 4 years but not exceeding 5 years 50%",
  },
  {
    Question: "What is salvage and what happens to it",
    Answer:
      "Salvage refers to discarded parts that are damaged beyond repair and need to be replaced. If these parts have no economic value (broken glass, torn plastic, rubber parts), they are thrown away. However, parts like doors, panels, petrol tanks, front forks, etc. do have a residual commercial value. To avoid recycling of such parts that may be repaired and sold as new, these need to be destroyed to prevent malpractices by unethical workshops.",
  },
  {
    Question:
      "What documents do I need to submit when buying Insurance for my vehicle",
    Answer:
      "All you need to submit is a signed proposal form, in certain cases you have to submit some additional documents, if required.",
  },
  {
    Question: "Are there any specific exclusions under a Motor Policy",
    Answer:
      "The following are not covered under a Motor Policy: Wear and Tear Mechanical or Electrical Breakdown, failure Depreciation, any consequential loss Driving under the influence of liquor or drugs Loss or damage attributable to war, mutiny, nuclear risks Any contractual liability View more",
  },
  {
    Question: "Can I buy a Motor Insurance policy online",
    Answer:
      "Yes, you can purchase an M&N  ERGO Motor Insurance policy online by using your Credit Card or online bank account.",
  },
  {
    Question: "Can I pay the premium for my Auto Insurance in instalments",
    Answer:
      "No, the law (Insurance Act, 1938) does not permit us to accept your Auto Insurance premiums in instalments.",
  },
  {
    Question: "Can I renew my Motor policy online",
    Answer:
      "Yes, you can renew your M&N  ERGO Motor Insurance policy online by using your Credit Card or bank account.",
  },
  {
    Question: "Can I renew other insurer policies with M&N  ERGO online",
    Answer:
      "Yes. You just have to log on to www.M&N bank.com and provide minimum details of your expiring policy and buy an M&N  ERGO Motor Insurance policy online. Also avail benefits of the No Claim Bonus earned by you in full.",
  },
  {
    Question: "How is the premium for Motor Insurance calculated",
    Answer:
      "The premium is calculated based on the Make and Model of your vehicle, its age, place of registration, fuel type and Insured Declared Value (IDV). The premium is also subject to certain deductions based on the insuredâ€™s age and occupation and the No Claim Bonus earned by the insured during the policy period. You will need to submit documents or particulars to avail of these discounts. In case you want extended coverage â€“ for Personal Accident, Electrical/Non-Electrical Accessories, etc. you may have to pay an additional premium of the same.",
  },
  {
    Question: "What is a Motor Insurance cover note",
    Answer:
      "A cover note is a temporary insurance document establishing proof of Insurance with which you can register your vehicle. A cover note is valid for 60 days from the date of its issuance and is replaced by an Insurance policy.",
  },
  {
    Question:
      "What documents need to be submitted when I make a claim under my Motor Insurance policy",
    Answer:
      "You will need to submit a claim form along with the following: A copy of the vehicle's registration book A copy of the driving licence of the person driving the vehicle at the time of the accident An estimate of the repairs A copy of the police FIR/panchnama in case of theft or any third party personal injury/death or property damage If the vehicle is declared a total loss, either due to an accident or theft, you will also have to provide the following documents â€“ RTO transfer papers, original RC book, original Insurance policy, the vehicleâ€™s original keys, a No Objection Certificate from you to transfer of the vehicle, a letter of indemnity on judicial stamp paper and a letter of subrogation on judicial stamp paper.",
  },
  {
    Question:
      "Will M&N  ERGO General Insurance give me an advance on the basis of a damage estimate under the Motor Insurance policies",
    Answer:
      "No, your vehicle must first be repaired, after which we will reimburse the amount payable to you or pay the garage directly in the case of cashless settlement under your policy.",
  },
  {
    Question: "What if I misplace my Motor Insurance policy document",
    Answer:
      "Call our toll-free helpline 1800-2-700-700 and weâ€™ll advise you how to proceed. You may have to pay a small fee for a duplicate policy.",
  },
  {
    Question: "What is meant by total loss under the Motor Insurance policy",
    Answer:
      "Total loss means accidental damage to your vehicle where the cost of repair amounts to more than 75% of the IDV on your policy.",
  },
  {
    Question: "What is a No Claim Bonus (NCB) under a Motor Insurance policy",
    Answer:
      "It is a discount in the own damage premium payable when renewing your policy after a claim-free year. It is an incentive for driving carefully and avoiding accidents. The No Claim Bonus on all types of vehicles, and the discount is as follows: All Vehicles % discount on Own Damage premium No claim made or pending during the preceding full year of insurance 20% No claim made or pending during the preceding 2 consecutive years of insurance 25% No claim made or pending during the preceding 3 consecutive years of insurance 35% No claim made or pending during the preceding 4 consecutive years of insurance 45% No claim made or pending during the preceding 5 consecutive years of insurance 50%",
  },
  {
    Question:
      "What is M&N  ERGO General Insurance role in a third party injury/property damage suit",
    Answer:
      "We will handle the legal suit from the moment you receive a notification till the case is resolved. We will either settle the case out of court or actively defend the matter at the Motor Accident Claims Tribunal. Your co-operation will be essential in gathering the necessary documents and preparing a defence â€“ viz. vehicle registration papers, driving licence of the person driving the vehicle, police FIR and panchnama, vakalatnama signed by you, your written statement as to the facts of the accident. We will also take care of legal liability and costs awarded by the tribunal. However, we will not be able to help you in the following situations: Where your insurance policy is not valid, either because it has expired or because the cheque for your premium has been dishonoured. The person driving the vehicle at the time of the accident was under the influence of drugs or alcohol. The person driving the vehicle at the time of the accident did not hold a valid driving licence to drive the said vehicle. View more",
  },
  {
    Question: "What are the differentwhich can be insured by M&N  ERGO",
    Answer:
      "We can provide both Comprehensive and Liability Only Policies for allmentioned below: Private Car Two Wheelers Commercial Vehicles Goods Carrying Vehicles (GCV) Trailers Passenger Carrying Vehicles (PCV) Miscellaneous and Special Types of Vehicles",
  },
  {
    Question: "How do I renew my Commercial Vehicle Insurance policy",
    Answer:
      "We will send you a renewal notice well in advance of your policy expiry date. You need to confirm acceptance of renewal and send your cheque for the premium to us at our correspondence address. You can also renew your policy through the dealer/agent from where you initially bought your policy.",
  },
  {
    Question:
      "What are the different types of Personal Accident Covers available for drivers and passengers",
    Answer:
      "An owner driver is given Personal Accident Cover up to Rs. 2 lakhs (for cars)/ Rs. 1 lakh (for two-wheelers). This cover can also be extended to paid drivers and persons travelling in the vehicle, on a named and unnamed basis.",
  },
  {
    Question:
      "What are the different types of  Commercial Vehicle Insurance available",
    Answer:
      "There are two types of covers available: Liability Cover Only â€“ This insures you against any legal liability following an accident involving your vehicle. It does not cover any damage to your vehicle.Package Cover â€“ This insures all liabilities, as per the Motor Vehicle Act and damages cause to your vehicle.",
  },
  {
    Question:
      "What are the different types of  Commercial Vehicle Insurance available",
    Answer:
      "There are two types of covers available: Liability Cover Only â€“ This insures you against any legal liability following an accident involving your vehicle. It does not cover any damage to your vehicle.Package Cover â€“ This insures all liabilities, as per the Motor Vehicle Act and damages cause to your vehicle.",
  },
  {
    Question:
      "What are the different types of Personal Accident Covers available for drivers and passengers",
    Answer:
      "An owner driver is given Personal Accident Cover up to Rs. 2 lakhs (for cars)/ Rs. 1 lakh (for two-wheelers). This cover can also be extended to paid drivers and persons travelling in the vehicle, on a named and unnamed basis.",
  },
  {
    Question: "How do I renew my Commercial Vehicle Insurance policy",
    Answer:
      "We will send you a renewal notice well in advance of your policy expiry date. You need to confirm acceptance of renewal and send your cheque for the premium to us at our correspondence address. You can also renew your policy through the dealer/agent from where you initially bought your policy.",
  },
  {
    Question: "What are the differentwhich can be insured by M&N  ERGO",
    Answer:
      "We can provide both Comprehensive and Liability Only Policies for allmentioned below: Private Car Two Wheelers Commercial Vehicles Goods Carrying Vehicles (GCV) Trailers Passenger Carrying Vehicles (PCV) Miscellaneous and Special Types of Vehicles",
  },
  {
    Question:
      "Can M&N  Ergo Student Travel insurance suraksha policy be extended",
    Answer:
      "The extension under the policy shall be provided subject to the following conditions: The original policy period has not expired The sum insured shall not be enhanced There is no claim during the original policy period Declaration of good health shall be provided by the insured Extension premium has to be paid before actual extension is affected The entire policy period along with Extension does not exceed 2 years Please note that extension on a policy can be availed only once during the risk period.",
  },
  {
    Question: "Cab sum assured be extended",
    Answer: "The Sum Insured cannot be increased.",
  },
  {
    Question: "Can the policy be cancelled",
    Answer:
      "The policy may be cancelled via request on Email/Fax. The intimation of cancellation has to reach us within 14 days of policy issuance. If the policy has already incepted, a copy of all 40 pages of the passport needs to be submitted as a proof that the journey has not been undertaken. Cancellation charges of Rs. 250/- shall be applicable and the balance shall be refunded.",
  },
  {
    Question: "Where one can avail the claim form",
    Answer:
      "On registration of a claim, claim form will be sent to you by post, e-mail or fax along with the list of documents required for assessing the claim. The claim form is also available on our website.",
  },
  {
    Question: "What does â€œdeductablesâ€ means",
    Answer:
      "Deductible means the amount of a claim that has to be borne by the insured.",
  },
  {
    Question: "For how many days policy can be extended",
    Answer:
      "The total policy period including extension should not exceed 2 years.",
  },
  {
    Question:
      "How Do I extend my M&N  Ergo Student Travel insurance surakshapolicy",
    Answer:
      "Please send a request mail to [email protected] for extension of policy along with health declaration attached to it. You will receive a response from us with the detailed procedure and the additional premium amount.",
  },
  {
    Question: "When do I have to submit a medical exam",
    Answer:
      "Any insured with an adverse medical history has to submit medical reports irrespective of the trip band.",
  },
  {
    Question: "What is the benefit under Hijack Distress Allowance",
    Answer:
      "If the Common Carrier in which the insured person is abroad is hijacked, the company agrees to pay compensation for every six continuous hours in excess of the deductible.",
  },
  {
    Question: "Is travel insurance mandatory",
    Answer:
      "Travel Insurance is not mandatory in India. However, it is mandatory in the UK and others countries including Austria, Greece, Portugal, Spain, France, Germany, Belgium, Luxembourg and the Netherlands. However, for a safe and peaceful trip, we recommend that you have a travel insurance policy no matter which country you are travelling to.",
  },
  {
    Question: "What are the various M&N  ERGO Travel Insurance policies",
    Answer:
      "M&N  ERGO provides coverage for Single Trip, Multiple Trip, Asia and a Family Floater Plan with various sums insured options to choose from.",
  },
  {
    Question: "What is covered under Delay of Checked Baggage",
    Answer:
      "This will reimburse the insured person on the cost of replacement of articles if the Checked-in Baggage or Personal Documents are delayed or misdirected.",
  },
  {
    Question: "What is covered under the benefit Loss of Checked Baggage",
    Answer:
      "This benefit will reimburse the insured person the cost of replacement of the articles if the Checked-in Baggage or Personal Documents are permanently damaged or lost.",
  },
  {
    Question: "Are ambulance charges covered under a Travel Policy",
    Answer:
      "Emergency Medical Expenses include ambulance service (to and from the hospital).",
  },
  {
    Question: "Can a foreign national be covered under a Travel Policy",
    Answer:
      "A foreign national working in India, with an Indian employer of a multinational company, earning in INR can be covered subject to the verification of a Ration Card and IT verification.",
  },
  {
    Question: "Why do I require Travel Insurance",
    Answer:
      "Travel Insurance provides you and your family medical, financial and other assistance in case of an emergency or untoward circumstances while travelling on an International trip. No matter what the purpose of your travel, business or pleasure, you are safer with Overseas Travel Insurance that will protect you from unfortunate events such as loss or delay in checked-in baggage, loss or passport, a medical emergency or an accident.",
  },
  {
    Question:
      "Will a claim in a Travel Insurance policy be settled on return to India",
    Answer:
      "A claim will be settled once the insured returns to India, expect in the case of hospitalization.",
  },
  {
    Question:
      "Do I have to go through a medical exam for a Travel Insurance policy",
    Answer:
      "No, there is no medical exam required for anyone below the age of 70 years.",
  },
  {
    Question:
      "Can I claim under both Loss of Checked Baggage and Delay of Checked Baggage",
    Answer:
      "No, because if your baggage and/or personal belongings are lost later, then any amount claimed and paid to an insured person under the Baggage Delay Section will be deducted from any payment under the Baggage Loss Section.",
  },
  {
    Question:
      "What are the medical reports that need to be submitted to avail of Travel Insurance",
    Answer:
      "For any insured with an adverse history of: Blood Sugar PP and Fasting ECG Report with tracing Echo Cardiography report USG Whole Abdomen Any insured with any of these needs a doctorâ€™s certificate with all details of past ailments and present medication, if any and a doctorâ€™s certificate stating the insured is fit to travel. View more",
  },
  {
    Question:
      "What does Medical Repatriation and Evacuation cover under Travel Insurance",
    Answer:
      "Emergency Medical Evacuation means the arrangement for transportation required to move an insured to the nearest hospital and Medical Repatriation means the arrangement for transportation required to move an insured to his/her country of residence following an emergency.",
  },
  {
    Question:
      "Can I avail of a cashless facility for hospitalisation under Travel Insurance",
    Answer: "Yes, we extend a cashless facility for hospitalisation.",
  },
  {
    Question: "Is loss of passport covered under Travel Insurance",
    Answer:
      "Yes, loss of passport is covered in the policy. It is covered under the benefit of â€˜Loss of personal documentsâ€™. The assistance provider helps the insured contact the consular authorities and arrange for its replacement in the case of loss of passport.",
  },
  {
    Question: "Can be the Travel Insurance policy be cancelled",
    Answer:
      "The policy may be cancelled via request on email/fax, only if the journey has not commenced subject to premium retention of Rs. 250 (including Service Tax). A copy of the insuredâ€™s passport has to be submitted as proof. Any request for cancellation will be entertained not less than 14 days after the first date of insurance as indicated in the policy schedule.",
  },
  {
    Question: "Where can I get a claim form for Travel Insurance",
    Answer:
      "On registration of a claim, the claim form will be forwarded to you by mail, email or fax along with the intimation for the various documents required. The forms are also available on the website.",
  },
  {
    Question: "Does the Travel Insurance policy cover loss of cash/Credit Card",
    Answer:
      "The company is not liable to pay any benefit in respect of loss of cash, bank or currency notes, cheques, Debit or Credit Cards.",
  },
  {
    Question:
      "Can I be insured for a trip of any duration under the Travel Insurance policy",
    Answer:
      "Yes, our travel plans provide coverage for trips as short as 1 â€“ 4 days.",
  },
  {
    Question: "Does the Travel Insurance policy cover pre-existing diseases",
    Answer:
      "This policy does not cover pre-existing diseases. A pre-existing illness is one the insured is suffering from before buying the policy.",
  },
  {
    Question: "Can a Travel Insurance policy be extended",
    Answer:
      "Extensions are applicable to original policies of 30 days or more and provided the policy is still in force.",
  },
  {
    Question: "Can the Travel Insurance plan coverage period be reduced",
    Answer:
      "No refund is allowed after the start of the journey. No refund is allowed for curtailment of risk.",
  },
  {
    Question:
      "Who do I contact in the case of hospitalization when covered under Travel Insurance",
    Answer:
      "You have to contact the International SOS immediately in the case of hospitalization. They also provide any information to deal with any problem regarding claims.",
  },
  {
    Question: "Who do I contact in the case of hospitalization",
    Answer:
      "You have to contact the International SOS immediately in the case of hospitalization. They also provide any information to deal with any problem regarding claims.",
  },
  {
    Question:
      "Where can I get the list of hospitals extending the cash facility",
    Answer:
      "There is no standard list of hospitals. The insured needs to intimate the International SOS immediately on admission so that the cashless facility may be extended by the assistance provider.",
  },
  {
    Question: "For how many days can the Travel Insurance policy be extended",
    Answer:
      "The policy may be extended for a maximum of 180 days. The total policy period including extension should not exceed 360 days.",
  },
  {
    Question: "What are the eligibility criteria for a Travel Insurance policy",
    Answer:
      "Our Travel Insurance policy is available to people of any age between 6 months and 70 years.",
  },
  {
    Question: "Who do I contact for a claim on the Travel Insurance policy",
    Answer:
      "In the event of a covered emergency and to register claims call our International SOS Provider, ERV â€“ 24 hour helpline centre and quote the Policy Holdersâ€™ Name, the Policy Number, Insurance Company, Passport Number when seeking assistance within 24 hours. The contact details are: Email: [email protected] Toll Free No: 1866 202 4700 (Only for USA & Canada) Land line: 011 - 41898872 (for other countries) Europe (for 28 countries in Europe): UFIN No. â€“ 800 8000 8400 Fax: 011 - 41898801 View more",
  },
  {
    Question:
      "Is emergency financial assistance provided under Travel Insurance",
    Answer:
      "A financial emergency is a situation where the insured loses all or a substantial amount of his/her travel funds due to theft, robbery, mugging or dacoity. Under this benefit the insured is provided with Emergency Cash Assistance up to the limit stated in the Policy. This assistance is provided by the company through a service provider.",
  },
  {
    Question: "Which Mutual Funds are ISA enabled",
    Answer:
      "List of Mutual Funds ISA AIG Mutual Fund OD Addendum Fact Sheet Axis Mutual Fund OD Addendum Fact Sheet Bharti AXA Mutual Fund OD Addendum Fact Sheet Birla Mutual Fund OD Addendum Fact Sheet Canara Robeco Mutual Fund Fund OD Addendum Fact Sheet Deutsche Mutual Fund OD Addendum Fact Sheet DSP BlackRock Mutual Fund OD Addendum Fact Sheet Edelweiss Mutual Fund OD Addendum Fact Sheet Fidelity Mutual Fund OD Addendum Fact Sheet Franklin Templeton Mutual Fund OD Addendum Fact Sheet M&N  Mutual Fund OD Addendum Fact Sheet HSBC Mutual Fund OD Addendum Fact Sheet ICICI Prudential Mutual fund OD Addendum Fact Sheet IDFC Mutual Fund OD Addendum Fact Sheet ING Mutual Fund OD Addendum Fact Sheet JM Mutual Fund OD Addendum Fact Sheet JP Morgan Mutual Fund OD Addendum Fact Sheet Kotak Mutual Fund OD Addendum Fact Sheet L & T Mutual Fund OD Addendum Fact Sheet Mirae Asset OD Addendum Fact Sheet Morgan Stanley Mutual Fund OD Addendum Fact Sheet Reliance Mutual Fund OD Addendum Fact Sheet Religare Mutual Fund OD Addendum Fact Sheet SBI Mutual Fund OD Addendum Fact Sheet Sundaram Mutual Fund OD Addendum Fact Sheet TATA Mutual fund OD Addendum Fact Sheet UTI Mutual Fund OD Addendum Fact Sheet BNP Paribas Mutual Fund OD Addendum Fact Sheet Pramerica Mutual Fund OD Addendum Fact Sheet View more",
  },
  {
    Question:
      "How can I close my Online Mutual Fund Account as well as the Bank account linked with it",
    Answer:
      "To close your Online Mutual Fund account as well as the linked Bank account, you will need to redeem or transfer all your Online Mutual Fund holdings to physical mode. Once this is done, the Online Mutual Funds Account can be closed. After closure of the Online Mutual Funds Account, the linked bank account can be closed. Please note that both the above options require a written request in the attached format. Please submit the form, duly filled at your account branch. Kindly visit the following URL to access information for the complete address and contact details of our Branches as well as our PhoneBanking numbers: PhoneBanking The above URL gives you access to the various contact points to get in touch with us through the Customer Center. View more",
  },
  {
    Question:
      "I am an NRI residing outside India. How do I get myself KYC Compliant",
    Answer:
      "The soft copy of these KYC forms will be made available on the website of all mutual funds, AMFI and Central Depository Services (India) Limited (CDSL). You may also approach your distributor for a form. The same duly completed along with the necessary attested documents can be submitted at the PoS or mailed to your representative or distributor who can complete the KYC formalities for you.",
  },
  {
    Question:
      "If I change my address/Bank account /Nomination, what do I need to do",
    Answer:
      "For all changes in account profile, or bank account linked for purchases or redemptions, contact the nearest branch and fill in a form to get the change done.",
  },
  {
    Question:
      "In case of existing investors, when and how will the KYC norms be introduced",
    Answer:
      "KYC norms are applicable to all investors. It is in the interest of all investors to obtain KYC Acknowledgement and submit it to the Mutual Fund to avoid any inconvenience in the future.",
  },
  {
    Question: "How do I buy Mutual Funds over the Net",
    Answer: "To invest through NetBanking log onto www.M&N bank.com.",
  },
  {
    Question: "How can I use Mobile Banking to manage my Mutual Funds account",
    Answer:
      "We request you to follow the steps mentioned below to access your Online Mutual Fund details: Log on to the M&N  Bank NetBanking Site - Using your Customer ID and Password (Please use the NetBanking password) Click on the Mutual Fund Tab - 6th tab on the top right corner The Mutual Fund account number generated for you will reflect on the screen On the Left Hand side of the screen, various options like New Fund Offer, Purchase, Redeem, Switch, etc. are available You can click on any of the options and the relevant screen will be available to execute the desired transactions Your Mutual Fund Account Number will be available in a drop down. You can select your Mutual Fund account number and start transacting. View more",
  },
  {
    Question: "What is the process of application for Rights Issue under ASBA",
    Answer:
      "An investor, who has received the common application form from the registrar of the company floating the rights issue, has the option of applying through ASBA at any designated branch of the Bank. Rights issue is not available in NetBanking facility.",
  },
  {
    Question: "What about a Minor becoming a Major",
    Answer:
      "When a minor attaining majority ( completes 18 years of age), he/she must be KYC Compliant and have a KYC Acknowledgement of their own. The same should be informed to the Mutual Fund where he/she holds an investment, along with other details such as the bank details, signature, etc. as per the present requirements of such Mutual Fund.",
  },
  {
    Question: "How can I Buy/Sell Mutual Funds",
    Answer:
      "Once you are registered for an Investment Services Account you can start placing orders to buy/sell Mutual Funds through NetBanking services offered by M&N  Bank. Investing through Net Banking: You will have to login with your Customer ID and Internet Password to place orders for Mutual Funds on the website. You can view your Mutual Fund Holdings with their present market values on our website The cut-off time on the NetBanking Channel for the Same Day NAV for Mutual Funds transactions is 2 PM.",
  },
  {
    Question:
      "How can I change the default Bank Account that is linked to my M&N  Bank Online Mutual Funds Account",
    Answer:
      "We understand that you wish to change the Bank Account linked to your Online Mutual Funds Account (Applicable where you want to continue with the Online Mutual Funds Account but want to close only the linked Bank Account) For this, you must provide an alternate Bank Account number under the same Customer ID (First Holder) with which you are registered for online Mutual Funds. Once the change of the Bank Account is effected, the Online Mutual Fund Account will be de-linked from the old bank account and it will be closed. Please note that both the options require a written request in the attached format. Please submit the form duly filled at your account branch.",
  },
  {
    Question: "What is the procedure to close my Investment Service account",
    Answer:
      "You will need to submit the Investment Service account closure form to your nearest branch for further processing. Kindly visit the following URL to access information for the complete address and contact details of our Branches as well as our PhoneBanking numbers.",
  },
  {
    Question: "How much am I charged for this service",
    Answer:
      "A quarterly maintenance charge is applicable to hold an Investment Services Account. We request you to contact your RM / Personal Banker or nearest M&N  Bank Branch for details.",
  },
  {
    Question: "Can I cancel a transaction",
    Answer: "No cancellations are allowed once transactions are placed.",
  },
  {
    Question:
      "Is the KYC acknowledgement a separate form or is it a part of the Mutual Fund application. Which of the forms require being time-stamped",
    Answer:
      "KYC Acknowledgement is a separate form. Time stamping is not required on the KYC Acknowledgement.",
  },
  {
    Question:
      "How do I transact in Mutuals Fund after completing the KYC process",
    Answer:
      "You must attach your KYC Verified Print Out along with the Investment Application Form(s) while investing for the first time in a Mutual Fund. Application Forms not accompanied by a KYC print out are liable to be rejected by the Mutual Fund.",
  },
  {
    Question: "Can I sell/redeem schemes bought offline through online",
    Answer:
      "No, only those schemes bought through the online mode can be sold /redeemed through this service.",
  },
  {
    Question: "How do I buy Mutual Fund over the Net",
    Answer: "To invest through NetBanking Log onto www.M&N bank.com",
  },
  {
    Question: "How can I register for this service",
    Answer:
      "To register for this service, fill in an Investment Services account opening form that is available at any M&N  Bank Branch, or contact your Relationship Manager. Fill in all the details in the form, with the requisite documents, along with details of the bank account that has to be linked with your Investment Services account. The Account Opening Application Form has to be signed by the all the Bank Account holders. Submit this form to your RM or nearest branch.",
  },
  {
    Question:
      "As an NRI, can I buy Mutual Fund Units in the Portfolio Investment Schemes (PIS) account",
    Answer:
      "No, you cannot purchase Mutual Fund units in the PIS account. You can only do so in the Non-PIS account.",
  },
  {
    Question:
      "When will I be able to view the unit holdings in my account from the time of purchase",
    Answer:
      "The unit holdings will be reflected within T+2 days (T being the transaction day).",
  },
  {
    Question:
      "Are there any special requirements for an NRI to invest in Mutual Funds",
    Answer:
      "Yes. In addition to the certified true copy of the passport, a certified true copy of the overseas address and permanent address will also be required. If any of the documents (including attestations/certifications) towards proof of identity or address is in a foreign language, they have to be translated into English for submission. The documents can be attested by the Consulate office or overseas branches of scheduled Commercial Banks registered in India.",
  },
  {
    Question: "Will I get an online confirmation of my transactions",
    Answer:
      "An order once placed will be confirmed immediately. The confirmation of units bought or sold will be done by the AMC / Registrar only on the next working day.",
  },
  {
    Question:
      "After the  First purchase, can I invest in the same AMC again on the same day",
    Answer:
      "After your first purchase you will not be permitted to transact for a period of 3 to 4 working days, depending on the processing time of the Mutual Funds' Registrar. After you place an investment order in any Mutual Fund for the first time a Folio Number needs to be generated for that particular fund. Until the Folio number is generated you will not be allowed to place any further orders for that particular Mutual Fund. After the Folio Number is generated you can place any number of orders in any schemes of the Mutual Fund.",
  },
  {
    Question: "What is a KYC Application Form",
    Answer:
      "A KYC Application Form has been designed for Individual and Non-Individual Investors separately. These forms are available on the Mutual Funds website, AMFI and Central Depository Services (India) Limited (CDSL). You may also approach your distributor for a form. It is important to read the instructions printed on the KYC Application Form while filling the form.",
  },
  {
    Question: "What if I have already obtained a MIN",
    Answer:
      "Scenario 1 If the MIN was obtained by submitting your PAN, the MIN Acknowledgement can be enclosed along with the Investment Application Form(s)/Transaction Slip(s) while investing for the first time in a Mutual Fund, as the PAN number will be stated on the said acknowledgement. Scenario 2 If the MIN was obtained without submitting your PAN but with other proof of identity documents, you need to carry a copy of your PAN card, and your original PAN card, for submission at the PoS. For such cases, CVL will send out a communication to you requesting you to submit your PAN for KYC compliance.",
  },
  {
    Question: "Who can open an Investment Services account",
    Answer:
      "Any Individual or HUF, who has an M&N  Bank Savings Account and is KYC compliant, can register for a Mutual Fund Investment Services Account. NRI customers who are KYC compliant and have a Savings account can also avail of this service. The Savings Bank account status has to be single or either/Survivor.",
  },
  {
    Question: "What are the advantages of investing in SIP",
    Answer:
      "A large part of the success of Mutual Funds is also the advantages they offer in terms of diversification, professional management and liquidity. Power of Compounding: The longer the period of your investment, the more wealth you can accumulate because of the power of compounding. Thatâ€™s why it makes sense to start investing early. Quite simply, the incremental returns that you earn on your principal, plus accrued gains, is compounded. Rupee Cost Averaging: Most investors want to buy stocks when the prices are low and sell them when the prices are high. But timing the market is time consuming and risky. A more successful investment strategy is to adopt a method called Rupee Cost Averaging. By investing in an SIP you end up buying more units when the price is low and less when the price is high. To set up an SIP, walk in to your nearest M&N  Bank branch or invest through an Investment Services Account. View more",
  },
  {
    Question:
      "What happens if I have multiple folios/accounts with a Mutual Fund",
    Answer:
      "You can inform the Mutual Fund to update the KYC Acknowledgement against all the folios/accounts you have with it. However, each of the holders in these folios/accounts should be KYC Compliant.",
  },
  {
    Question: "What if I forget my customer ID/ IPIN number",
    Answer:
      "Your ID is available in your welcome letter or can be obtained from the branch. Your IPIN (NetBanking password) can be re-generated by downloading a 'Password Regeneration Request' from the M&N  bank website and submitting it to the branch. The new IPIN (NetBanking password) will be sent to you by post.",
  },
  {
    Question: "What are the schemes available to the customers",
    Answer:
      "Only select schemes of select AMC's are currently available for transactions done through NetBanking. The list of the schemes is available on the M&N  Bank's website.",
  },
  {
    Question: "Do I need to inform about my change of Income status",
    Answer:
      "Yes. If you find an increased/decrease in your income, which will effectively change the income bracket that you have declared in the KYC Application form, you should apply to any convenient PoS in the specified form. No proof is needed.",
  },
  {
    Question: "What are the KYC requirements for a Mutual Fund Investor",
    Answer:
      "Individual investors will have to produce a Proof of identity (Photo PAN card copy or PAN card copy and copy of the passport, driving license, etc.) and Proof of Address (any of the valid documents listed in section B of the KYC Application Form for Individuals). Non-Individual Investors will have to produce certain documents pertaining to its constitution/registration to fulfill the KYC process. A list of Mandatory Certified Documents to be submitted can be found in section C of the KYC application form for Non-Individual Investors.",
  },
  {
    Question:
      "How do I convert my existing portfolio of Mutual Fund units to an Online Mutual Fund portfolio",
    Answer: "Currently, this facility is not available.",
  },
  {
    Question:
      "Is there any special requirement for a PIO (Person of Indian Origin)",
    Answer:
      "The requirements applicable to an NRI will also apply to a PIO. However additionally, persons of Indian origin will have to submit a certified true copy of their PIO Card.",
  },
  {
    Question: "Should I visit a PoS personally to obtain KYC Compliance",
    Answer:
      "No. If you are not in a position to visit a PoS personally, the KYC Application Form along with the necessary documents (including originals if the copies are not attested) can be sent through the distributor or representative who can arrange to complete the KYC process and obtain the KYC Acknowledgement through any PoS.",
  },
  {
    Question: "What are the consequences of KYC cancellation/rejection",
    Answer:
      "In the event of any KYC Application Form being found deficient for lack of information/insufficiency of mandatory documentation, further investments will not be permitted.",
  },
  {
    Question:
      "I do not have an account with M&N  Bank, but would like to invest in Mutual Funds. What do I do",
    Answer:
      "You can contact any M&N  bank Branch to open a Bank account and once your Savings account is activated. You can fill in the application form for an Investment Services account along with a KYC form and the requisite documents, if you are not KYC Compliant, and send them to your Relationship Manager/Personal Banker or nearest branch. After you receive the welcome letter, you can start investing in Mutual Funds online.",
  },
  {
    Question:
      "Who do I inform about change of name/address/status/signature, etc.",
    Answer:
      "You should intimate your change of name/address/status/signature, etc. to any convenient PoS. You need to quote your PAN and submit proof (in case of a new address). You should provide at least 10 days for the change of address to take effect with all the Mutual Funds where you have investments. Please note that you should not write to the Mutual Fund or its Registrar for the change of address (unless as a designated PoS). The specified form can be obtained from the AMFI/Mutual Fund/CDSL website. All details of the holders in the Mutual Fund records will be replaced by the address details available in the CVL record.",
  },
  {
    Question: "How is online investing more convenient",
    Answer:
      "1. No filling of multiple application forms 2. Only a one time registration agreement to be signed and submitted 3. Paperless method to invest in Mutual Funds 4. No application forms, No Cheques, No Documents required for any transaction 5. Direct Credits to your bank account for Redemptions and Dividend proceeds 6. View online Mutual Fund holdings on NetBanking",
  },
  {
    Question: "Is there a minimum transaction amount for each scheme",
    Answer:
      "As decided by the fund, there is a minimum transaction amount indicated against each scheme. You will get to see the minimum transaction amount in the Purchase screen after you select the Name of the scheme from the drop down menu.",
  },
  {
    Question: "Is there a charge I need to pay to get myself KYC Compliant",
    Answer: "Currently, KYC is done for free of cost.",
  },
  {
    Question: "Does the KYC Acknowledgement have an expiry date",
    Answer:
      "No. Once the KYC Acknowledgement is obtained and informed to a Mutual Fund, it will be registered against the folio and quoted in all future account statements. The same will exist in perpetuity, unless cancelled by CVL.",
  },
  {
    Question: "Why should I invest in SIP's right now",
    Answer:
      "The current scenario in the equity market is dominated by negative sentiment, which has led to fundamentals being ignored. This scenario has created volatility in the markets and uncertainty of future outlook. The prudent way to invest in this scenario is to benefit from the volatility and this can be done by investing through SIPâ€™s. A monthly SIP helps in averaging out the cost of purchase and benefit from the power of compounding. It also helps in creating wealth over a longer time period. The current investment scenario is still dominated by negative sentiment. This creates volatility in the markets due to confused minds of the investors. Such volatility makes it difficult to capture the market movements and most people end up losing money with the intention of timing the markets. Also investing a lump sum in one shot might lead you to miss out on market opportunities. The tool to beat such a scenario is investing through a Systematic Investment Plan.",
  },
  {
    Question: "From what date is it mandatory for me to be KYC Compliant",
    Answer:
      "With effect from 01 January 2011, if you want to invest in Mutual Funds you are required to complete the KYC process irrespective of the amount you invest.",
  },
  {
    Question:
      "Is there any transaction charge for placing the transaction offline or online",
    Answer:
      "Yes, there is transaction charge for placing a transaction offline or online is as follows: With effect from 1st November 2011, M&N  Bank has opted-in for transaction charge as per the SEBI circular no. Cir/ IMD/ DF/13/ 2011 dated August 22, 2011. To know more Click here. View more",
  },
  {
    Question: "Can I transact anytime during the day",
    Answer:
      "Yes, you can transact at any time of the day. However, in order to get the NAV of the same day you have to transact before the cut-off time of the scheme. If you place an order after the said cut-off time, you will be eligible for the NAV of the next day.",
  },
  {
    Question: "Can I transact on a holiday",
    Answer:
      "Yes, you can place your request even on a holiday. However, the request will be processed on the next business day and the respective NAV will be applicable as per the Mutual Fund's offer document.",
  },
  {
    Question: "How will I receive the redemption amount",
    Answer:
      "You can receive redemption amounts through a Direct Credit in your Savings Bank Account mentioned in Investment Services Account opening.",
  },
  {
    Question: "How will I receive the Dividend Pay amount",
    Answer:
      "You will receive the Dividend Pay amount through a Direct Credit by the AMC in your Savings Bank Account mentioned in Investment Services Account opening form.",
  },
  {
    Question: "How do I redeem Mutual Fund units over the Net",
    Answer:
      "Only Mutual Funds that are bought (purchased) through the Investment Services Account can be redeemed through this service. On NetBanking: To redeem Mutual Fund you have to login to the website with your Customer ID and IPIN and go to the Mutual Funds Tab. Click on the redemption link and then select the Investment Services Account No. from the drop down and the Mutual Fund that you want to redeem. Select the Scheme name and the Amount or number of units you want to redeem in the next screen keeping in mind the minimum transaction amount. You can choose to redeem all or part of your units by specifying the number of units and amount. The transaction will be processed and the redemption proceeds will be directly credited into your bank account. View more",
  },
  {
    Question:
      "Whom do I inform about change of name/address/status/signature, etc.",
    Answer:
      "You should intimate your change of name/address/status/signature, etc. to any convenient PoS. You need to quote your PAN and submit proof (in case of a new address). You should provide at least 10 days for the change of address to take effect with all the Mutual Funds with whom you are invested. Please note that you should not write to the Mutual Fund or its Registrar for the change of address (unless as a designated PoS). The specified form can be obtained from the AMFI/Mutual Fund/CDSL website. All details of the holders in the Mutual Fund records will be replaced by the address details available in the CVL record.",
  },
  {
    Question:
      "Can an investor give a COA (Change of Address) along with a redemption request",
    Answer:
      "Redemption request is given to the investor service centre while the change of address (if KYC process has been previously completed) has to be given to a KRA. The change of address will be effected by CVL and informed to the Mutual Funds. As it will take 10 days for this process to be completed, the redemption transaction accompanied by a change of address request, is likely to be processed without effecting the change of address request.",
  },
  {
    Question: "How can I update my E-mail ID in my Online Mutual Fund Account",
    Answer:
      "If your E-mail ID is not updated in your Online Mutual Fund account, we request you get in touch with the nearest branch to enable us to register you for E-mail Statements of your Mutual Funds. On receipt of the form, your e-mail ID will be updated with the respective AMC within 15 working days. You will receive the holding statements on your e-mail and mailing address simultaneously after registration.",
  },
  {
    Question: "What is FATCA/CRS/KYC",
    Answer:
      "FATCA : In January 2013, the United States of Americaâ€™s (U.S) treasury released the final FATCA Regulations. FATCA requires U.S based financial institutions (FI) as well as foreign financial institutions to identify their U.S accounts and report them periodically to the U.S IRS (Internal Revenue Service) or appropriate governmental authority, in case of Inter-Governmental Agreement (IGA). Non-compliance can result in adverse consequences, including a penal U.S withholding tax, for non-U.S. entities or penalties under the local inter-governmental . CRS : To combat problem of offshore tax evasion, the G20 and OECD (Organisation of Economic Co-operation and Development) countries developed a Common Reporting Standard (CRS).CRS requires financial institutions to collect and report information to their tax authorities about account holders resident in other countries. India has signed CRS agreement on 3rd June 2015. UBO : As per SEBI Master Circular No. CIR/ISD/AML/3/2010 dated December 31, 2010 regarding Client Due Diligence policy, related circulars on anti-money laundering and SEBI circular No. IR/MIRSD/2/2013 dated January 24, 2013, non individuals and trusts are required to provide details of controlling persons [CP] / ultimate beneficiary owner [UBO] and submit appropriate proof of identity of such CPs/ UBOs. The beneficial owner has been defined in the circular as the natural person or persons, who ultimately own, control or influence a client and/or persons on whose behalf a transaction is being conducted, and includes a person who exercises ultimate effective control over a legal person or arrangement. As per regulatory requirement, individual investors and joint holders are required to provide extended KYC details. In absence of the same, transactions may get rejected by AMC/RTA. Joint holders of ISA ( Mutual Fund) accounts may update the same through Update Extended KYC option in NetBanking Request section of Accounts tab. Non-individual customers & HUFs may submit extended KYC details to Branches /Relationship manager. In absence of the same, transactions may get rejected by AMC/RTA",
  },
  {
    Question: "What Is KYC",
    Answer:
      "KYC stands for 'Know your Client', a term commonly used for the Client Identification Process. SEBI has prescribed certain requirements relating to KYC norms for Financial Institutions and Financial Intermediaries, including Mutual Funds, to 'know' their clients. This is in the form of verification of identity and address, financial status, occupation and other personal information. An applicant must be KYC compliant to invest with any SEBI registered Mutual Fund.",
  },
  {
    Question:
      "What are the cut-off timings for the Investment Services Account",
    Answer:
      "Cut-off time for same day NAV is 1400 hours i.e. 2.00 p.m. (Indian Standard Time). All instructions received on transaction day before the cut-off time will be eligible for same day's NAV (except Saturdays, Sundays and Holidays). For transactions received post cut-off time, NAV applicable will be as on next working day. In case of Liquid Scheme, NAV is being computed as mentioned below: Cut-off time for Historic NAV is 1230 hours i.e. 12.30 p.m. (Indian Standard Time). All instructions received on transaction day before the cut-off time will be eligible for Historic NAV (except Saturdays, Sundays and Holidays). Cut-off time for same day NAV is 1400 hours i.e. 2.00 p.m. (Indian Standard Time). All instructions received on transaction day after 12.30pm and before the cut-off time ie 2.00pm will be eligible for same day's NAV (except Friday ,Saturdays, Sundays and Holidays). In case of Liquid Scheme transactions done after 1400 hours i.e. 2.00 p.m. (Indian Standard Time) cut-off on Thursday but prior to 1230 hours i.e. 12.30 p.m. (Indian Standard Time) cut-off of time of Friday, the NAV for Thursday would be applicable . In case of Liquid Scheme transactions done after 1230 hours i.e. 12.30 p.m. (Indian Standard Time) on friday but prior to 1400 hours i.e. 2.00 p.m. (Indian Standard Time) cut-off of time of Friday, the NAV for Sunday would be applicable as per AMC rules for NAV applicability (NAV for next business day - 1 day will be applicable). In case of Liquid Scheme transactions done after 1400 hours i.e. 2.00 p.m. (Indian Standard Time) cut-off on Friday or transactions done on any holiday, Saturday or Sunday, the applicable NAV will be of the next declared NAV from AMC end. In case of Liquid Scheme transactions done after 1230 hours i.e. 12.30 p.m. (Indian Standard Time) on a day prior to a non working day, the applicable NAV will be of the holiday. (In case of consequent holidays the last holiday NAV is taken as the Holiday NAV). We agree and acknowledge that any instruction given or purported to be given by me/us before the cut off time as may be intimated by M&N  Bank to me/us from time to time, will be processed on the same day. Any instructions received after the prescribed cut off time will be processed on the next working day. We acknowledge that any transaction request falling due on a holiday will be processed on the next business day and the respective NAV will be applicable as per the Mutual Fund's offer document. View more",
  },
  {
    Question: "How can I open an Online Mutual Fund Account with M&N  Bank",
    Answer:
      "To open an Online Mutual Fund account, please fill in an Investment Services Account opening form that is available in any M&N  Bank Branch. You can also download the Investment Services Account opening form from www.M&N bank.com > Forms Centre (top right corner). The form is also attached below. Once it is duly filled, you need to provide your KYC confirmation / verification (for all applicants) from below websites https://camskra.com/ https://kra.ndml.in/ www.cvlkra.com Submit the above documents to your M&N  Bank branch. For a comprehensive list of branches, kindly visit our site www.M&N bank.com. Click on Find your nearest on the home page and select Branch. View more",
  },
  {
    Question:
      "Can I cancel/ modify my bid placed under ASBA during the bidding period",
    Answer:
      "Yes, you can place a cancellation request or modify your order anytime during the bidding period. After successfully processing your cancellation request, the money will be unblocked in your bank account. For more information visit www.M&N sec.com or get in touch through email on",
  },
  {
    Question: "What products can I trade in using my trading account",
    Answer:
      "You can trade in Equity & Derivatives, IPOs, NCDs and Infrastructure Bonds. Click here to know more.",
  },
  {
    Question: "I have sent in my application, what happens next",
    Answer:
      "Your application will be processed and you will be informed once your application is accepted and all the required accounts are set up. In case your application is not processed because of lack of some details, our representative will contact you by mail.",
  },
  {
    Question: "What is ASBA option while applying for an IPO",
    Answer:
      "ASBA means Applications Supported by Blocked Amount. ASBA is an application containing an authorization to block the application money in the bank account, for subscribing to an issue.",
  },
  {
    Question: "Who can open a Securities Trading account with M&N  securities",
    Answer:
      "Any Indian resident/Non-resident individual (not US-based) or Indian corporate can register with M&N  Securities Ltd. to trade in securities. Currently, overseas corporate bodies (OCBs) cannot open an account with M&N  Securities. To become a registered user of M&N  Securities, you will have to first open a Savings/Current account and Demat account with M&N  Bank.",
  },
  {
    Question:
      "Which are the various channels through which I can trade or invest",
    Answer:
      "You can trade through multiple channels i.e. Online trading, Trade on Mobile, Low Bandwidth Sites (LITS), Call â€˜N Trade.",
  },
  {
    Question: "Can I withdraw the amount blocked for ASBA bid application",
    Answer:
      "No. The blocked amount cannot be withdrawn. Such amount will remain blocked in your linked bank account till the allotment is completed.",
  },
  {
    Question:
      "What do I need to submit to place an IPO/NCD order through my M&N  Securities Trading Account",
    Answer:
      "Once you are registered with M&N  securities, you can successfully place an IPO/NCD/ Infrastructure Bonds order online; or Call â€˜N trade. No filling of any form or any documentation is required if you are a registered customer.",
  },
  {
    Question:
      "Who can trade in derivatives with an M&N  Securities Trading Account",
    Answer:
      "Trading in Derivatives will be available only to those customers who have submitted their financial documents or income proof and signed the necessary agreements. For more information click here. For more information visit www.M&N sec.com",
  },
  {
    Question:
      "What is the difference between the Non-ASBA IPO process and the ASBA IPO process",
    Answer:
      "In the Non-ASBA IPO process, the bid amount (application money) is debited from the bank account once the bid application is successfully placed with M&N  securities. Under the ASBA IPO process, the amount is not debited from your bank account until successful allotment. Until such allotment, the amount will remain blocked in your bank account.",
  },
  {
    Question:
      "Who can trade in derivatives with an M&N  Securities Trading Account",
    Answer:
      "Trading in Derivatives will be available only to those customers who have submitted their financial documents or Income proof and signed the necessary agreements.",
  },
  {
    Question:
      "What are the call charges applicable if I use the Call â€˜N Trade facility to trade in securities",
    Answer:
      "The Call â€˜N Trade facility is free of charge. You can place orders over the phone any number of times.",
  },
  {
    Question:
      "What are the call charges for offline customers of an M&N  Securities Trading Account",
    Answer:
      "The Call â€˜N Trade facility is free of charge. Customer can place orders over the phone multiple times.",
  },
  {
    Question:
      "How many bank and depository accounts can I link to a trading account",
    Answer:
      "You can link up to five M&N  Bank Saving Bank accounts and five M&N  Bank Demat accounts to your trading account.",
  },
  {
    Question:
      "What do I need to submit to place an IPO/NCD order with my M&N  Securities Trading Account",
    Answer:
      "Once you are registered with M&N  securities, you can successfully place an IPO/NCD order online or Call â€˜N trade. No filling of any form or any documentation is required for a registered customer.",
  },
  {
    Question: "How do I know my application has been accepted",
    Answer:
      "You can check your account opening status on www.M&N sec.com on the footer page of the homepage section page under the Application status.",
  },
  {
    Question:
      "Can I cancel or withdraw my IPO application (or bid) submitted using ASBA",
    Answer:
      "Yes, you can place a withdrawal request at any time during the bidding period. Any request for bid withdrawal should be made during banking hours and by 2 PM of the issue closure date. The request will be subject to acceptance by the Stock Exchange, after which the application amount in your Account will be unblocked. Once withdrawn, the blocked amount will be available in 1 working day.",
  },
  {
    Question: "Can I revise the bid",
    Answer:
      "Yes, you can revise your bid under the ASBA facility. In case of upward revision of bid, additional lien will be marked to the extent of the incremental amount. However, in case of downward revision, differential money blocked earlier will not be released. Such amount, if any, will be released after allotment.",
  },
  {
    Question:
      "How many ASBA applications can be made by blocking a single Bank Account",
    Answer:
      "As per the SEBI Regulations, under ASBA mode, not more than 5 applications can be made from a single Bank Account for a particular IPO.",
  },
  {
    Question:
      "What is the difference between the Non-ASBA IPO process and the ASBA process",
    Answer:
      "In the non-ASBA IPO process, the bid amount (application money) is debited from the Bank account once the bid application is successfully placed. Under the ASBA process, the amount is not debited from your Bank account until successful allotment. Until such allotment, the amount will remain blocked in your Bank account.",
  },
  {
    Question: "Who can apply for ASBA",
    Answer:
      "The following investors are eligible to apply through ASBA: In public issues: Investor from any of the approved category eligible to apply in IPO as per SEBI guidelines. Investor who has a Savings Account or Current Account with M&N  Bank Investor who has a Demat Cccount with any DP along with a valid Permanent Account Number (PAN). Investor has sufficient clear credit balance in his/her Savings or Current account (NOT including overdraft limit) In rights issues: Any shareholders of the issuer company, as on the record date, provided he/ she: holds shares in dematerialised form and has applied for entitlements and /or additional shares in the issue in dematerialised form; has not renounced his/ her entitlements in full or in part; is not a renouncee to the Issue; is from any approved category eligible to apply in IPO as per SEBI guidelines. has a Savings Account or Current Account with M&N  Bank has a Demat account with any DP along with a valid Permanent Account Number (PAN). has sufficient clear credit balance in his/her Savings or Current account (NOT including overdraft limit) View more",
  },
  {
    Question:
      "If I made an application through ASBA and money in my Savings Account is blocked, will I get interest for that period",
    Answer:
      "Yes, interest will be payable on the blocked amount as per RBI guidelines.",
  },
  {
    Question:
      "Is it possible to bid for an IPO under ASBA as well as under non-ASBA",
    Answer:
      "No, it isn't. Only one application per IPO is allowed, either through ASBA or non-ASBA. Multiple applications are liable to be rejected because the same PAN Card cannot be used for more than one application.",
  },
  {
    Question:
      "What is the time limit to submit the form at a designated M&N  Bank branch",
    Answer:
      "The bidding time will be the same for ASBA and non-ASBA applications. However, the application needs to be submitted to the designated branch during banking hours and before 1 PM on issue closure date.",
  },
  {
    Question: "Can I still approach my broker to apply for an IPO",
    Answer: "Yes, you can approach your broker to apply for an IPO.",
  },
  {
    Question: "Can I bid at multiple rates under ASBA",
    Answer: "Yes, you can place three bids under ASBA.",
  },
  {
    Question: "When will the Bank lock money in my Account for ASBA payments",
    Answer:
      "The Bank will need the money in your account at the time of placing the bid for IPO shares through the ASBA payment option. SEBI has clearly instructed Banks not to accept IPO applications before blocking the bidding amount (for ASBA process). The amount will remain locked until the registrar / stock exchange requests the Bank to release the funds, either if shares are not allotted to you, your IPO application is rejected or you withdraw your IPO application.",
  },
  {
    Question: "What is ASBA",
    Answer:
      "ASBA means 'Application Supported by Blocked Amount' as defined in clause (d) of sub Regulation (1) of regulation 2 of the SEBI (Issue of Capital and Disclosure Requirements) Regulations, 2009. ASBA is an application containing an authorization to block the application money in the Bank account for subscribing to an IPO/FPO or Rights Issue.",
  },
  {
    Question: "What happens when the issue fails/is withdrawn",
    Answer:
      "In case the issue fails/ is withdrawn, M&N  Bank shall unblock the application money from the Bank Accounts upon receiving instructions from the Registrar.",
  },
  {
    Question: "What will be the benefit to me if I apply for an IPO under ASBA",
    Answer:
      "If you apply using the ASBA form you will get the following benefits: No loss of interest, since the application amount is not debited to the Savings Account on application The amount for which no shares have been allotted is available immediately on completion of allotment process. There is no need to wait for the amount to be refunded by the company Since the amount is available in the Account, it is considered for calculation of the Average Quarterly Balance (AQB) Simplified form filling process and you can apply online through NetBanking View more",
  },
  {
    Question: "If I am a NRE/NRO customer, can I apply for ASBA",
    Answer:
      "Yes, you can apply through a physical application; however, you CANNOT currently apply through ASBA on NetBanking.",
  },
  {
    Question:
      "Is priority in allotment given to applications bid under ASBA facility",
    Answer:
      "There is no differentiation between the allotment of shares applied through ASBA or Non- ASBA.",
  },
  {
    Question:
      "Is it possible to withdraw the amount blocked for IPO applications through ASBA",
    Answer:
      "No. The blocked amount cannot be withdrawn. However, the same will lie in your operative Bank Account till the allotment and will earn interest as per Account terms applicable.",
  },
  {
    Question:
      "Will the bank charge any additional fees if I choose the ASBA Payment Option",
    Answer: "Currently this value added service is provided free of cost.",
  },
  {
    Question:
      "Is any additional documentation required for availing the ASBA facility",
    Answer:
      "No further physical documentation is required to avail of this facility.",
  },
  {
    Question:
      "If I want to apply physically for an IPO through ASBA, what should I do",
    Answer:
      "You have to visit the nearest designated M&N  Bank branch to apply in an IPO through ASBA. It is not essential that you hold an Account in that branch, you should hold an Account with the Bank though. Click here for List of Designated Branches Fill in the no. of shares, price, Account number, PAN, Demat Account details, etc. in the specially designed ASBA application form of the IPO you wish to apply for and submit it at the branch. You will receive the acknowledgement from the branch along with the Unique Reference Number. Subsequently, the Bank will block the amount on your highest bid in your specified Bank Account for the IPO as applied. In case of insufficient funds in your Bank Account, the bank will reject the IPO application. After the allotment has been approved, the Bank will debit your Account for the allotment money and will release the block on the remaining amount in the Account. Subsequent to this, the shares will be credited to your Demat Account. You can now download the application forms from the NSE/BSE website. You can also register your Bank/Demat details to avoid filing the same for every issue. Click here to download the form through BSE Click here to download the form through NSE View more",
  },
  {
    Question:
      "I do not have a Bank account with M&N  Bank. Can I still apply through your Bank for IPOs using M&N  Bank`s ASBA process",
    Answer:
      "To apply for an IPO from M&N  Bank using ASBA, you should have an account with the Bank. However, it is not compulsory for you to have a Demat Account.",
  },
  {
    Question:
      "The gold rate in the newspaper is lower than M&N  Bankâ€™s gold rate. Why are the gold bar sold by M&N  bank more expensive that those sold in the market",
    Answer:
      "The price of Mudra Pure Gold Bars is line with the gold price of 99.99% pure bars in the International market. The price also includes the supplierâ€™s premium, as the product is imported from Switzerland, and the Assay Certification Cost that certifies the purity of Gold as per International Standards. This price also includes customs duty, insurance, holding cost and VAT.",
  },
  {
    Question: "Are there any taxes applicable on Mudra Pure Gold Bars",
    Answer: "VAT is included in the final price of Mudra Pure Gold Bars.",
  },
  {
    Question:
      "How are Mudra Pure Gold Bars different from 24 carat gold available in market",
    Answer:
      "There are three different purity levels in 24 carat gold; i.e. 99.50%, 99.90% and 99.99%. M&N  Bank Mudra Pure Gold Bars are 24 carat, 99.99% pure. This is the highest available purity in gold. The normal level of purity commonly available with local jewelers is 24 carat 99.5% pure. In some cases the purity is level is 99.9% pure.",
  },
  {
    Question: "What form is Gold being sold",
    Answer: "Mudra - Pure Gold will be sold in the form of rectangular bars.",
  },
  {
    Question: "Will M&N  Bank buy back the gold sold by them",
    Answer: "M&N  Bank does not buy the gold sold by them.",
  },
  {
    Question: "What is the authenticity proof",
    Answer:
      "The gold bar is packed in tamper-proof certicard packs that are see through at the manufacturing stage itself to prevent any damage / theft during transit. Moreover, the gold bars sold by the Bank come with an Assay Certification indicating the highest quality of gold at 99.99% purity as per international standards.",
  },
  {
    Question: "What is the Assay Certification about",
    Answer:
      "Mudra Pure Gold Bars come with an Assay certification, which signifies the highest level of purity as per international standards.",
  },
  {
    Question: "What are the features of M&N  Bank Mudra Pure Gold Bars",
    Answer:
      "99.99% Pure 24 Carat Tamper-proof Packaging Assay Certification for purity and weight Imported from Switzerland",
  },
  {
    Question: "How will M&N  Bank sell the gold",
    Answer: "M&N  Bank is selling the gold through its branches.",
  },
  {
    Question: "Will you buy back Gold Bars purchased from your bank / branch",
    Answer:
      "Currently, the Bank is prohibited by regulatory guidelines from buying back gold that has been sold to customers.",
  },
  {
    Question:
      "Will you give me a bill when I purchase Mudra Pure Gold Bars from M&N  Bank",
    Answer:
      "We will give you an Invoice for all gold bars purchased from us. The Invoice will carry the weight, quantity and purity of the gold bars and will be signed and stamped by the Bank.",
  },
  {
    Question: "Do the bars have authenticity proof",
    Answer:
      "The gold bars are packed in tamper-proof Certicard packs (see through), at the manufacturing stage itself, to prevent any damage / theft during transit. Moreover, the gold bars sold by the Bank are â€œAssay Certifiedâ€ for weight and purity, as mentioned on the packaging.",
  },
  {
    Question: "From where can I get todayâ€™s price of Mudra Pure Gold Bars",
    Answer:
      "The card rates for M&N  Bank Mudra Pure Gold Bars are available on the M&N  Bank website home page in the â€˜todayâ€™s ratesâ€™ section. Please note that these prices are subject to change as per the market price. Hence please confirm the price and the branch name before making a purchase.",
  },
  {
    Question: "Is M&N  Bank venturing into gold/bullion market",
    Answer:
      "Yes, M&N  Bank has RBI approval to retail gold/bullion to its customers.",
  },
  {
    Question: "Is the gold imported",
    Answer:
      "Yes.The gold is imported from an Internationally reputed supplier from Switzerland.",
  },
  {
    Question: "What is the price that the gold will be sold at",
    Answer: "The price will depend upon the market rate of gold.",
  },
  {
    Question: "In what size and shape are the Mudra pure Gold Bars available",
    Answer: "Mudra Pure Gold bars are available in rectangular form.",
  },
  {
    Question: "In what weight are the gold bars available",
    Answer:
      "Currently Mudra - Pure Gold bars are available in 5g, 8g, 10g, 20g, 50g & 100g denominations.",
  },
  {
    Question:
      "What are the different weights Mudra Pure Gold Bars are available in",
    Answer:
      "Mudra Pure Gold bars are available in 5g, 8g, 10g, 20g 50g and 100g denominations.",
  },
  {
    Question: "What is the price that the silver will be sold at",
    Answer: "The price will depend upon the market rate of silver.",
  },
  {
    Question: "Is M&N  Bank venturing into silver/bullion market",
    Answer:
      "Yes, M&N  Bank has RBI approval to retail silver/bullion to its customers.",
  },
  {
    Question: "What is the authenticity proof",
    Answer:
      "The silver bar is packed in tamper-proof certicard packs that are seen through at the manufacturing stage itself to prevent any damage / theft during transit. Moreover, the silver bars sold by the Bank come with an Assay Certification indicating the highest quality of silver at 99.99% purity as per international standards.",
  },
  {
    Question: "Will M&N  Bank buy back the silver sold by them",
    Answer: "M&N  Bank does not buy the silver sold by them.",
  },
  {
    Question: "In what weight are the silver bars available",
    Answer:
      "Currently Mudra - Pure silver bars will be available in 50 gm weight.",
  },
  {
    Question: "What is the Assay Certification about",
    Answer:
      "Mudra Silver Bars come with an Assay certification, which signifies the highest level of purity as per international standards.",
  },
  {
    Question: "What is the purity factor of silver",
    Answer:
      "M&N  Bank - Mudra Pure Silver will be of 24 Karat, 99.99% purity silver.",
  },
  {
    Question: "What form is silver being sold in",
    Answer: "Mudra - Pure silver will be sold in the form of rectangular bars.",
  },
  {
    Question: "How will M&N  Bank sell the silver",
    Answer: "Initially, M&N  Bank will sell the silver through its branches.",
  },
  {
    Question: "In what form are these bonds issued",
    Answer:
      "Bonds are issued in the form of a Bond Ledger Account in denominations of Rs. 1000.",
  },
  {
    Question: "Is a nomination facility available",
    Answer: "Yes, a nomination facility is available.",
  },
  {
    Question: "What bond options are available",
    Answer: "You can choose from cumulative and non-cumulative bond options.",
  },
  {
    Question: "How much tax do I have to pay",
    Answer:
      "The interest income from the bonds is taxable. TDS is deducted at the time of interest payment as per the prevailing IT rules.",
  },
  {
    Question:
      "What is the minimum and maximum limit for investment in the 8% Savings (Taxable) Bonds",
    Answer:
      "You need to invest a minimum of Rs. 1,000. However, there is no maximum limit on investment but it needs to be in denominations of Rs. 1000.",
  },
  {
    Question: "What is the tenure of the 8% Savings (Taxable) Bonds",
    Answer:
      "The tenure of the bond is 6 years from the date of issue. No interest will accrue after the maturity of the bond.",
  },
  {
    Question: "Are the 8% Savings (Taxable) Bonds transferable",
    Answer: "No, these bonds are not transferable.",
  },
  {
    Question: "How much interest will the 8% Savings (Taxable) Bonds bear",
    Answer:
      "Bonds will bear interest @ 8.00% p.a. and are payable half-yearly. The interest payment dates are February 1 and August 1 for non-cumulative investments. For investors who have chosen the cumulative option, the value of the investments at the end of 6 years would be Rs. 1601 (being Principal and Interest) for every Rs. 1000 invested. Interest on the Bonds is taxable under Income Tax Act 1961.",
  },
  {
    Question:
      "Can I claim exemption under exemption under 54C with the exemption 54 and 54EC",
    Answer:
      "Yes, you can claim exemption under 54C with the exemption 54 and 54EC.",
  },
  {
    Question: "What is the rate of interest for these bonds",
    Answer: "The interest rate on these bonds is 6% per annum.",
  },
  {
    Question: "What is the block period for the investment",
    Answer:
      "The block period for the investment of these two companies is 3 years.",
  },
  {
    Question: "Which bonds are eligible under the Section 54 EC",
    Answer:
      "The eligible bonds under Section 54 EC are RECL (Rural Electrification Corporation Ltd) and NHAI (National Highways Authority of India).",
  },
  {
    Question: "Can I take a loan on these bonds",
    Answer: "No, you cannot take a loan on these bonds.",
  },
  {
    Question:
      "What is the maximum investment limit for the Section 54 EC- Capital Gain Bonds",
    Answer: "The maximum investment limit amount is Rs. 50 Lakhs.",
  },
  {
    Question: "What are the benefits of InvestTrack",
    Answer:
      "This exclusive service* comes to you with an array of unmatched benefits, which include: Structured Process considering your risk profile, investment objectives and financial goals Recommendations from M&N  Bank's in-house research team Choice of convenient Mutual Fund execution platforms Comprehensive Portfolio Tracker* that provides a consolidated view of your Mutual Fund Investments, M&N  Life Policies, Savings, Current & Fixed Deposit Account Balances Complimentary subscription* to our exclusive monthly magazine - Investment Insight, that updates you on: Market Movements New Fund Offerings Recommended Funds' Performance Fund Managers' Views Informative articles on various investment products Proactive monthly updates on new offers and investment concepts. View more",
  },
  {
    Question: "What is the requirement to avail of the InvestTrack facility",
    Answer:
      "You need to have an existing Investment Services Account (ISA) or you need to open an ISA, without which you will not be registered under InvestTrack",
  },
  {
    Question: "Who can avail of the InvestTrack facility",
    Answer:
      "The InvestTrack facility is available exclusively to our Imperia, Preferred and",
  },
  {
    Question: "What security do I need to provide to obtain a Business loan",
    Answer:
      "To obtain the loan, there is absolutely no need to provide any security or collateral.",
  },
  {
    Question:
      "What are the benefits of having a Current/Saving Account for my Business loan",
    Answer:
      "You get preferred Processing Fee, priority processing and simpler documentation if you have a Current/Saving Account with M&N  Bank. This is taken into account at the time of disbursal of the loan. You can pay through Standing Instructions to debit your M&N  Bank Account with the EMI amount.",
  },
  {
    Question: "How long will it take for me to get a Business Loan",
    Answer:
      "Once you submit your application form and supporting documents, we shall give approval within 5 working days provided everything is in order. All loan approvals are at the sole discretion of the bank.",
  },
  {
    Question: "Can I repay the loan earlier for Business Loan",
    Answer:
      "Yes, you can choose to repay your loan anytime after 6 months of taking the loan and after you have paid 06 EMIs along with applicable foreclosure charges. Please note Loan can be foreclosed by issuing a Demand draft / cheque at the branch; kindly note that cash beyond Rs. 49000/- will not be accepted for loan repayment against full closure/matured loan closure payment. Any payment above Rs. 49000/- should be made vide Account payee Cheque / Pay order /Demand draft.",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/ account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question:
      "What are the charges I have to pay to change the mode of repayment/ account for my loan",
    Answer:
      "A service charge of Rs.500 is applicable for changes in loan repayment instructions issued from non-M&N  Bank Account (ECS or PDC facility). A cheque/payorder/demand draft for Rs. 500 favouring â€œM&N  Bank Ltd Loan Account No. << >>â€ will be required along with the revised set of repayment instructions.",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Center: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Center: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >>*** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest Retail Loan Service Center: Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a Duplicate Repayment Schedule for my loan account",
    Answer:
      "You may obtain a Duplicate Repayment Schedule for your loan account, free of charge by registering for our NetBanking facility on www.M&N bank.com and download the repayment schedule for your linked loan account. Alternatively, you may visit the nearest Retail Loan Service Center and submit the following documents Request form for Duplicate Repayment Schedule. Duplicate Repayment Schedule Charges of Rs.200/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided",
  },
  {
    Question: "How much loan can I avail of Business Loan",
    Answer:
      "You can avail of a loan from Rs 50,000/- to Rs 50,00,000/- depending on your income, repayment capacity and respective location product cap.",
  },
  {
    Question: "How do I repay my Business Loan",
    Answer:
      "You pay the loan in equal monthly instalments (EMIs). The loan will be paid through post-dated cheques. You can also pay through Electronic Clearing System (ECS ) or a standing instruction to debit your M&N  Bank account with the EMI amount",
  },
  {
    Question: "What are the loan tenure options for Business Loan",
    Answer: "You can repay your loan over a period of 12 to 48 months",
  },
  {
    Question:
      "Do I need to pledge anything or give collateral to get a car loan",
    Answer:
      "No, thereâ€™s no need for any collateral. You will only need you to hypothecate the car in our name. An endorsement will have to be made in the Registration Certificate (RC) book of the vehicle. This will be cancelled after you repay the loan.",
  },
  {
    Question: "How long can the tenure of my loan be",
    Answer:
      "Usually the tenure of an Auto Loan is 3 to 7 years. The tenure also depends on the type of car you wish to purchase. If it is a super premium car the tenure is restricted to 3 years only. In addition, the higher your tenure is the lower your EMI will be, but the total interest outflow is higher.",
  },
  {
    Question:
      "What documents do I need to submit after the loan amount is disbursed",
    Answer:
      "You can keep the original car documents, registration certificate, insurance policy and tax papers with you; but you need to submit photocopies of these documents to the bank.",
  },
  {
    Question: "What happens if the car meets with an accident",
    Answer:
      "In the event of an accident, the first step is to inform the insurance company. The company then sends a surveyor to assess the extent of damages to the car. Your claim is then processed and paid directly to us, unless you have taken an NOC from the bank in which case the payment will be made by the insurance company in your favour. The bank normally gives you an NOC if you are regular in your payments. In case of a complete loss, the bank will receive the payment directly from the insurance company.",
  },
  {
    Question: "Can I get finance for insurance and registration",
    Answer:
      "No. The ex-showroom price is considered which does not cover insurance and registration charges.",
  },
  {
    Question: "How much loan can I get",
    Answer:
      "The amount of the loan you can get depends on: The cost of the vehicle The type of vehicle (standard/premium) The percentage of finance offered",
  },
  {
    Question: "Can I sell my car before I repay my loan",
    Answer:
      "No, you cannot sell your car unless you repay your loan. An NOC is required from the financier before you can sell your car.",
  },
  {
    Question:
      "How much time will it take to change the mode of repayment/ account to repay my loan",
    Answer:
      "It will take 25 working days to activate the revised instructions. In case your next instalment falls due prior to the 25 day period, instructions already lodged with us will be presented for payment.",
  },
  {
    Question: "What is De-pledge",
    Answer:
      "Removal of a pledge from the security to regain the rights over the security is called de-pledge. *Conditions Apply",
  },
  {
    Question: "What is Guarantor",
    Answer:
      "A Guarantor is a person who guarantees to pay for someone else's debt if he or she should default on a loan obligation.",
  },
  {
    Question: "What is Amortization",
    Answer:
      "Amortization is paying off debts in regular instalments over a period of time.",
  },
  {
    Question: "What is Pledge",
    Answer:
      "A right over the security is created in favour of M&N  Bank. Hence shares cannot be transferred or sold by the customer or shareholder.",
  },
  {
    Question: "What is RTGS",
    Answer:
      "RTGS is the Real Time Gross Settlement which is used for the transfer of amounts of Rs. 1,00,000 or more from one bank account to another bank account (any bank located anywhere in India if attached with an Internet system) at very minimal charges. The amount is credited into the beneficiary's account in real time. For amounts less than Rs. 1,00,000 we use NEFT( National Electronic Fund Transfer).",
  },
  {
    Question: "What is NEFT",
    Answer:
      "The National Electronic Funds Transfer (NEFT) system is a nation-wide funds transfer system to facilitate transfer of funds from any bank branch to any other bank branch.",
  },
  {
    Question: "What is SI",
    Answer:
      "SI stands for Standing Instructions. It is one of the modes you can use to repay a loan, wherein your M&N  Bank account is directly debited for the EMI amounts, based on your specific instructions in the form of the Standing Instructions Mandate.",
  },
  {
    Question: "What is CIBIL",
    Answer:
      "CIBIL stands for Credit Information Bureau India Limited. CIBIL's aim is to fulfil the need of credit granting institutions for comprehensive credit information by collecting, collating and disseminating credit information pertaining to both commercial and consumer borrowers, to a closed user group of members. Banks, Financial Institutions, Non-Banking Financial Companies, Housing Finance Companies and Credit Card Companies use CIBIL's services. Data sharing is based on the Principle of Reciprocity, which means that only Members who have submitted all their credit data may access Credit Information Reports from CIBIL. The establishment of CIBIL is an effort made by the Government of India and the Reserve Bank of India to improve the functionality and stability of the Indian financial system by containing NPAs while improving credit grantors' portfolio quality. CIBIL provides a vital service, which allows its Members to make informed, objective and faster credit decisions. View more",
  },
  {
    Question:
      "Which documents should I carry at the time of visiting M&N  bank",
    Answer:
      "You need to carry an Agreement Number, Self-attested Identification Proof containing your signature to avail of any information / deliverable along with a written request and produce the documents at the Customer Service Desk. If you want to change your address / contact details, you need to submit an address change request along with a Self-attested copy of your revised address proof. The Request form for Address Change is available on the Form Centre of M&N  Bank website. View more",
  },
  {
    Question: "Who can resolve my queries",
    Answer:
      "For your queries related to Loans (other than home loans), please visit the nearest Retail Asset Branch. You can also write to us at www.M&N bank.com/services with the following verification details or contact your nearest PhoneBanking officer: Loan account number Name of applicant / loan favouring Date of birth of the applicant (as provided in loan application form) Correspondence address Loan amount EMI amount Mode of repayment (standing instruction / ECS / post date cheques) Bank name and account number from which the EMIs are collected Query / Complain View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for fitting an LPG/CNG kit on my vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for fitting an LPG/CNG kit on your registered vehicle under finance with us by visiting any of our the Retail Loan Service Center and submitting the following documents: Request form for LPG/CNG NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents (self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for settling a partial loss Insurance Claim for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC to settle the partial insurance claim in your favour, provided there are no outstandings to your loan account, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Original Insurance Policy (will be returned back to you at the centre, post validation). Copy of the Insurance Policy, duly self attested by you. Claim Voucher provided by Insurance Company Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Note, for Total Loss, Claims will be settled in favour of the Bank to close the loan based on the Loan Pre-Termination Statement as on the date of request and in case of any excess claim received from the Insurance Company, a refund will be made favouring the customer. View more",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, we request you to visit the Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if my Registration Certificate is mutilated and  I wish to apply for a duplicate Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for the said purpose by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if I have lost my Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for your vehicle loan, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you for validation. Copy of FIR or certificate from police or Acknowledgement from Police on written complaint with General Diary No. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a Duplicate Repayment Schedule for my loan account",
    Answer:
      "You may obtain a Duplicate Repayment Schedule for your loan account, free of charge by registering for our NetBanking facility on www.M&N bank.com and download the repayment schedule for your linked loan account. Alternatively, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Duplicate Repayment Schedule. Duplicate Repayment Schedule Charges of Rs.200/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided View more",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question:
      "How do I obtain a duplicate NOC/Form 35 for a vehicle loan that has been closed and fully repaid",
    Answer:
      "You may obtain a duplicate NOC/Form 35 for your vehicle by visiting any of our the Retail Loan Service Center and submit the following documents: Request form for Duplicate NOC/Form 35. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring â€œM&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Please note that the Loan Closure NOC/Form 35 will not be issued if any of the following conditions apply: Copy of RC Book is not submitted The same vehicle is encumbered to the Bank for any other loan facility Any notice from a competent authority restraining the Bank from release of hypothecation If there are any existing over dues, direct or otherwise, in your name View more",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest the Retail Loan Service Center : Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question: "What are the tenure options available",
    Answer:
      "The choice is yours. You can choose any repayment option from 12 to 84 months all specially designed to suit your requirements.",
  },
  {
    Question: "How much finance can I avail of on New Car Loans",
    Answer:
      "You can borrow up to 90% of the invoice value. However, the minimum loan amount is Rs. 1,00,000.",
  },
  {
    Question: "Who can avail of M&N  Bank New Car Loans",
    Answer:
      "We offer New Car Loans to the following: 1. Salaried individuals in the age group of 21 to 60 years (at the end of the tenure) 2. Self-employed individuals in the age group of 21 to 65 years (at the end of the tenure) 3. Partnership Firms 4. Public & Private Ltd. Companies 5. HUFs and Trusts View more",
  },
  {
    Question:
      "What are the special privileges that M&N  Bank customers can avail of",
    Answer:
      "If you are an M&N  Bank account holder, we have special rates of interest for you. If you have a Preferred Account or a Corporate Salary Account with M&N  Bank for more than 6 months, you can get fast approvals on your loans with minimal documentation. If you are an M&N  Bank Car Loan customer with a clear repayment of 12 months or more we can Top-Up your car loan to the extent of the original loan value.",
  },
  {
    Question: "Do I have the option to pre-pay the entire loan amount",
    Answer:
      "Yes. You can pre-pay the loan any time after 6 months of availing of the loan. You just have to pay a small pre-payment fee on the outstanding loan amount.",
  },
  {
    Question: "Which cars can be financed for New Car Loans",
    Answer:
      "We finance most passenger cars and multi-utility vehicles manufactured by India's leading automobile companies.",
  },
  {
    Question:
      "What is the maximum amount I can borrow with an M&N  Bank New Car Loans",
    Answer:
      "You can borrow up to 3 times your annual salary if you are a salaried professional and 6 times your annual income if you are a self-employed professional **. **Offers on specific models .Terms & conditions apply.",
  },
  {
    Question: "Do I need a guarantor for New Car Loans",
    Answer:
      "No, but if your income does not meet our credit criteria then you may be required to have a Gurantor/co-applicant. To stand surety for your loan.",
  },
  {
    Question:
      "If I don't have an account with M&N  Bank, can I still avail of a New Car Loans",
    Answer:
      "Repayment is preferred from a M&N  Bank account. Having an account with M&N  Bank helps in better eligibility and approval rates.",
  },
  {
    Question: "How long will it take to process loan for New Car Loans",
    Answer:
      "Within 48 hours of completing documentation. Type of Location End-to-End TAT* Urban Locations 5 Days Semi-urban & Rural Locations 7 Days * End-to-End TAT is Login-to-Disbursement turnaround time* TAT calculated from the day complete loan application received by the Bank",
  },
  {
    Question: "Do I need a co-applicant for a New Car Loan",
    Answer:
      "No, but if your income does not meet our credit criteria then you may be required to have a co-applicant.",
  },
  {
    Question: "Do I have the option of pre-paying the entire loan amount",
    Answer:
      "Yes. One can pre-pay the loan any time after 6 months of availing of the loan. One merely has to pay a small prepayment fee on the outstanding loan amount.",
  },
  {
    Question: "So how do I get an M&N  Bank Car Loan",
    Answer:
      "To get an M&N  Bank New Car Loan, just fill the Online Application Form or Leave your Number and our representative will get in touch with you shortly. Or you can also Call us or Visit our branch. View more",
  },
  {
    Question:
      "What are the most important guidelines post disbursements for New Car Loans",
    Answer:
      "Registration Certificate-Important advise M&N  Bank is in no way responsible for the delivery of the Registration Certificate. The Borrower shall submit the certified true copy of the Registration Certificate relevant to the vehicle for which the loan has been taken.The registration certificate has to be submitted within 60 days of having taken delivery of the vehicle or 150 days from the date of disbursal of the loan whichever is earlier.The Borrower is also required to submit copy of the Insurance policy as well as Invoice to the bank,within this period. Vehicle Delivery The role of M&N  Bank is to be a finance provider to the borrower and hence the Bank is not responsible for delay, non-delivery or any defect, damage in quality and workmanship of the Vehicle. The Bank is also not liable or responsible in case of defect or dispute of any nature in the title (even if the vehicle is found to be a stolen Vehicle) or ownership of the Vehicle. Loan cancellation In case of loan cancellation requested by the Borrower, in the event of non delivery of the vehicle,cancellation charges as well as interest charges till the time the refund of the loan is received from the dealer, will have to borne by the Borrower. Interstate NOCs In the event of a Borrower requiring a NOC for purpose of interstate registration,in the event of a transfer of employment or any other reason, fees of Rs 500 along with a refundable Fixed Deposit of Rs 5000 will be charged.It will be the borrower's responsibility to provide the transferred Registration certificate to the bank. We advise our customers to only deal with the Bank empanelled Direct sales associates.The Bank shall take no responsibility for any transactions undertaken by the borrower with any unempaneled direct sales associates,who may claim association with the Bank. It is also advised,that the customers should refrain from any dealings in cash with the Bank's Direct Sales associates .Borrowers should also not make any payments in cash/bearer cheque or kind in connection with the loan,to the executive,dealing with the borrower for purpose of the loan. View more",
  },
  {
    Question:
      "Do I have an option to pay a skipped/ missed EMI for New Car Loans",
    Answer:
      "Yes, you can pay your missed EMI online. You need to provide your M&N  Bank Loan details, confirm payment towards M&N  Bank Loan account post which you will receive an online transaction confirmation and a Transaction Reference Number. The link for making M&N  Bank overdue loan repayment online is given below. https://www.billdesk.com/pgidsk/pgmerc/M&N emi/index.jsp .",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if my Registration Certificate is mutilated and  I wish to apply for a duplicate Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for the said purpose by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, we request you to visit the Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest the Retail Loan Service Center : Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for settling a partial loss Insurance Claim for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC to settle the partial insurance claim in your favour, provided there are no outstandings to your loan account, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Original Insurance Policy (will be returned back to you at the centre, post validation). Copy of the Insurance Policy, duly self attested by you. Claim Voucher provided by Insurance Company Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Note, for Total Loss, Claims will be settled in favour of the Bank to close the loan based on the Loan Pre-Termination Statement as on the date of request and in case of any excess claim received from the Insurance Company, a refund will be made favouring the customer. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if I have lost my Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for your vehicle loan, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you for validation. Copy of FIR or certificate from police or Acknowledgement from Police on written complaint with General Diary No. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "What are the charges I have to pay to change the mode of repayment/ account for my loan",
    Answer:
      "A service charge of Rs.500 is applicable for changes in loan repayment instructions issued from non-M&N  Bank Account (ECS or PDC facility). A cheque/payorder/demand draft for Rs. 500 favouring M&N  Bank Ltd Loan Account No. << >> will be required along with the revised set of repayment instructions.",
  },
  {
    Question:
      "How do I obtain a Duplicate Repayment Schedule for my loan account",
    Answer:
      "You may obtain a Duplicate Repayment Schedule for your loan account, free of charge by registering for our NetBanking facility on www.M&N bank.com and download the repayment schedule for your linked loan account. Alternatively, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Duplicate Repayment Schedule. Duplicate Repayment Schedule Charges of Rs.200/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided View more",
  },
  {
    Question:
      "How do I obtain a duplicate NOC/Form 35 for a vehicle loan that has been closed and fully repaid",
    Answer:
      "You may obtain a duplicate NOC/Form 35 for your vehicle by visiting any of our the Retail Loan Service Center and submit the following documents: Request form for Duplicate NOC/Form 35. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring â€œM&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Please note that the Loan Closure NOC/Form 35 will not be issued if any of the following conditions apply: Copy of RC Book is not submitted The same vehicle is encumbered to the Bank for any other loan facility Any notice from a competent authority restraining the Bank from release of hypothecation If there are any existing over dues, direct or otherwise, in your name View more",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/ account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for fitting an LPG/CNG kit on my vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for fitting an LPG/CNG kit on your registered vehicle under finance with us by visiting any of our the Retail Loan Service Center and submitting the following documents: Request form for LPG/CNG NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents (self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question: "What are the tenure options for Pre-owned Car Loans",
    Answer:
      "The choice is with you. You can choose from any of the 5 well-placed repayment option of 12,24,36,48 or 60 months all specially designed to suit your requirements.",
  },
  {
    Question:
      "How many times of my annual salary can I borrow with M&N  Bank Auto Loan",
    Answer:
      "You can borrow up to 3 times your annual salary if you are a salaried professional and 6 times your annual income if you are a self-employed professional **. **This would also vary with higher loan value",
  },
  {
    Question: "Do I need a guarantor for Pre-owned Car Loans",
    Answer:
      "No, but if your income does not meet our credit criteria, then you may be required to have a guarantor to stand surety for your loan.",
  },
  {
    Question: "How much finance can I avail of on Pre-owned Car Loans",
    Answer: "You can borrow up to 85% of the car valuation",
  },
  {
    Question:
      "What are the special privileges that M&N  Bank account holders can avail of",
    Answer:
      "If you have had a Preferred Account or a Corporate Salary Account with M&N  Bank for more than six months, you can get fast approvals on your loans with minimal documentation.",
  },
  {
    Question:
      "What are the most important guidelines post disbursements for Pre-owned Car Loans",
    Answer:
      "Registration Certificate-Important advise M&N  Bank is in no way responsible for the delivery of the Registration Certificate. The Borrower shall submit the certified true copy of the Registration Certificate relevant to the vehicle for which the loan has been taken.The registration certificate has to be submitted within 60 days of having taken delivery of the vehicle or 150 days from the date of disbursal of the loan whichever is earlier.The Borrower is also required to submit copy of the Insurance policy as well as Invoice to the bank,within this period. Vehicle Delivery The role of M&N  Bank is to be a finance provider to the borrower and hence the Bank is not responsible for delay, non-delivery or any defect, damage in quality and workmanship of the Vehicle. The Bank is also not liable or responsible in case of defect or dispute of any nature in the title (even if the vehicle is found to be a stolen Vehicle) or ownership of the Vehicle. Loan cancellation In case of loan cancellation requested by the Borrower, in the event of non delivery of the vehicle,cancellation charges as well as interest charges till the time the refund of the loan is received from the dealer, will have to borne by the Borrower. Interstate NOCs In the event of a Borrower requiring a NOC for purpose of interstate registration,in the event of a transfer of employment or any other reason, fees of Rs 500 along with a refundable Fixed Deposit of Rs 5000 will be charged.It will be the borrower's responsibility to provide the transferred Registration certificate to the bank. We advise our customers to only deal with the Bank empanelled Direct sales associates.The Bank shall take no responsibility for any transactions undertaken by the borrower with any unempaneled direct sales associates,who may claim association with the Bank. It is also advised,that the customers should refrain from any dealings in cash with the Bank's Direct Sales associates .Borrowers should also not make any payments in cash/bearer cheque or kind in connection with the loan,to the executive,dealing with the borrower for purpose of the loan. View more",
  },
  {
    Question: "Which cars can be financed for Pre-owned Car Loans",
    Answer:
      "We finance most of passenger cars manufactured by India's leading automobile companies",
  },
  {
    Question:
      "What is the maximum amount I can borrow with an M&N  Bank Pre-owned Car Loans",
    Answer:
      "You can get an additional loan on your existing M&N  Bank Auto loan if you have a clear repayment track record of 12 months or more, till the extent of your existing loan amount at an attractive rate of interest.",
  },
  {
    Question: "How long will it take to process loan for Pre-owned Car Loans",
    Answer: "Within 48 hours of completing documentation.",
  },
  {
    Question:
      "If I don't have an account with M&N  Bank, can I still avail of Pre-owned Car Loans",
    Answer:
      "Repayment is preferred from a M&N  Bank account. Having an account with M&N  Bank helps in better eligibility and approval rates.",
  },
  {
    Question: "Who can avail of M&N  Bank Pre-owned Car Loans",
    Answer:
      "We offer Pre-owned Car Loans to the following: 1. Salaried individuals in the age group of 21 to 60 years (at the end of the tenure) 2. Self-employed individuals in the age group of 21 to 65 years (at the end of the tenure) 3. Partnership Firms 4. Public & Private Ltd. Companies 5. HUFs and Trusts Learn how to get an M&N  Bank Pre-owned Car Loans.",
  },
  {
    Question: "Do I need a co-applicant for a New Car Loan",
    Answer:
      "No, but if your income does not meet our credit criteria then you may be required to have a co-applicant.",
  },
  {
    Question: "So how do I get an M&N  Bank Pre-owned Car Loans",
    Answer:
      "To get an M&N  Bank Pre-owned Car Loans, just fill the Online Application Form and our representative will get in touch with you shortly. Or you can also Call us or Visit our branch.",
  },
  {
    Question:
      "Do I have an option to pay a skipped/ missed EMI for Pre-owned Car Loans",
    Answer:
      "Yes, you can pay your missed EMI online. You need to provide your M&N  Bank Loan details, confirm payment towards M&N  Bank Loan account post which you will receive an online transaction confirmation and a Transaction Reference Number. The link for making M&N  Bank overdue loan repayment online is given below. https://www.billdesk.com/pgidsk/pgmerc/M&N emi/index.jsp .",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest the Retail Loan Service Center : Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if my Registration Certificate is mutilated and  I wish to apply for a duplicate Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for the said purpose by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if I have lost my Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for your vehicle loan, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you for validation. Copy of FIR or certificate from police or Acknowledgement from Police on written complaint with General Diary No. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for settling a partial loss Insurance Claim for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC to settle the partial insurance claim in your favour, provided there are no outstandings to your loan account, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Original Insurance Policy (will be returned back to you at the centre, post validation). Copy of the Insurance Policy, duly self attested by you. Claim Voucher provided by Insurance Company Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Note, for Total Loss, Claims will be settled in favour of the Bank to close the loan based on the Loan Pre-Termination Statement as on the date of request and in case of any excess claim received from the Insurance Company, a refund will be made favouring the customer. View more",
  },
  {
    Question:
      "What are the charges I have to pay to change the mode of repayment/ account for my loan",
    Answer:
      "A service charge of Rs.500 is applicable for changes in loan repayment instructions issued from non-M&N  Bank Account (ECS or PDC facility). A cheque/payorder/demand draft for Rs. 500 favouring M&N  Bank Ltd Loan Account No. << >> will be required along with the revised set of repayment instructions.",
  },
  {
    Question:
      "How do I obtain a Duplicate Repayment Schedule for my loan account",
    Answer:
      "You may obtain a Duplicate Repayment Schedule for your loan account, free of charge by registering for our NetBanking facility on www.M&N bank.com and download the repayment schedule for your linked loan account. Alternatively, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Duplicate Repayment Schedule. Duplicate Repayment Schedule Charges of Rs.200/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for fitting an LPG/CNG kit on my vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for fitting an LPG/CNG kit on your registered vehicle under finance with us by visiting any of our the Retail Loan Service Center and submitting the following documents: Request form for LPG/CNG NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents (self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a duplicate NOC/Form 35 for a vehicle loan that has been closed and fully repaid",
    Answer:
      "You may obtain a duplicate NOC/Form 35 for your vehicle by visiting any of our the Retail Loan Service Center and submit the following documents: Request form for Duplicate NOC/Form 35. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring â€œM&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Please note that the Loan Closure NOC/Form 35 will not be issued if any of the following conditions apply: Copy of RC Book is not submitted The same vehicle is encumbered to the Bank for any other loan facility Any notice from a competent authority restraining the Bank from release of hypothecation If there are any existing over dues, direct or otherwise, in your name View more",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, we request you to visit the Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/ account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question: "So how do I get the Loan against Car",
    Answer:
      "To get the Loan against Car, just fill the Online Application Form and our representative will get in touch with you shortly. Or you can also Call us or Visit our branch.",
  },
  {
    Question: "How long will it take to process loan for Loan against Car",
    Answer:
      "You loan will be processed within 48 Hours where Asset Verification/Valuation is not required.",
  },
  {
    Question: "Does this require Car verification / Valuation",
    Answer:
      "Non-M&N  Bank financed cars will undergo car valuation and verification. If your car is M&N  Bank financed, it may undergo verification depending on your credit requirements.",
  },
  {
    Question: "Which cars can be financed for Loan against Car",
    Answer:
      "Any Hatchbacks and Sedans, excluding some models that are out of production can be financed. To know more give us a call or visit a branch.",
  },
  {
    Question: "What are the tenure options for Loan against Car",
    Answer:
      "The tenure options range from 12-60 months. The vehicle age at the end of Loan against Car tenure should not exceed 7 Years (Private Usage) and 6 Years (Commercial Use).",
  },
  {
    Question: "Who can avail the Loan against Car",
    Answer:
      "Any applicant owning a car, including a fleet operator or taxi where the present vehicle age is not more than 60 months, can avail of the Loan against Car.",
  },
  {
    Question: "Do I need a guarantor for Loan against Car",
    Answer: "No. The car itself acts as a security.",
  },
  {
    Question: "How much finance can I avail of on Loan against Car",
    Answer:
      "You can avail finance of up to 100% of original loan amount for a vehicle of 9 - 42 months vintage.",
  },
  {
    Question:
      "Do I have an option to pay a skipped/ missed EMI for Loan against Car",
    Answer:
      "Yes, you can pay your missed EMI online. You need to provide your M&N  Bank Loan details, confirm payment towards M&N  Bank Loan account post which you will receive an online transaction confirmation and a Transaction Reference Number. The link for making M&N  Bank overdue loan repayment online is given below. https://www.billdesk.com/pgidsk/pgmerc/M&N emi/index.jsp .",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/ account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question:
      "How do I obtain a duplicate NOC/Form 35 for a vehicle loan that has been closed and fully repaid",
    Answer:
      "You may obtain a duplicate NOC/Form 35 for your vehicle by visiting any of our the Retail Loan Service Center and submit the following documents: Request form for Duplicate NOC/Form 35. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring â€œM&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Please note that the Loan Closure NOC/Form 35 will not be issued if any of the following conditions apply: Copy of RC Book is not submitted The same vehicle is encumbered to the Bank for any other loan facility Any notice from a competent authority restraining the Bank from release of hypothecation If there are any existing over dues, direct or otherwise, in your name View more",
  },
  {
    Question:
      "What are the charges I have to pay to change the mode of repayment/ account for my loan",
    Answer:
      "A service charge of Rs.500 is applicable for changes in loan repayment instructions issued from non-M&N  Bank Account (ECS or PDC facility). A cheque/payorder/demand draft for Rs. 500 favouring M&N  Bank Ltd Loan Account No. << >> will be required along with the revised set of repayment instructions.",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for fitting an LPG/CNG kit on my vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for fitting an LPG/CNG kit on your registered vehicle under finance with us by visiting any of our the Retail Loan Service Center and submitting the following documents: Request form for LPG/CNG NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents (self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a Duplicate Repayment Schedule for my loan account",
    Answer:
      "You may obtain a Duplicate Repayment Schedule for your loan account, free of charge by registering for our NetBanking facility on www.M&N bank.com and download the repayment schedule for your linked loan account. Alternatively, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Duplicate Repayment Schedule. Duplicate Repayment Schedule Charges of Rs.200/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for settling a partial loss Insurance Claim for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC to settle the partial insurance claim in your favour, provided there are no outstandings to your loan account, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Original Insurance Policy (will be returned back to you at the centre, post validation). Copy of the Insurance Policy, duly self attested by you. Claim Voucher provided by Insurance Company Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Note, for Total Loss, Claims will be settled in favour of the Bank to close the loan based on the Loan Pre-Termination Statement as on the date of request and in case of any excess claim received from the Insurance Company, a refund will be made favouring the customer. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if I have lost my Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for your vehicle loan, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you for validation. Copy of FIR or certificate from police or Acknowledgement from Police on written complaint with General Diary No. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "If I don't have an account with M&N  Bank, can I still avail of loans",
    Answer: "Yes, you can.",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if my Registration Certificate is mutilated and  I wish to apply for a duplicate Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for the said purpose by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest the Retail Loan Service Center : Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, we request you to visit the Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "Whom do I contact in case of ay further queries regarding the loan",
    Answer:
      "You can apply online on the clicking on the below given link, also you can walk into any of our branches located in 11 mentioned locations and our Sales Managers will help you with your need",
  },
  {
    Question: "What are the tenures for which I can avail this loan",
    Answer:
      "M&N  Bank Consumer Durable Loan is available in 12, 18, 24 and as long as 36 months",
  },
  {
    Question:
      "Which all locations M&N  Bank Consumer Durable Loan is available currently",
    Answer:
      "Mumbai, Delhi, Bangalore, Chennai, Pune, Hyderabad, Jaipur, Chandigarh, Cochin, Ahmedabad and Kolkatta",
  },
  {
    Question: "What is the minimum loan value/product value",
    Answer: "We are funding products with loan value above Rs 40000",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Center : Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Center : Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest Retail Loan Service Center : Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "What are the charges I have to pay to change the mode of repayment/ account for my loan",
    Answer:
      "A service charge of Rs.500 is applicable for changes in loan repayment instructions issued from non-M&N  Bank Account (ECS or PDC facility). A cheque/payorder/demand draft for Rs. 500 favouring â€œM&N  Bank Ltd Loan Account No. << >>â€ will be required along with the revised set of repayment instructions.",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, you may visit the nearest Retail Loan Service Center (Link to open )and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/ account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question: "What is Pledge",
    Answer:
      "A right over the security is created in favour of M&N  Bank. Hence shares cannot be transferred or sold by the customer or shareholder.",
  },
  {
    Question:
      "Which documents should I carry at the time of visiting M&N  bank",
    Answer:
      "You need to carry an Agreement Number, Self-attested Identification Proof containing your signature to avail of any information / deliverable along with a written request and produce the documents at the Customer Service Desk. If you want to change your address / contact details, you need to submit an address change request along with a Self-attested copy of your revised address proof. The Request form for Address Change is available on the Form Centre of M&N  Bank website. View more",
  },
  {
    Question:
      "How much time will it take to change the mode of repayment/ account for your loan",
    Answer:
      "It will take 25 working days to activate the revised instructions. In case your next instalment falls due prior to the said period, an instruction already lodged with us will be presented for payment.",
  },
  {
    Question: "Who can resolve my queries",
    Answer:
      "For your queries related to Loans (other than home loans), please visit the nearest Retail Asset Branch. You can also write to us at www.M&N bank.com/services with the following verification details or contact your nearest PhoneBanking officer: Loan account number Name of applicant / loan favouring Date of birth of the applicant (as provided in loan application form) Correspondence address Loan amount EMI amount Mode of repayment (standing instruction / ECS / post date cheques) Bank name and account number from which the EMIs are collected Query / Complain View more",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/ account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest Retail Loan Service Center: Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a Duplicate Repayment Schedule for my loan account",
    Answer:
      "You may obtain a Duplicate Repayment Schedule for your loan account, free of charge by registering for our NetBanking facility on www.M&N bank.com and download the repayment schedule for your linked loan account. Alternatively, you may visit the nearest Retail Loan Service Center and submit the following documents Request form for Duplicate Repayment Schedule. Duplicate Repayment Schedule Charges of Rs.200/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided",
  },
  {
    Question:
      "What are the charges I have to pay to change the mode of repayment/ account for my loan",
    Answer:
      "A service charge of Rs.500 is applicable for changes in loan repayment instructions issued from non-M&N  Bank Account (ACHStands for Automated Clearing House. It is a mode by which funds are automatically debited to your account every month to pay or a certain bill or fee. It helps so you donâ€™t have to remember every month to pay your regular bills. It is only done after a standing instruction is given by the account holder. or PDC facility). A cheque/payorder/demand draft for Rs. 500 favouring â€œM&N  Bank Ltd Loan Account No. << >>â€ will be required along with the revised set of repayment instructions",
  },
  {
    Question:
      "Do I need to provide collateral to avail of an education loan (Education Loans For Indian Education)",
    Answer:
      "For loans up to Rs. 4 lakh - No collateral or Third Party Guarantee is required For loans from Rs. 4 lakh to Rs. 7.5 lakh â€“ No collateral required, however Third Party Guarantee is required For loans above Rs. 7.5 lakh â€“ collateral is required. You can choose from any of the following acceptable collaterals: Residential Property M&N  Bank Fixed Deposit LIC/NSC/KVP View more",
  },
  {
    Question: "What is the maximum loan amount I can get for studies in India",
    Answer:
      "To study in India, the maximum loan you can get is upto Rs. 10 lacs.",
  },
  {
    Question:
      "Is there moratorium/repayment holiday available (Education Loans For Indian Education)",
    Answer:
      "Yes. A moratorium/repayment holiday is available for select courses.",
  },
  {
    Question:
      "Which courses can I take an education loan for (Education Loans For Indian Education)",
    Answer:
      "You can take a Education Loan for Indian education on the following courses: Management Courses (Full-Time) â€“ Graduation + Post Graduation Engineering Courses ( Government + Private ) - Graduation Medicine - Graduation + Post Graduation Masters in Computer Application ( MCA / MCM ) Architecture - Graduation + Post Graduation Hotel and Hospitality - Graduation + Post Graduation Agriculture - Graduation + Post Graduation Pure Science - Graduation + Post Graduation View more",
  },
  {
    Question:
      "How do I know if I am eligible for the education loan for Indian education",
    Answer:
      "If you are an Indian resident/citizen, have got admission in a graduate/ post graduate course in a college/institute/university which is recognized by the UGC/AICTE/AIBMS or ICMR, then you are eligible for the M&N  Bank Student Loan for Indian Education.",
  },
  {
    Question:
      "How long is the tenure of the loan (Education Loans For Indian Education)",
    Answer:
      "The maximum repayment tenures are as below: For loans upto Rs. 7.50 lacs - upto 10 years For loans above Rs. 7.50 lacs - upto 15 years",
  },
  {
    Question:
      "Do I need a co-applicant for the loan (Education Loans For Indian Education)",
    Answer:
      "Yes a co applicant is required for all full time courses. Co-applicant could be Parent/ Guardian or Spouse/ Parent-in-law (if married)",
  },
  {
    Question:
      "what does 'Moratorium Period' mean (Education Loans For Indian Education)",
    Answer:
      "A repayment moratorium (also called a repayment holiday) is the course work period + 1 year or 6 months after the student gets a job or starts earning, whichever is earlier.",
  },
  {
    Question:
      "Do I have to pay any margin money - my own funding (Education Loans For Indian Education)",
    Answer:
      "Margin Money upto Rs. 4.00 lacs - Nil, For loans above Rs. 4.00 lacs - 5%",
  },
  {
    Question:
      "Which course related expense does this loan cover (Education Loans For Indian Education)",
    Answer:
      "Apart from the basic course fee payable to the institution where you decide to study, the following expenses will be covered under the loan: Exam/Library/Lab fees Caution deposit / Refundable deposit asked by the institution / Building fund - supported by Institution bills / receipts Purchase of Books/equipments/instrument/uniforms Travel expenses/passage money for studies abroad Purchase of computers - essential for completion of the course Insurance Miscellaneous expenses related to the course - like study tours, project work, thesis, etc. View more",
  },
  {
    Question:
      "Will the loan be disbursed in favour of the Institute/college/university (Education Loans For Indian Education)",
    Answer:
      "Yes. The tuition and hostel fees (if any) will be disbursed directly to the educational institute as per the schedule and structure of fees given by them.",
  },
  {
    Question:
      "Do I have to make any repayment during the moratorium period (Education Loans For Indian Education)",
    Answer:
      "You have the option of servicing simple interest during moratorium period. Simple interest will be calculated on the loan amount disbursed payable monthly.",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest Retail Loan Service Center: Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "What are the charges I have to pay to change the mode of repayment/ account for my loan",
    Answer:
      "A service charge of Rs.500 is applicable for changes in loan repayment instructions issued from non-M&N  Bank Account (ECS or PDC facility). A cheque/payorder/demand draft for Rs. 500 favouring â€œM&N  Bank Ltd Loan Account No. << >>â€ will be required along with the revised set of repayment instructions",
  },
  {
    Question: "What is the mode of repayment for student loan in India",
    Answer:
      "You have the option of repaying the loan through a Standing instruction, ACHStands for Automated Clearing House. It is a mode by which funds are automatically debited to your account every month to pay or a certain bill or fee. It helps so you donâ€™t have to remember every month to pay your regular bills. It is only done after a standing instruction is given by the account holder. or post-dated cheques.",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/ account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "How do I obtain a Duplicate Repayment Schedule for my loan account",
    Answer:
      "You may obtain a Duplicate Repayment Schedule for your loan account, free of charge by registering for our NetBanking facility on www.M&N bank.com and download the repayment schedule for your linked loan account. Alternatively, you may visit the nearest Retail Loan Service Center and submit the following documents Request form for Duplicate Repayment Schedule. Duplicate Repayment Schedule Charges of Rs.200/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided",
  },
  {
    Question: "Which courses can I take an Education Loan for",
    Answer:
      "You can take an Education Loan for the following: Engineering/MS MBA/PGBM Medical Hotel Management *Other courses may be considered on a case to case basis",
  },
  {
    Question: "What all is the loan for â€“ study and stay or just study",
    Answer:
      "Education loan is normally taken for financing Tuition fees, living expenses (hostel etc.), books and periodicals and sometimes traveling",
  },
  {
    Question: "Why should I get loan sanction before admission",
    Answer:
      "The preferred way to declare â€˜Assured Funds to Universitiesâ€™ Better acceptance of the sanction letter over the solvency letter Increases your chances of getting admission to your dream college No last minute surprises specially during Visa time: Know your loan eligibility in advance Quick and hassle free process to get a sanction letter",
  },
  {
    Question: "Is there a moratorium/ repayment holiday available",
    Answer: "Yes. A moratorium holiday is available for the select courses.",
  },
  {
    Question: "What all is the loan for â€“ study and stay or just study",
    Answer:
      "Education loan is normally taken for financing tuition fees, living expenses (hostel etc.), books and periodicals and sometimes traveling.",
  },
  {
    Question: "Who can be my co-borrowers",
    Answer:
      "Relative with a good income and who can support your education loan application. Typically it can be your father, mother, brother, sister, spouse, cousin, paternal uncle (Chacha), paternal aunt (Chachi), maternal uncle (Mama), maternal aunt (Mami), grandfather, grandmother.",
  },
  {
    Question: "Do I need a co-borrower for the loan",
    Answer: "Yes a co-applicant is required for all full time courses.",
  },
  {
    Question: "Who can apply for Credila Education Loan",
    Answer:
      "Credila provides education loan to Indian students for higher studies in India and abroad. Credila has funded Indian students for pursuing higher studies in over 2000 institutes across 36 countries.",
  },
  {
    Question: "Can I apply before confirmed admission",
    Answer: "Yes you can apply before securing an admission.",
  },
  {
    Question: "How much loan can I get from Credila",
    Answer:
      "Credila is the only lender that not only finances up to 100% of the cost of education but also gives education loan over Rs. 20 lakh.",
  },
  {
    Question: "When do I start paying my EMI",
    Answer:
      "Credilaâ€™s unique education loan offers the flexibility of paying only simple interest (PEMI) during the course period and principle plus interest (EMI) after the completion of studies and grace period.",
  },
  {
    Question: "Will we get tax benefit on the interest paid on education loan",
    Answer:
      "Yes, every Credila borrower or co-borrower (any one) is entitled for Tax benefit under 80E of Income Tax Act, 1961.",
  },
  {
    Question:
      "Which course related expense does this loan cover (Education Loans For Foreign Education)",
    Answer:
      "Apart from the basic course fee payable to the institution where you decide to study, the following expenses will be covered under the loan: Exam/Library/Lab fees Caution deposit / Refundable deposit asked by the institution / Building fund - supported by Institution bills / receipts Purchase of Books / equipments / instrument / uniforms Travel expenses / passage money for studies abroad Purchase of computers - essential for completion of the course Insurance Miscellaneous expenses related to the course - like study tours, project work, thesis, etc. View more",
  },
  {
    Question:
      "Will the loan be disbursed in favour of the Institute/college/university (Education Loans For Foreign Education)",
    Answer:
      "Yes. The tuition and hostel fees (if any) will be disbursed directly to the educational institute as per the schedule and structure of fees given by them.",
  },
  {
    Question:
      "Do I need to provide collateral to avail of an education loan (Education Loans For Foreign Education)",
    Answer:
      "For loans up to Rs. 4 lakh - No collateral or Third Party Guarantee is required For loans from Rs. 4 lakh to Rs. 7.5 lakh â€“ No collateral required, however Third Party Guarantee is required For loans above Rs. 7.5 lakh â€“ collateral is required. You can choose from any of the following acceptable collaterals: Residential Property M&N  Bank Fixed Deposit LIC/NSC/KVP View more",
  },
  {
    Question:
      "How long is the tenure of the loan (Education Loans For Indian Education)",
    Answer:
      "The maximum tenure of the loan can be 7 years, including the Moratorium period.",
  },
  {
    Question:
      "Do I have to make any repayment during the moratorium period (Education Loans For Foreign Education)",
    Answer:
      "You have the option of servicing simple interest during moratorium period. Simple interest will be calculated on the loan amount disbursed payable monthly.",
  },
  {
    Question:
      "What is the mode of repayment (Education Loans For Foreign Education)",
    Answer:
      "You have the option of repaying the loan through a Standing instruction, ECS or post-dated cheques.",
  },
  {
    Question:
      "Which courses can I take an education loan for (Education Loans For Foreign Education)",
    Answer:
      "You can take a Education Loan for foreign education on the following courses: Management Courses (Full-Time) Engineering Courses Medicine - Graduation + Post Graduation Masters in Computer Application ( MCA / MCM ) Architecture Hotel and Hospitality Agriculture Pure Science View more",
  },
  {
    Question:
      "Is there moratorium/repayment holiday available (Education Loans For Foreign Education)",
    Answer:
      "Yes. A moratorium/repayment holiday is available for select courses.",
  },
  {
    Question: "What is the maximum loan amount I can get for studies abroad",
    Answer:
      "To study abroad, the maximum loan amount you can get is up to Rs. 20 lakhs.",
  },
  {
    Question:
      "Do I need a co-applicant for the loan (Education Loans For Foreign Education)",
    Answer:
      "Yes a co applicant is required for all full time courses. Here are a few points to be noted about co applicants: Primary Co-Applicants: Parents, Spouse, Siblings Secondary Co-Applicants: Father-In Law, Mother-In-Law, Brother-In-Law, Paternal / Maternal Uncle / Aunt View more",
  },
  {
    Question:
      "What does 'Moratorium period' mean (Education Loans For Foreign Education)",
    Answer:
      "A repayment moratorium (also called a repayment holiday) is the course work period + 1 year or 6 months after the student gets a job or starts earning, whichever is earlier.",
  },
  {
    Question: "What is the mode of repayment",
    Answer: "You have the option of repaying the loan through an ECS.",
  },
  {
    Question: "Do I have to make any repayments during the moratorium period",
    Answer:
      "You have the option of servicing simple interest during moratorium period. Simple interest will be calculated on the loan amount disbursed payable monthly.",
  },
  {
    Question: "What kind of collateral security is required",
    Answer:
      "Security which can support your loan amount is collateral. It can be a flat, house, non-agricultural land, fixed deposit, etc. Sufficient and good collateral security improves loan application significantly.",
  },
  {
    Question: "Who should opt for an education loan and why",
    Answer:
      "Usually, middle-income group people apply for education loans. However, because of: Rapidly rising costs of education Income tax benefit under 80 E of IT Act Students wanting to take their own financial responsibilities to preserve the parents savings build positive credit history Even affluent families are going for education loan",
  },
  {
    Question:
      "Do I have to pay any margin money - my own funding (Education Loans For Foreign Education)",
    Answer:
      "Margin Money upto Rs. 4.00 lacs - Nil, For loans above Rs. 4.00 lacs - 15%.",
  },
  {
    Question:
      "How do I know if I am eligible for an education loan for foreign education",
    Answer:
      "If you are an Indian resident/citizen, have got admission for a job oriented professional / technical courses offered by reputed universities, MBA, MCA, MS, etc, Degree / diploma courses like aeronautical, shipping, etc provided these are recognized by competent regulatory bodies in India/abroad for the purpose of employment in India / abroad.",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/ account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest Retail Loan Service Center: Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question: "How long does it take to process Gold Loan",
    Answer:
      "A gold loan is disbursed within One Hour. This is, however, subject to the verification of the gold and other documents that you submit. Approvals are at the sole discretion of the bank.",
  },
  {
    Question: "How much loan amount can be availed at a time",
    Answer:
      "Loan value starts from Rs.50000 onwards depending on the amount of Gold brought. Loans less than Rs 50000/- also available for rural markets.",
  },
  {
    Question: "Are there any benefits on Agricultural/Priority sector",
    Answer:
      "Yes, bank will give preferred interest rates and priority processing for the Priority sector.",
  },
  {
    Question: "How should the gold loan be repaid",
    Answer:
      "The best thing about Loan against Gold is that only servicing of the interest is required. Monthly out flow as low as Rs 1000 per lakh calculated basis indicative rate of 12% p.a",
  },
  {
    Question: "What security is required against the Gold Loan",
    Answer:
      "All gold to be brought to M&N â€™s designated/disbursement branch.We will value the gold and based on that valuation you can choose from the various product offerings, depending on your loan requirement.",
  },
  {
    Question: "What will be the tenure of Gold loan",
    Answer:
      "Gold Loan are available for tenures starting from 6 months, up to 48 months.",
  },
  {
    Question: "What are Benefits for M&N  Bank account holders",
    Answer:
      "Benefits are quick processing time and simplified documentation. Further there are preferred rates for customers who have a strong banking relationship with the bank.",
  },
  {
    Question: "What is De-pledge",
    Answer:
      "Removal of a pledge from the security to regain the rights over the security is called de-pledge. *Conditions Apply",
  },
  {
    Question: "What is Guarantor",
    Answer:
      "A Guarantor is a person who guarantees to pay for someone else's debt if he or she should default on a loan obligation.",
  },
  {
    Question: "What is Amortization",
    Answer:
      "Amortization is paying off debts in regular instalments over a period of time.",
  },
  {
    Question: "What is Pledge",
    Answer:
      "A right over the security is created in favour of M&N  Bank. Hence shares cannot be transferred or sold by the customer or shareholder.",
  },
  {
    Question: "What is RTGS",
    Answer:
      "RTGS is the Real Time Gross Settlement which is used for the transfer of amounts of Rs. 1,00,000 or more from one bank account to another bank account (any bank located anywhere in India if attached with an Internet system) at very minimal charges. The amount is credited into the beneficiary's account in real time. For amounts less than Rs. 1,00,000 we use NEFT( National Electronic Fund Transfer).",
  },
  {
    Question: "What is NEFT",
    Answer:
      "The National Electronic Funds Transfer (NEFT) system is a nation-wide funds transfer system to facilitate transfer of funds from any bank branch to any other bank branch.",
  },
  {
    Question: "What is SI",
    Answer:
      "SI stands for Standing Instructions. It is one of the modes you can use to repay a loan, wherein your M&N  Bank account is directly debited for the EMI amounts, based on your specific instructions in the form of the Standing Instructions Mandate.",
  },
  {
    Question: "What is CIBIL",
    Answer:
      "CIBIL stands for Credit Information Bureau India Limited. CIBIL's aim is to fulfil the need of credit granting institutions for comprehensive credit information by collecting, collating and disseminating credit information pertaining to both commercial and consumer borrowers, to a closed user group of members. Banks, Financial Institutions, Non-Banking Financial Companies, Housing Finance Companies and Credit Card Companies use CIBIL's services. Data sharing is based on the Principle of Reciprocity, which means that only Members who have submitted all their credit data may access Credit Information Reports from CIBIL. The establishment of CIBIL is an effort made by the Government of India and the Reserve Bank of India to improve the functionality and stability of the Indian financial system by containing NPAs while improving credit grantors' portfolio quality. CIBIL provides a vital service, which allows its Members to make informed, objective and faster credit decisions. View more",
  },
  {
    Question:
      "Which documents should I carry at the time of visiting M&N  bank",
    Answer:
      "You need to carry an Agreement Number, Self-attested Identification Proof containing your signature to avail of any information / deliverable along with a written request and produce the documents at the Customer Service Desk. If you want to change your address / contact details, you need to submit an address change request along with a Self-attested copy of your revised address proof. The Request form for Address Change is available on the Form Centre of M&N  Bank website. View more",
  },
  {
    Question: "Who can resolve my queries",
    Answer:
      "For your queries related to Loans (other than home loans), please visit the nearest Retail Asset Branch. You can also write to us at www.M&N bank.com/services with the following verification details or contact your nearest PhoneBanking officer: Loan account number Name of applicant / loan favouring Date of birth of the applicant (as provided in loan application form) Correspondence address Loan amount EMI amount Mode of repayment (standing instruction / ECS / post date cheques) Bank name and account number from which the EMIs are collected Query / Complain View more",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest the Retail Loan Service Center : Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question: "Are there any additional charges for loan repayment",
    Answer:
      "The additional charges (if any) are applicable in case you default or in case of SWAP (i.e. change the repayment mode). The charges are updated and can be viewed in the Fees & Charges section in the Bankâ€™s website of each loan product.",
  },
  {
    Question:
      "Do I have the option to structure my loan as partly fixed or partly floating",
    Answer:
      "Yes, you can structure your M&N  Ltd. Home Loan as Partly Fixed or Partly Floating as per your needs.",
  },
  {
    Question:
      "Can I give standing instructions to repay my Home Loan EMIs directly from my M&N  Bank Savings Account",
    Answer:
      "Yes, you can opt for Automated Repayment and your EMIs will be directly repaid from your M&N  Bank Savings Account, thus saving you the trouble of procuring, signing and tracking post-dated cheques.",
  },
  {
    Question: "What is Pledge",
    Answer:
      "A right over the security is created in favour of M&N  Bank. Hence shares cannot be transferred or sold by the customer or shareholder.",
  },
  {
    Question: "How will M&N  decide my home loan eligibility",
    Answer:
      "M&N  assess the customer's repayment capacity based on income, age, qualifications, number of dependants, spouse's income, assets, liabilities, stability and continuity of occupation, and savings history.",
  },
  {
    Question: "What is pre-EMI interest",
    Answer:
      "Pending final disbursement, you pay interest on the portion of the loan disbursed. This interest is called pre-EMI interest. Pre-EMI interest is payable every month from the date of each disbursement up to the date of commencement of EMI. *Conditions apply. All Home Loans from M&N  Ltd. Credit at sole discretion of M&N  Ltd.",
  },
  {
    Question: "Are my property documents safe with M&N  Ltd.",
    Answer:
      "M&N  offers in-house scrutiny of property documents for your complete peace of mind. So be assured that your property documents are in safe hands.",
  },
  {
    Question: "What Property can be considered as collateral for LAP",
    Answer:
      "You can provide your self-occupied Residential or Commercial property (Shops and Offices) as collateral.",
  },
  {
    Question: "Are there any additional charges for loan Pre-payment",
    Answer:
      "You may refer to the Fees & Charges option under the product Loan Against Property and Loan Against Rental Receivables. All terms and conditions are at the Sole discretion of M&N  Bank Ltd. The bank reserves the right to change/ modify any of the above at any time.",
  },
  {
    Question: "What are the fees & charges applicable",
    Answer:
      "You may refer to the Fees & Charges option under the product Loan Against Property and Loan Against Rental Receivables.",
  },
  {
    Question: "Can I avail an Overdraft against my Property",
    Answer:
      "A Loan Against Property can be availed as a Term Loan with EMI repayments or as a Drop line Overdraft Facility.",
  },
  {
    Question: "What is the maximum tenure to repay the Loan Against Property",
    Answer:
      "A Loan Against Rent Receivables can be sanctioned for a minimum tenure of 12 months and a maximum tenure of 108 months. This however depends on the balance lease period and other parameters.",
  },
  {
    Question: "What is the maximum loan I can get against my Property",
    Answer:
      "You can get a Loan Against Property up to a maximum of 60%* of the market value of your property. * conditions apply",
  },
  {
    Question: "How do I apply for a Loan Against Property (LAP)",
    Answer:
      "You can apply for a loan in the following ways: Fill in the online application form and our representative will get in touch with you Call one of our PhoneBanking numbers provided on the website Visit your nearest branch Our existing liability customers may also get in touch with their Relationship Managers/ Personal Bankers to know more and apply for LAP",
  },
  {
    Question:
      "How can I make a request to foreclose my Loan Against Property account",
    Answer:
      "Kindly submit a written request to your nearest Retail Loan Service Centre to close your account. Our customer service desk will provide you with the necessary assistance.",
  },
  {
    Question: "What is PDC",
    Answer:
      "PDC stands for Post dated cheques. PDCs are collected for repayment of EMIs.",
  },
  {
    Question:
      "What are the documents required to avail of the Loan Against Property",
    Answer:
      "For Salaried Individuals Proof of Residence - Any one of Ration Card / Telephone Bill / Electricity Bill / Voters Card. Proof of Identity - Any one of Voters Card / Drivers License / Employers Card. Latest Bank Statement / Passbook (where salary / income is credited for past 6 months). Latest 6 Months Salary Slip with all deductions and last 2 years Form 16. Copies of all Property Documents. For Self-Employed Individuals Certified Financial Statement for the last 2 years. Proof of Residence - Any one of Ration Card / Telephone Bill / Electricity Bill / Voters Card. Proof of Identity - Any one of Voters Card / Drivers License / Employers Card. Latest Bank Statement / Passbook (where salary / income is credited for past 6 months). Copies of all Property Documents. View more",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/ account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Center : Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Center : Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents (self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest Retail Loan Service Center : Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "What are the charges I have to pay to change the mode of repayment/ account for my loan",
    Answer:
      "A service charge of Rs.500 is applicable for changes in loan repayment instructions issued from non-M&N  Bank Account (ECS or PDC facility). A cheque/payorder/demand draft for Rs. 500 favouring M&N  Bank Ltd Loan Account No. << >> will be required along with the revised set of repayment instructions.",
  },
  {
    Question:
      "What are the charges I need to pay to foreclose my Loan Against Property",
    Answer:
      "In case you wish to foreclose your Loan Against Property, the foreclosure charges are applicable on the outstanding principal or Outstanding Limit as the case may be.(Pre-payment is allowed only after 6 months from the date of loan disbursement).",
  },
  {
    Question: "What are the charges I need to pay to foreclose my loan",
    Answer:
      "You may refer to the Fees & Charges option under the product Loan Against Property and Loan Against Rental Receivables.",
  },
  {
    Question:
      "How much time will it take to decision an application for Loan Against Property",
    Answer:
      "Applications would be decisioned within 6 days* *Subject to customer submitting all the required financial and collateral documents to the bank at the time of application. Also subject to legal & technical clearance of the property, Applicable for cases upto 3 crores.",
  },
  {
    Question: "What is De-pledge",
    Answer:
      "Removal of a pledge from the security to regain the rights over the security is called de-pledge. *Conditions Apply",
  },
  {
    Question: "What is Guarantor",
    Answer:
      "A Guarantor is a person who guarantees to pay for someone else's debt if he or she should default on a loan obligation.",
  },
  {
    Question: "What is Amortization",
    Answer:
      "Amortization is paying off debts in regular instalments over a period of time.",
  },
  {
    Question: "What is Pledge",
    Answer:
      "A right over the security is created in favour of M&N  Bank. Hence shares cannot be transferred or sold by the customer or shareholder.",
  },
  {
    Question: "What is RTGS",
    Answer:
      "RTGS is the Real Time Gross Settlement which is used for the transfer of amounts of Rs. 1,00,000 or more from one bank account to another bank account (any bank located anywhere in India if attached with an Internet system) at very minimal charges. The amount is credited into the beneficiary's account in real time. For amounts less than Rs. 1,00,000 we use NEFT( National Electronic Fund Transfer).",
  },
  {
    Question: "What is NEFT",
    Answer:
      "The National Electronic Funds Transfer (NEFT) system is a nation-wide funds transfer system to facilitate transfer of funds from any bank branch to any other bank branch.",
  },
  {
    Question: "What is SI",
    Answer:
      "SI stands for Standing Instructions. It is one of the modes you can use to repay a loan, wherein your M&N  Bank account is directly debited for the EMI amounts, based on your specific instructions in the form of the Standing Instructions Mandate.",
  },
  {
    Question: "What is CIBIL",
    Answer:
      "CIBIL stands for Credit Information Bureau India Limited. CIBIL's aim is to fulfil the need of credit granting institutions for comprehensive credit information by collecting, collating and disseminating credit information pertaining to both commercial and consumer borrowers, to a closed user group of members. Banks, Financial Institutions, Non-Banking Financial Companies, Housing Finance Companies and Credit Card Companies use CIBIL's services. Data sharing is based on the Principle of Reciprocity, which means that only Members who have submitted all their credit data may access Credit Information Reports from CIBIL. The establishment of CIBIL is an effort made by the Government of India and the Reserve Bank of India to improve the functionality and stability of the Indian financial system by containing NPAs while improving credit grantors' portfolio quality. CIBIL provides a vital service, which allows its Members to make informed, objective and faster credit decisions. View more",
  },
  {
    Question:
      "Which documents should I carry at the time of visiting M&N  bank",
    Answer:
      "You need to carry an Agreement Number, Self-attested Identification Proof containing your signature to avail of any information / deliverable along with a written request and produce the documents at the Customer Service Desk. If you want to change your address / contact details, you need to submit an address change request along with a Self-attested copy of your revised address proof. The Request form for Address Change is available on the Form Centre of M&N  Bank website. View more",
  },
  {
    Question: "Who can resolve my queries",
    Answer:
      "For your queries related to Loans (other than home loans), please visit the nearest Retail Asset Branch. You can also write to us at www.M&N bank.com/services with the following verification details or contact your nearest PhoneBanking officer: Loan account number Name of applicant / loan favouring Date of birth of the applicant (as provided in loan application form) Correspondence address Loan amount EMI amount Mode of repayment (standing instruction / ECS / post date cheques) Bank name and account number from which the EMIs are collected Query / Complain View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if my Registration Certificate is mutilated and  I wish to apply for a duplicate Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for the said purpose by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if I have lost my Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for your vehicle loan, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you for validation. Copy of FIR or certificate from police or Acknowledgement from Police on written complaint with General Diary No. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for settling a partial loss Insurance Claim for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC to settle the partial insurance claim in your favour, provided there are no outstandings to your loan account, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Original Insurance Policy(will be returned back to you at the centre, post validation). Copy of the Insurance Policy, duly self attested by you. Claim Voucher provided by Insurance Company Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring â€œM&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Note, for Total Loss, Claims will be settled in favour of the Bank to close the loan based on the Loan Pre-Termination Statement as on the date of request and in case of any excess claim received from the Insurance Company, a refund will be made favouring the customer. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for fitting an LPG/CNG kit on my vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for fitting an LPG/CNG kit on your registered vehicle under finance with us by visiting any of our the Retail Loan Service Center and submitting the following documents: Request form for LPG/CNG NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, we request you to visit the nearest Retail Loan Service Center and submit the following documents: Request form for Address Change. Self attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question: "What are the different loan repayment modes",
    Answer:
      "The loan can be repaid through a Standing Instruction (to debit your M&N  Bank Savings/Current Account for repayment of EMIs) or ECS (to debit your External Bank Account for repayment of EMIs) or by a complete set of Post Dated Cheques.",
  },
  {
    Question:
      "If I have shares of one company only, can I get a limit against just one script",
    Answer:
      "Yes, you can get limits by pledging any of the approved single scripts under our Single Scrip Scheme. (Do note that the drawing power on these single scripts will range from 25% to 50%)",
  },
  {
    Question:
      "How do I obtain a Duplicate Repayment Schedule for my loan account",
    Answer:
      "You may obtain a Duplicate Repayment Schedule for your loan account, free of charge by registering for our NetBanking facility on www.M&N bank.com and download the repayment schedule for your linked loan account. Alternatively, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Duplicate Repayment Schedule. Duplicate Repayment Schedule Charges of Rs.200/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided View more",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question:
      "How do I obtain a duplicate NOC/Form 35 for a vehicle loan that has been closed and fully repaid",
    Answer:
      "You may obtain a duplicate NOC/Form 35 for your vehicle by visiting any of our the Retail Loan Service Center and submit the following documents: Request form for Duplicate NOC/Form 35. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring â€œM&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Please note that the Loan Closure NOC/Form 35 will not be issued if any of the following conditions apply: Copy of RC Book is not submitted The same vehicle is encumbered to the Bank for any other loan facility Any notice from a competent authority restraining the Bank from release of hypothecation If there are any existing over dues, direct or otherwise, in your name View more",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest the Retail Loan Service Center : Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question: "Are there any additional charges for loan repayment",
    Answer:
      "The additional charges (if any) are applicable in case you default or in case of SWAP (i.e. change the repayment mode). The charges are updated and can be viewed in the Fees & Charges section in the Bankâ€™s website of each loan product.",
  },
  {
    Question: "Can I repay my loan earlier than the due date",
    Answer:
      "Yes you can repay your loan at any time during the loan tenure. However prepayment is not permitted within 6 months from loan disbursal date. For charge details, Click here",
  },
  {
    Question:
      "What are the other benefits that I can get from my Loan Against Securities Account",
    Answer:
      "All the benefits that we offer on the Current Account are also applicable to the Overdraft account. This includes facilities like Phone Banking, NetBanking, BillPay and ATM. As a privileged Loan Against Securities customer, you will be entitled to our FREE International Debit Card.(only for the first holder)",
  },
  {
    Question: "Is my overdraft limit fixed",
    Answer:
      "This will completely depend on the market rate of the securities that you have pledged. Of course, we will value your portfolio periodically to determine your overdraft limit. You can increase your overdraft limit by pledging more shares/securities , or decrease it by withdrawing them â€“ that's completely up to you.",
  },
  {
    Question: "Is there any charge in the LAS Account if there are no limits",
    Answer:
      "Yes, for accounts with no limits in a month a Zero Limit charge of Rs. 1000 plus taxes for that month is levied. For details of other charges levied in LAS accounts, Click here",
  },
  {
    Question: "How can I get my securities released",
    Answer:
      "Please submit a security release request letter mentioning certificate numbers, the FAS account number (Agreement number), the Overdraft account number (signed by all the account holders) and the respective security holder. This letter needs to be submitted at any of our Loan Against Securities desks or to a branch that has a Loan against securities facility",
  },
  {
    Question: "What is the procedure to get the TRF booklet",
    Answer:
      "We have revised the process for the issue of Transfer Request Forms to eligible Customers. These will no longer be available over-the-counter (as and when required) at our LAS Service Centres but will have to be indented from our Central Processing Unit. An application form is enclosed which will have to be used to place indents (maximum 10 nos. of TRF Forms per request). Application Forms are also available at our LAS Service Centres and on our website In this connection, kindly also note that: 1. The Transfer Request Forms will be serially numbered with your Client ID duly stamped thereon, 2. The serial numbers will be maintained in our systems and any request for pledge/withdrawal must only be submitted on a TRF issued to your account. No deviations can be allowed and you are requested to ensure that adequate number of forms are available to meet your normal requirements. Our Bank will not be responsible for any delay in transaction due to non-availability of TRF. 3. The book of Transfer Request Forms will be couriered directly to your mailing address on record within a maximum of 7 working days, once the application is received and found to be in order. We suggest that your mailing address be checked and updated (if required). Our Bank will not be responsible for any delays in delivery due to incorrect / incomplete address. 4. The book containing the Transfer Request Forms must be handled with care and kept secure at all times. Any loss, misplacement or damage must immediately be reported to the LAS Service Desk. 5. For now, applications for TRF can only be submitted through LAS Service Desks. However, the facility will soon be available through NetBanking. In case you are not registered for NetBanking, kindly visit our website (www.M&N bank.com) to register for the facility online. View more",
  },
  {
    Question:
      "How would I pay the interest debited to my Loan Against Securities account each month",
    Answer:
      "Simply service your interest payable at monthly intervals through credits in your overdraft account.(As per RBI Guidelines DBOD.NO.BP.BC.10/21.04.048/2004)",
  },
  {
    Question: "Do I get statements for my account",
    Answer:
      "Monthly statements of accounts are sent to you. The facility of email statement of accounts is also available.",
  },
  {
    Question: "What is the minimum Loan value",
    Answer: "The minimum loan value is Rs. 2 Lakhs.",
  },
  {
    Question: "How frequently will my portfolio be re-valued",
    Answer:
      "We generally do that on a weekly basis, unless there is a sudden fall in the market prices. In that case, we can conduct an Interim revaluation.",
  },
  {
    Question: "Would the shares be held in my name",
    Answer:
      "The shares will remain in your name only. A loan against security lets you reap your regular benefits from shares such as rights, dividends and bonuses whilst you take a loan against them.",
  },
  {
    Question:
      "What are the documents required to avail of the Loans Against Rental Receivables",
    Answer:
      "Proof of Residence - Any one of Ration Card / Telephone Bill / Electricity Bill / Voters Card. Proof of Identity - Any one of Voters Card / Drivers License / Employers Card. Latest Bank Statement / Passbook (where rentals are credited for past 12 months). Copy of current Lease Agreement Copies of all Property Documents.",
  },
  {
    Question: "How much loan can be offered against my Property",
    Answer:
      "A Loan Against Rent Receivables can be extended up to a maximum of 50%* of market value of your property. However this dependent on Net Rentals, balance tenure & other parameters.",
  },
  {
    Question: "How do I apply for a Loan Against Rent Receivables (LARR)",
    Answer:
      "You can apply for a Loan Against Rent Receivables in the following ways: Fill and submit in the Online Application Form and our representative will get in touch with you. Call on one of our PhoneBanking numbers provided on the website Visit your nearest M&N  Bank branch Our existing Liability customers may also get in touch with their Relationship Managers/ Personal Bankers to know more and apply for a LARR",
  },
  {
    Question: "What are the Fees and Charges applicable",
    Answer:
      "You may refer to the â€œFees & Chargesâ€ option under the product â€œLoan against Rent Receivablesâ€.",
  },
  {
    Question:
      "How much time will it take to decision an application for Loan Against Rental Receivables",
    Answer:
      "Applications would be decisioned within 7 days, and in cases which involve customer availability for completing a field investigation or title search and valuation of a property, within 25 days.",
  },
  {
    Question: "What is EMI",
    Answer: "EMI stands for Equated Monthly Installments.",
  },
  {
    Question: "Are there any additional charges for loan Prepayment",
    Answer:
      "You may refer to the â€œFees & Chargesâ€ option under the product â€œLoan against Propertyâ€ and â€œLoan Against Rent Receivablesâ€. â€˜* All terms and conditions are at the Sole discretion of M&N  Bank Ltd. The bank reserves the right to change/ modify any of the above at any time.",
  },
  {
    Question:
      "What are the charges I need to pay to foreclose my Loans Against Rental Receivable",
    Answer:
      "In case you wish to foreclose your Loan Against Property, the foreclosure charges are applicable on the outstanding principal or Outstanding Limit as the case may be.(Pre-payment is allowed only after 6 months from the date of loan disbursement).",
  },
  {
    Question:
      "How can I make a request to foreclose my Loans Against Rental Receivables account",
    Answer:
      "Kindly submit a written request to your nearest Retail Loan Service Centre to close your account. Our customer service desk will provide you with the necessary assistance.",
  },
  {
    Question: "How should I apply for a duplicate NOC/ closure letter",
    Answer:
      "(Loans Against Rental Receivables)We request you to visit our nearest Retail Asset Branch along with a written request for a duplicate No Objection Certificate (NOC) and your photo identity proof.",
  },
  {
    Question: "What Property can be considered as collateral for LARR",
    Answer:
      "You can provide Commercial Property (Shops & Offices) leased to reputed lessees as collateral for a Loan Against Rent Receivables.",
  },
  {
    Question:
      "What is the maximum tenure to repay the Loans Against Rental Receivables",
    Answer:
      "A Loan Against Rent Receivables can be sanctioned for a minimum tenure of 12 months and a maximum tenure of 108 months. This however depends on the balance lease period and other parameters.",
  },
  {
    Question: "How long will it take for my Professional loan to be processed",
    Answer:
      "Once you submit your application form and the required documents as per Bank''s criteria, you can expect our approval and disbursal within 7 working days, provided everything is in order. All loan approvals are at the sole discretion of the bank.",
  },
  {
    Question: "Can I repay the loan earlier for Professionals Loan",
    Answer:
      "Yes, you can choose to repay your loan anytime after 06 months of taking the loan and after you have paid 06 EMIs along with applicable foreclosure charges. Please note Loan can be foreclosed by issuing a Demand draft / cheque at the branch; kindly note that cash beyond Rs. 49000/- will not be accepted for loan repayment against full closure/matured loan closure payment. Any payment above Rs. 49000/- should be made vide Account payee Cheque / Pay order /Demand draft.",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/ account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question:
      "What are the charges I have to pay to change the mode of repayment/ account for my loan",
    Answer:
      "A service charge of Rs.500 is applicable for changes in loan repayment instructions issued from non-M&N  Bank Account (ECS or PDC facility). A cheque/payorder/demand draft for Rs. 500 favouring â€œM&N  Bank Ltd Loan Account No. << >>â€ will be required along with the revised set of repayment instructions.",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Center: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Center: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >>*** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest Retail Loan Service Center: Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a Duplicate Repayment Schedule for my loan account",
    Answer:
      "You may obtain a Duplicate Repayment Schedule for your loan account, free of charge by registering for our NetBanking facility on www.M&N bank.com and download the repayment schedule for your linked loan account. Alternatively, you may visit the nearest Retail Loan Service Center and submit the following documents Request form for Duplicate Repayment Schedule. Duplicate Repayment Schedule Charges of Rs.200/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided",
  },
  {
    Question: "What security do I need to provide to obtain Professionals loan",
    Answer:
      "To obtain the loan, there is absolutely no need to provide any security or collateral.",
  },
  {
    Question: "What are the loan tenure options for Professionals Loan",
    Answer: "You can repay your loan over a period of 12 to 60 months",
  },
  {
    Question:
      "What are the benefits of having a Current/Saving Account for my Loan to Professionals",
    Answer:
      "You get preferred Processing Fee, priority processing and simpler documentation if you have a Current/Saving Account with M&N  Bank. This is taken into account at the time of disbursal of the loan. You can pay through Standing Instructions to debit your M&N  Bank account with the EMI amount.",
  },
  {
    Question: "How much loan can I avail of for Professionals",
    Answer:
      "You can avail of a loan from Rs 50,000/- to Rs 40,00,000/- depending on your income, repayment capacity and respective location product cap.",
  },
  {
    Question: "How do I repay my Professionals loan",
    Answer:
      "You pay the loan in equal monthly instalments (EMIs). The loan will be paid through post-dated cheques. You can also pay through Electronic Clearing System (ECS ) or a standing instruction to debit your M&N  Bank account with the EMI amount",
  },
  {
    Question: "How long can I take to repay my personal loan",
    Answer:
      "We offer flexible repayment options ranging from 12 to 60 months, depending on the customerâ€™s profile.",
  },
  {
    Question: "How much can I borrow",
    Answer:
      "You can take a loan ranging from Rs. 50,000 to Rs. 15,00,000, depending on your income and repayment capacity. You can club your spouseâ€™s income if you want to get a bigger loan.",
  },
  {
    Question: "How can I repay my Personal Loan",
    Answer:
      "You pay the loan in equal monthly instalments (EMIs). The loan will be paid through post-dated cheques. You can also pay through ECS or a standing instruction to debit your M&N  Bank account with the EMI amount. Try our EMI calculator to calculate how much you need to pay each month.",
  },
  {
    Question: "Is part-prepayment of a Personal Loan allowed",
    Answer:
      "No, part prepayment is not allowed. The loan has to either be prepaid in full or serviced for the contracted tenure.",
  },
  {
    Question: "How does a Salary Account help me get a personal loan",
    Answer:
      "You get a preferential rate of interest and processing fee, speedy processing and minimal documentation if you have a Salary Account with M&N  Bank. This is taken into account at the time of disbursal of the loan. You can pay through a Standing Instruction to debit your M&N  Bank account with the EMI amount.",
  },
  {
    Question:
      "Do I need to provide any security or collateral to obtain a personal loan from M&N  Bank",
    Answer:
      "No you donâ€™t have to provide any security, collateral or guarantee.",
  },
  {
    Question: "What is De-pledge",
    Answer:
      "Removal of a pledge from the security to regain the rights over the security is called de-pledge. *Conditions Apply",
  },
  {
    Question: "What is Guarantor",
    Answer:
      "A Guarantor is a person who guarantees to pay for someone else's debt if he or she should default on a loan obligation.",
  },
  {
    Question: "What is Amortization",
    Answer:
      "Amortization is paying off debts in regular instalments over a period of time.",
  },
  {
    Question: "What is Pledge",
    Answer:
      "A right over the security is created in favour of M&N  Bank. Hence shares cannot be transferred or sold by the customer or shareholder.",
  },
  {
    Question: "What is RTGS",
    Answer:
      "RTGS is the Real Time Gross Settlement which is used for the transfer of amounts of Rs. 1,00,000 or more from one bank account to another bank account (any bank located anywhere in India if attached with an Internet system) at very minimal charges. The amount is credited into the beneficiary's account in real time. For amounts less than Rs. 1,00,000 we use NEFT( National Electronic Fund Transfer).",
  },
  {
    Question: "What is NEFT",
    Answer:
      "The National Electronic Funds Transfer (NEFT) system is a nation-wide funds transfer system to facilitate transfer of funds from any bank branch to any other bank branch.",
  },
  {
    Question: "What is SI",
    Answer:
      "SI stands for Standing Instructions. It is one of the modes you can use to repay a loan, wherein your M&N  Bank account is directly debited for the EMI amounts, based on your specific instructions in the form of the Standing Instructions Mandate.",
  },
  {
    Question: "What is CIBIL",
    Answer:
      "CIBIL stands for Credit Information Bureau India Limited. CIBIL's aim is to fulfil the need of credit granting institutions for comprehensive credit information by collecting, collating and disseminating credit information pertaining to both commercial and consumer borrowers, to a closed user group of members. Banks, Financial Institutions, Non-Banking Financial Companies, Housing Finance Companies and Credit Card Companies use CIBIL's services. Data sharing is based on the Principle of Reciprocity, which means that only Members who have submitted all their credit data may access Credit Information Reports from CIBIL. The establishment of CIBIL is an effort made by the Government of India and the Reserve Bank of India to improve the functionality and stability of the Indian financial system by containing NPAs while improving credit grantors' portfolio quality. CIBIL provides a vital service, which allows its Members to make informed, objective and faster credit decisions. View more",
  },
  {
    Question: "Can I repay the Personal loan earlier",
    Answer:
      "Yes, you can choose to repay your loan anytime after 12 months of taking the loan and after you have paid 12 EMIs along with applicable foreclosure charges. Please note Loan can be foreclosed by issuing a Demand draft / cheque at the branch; kindly note that cash beyond Rs. 49000/- will not be accepted for loan repayment against part prepayment/ full payment / matured loan closure payment. Any payment above Rs. 49000/- should be made vide Account payee Cheque / Pay order /Demand draft.",
  },
  {
    Question:
      "Which documents should I carry at the time of visiting M&N  bank",
    Answer:
      "You need to carry an Agreement Number, Self-attested Identification Proof containing your signature to avail of any information / deliverable along with a written request and produce the documents at the Customer Service Desk. If you want to change your address / contact details, you need to submit an address change request along with a Self-attested copy of your revised address proof. The Request form for Address Change is available on the Form Centre of M&N  Bank website. View more",
  },
  {
    Question: "Who can resolve my queries",
    Answer:
      "For your queries related to Loans (other than home loans), please visit the nearest Retail Asset Branch. You can also write to us at www.M&N bank.com/services with the following verification details or contact your nearest PhoneBanking officer: Loan account number Name of applicant / loan favouring Date of birth of the applicant (as provided in loan application form) Correspondence address Loan amount EMI amount Mode of repayment (standing instruction / ECS / post date cheques) Bank name and account number from which the EMIs are collected Query / Complain View more",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest the Retail Loan Service Center : Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "How do I obtain a Duplicate Repayment Schedule for my loan account",
    Answer:
      "You may obtain a Duplicate Repayment Schedule for your loan account, free of charge by registering for our NetBanking facility on www.M&N bank.com and download the repayment schedule for your linked loan account. Alternatively, you may visit the nearest Retail Loan Service Center and submit the following documents Request form for Duplicate Repayment Schedule. Duplicate Repayment Schedule Charges of Rs.200/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided",
  },
  {
    Question:
      "What are the charges I have to pay to change the mode of repayment/ account for my loan",
    Answer:
      "A service charge of Rs.500 is applicable for changes in loan repayment instructions issued from non-M&N  Bank Account (ECS or PDC facility). A cheque/payorder/demand draft for Rs. 500 favouring â€œM&N  Bank Ltd Loan Account No. << >>â€ will be required along with the revised set of repayment instructions.",
  },
  {
    Question: "Are there any additional charges for loan repayment",
    Answer:
      "The additional charges (if any) are applicable in case you default or in case of SWAP (i.e. change the repayment mode). The charges are updated and can be viewed in the Fees & Charges section in the Bankâ€™s website of each loan product.",
  },
  {
    Question: "How long will it take for my Personal loan to be processed",
    Answer:
      "Once you submit your application form and the required documents as per Bank's criteria, you can expect our approval and disbursal within 5 working days, provided everything is in order. All loan approvals are at the sole discretion of the bank.",
  },
  {
    Question: "What is De-pledge",
    Answer:
      "Removal of a pledge from the security to regain the rights over the security is called de-pledge. *Conditions Apply",
  },
  {
    Question: "What is Guarantor",
    Answer:
      "A Guarantor is a person who guarantees to pay for someone else's debt if he or she should default on a loan obligation.",
  },
  {
    Question: "What is Amortization",
    Answer:
      "Amortization is paying off debts in regular instalments over a period of time.",
  },
  {
    Question: "What is Pledge",
    Answer:
      "A right over the security is created in favour of M&N  Bank. Hence shares cannot be transferred or sold by the customer or shareholder.",
  },
  {
    Question: "What is RTGS",
    Answer:
      "RTGS is the Real Time Gross Settlement which is used for the transfer of amounts of Rs. 1,00,000 or more from one bank account to another bank account (any bank located anywhere in India if attached with an Internet system) at very minimal charges. The amount is credited into the beneficiary's account in real time. For amounts less than Rs. 1,00,000 we use NEFT( National Electronic Fund Transfer).",
  },
  {
    Question: "What is NEFT",
    Answer:
      "The National Electronic Funds Transfer (NEFT) system is a nation-wide funds transfer system to facilitate transfer of funds from any bank branch to any other bank branch.",
  },
  {
    Question: "What is SI",
    Answer:
      "SI stands for Standing Instructions. It is one of the modes you can use to repay a loan, wherein your M&N  Bank account is directly debited for the EMI amounts, based on your specific instructions in the form of the Standing Instructions Mandate.",
  },
  {
    Question: "What is CIBIL",
    Answer:
      "CIBIL stands for Credit Information Bureau India Limited. CIBIL's aim is to fulfil the need of credit granting institutions for comprehensive credit information by collecting, collating and disseminating credit information pertaining to both commercial and consumer borrowers, to a closed user group of members. Banks, Financial Institutions, Non-Banking Financial Companies, Housing Finance Companies and Credit Card Companies use CIBIL's services. Data sharing is based on the Principle of Reciprocity, which means that only Members who have submitted all their credit data may access Credit Information Reports from CIBIL. The establishment of CIBIL is an effort made by the Government of India and the Reserve Bank of India to improve the functionality and stability of the Indian financial system by containing NPAs while improving credit grantors' portfolio quality. CIBIL provides a vital service, which allows its Members to make informed, objective and faster credit decisions. View more",
  },
  {
    Question:
      "Which documents should I carry at the time of visiting M&N  bank",
    Answer:
      "You need to carry an Agreement Number, Self-attested Identification Proof containing your signature to avail of any information / deliverable along with a written request and produce the documents at the Customer Service Desk. If you want to change your address / contact details, you need to submit an address change request along with a Self-attested copy of your revised address proof. The Request form for Address Change is available on the Form Centre of M&N  Bank website. View more",
  },
  {
    Question: "Who can resolve my queries",
    Answer:
      "For your queries related to Loans (other than home loans), please visit the nearest Retail Asset Branch. You can also write to us at www.M&N bank.com/services with the following verification details or contact your nearest PhoneBanking officer: Loan account number Name of applicant / loan favouring Date of birth of the applicant (as provided in loan application form) Correspondence address Loan amount EMI amount Mode of repayment (standing instruction / ECS / post date cheques) Bank name and account number from which the EMIs are collected Query / Complain View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for settling a partial loss Insurance Claim for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC to settle the partial insurance claim in your favour, provided there are no outstandings to your loan account, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Original Insurance Policy (will be returned back to you at the centre, post validation). Copy of the Insurance Policy, duly self attested by you. Claim Voucher provided by Insurance Company Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Note, for Total Loss, Claims will be settled in favour of the Bank to close the loan based on the Loan Pre-Termination Statement as on the date of request and in case of any excess claim received from the Insurance Company, a refund will be made favouring the customer. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if my Registration Certificate is mutilated and  I wish to apply for a duplicate Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for the said purpose by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if I have lost my Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for your vehicle loan, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you for validation. Copy of FIR or certificate from police or Acknowledgement from Police on written complaint with General Diary No. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a duplicate NOC/Form 35 for a vehicle loan that has been closed and fully repaid",
    Answer:
      "You may obtain a duplicate NOC/Form 35 for your vehicle by visiting any of our the Retail Loan Service Center and submit the following documents: Request form for Duplicate NOC/Form 35. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Please note that the Loan Closure NOC/Form 35 will not be issued if any of the following conditions apply: Copy of RC Book is not submitted. The same vehicle is encumbered to the Bank for any other loan facility. Any notice from a competent authority restraining the Bank from release of hypothecation. If there are any existing over dues, direct or otherwise, in your name. View more",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, we request you to visit the Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "What will be done with the post dated cheques if I request to change the mode of repayment/account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest the Retail Loan Service Center : Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question: "Who is eligible for a tractor loan",
    Answer:
      "Whether you are a farmer or not, you can avail M&N  Bank's Tractor loan for agricultural or commercial purposes. If you are a farmer, you must have a minimum of 3 acres of agricultural land. To know about the eligibility criteria in detail, click here.",
  },
  {
    Question: "Can I get a tractor loan for any tractor I want to purchase",
    Answer:
      "If your tractor is made by a leading automobile manufacturer in India, you can get a loan.",
  },
  {
    Question: "What are the different modes of loan repayment",
    Answer:
      "Customer has option of Monthly, Bi-monthly, Quarterly & Haly yearly repayment options, depending on customer segment and product variant.",
  },
  {
    Question: "Can I pre-pay the entire loan amount",
    Answer:
      "Yes, you will have to pay a pre-payment fee of 4% if you pay your entire loan before 12 months from the date of disbursement. You will have to pay a pre-payment fee of 2 % if you pay your loan after 12 months from the date of disbursement.",
  },
  {
    Question: "Do you want to repay the loan earlier than the due date",
    Answer:
      "If you want to repay your loan earlier than the due date, feel free to do so.",
  },
  {
    Question: "Is a guarantor required",
    Answer:
      "You will require a guarantor in all cases except certain segments where you have offered agricultural land as additional collateral.",
  },
  {
    Question: "What if I want to repay the loan earlier than the due date",
    Answer:
      "If you want to repay your loan earlier than the due date, feel free to do so.",
  },
  {
    Question: "What is the maximum loan amount I can take on a Tractor Loan",
    Answer:
      "You can borrow up to 90%, subject to credit underwriting standards of the bank.",
  },
  {
    Question:
      "How do I obtain a duplicate NOC/Form 35 for a vehicle loan that has been closed and fully repaid",
    Answer:
      "You may obtain a duplicate NOC/Form 35 for your vehicle by visiting any of our the Retail Loan Service Center and submit the following documents: Request form for Duplicate NOC/Form 35. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Please note that the Loan Closure NOC/Form 35 will not be issued if any of the following conditions apply: Copy of RC Book is not submitted. The same vehicle is encumbered to the Bank for any other loan facility. Any notice from a competent authority restraining the Bank from release of hypothecation. If there are any existing over dues, direct or otherwise, in your name. View more",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest the Retail Loan Service Center : Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, we request you to visit the Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for settling a partial loss Insurance Claim for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC to settle the partial insurance claim in your favour, provided there are no outstandings to your loan account, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Original Insurance Policy (will be returned back to you at the centre, post validation). Copy of the Insurance Policy, duly self attested by you. Claim Voucher provided by Insurance Company Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents (self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Note, for Total Loss, Claims will be settled in favour of the Bank to close the loan based on the Loan Pre-Termination Statement as on the date of request and in case of any excess claim received from the Insurance Company, a refund will be made favouring the customer. View more",
  },
  {
    Question:
      "What are the charges I have to pay to change the mode of repayment/ account for my loan",
    Answer:
      "A service charge of Rs.500 is applicable for changes in loan repayment instructions issued from non-M&N  Bank Account (ECS or PDC facility). A cheque/payorder/demand draft for Rs. 500 favouring â€œM&N  Bank Ltd Loan Account No. << >> will be required along with the revised set of repayment instructions.",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if my Registration Certificate is mutilated and  I wish to apply for a duplicate Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for the said purpose by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if I have lost my Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for your vehicle loan, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you for validation. Copy of FIR or certificate from police or Acknowledgement from Police on written complaint with General Diary No. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "What will be done with the post-dated cheques if I request to change the mode of repayment/account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question: "How do I utilize this amount",
    Answer:
      "This amount is made available in your Salary Account. You can withdraw it through the regular modes i.e. ATM, Cheques, online transfers.",
  },
  {
    Question:
      "How many salary credits are required in my existing account to qualify for SmartDraft",
    Answer: "To qualify for SmartDraft you need a minimum of 3 salary credits.",
  },
  {
    Question: "What is the amount I can get as an overdraft",
    Answer:
      "Depending on your eligibility, the maximum amount you can avail as an overdraft is Rs. 1 Lakh. The minimum overdraft amount is Rs. 25,000.",
  },
  {
    Question: "When will my SmartDraft limit be renewed",
    Answer:
      "Based on your account performance and salary credits, your overdraft limit will be renewed after 12 months once the payment of the annual renewal fee is made.",
  },
  {
    Question: "Which locations is SmartDraft available in",
    Answer:
      "SmartDraft is available in the following locations only: Mumbai, Delhi, Gurgaon, Noida, Bangalore, Chennai, Hyderabad, Secunderabad, Kolkata, Pune, Nasik, Jaipur, Baroda, Indore, Bharuch, Surat, Silvasa, Chandigarh, Ludhiana, Patiala, Coimbatore, Ahmedabad, Lucknow, Calicut, Trichur and Cochin.",
  },
  {
    Question: "Am I eligible for SmartDraft",
    Answer:
      "Yes you are eligible for SmartDraft, if your salary account with us has regular salary credits and your company is on our approved list for overdraft facility. Also, your minimum net monthly income must be Rs. 15,000.",
  },
  {
    Question: "What is De-pledge",
    Answer:
      "Removal of a pledge from the security to regain the rights over the security is called de-pledge. *Conditions Apply",
  },
  {
    Question: "What is Guarantor",
    Answer:
      "A Guarantor is a person who guarantees to pay for someone else's debt if he or she should default on a loan obligation.",
  },
  {
    Question: "What is Amortization",
    Answer:
      "Amortization is paying off debts in regular instalments over a period of time.",
  },
  {
    Question: "What is Pledge",
    Answer:
      "A right over the security is created in favour of M&N  Bank. Hence shares cannot be transferred or sold by the customer or shareholder.",
  },
  {
    Question: "What is RTGS",
    Answer:
      "RTGS is the Real Time Gross Settlement which is used for the transfer of amounts of Rs. 1,00,000 or more from one bank account to another bank account (any bank located anywhere in India if attached with an Internet system) at very minimal charges. The amount is credited into the beneficiary's account in real time. For amounts less than Rs. 1,00,000 we use NEFT( National Electronic Fund Transfer).",
  },
  {
    Question: "What is NEFT",
    Answer:
      "The National Electronic Funds Transfer (NEFT) system is a nation-wide funds transfer system to facilitate transfer of funds from any bank branch to any other bank branch.",
  },
  {
    Question: "What is SI",
    Answer:
      "SI stands for Standing Instructions. It is one of the modes you can use to repay a loan, wherein your M&N  Bank account is directly debited for the EMI amounts, based on your specific instructions in the form of the Standing Instructions Mandate.",
  },
  {
    Question: "What is CIBIL",
    Answer:
      "CIBIL stands for Credit Information Bureau India Limited. CIBIL's aim is to fulfil the need of credit granting institutions for comprehensive credit information by collecting, collating and disseminating credit information pertaining to both commercial and consumer borrowers, to a closed user group of members. Banks, Financial Institutions, Non-Banking Financial Companies, Housing Finance Companies and Credit Card Companies use CIBIL's services. Data sharing is based on the Principle of Reciprocity, which means that only Members who have submitted all their credit data may access Credit Information Reports from CIBIL. The establishment of CIBIL is an effort made by the Government of India and the Reserve Bank of India to improve the functionality and stability of the Indian financial system by containing NPAs while improving credit grantors' portfolio quality. CIBIL provides a vital service, which allows its Members to make informed, objective and faster credit decisions. View more",
  },
  {
    Question:
      "Which documents should I carry at the time of visiting M&N  bank",
    Answer:
      "You need to carry an Agreement Number, Self-attested Identification Proof containing your signature to avail of any information / deliverable along with a written request and produce the documents at the Customer Service Desk. If you want to change your address / contact details, you need to submit an address change request along with a Self-attested copy of your revised address proof. The Request form for Address Change is available on the Form Centre of M&N  Bank website. View more",
  },
  {
    Question: "Who can resolve my queries",
    Answer:
      "For your queries related to Loans (other than home loans), please visit the nearest Retail Asset Branch. You can also write to us at www.M&N bank.com/services with the following verification details or contact your nearest PhoneBanking officer: Loan account number Name of applicant / loan favouring Date of birth of the applicant (as provided in loan application form) Correspondence address Loan amount EMI amount Mode of repayment (standing instruction / ECS / post date cheques) Bank name and account number from which the EMIs are collected Query / Complain View more",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "How do I obtain a duplicate NOC/Form 35 for a vehicle loan that has been closed and fully repaid",
    Answer:
      "You may obtain a duplicate NOC/Form 35 for your vehicle by visiting any of our the Retail Loan Service Center and submit the following documents: Request form for Duplicate NOC/Form 35. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Please note that the Loan Closure NOC/Form 35 will not be issued if any of the following conditions apply: Copy of RC Book is not submitted The same vehicle is encumbered to the Bank for any other loan facility Any notice from a competent authority restraining the Bank from release of hypothecation If there are any existing over dues, direct or otherwise, in your name",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for fitting an LPG/CNG kit on my vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for fitting an LPG/CNG kit on your registered vehicle under finance with us by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for LPG/CNG NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for settling a partial loss Insurance Claim for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC to settle the partial insurance claim in your favour, provided there are no outstandings to your loan account, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Original Insurance Policy(will be returned back to you at the centre, post validation). Copy of the Insurance Policy, duly self attested by you. Claim Voucher provided by Insurance Company Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Note, for Total Loss, Claims will be settled in favour of the Bank to close the loan based on the Loan Pre-Termination Statement as on the date of request and in case of any excess claim received from the Insurance Company, a refund will be made favouring the customer.",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if I have lost my Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for your vehicle loan, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self-attested copy of the Registration Certificate book, duly self-attested by you for validation. Copy of FIR or certificate from police or Acknowledgement from Police on written complaint with General Diary No. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if my Registration Certificate is mutilated and  I wish to apply for a duplicate Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for your vehicle loan, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "How do I obtain a Duplicate Repayment Schedule for my loan account",
    Answer:
      "You may obtain a Duplicate Repayment Schedule for your loan account, free of charge by registering for our NetBanking facility on www.M&N bank.com and download the repayment schedule for your linked loan account. Alternatively, you may visit the nearest Retail Loan Service Center and submit the following documents Request form for Duplicate Repayment Schedule. Duplicate Repayment Schedule Charges of Rs.200/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest the Retail Loan Service Center : Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "What are the charges I have to pay to change the mode of repayment/ account for my loan",
    Answer:
      "A service charge of Rs.500 is applicable for changes in loan repayment instructions issued from non-M&N  Bank Account (ECS or PDC facility). A cheque/payorder/demand draft for Rs. 500 favouring â€œM&N  Bank Ltd Loan Account No. << >>â€ will be required along with the revised set of repayment instructions.",
  },
  {
    Question:
      "What will be done with the post-dated cheques if I request to change the mode of repayment/ account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question: "How much finance can I avail of",
    Answer:
      "The minimum loan amount is Rs. 20,000 and the maximum is Rs. 1.5 Lacs. But you can borrow up to 85% of the ORP depending on the model.",
  },
  {
    Question: "Do I have the option to pre-pay the entire loan amount",
    Answer:
      "Yes, you can pre-pay the loan any time after six months of availing of the loan at a nominal charge. Kindly note :- No Cash Payment accepted towards Pre-payment of loan, Only DD/MC/Cheques accepted.",
  },
  {
    Question: "How long will it take to process the loan",
    Answer:
      "The loan gets processed within 48 hours of completing documentation.",
  },
  {
    Question:
      "How much time will it take to change the mode of repayment/ account for repayment of my loan",
    Answer:
      "It will take 25 working days to activate the revised instructions. In case your next installment falls due prior to the said date, instruction already lodged with us will be presented for payment.",
  },
  {
    Question:
      "In which other ways can I get in touch with the bank for details on Two Wheeler Loans",
    Answer:
      "You can Call us or Visit our branch. Alternatively, for more details on our Two Wheeler Loans, SMS TW to 5676712 or write to",
  },
  {
    Question:
      "If I donâ€™t have an account with M&N  Bank, can I still avail of loans",
    Answer:
      "Yes, you can get an M&N  Bank Two Wheeler Loan. You need not necessarily have an account with us.",
  },
  {
    Question: "What is Grahak Seva Kendra",
    Answer:
      "Our Grahak Seva Kendra addresses your queries pertaining to Two-Wheeler Loans. Contact our Grahak Seva Kendra on 020-39401010 between 10:00 AM and 05:30 PM from Monday to Friday, and 10:00 AM and 01:30 PM on Saturday. Alternatively you can also contact our PhoneBanking number for customer support. *Conditions Apply",
  },
  {
    Question: "Do I need a guarantor",
    Answer:
      "No, but in case if you don't meet the Bank's norms then you may be required to have a guarantor surety. A guarantor becomes a co-endorser and assumes liability in event of default. To stand surety for your loan.",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if my Registration Certificate is mutilated and  I wish to apply for a duplicate Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for your vehicle loan, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "How do I obtain a duplicate NOC/Form 35 for a vehicle loan that has been closed and fully repaid",
    Answer:
      "You may obtain a duplicate NOC/Form 35 for your vehicle by visiting any of our the Retail Loan Service Center and submit the following documents: Request form for Duplicate NOC/Form 35. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Please note that the Loan Closure NOC/Form 35 will not be issued if any of the following conditions apply: Copy of RC Book is not submitted The same vehicle is encumbered to the Bank for any other loan facility Any notice from a competent authority restraining the Bank from release of hypothecation If there are any existing over dues, direct or otherwise, in your name",
  },
  {
    Question:
      "What will be done with the post-dated cheques if I request to change the mode of repayment/ account for my loan",
    Answer:
      "Post Dated Cheques(PDCs)/Security Cheques submitted towards loan repayment that have not been encashed, will be defaced and retained by the Bank. In case, you wish to have your old Post Dated Cheques(PDCs)/ Security Cheques to be returned to you, kindly lodge a request at the Retail Loan Service Center or through PhoneBanking or write us an email at www.M&N bank.com/services within 45 days from the date of application of change in repayment instructions. In case, we do not hear from you within the stipulated period, the defaced cheques will be destroyed.",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for settling a partial loss Insurance Claim for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC to settle the partial insurance claim in your favour, provided there are no outstandings to your loan account, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Original Insurance Policy(will be returned back to you at the centre, post validation). Copy of the Insurance Policy, duly self attested by you. Claim Voucher provided by Insurance Company Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. Note, for Total Loss, Claims will be settled in favour of the Bank to close the loan based on the Loan Pre-Termination Statement as on the date of request and in case of any excess claim received from the Insurance Company, a refund will be made favouring the customer.",
  },
  {
    Question:
      "How do I obtain a NOC from the bank if I have lost my Registration Certificate book for a vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for a duplicate Registration Certificate book for your vehicle loan, by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for applying for the required NOC. Self-attested copy of the Registration Certificate book, duly self-attested by you for validation. Copy of FIR or certificate from police or Acknowledgement from Police on written complaint with General Diary No. Applicable fee of Rs. 500/- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question: "How can I get my address changed in my loan account",
    Answer:
      "In order to change your address in our records, you may visit the nearest Retail Loan Service Center and submit the following documents: Request form for Address Change. Self Attested copy of your revised address proof along with the original address proof for validation. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question:
      "How do I obtain a NOC from the bank for fitting an LPG/CNG kit on my vehicle under finance with M&N  Bank",
    Answer:
      "You may obtain the NOC for fitting an LPG/CNG kit on your registered vehicle under finance with us by visiting any of our Retail Loan Service Center and submitting the following documents: Request form for LPG/CNG NOC. Self attested copy of the Registration Certificate book, duly self attested by you, along with the Original Registration Certificate book for validation. Applicable fee of Rs. 500//- vide a cheque/payorder/demand draft favouring M&N  Bank Ltd Loan Account No. << >>. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided.",
  },
  {
    Question: "How can I change the mode of repayment/ account for my loan",
    Answer:
      "In the event that you wish to change the mode of repayment/bank account for your loan repayment, you may visit the nearest the Retail Loan Service Center and submit your request with the revised account mandate/instructions. You can opt to repay through alternate repayment instructions as follows: 1) Standing Instructions: We offer the Standing Instructions (SI) facility whereby we can directly debit your M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. 3 Security cheques favoring M&N  Bank Ltd Loan Account No. << >>, each undated and filled with a value equal to the sum of 3 EMIs. SI mandate duly filled and verified by M&N  Bank. In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. 2) Electronic Clearing Service (ECS): We offer the ECS facility whereby we can directly debit your non-M&N  Bank account for EMI amounts on due dates. Please submit the following at your nearest Retail Loan Service Centre: Request form for swap of repayment instructions. Security cheques favoring M&N  Bank Ltd Loan Account No. << >> *** ECS mandate duly filled and verified by your banker. ACH(Automated Clearing House) Mandate. Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. ***Security Cheques: You need to issue 1 security cheque for every 6 Equated Monthly Installments (EMI). The amount on each security undated cheque should be equal to the sum of 3 EMIs. For example, if your EMI amount is Rs. 1000 and you have paid 18 EMIs for a 36 month loan tenure, you need to submit 3 Security Cheques of Rs. 3000 each. 3) Post-dated Cheques (This mode is allowed only if the location is non ECS): Please submit the following documents at your nearest the Retail Loan Service Center : Request form for swap of repayment instructions Revised post dated cheques in favour of M&N  Bank Ltd Loan Account No. << >> for the balance EMIs. ACH(Automated Clearing House) Mandate Swap Charges of Rs.500/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer,i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided. View more",
  },
  {
    Question:
      "How do I obtain a Duplicate Repayment Schedule for my loan account",
    Answer:
      "You may obtain a Duplicate Repayment Schedule for your loan account, free of charge by registering for our NetBanking facility on www.M&N bank.com and download the repayment schedule for your linked loan account. Alternatively, you may visit the nearest Retail Loan Service Center and submit the following documents Request form for Duplicate Repayment Schedule. Duplicate Repayment Schedule Charges of Rs.200/- favouring M&N  Bank Ltd Loan Account No. << >> In case a bearer submits the request on your behalf, a bearer authorisation along with KYC documents(self attested copy and original for validation) of the bearer, i.e. Identity and Signature Proof like PAN Card, Aadhar Card, Driving License or Passport Copy will also need to be provided",
  },
  {
    Question:
      "What are the charges I have to pay to change the mode of repayment/ account for my loan",
    Answer:
      "A service charge of Rs.500 is applicable for changes in loan repayment instructions issued from non-M&N  Bank Account (ECS or PDC facility). A cheque/payorder/demand draft for Rs. 500 favouring M&N  Bank Ltd Loan Account No. << >> will be required along with the revised set of repayment instructions.",
  },
  {
    Question:
      "Do I need to enter â€˜#â€™ after keying in my Card number/ Card expiry date/ CVV number",
    Answer:
      "Please listen to the recorded message and follow the instructions while entering your card details.",
  },
  {
    Question:
      "What details are required when I want to perform a secure IVR transaction",
    Answer:
      "To perform a secure IVR transaction, you will need your 16-digit Card number, Card expiry date, CVV number, mobile number and IVR password.",
  },
  {
    Question: "How should I get the IVR Password  if I hold an add-on card",
    Answer:
      "An IVR password can be requested only from the registered mobile number and will be sent to the registered mobile number / email ID of the primary card holder only.",
  },
  {
    Question: "How do I register my Mobile number for IVR Password",
    Answer:
      "Please call our Customer Service Centre and ensure that your mobile number is updated in our records.",
  },
  {
    Question: "How can I obtain an IVR Password",
    Answer:
      "By Sending SMS request: Send an SMS 'PWD<space>1234' to 9717465555 or to 5676712 from your registered (with Bank) mobile number.(Note: 1234 are the last 4 digits of your M&N  Bank Credit Card number). You will receive an SMS with the IVR password on the same number. From M&N  Bank Website: If you have registered your card for NetSafe/ Verified by Visa/ MasterCard SecureCode, you can also login in to your NetSafe/ Verified by Visa/ MasterCard SecureCode account and use the Generate IVR Password option available on the left menu. The IVR password will be sent to your registered mobile number and email ID. These are the most convenient and recommended options. To ensure convenience, make a note of the IVR password and keep it handy while performing the transaction. Note: Kindly ensure that your latest mobile number and email ID is updated with us. Premium SMS charges as per your mobile service provider will apply for an SMS sent to 5676712 View more",
  },
  {
    Question:
      "Can I use the same IVR Password  to perform multiple transactions",
    Answer:
      "No, each IVR password can be used only for a maximum of 3 attempts (including decline attempts) within the specified validity period. For further transaction attempts, a new IVR password must be generated.",
  },
  {
    Question: "Can I generate multiple IVR Passwords",
    Answer:
      "No, only one IVR password can be generated at a time. Only when the first one is used / expires, can the next IVR password be generated.",
  },
  {
    Question: "How do I register for IVR password",
    Answer:
      "There is no registration process. However you will have to obtain a 3D Secure IVR password to perform a secure IVR transaction by sending an SMS prior to the transaction or through NetSafe/ Verified by Visa/ MasterCard SecureCode login account (as mentioned above).",
  },
  {
    Question: "What is IVR Password and how does it work",
    Answer:
      "To make telephonic (IVR) transactions more secure, all purchases/payments to merchants that you make using your mobile or telephone need to be authenticated with an additional password. While making an IVR transaction, you will be prompted to enter the IVR password after you enter the Card number, Card expiry date and the CVV number. If you fail to enter the IVR password, the transaction will be declined. View more",
  },
  {
    Question:
      "In how much time will the IVR Password be delivered to my mobile phone/email ID",
    Answer:
      "IVR 3D Secure password is delivered instantly. It takes less than a minute. However, network congestion could cause delay.",
  },
  {
    Question: "Can the OTP be generated prior to the transaction",
    Answer: "No, OTP can be generated only during the transactions.",
  },
  {
    Question:
      "Can I continue using the Verified by Visa/MasterCard SecureCode/Protectbuy password for online transactions",
    Answer:
      "Yes, you can continue using your secure password, OTP is an additional option provided for checkout.",
  },
  {
    Question: "On which mobile number will I receive the OTP",
    Answer:
      "OTP will be sent to the registered mobile number (updated in Credit card system).",
  },
  {
    Question: "Is it necessary to register the card for an OTP transaction",
    Answer: "Prior registration is not necessary for an OTP transaction.",
  },
  {
    Question: "Is this option available on all the online transactions",
    Answer:
      "This option is available on all websites which are participating in the VBV/MSC/Portectbuy secure transaction protocol.",
  },
  {
    Question: "Can the OTP be used for multiple online transactions",
    Answer: "OTP can be used only for a single online transaction.",
  },
  {
    Question: "How will the OTP be sent to the customers",
    Answer:
      "OTP will be sent only via SMS to the customers' registered mobile number.",
  },
  {
    Question: "What is the validity period of the OTP",
    Answer: "OTP is valid for a period of only 3 minutes.",
  },
  {
    Question:
      "What happens if I shop at a Verified by Visa/ MasterCard SecureCode merchant website while I'm not registered for this feature",
    Answer:
      "You will be prompted for online registration for Verified by Visa/ MasterCard SecureCode through a pop-up screen. You will need to authenticate yourself with your Credit/Debit Card number, Card expiry date and ATM PIN (or CVV2 and Date of birth for Credit Cards, along with your mobile number and email ID). For Debit Cards, you can choose your password to be used for Verified by Visa/ MasterCard SecureCode. For Credit Cards, a One Time Password one will be sent to your email ID instantly, which has to be used to complete the registration process. Thereafter, you can continue shopping on the merchant website. If you decide not to register immediately and cancel the pop-up screen, your transaction will not get authorized and you would not be able to complete the transaction on such websites. Therefore, it is strongly recommended that you donâ€™t cancel the pop-up screen and register for Verified by Visa/ MasterCard SecureCode as it protects you from online frauds. View more",
  },
  {
    Question: "Where can I shop with Verified by Visa",
    Answer:
      "You can shop at participating online stores that have the Verified by Visa/ MasterCard SecureCode mark.",
  },
  {
    Question:
      "How will the online store know that I have Verified by Visa/ MasterCard SecureCode",
    Answer:
      "The participating online stores will automatically recognize your Visa card number if you have registered it for Verified by Visa and a pop-up will be shown asking for your Verified by Visa password.",
  },
  {
    Question:
      "How can I register / re-set password for VBV/MSC if my mobile number/ email ID is not updated in the bank's records",
    Answer:
      "You will have to first have to get the details updated in our system by calling our Customer Care Centre and register after 1 working day. It is mandatory to have at least one email ID and one mobile number registered. The same will apply if there is a recent change in your mobile number or email ID.",
  },
  {
    Question:
      "Once I have registered, how long does it take for Verified by Visa / MasterCard SecureCode to become active for my card",
    Answer:
      "The Verified by Visa / MasterCard SecureCode gets activated for your M&N  Bank Card as soon as your registration is successful. You can start shopping at participating stores once you are registered with the added security of Verified by Visa/MasterCard SecureCode.",
  },
  {
    Question:
      "What will happen if I try to register again & generate an OTP within 2 hours",
    Answer:
      "You will get a pop-up message stating Your earlier request is being processed. If you do not receive your OTP within 2 hours, please try again later. Only on expiry of the OTP generated through an earlier request, you can register again to generate a new OTP.",
  },
  {
    Question: "If my account is blocked, how do I unblock it",
    Answer:
      "If your account gets blocked, please contact your nearest Customer Call Centre (for Credit Cards) and PhoneBanking centre (for Debit Cards).",
  },
  {
    Question:
      "How do I use Verified by Visa / MasterCard SecureCode when I shop online, once Iâ€™m registered",
    Answer:
      "Once you have registered, you can use Verified by Visa/ MasterCard SecureCode service right away on participating merchant sites. For a full listing of these merchants, please visit your local Visa/ MasterCard website or www.visa-asia.com/verified/ or www.mastercard.com/securecode You will also find the Verified by Visa/ MasterCard SecureCode online shopping demo on these websites. View more",
  },
  {
    Question: "How does Verified by Visa/ MasterCard SecureCode work",
    Answer:
      "Verified by Visa/ MasterCard SecureCode provides you with a Password/ SecureCode that protects your online transactions, just like the way you use your PIN at an ATM. All you need to do is follow the simple steps: Select the goods and services you want from the Verified by Visa (VBV) / SecureCode merchant site and proceed to the payment page. Enter your M&N  Bank Debit/ Credit Card number and the online store will connect with M&N  Bank to check whether your Card is secured with Verified by Visa/ MasterCard SecureCode. M&N  Bank initiates a Verified by Visa/ MasterCard SecureCode pop-up window on your computer screen that includes your Personal Assurance Message (PAM) or Personal Greeting message. Look for and confirm your PAM/ Personal Greeting then enter your password. M&N  Bank will then confirm your identity to the merchant. Your payment is authorized and your order is placed. View more",
  },
  {
    Question:
      "I suspect someone has stolen my password or used it to make fraudulent purchases. What should I do",
    Answer:
      "If you suspect any fraudulent activities, contact M&N  Bank immediately at your nearest customer Call Centre (for Credit Cards) or PhoneBanking Centre (for Debit Cards) and report the loss.",
  },
  {
    Question:
      "My spouse and I both have the same card number. How does Verified by Visa/ MasterCard SecureCode work for both of us",
    Answer:
      "Verified by Visa / MasterCard SecureCode will still work for both of you. You will only need to register the primary card.",
  },
  {
    Question: "What is Verified by Visa/MasterCard SecureCode",
    Answer:
      "Verified by Visa/ MasterCard SecureCode is a service that lets you use a personal password/ SecureCode with your M&N  Bank card. This SecureCode gives you added assurance that only you can use your M&N  Bank Card to make purchases over the Internet. Just turn on your computer, connect to the Internet and pull out your M&N  Bank Card. You don't need any special software. Use Verified by Visa/ MasterCard SecureCode as easily as you use your PIN at an ATM. View more",
  },
  {
    Question: "How do I register my M&N  Bank Card",
    Answer:
      "You can register your M&N  Bank Card through the M&N  Bank Website or through any participating online shopping site when prompted for registration.",
  },
  {
    Question:
      "Can I register for Verified by Visa/MasterCard SecureCode with my existing M&N  Bank Card or do I need to apply for a new one",
    Answer:
      "Yes, you can register with any of your M&N  Bank Cards to be protected by Verified by Visa/ MasterCard SecureCode. You donâ€™t need to apply for a new M&N  Bank Card.",
  },
  {
    Question: "Can I register more than one M&N  Bank Credit/ Debit Card",
    Answer:
      "Yes, you can register all of your M&N  Bank Credit and Debit Cards for Verified by Visa/MasterCard SecureCode.",
  },
  {
    Question:
      "If I have just received a renewed card, do I need to re-register",
    Answer:
      "No, you do not have to re-register your renewed card since the card number remains the same. You need to re-register only if your card number has changed due to card replacement/ re-issue/ upgrade.",
  },
  {
    Question:
      "Can I register my non-Visa payment Cards with Verified by Visa and non- MasterCard payment Cards with MasterCard SecureCode",
    Answer:
      "Currently, Verified by Visa is only offered to protect Visa Cards and MasterCard SecureCode to protect MasterCard Cards.",
  },
  {
    Question:
      "Can I use Verified by Visa/ MasterCard SecureCode from any other computer",
    Answer:
      "Yes, you can use Verified by Visa/ MasterCard SecureCode from any computer that has an Internet connection and Internet Explorer, 5.0 and above or Mozilla Firefox 1.5 and above or Netscape Navigator 8.1 and above.",
  },
  {
    Question: "Do I need any special equipment or software on my computer",
    Answer:
      "No. All you need is an Internet connection and Internet Explorer 5.0 and above or Mozilla Firefox 1.5 and above or Netscape Navigator 8.1 and above. Find out if you browser is compatible by going to the Help menu on the upper right-hand side of your browser and select the About option. It will tell you what version is installed on your computer.",
  },
  {
    Question: "What is a Personal Assurance Message or Personal Greeting",
    Answer:
      "When you register for Verified by Visa/ MasterCard SecureCode, you are asked to create a Personal Assurance Message/ Personal Greeting. So when you pay online, always look for your Personal Assurance Message/ Personal Message to ensure that M&N  Bank is authenticating you. View more",
  },
  {
    Question:
      "How can I register for VBV/SC if my mobile number / Email ID is not updated in my Credit Card records with the Bank",
    Answer:
      "You will have to first have the details updated in our system by calling our Customer Care Centre, and attempt to register later. The same will apply if there is a recent change in your mobile number.",
  },
  {
    Question:
      "How long does it take for the IVR Password  to get delivered using Verified by Visa/Mastercard Secure Code",
    Answer:
      "The IVR Password will get delivered instantly, in less than a minute. Please ensure that you also check your Spam, Junk and all other folders for the IVR Password mailer from M&N  Bank.",
  },
  {
    Question:
      "If I have registered two email IDs, on which email ID will I receive the IVR Password",
    Answer:
      "If there are 2 email IDs updated in our system, IVR Password will be sent to both email IDs. However, only one of them is required for validation during registration / password reset.",
  },
  {
    Question:
      "What is the validity of the IVR Password  using Verified by Visa/Mastercard Secure Code",
    Answer:
      "The IVR Password is valid for 2 hours. If you do not use it within 2 hours of generation of IVR Password , it will expire. You will have to attempt registration again and use the new IVR Password . On expiry of IVR Password generated through the earlier request, you can attempt registration again to generate another IVR Password .",
  },
  {
    Question:
      "What are the other things that I need to keep in mind about the IVR Password using Verified by Visa/Mastercard Secure Code",
    Answer:
      "If you have provided 2 email IDs for our records, you need to enter any one of them for validation. Also if your email ID and mobile number are not updated, please have the details updated in our system by calling our Customer Care Centre, and attempt to register later. It is mandatory to have at least one email ID and one mobile number registered. The same will apply if there is a recent change in your mobile number or email ID. View more",
  },
  {
    Question:
      "In what transactions is the One Time Password (IVR Password ) process applicable",
    Answer:
      "The IVR Password process is applicable only for Credit Cards for: Registration through M&N  Bank website Registration during online shopping Password re-set through website Password re-set while shopping online View more",
  },
  {
    Question:
      "I don't see my Personal Assurance Message on the Secure page . What should I do",
    Answer:
      "Always look for your Personal Assurance Message before entering your Verified by Visa / MasterCard Securecode password. If your Personal Assurance Message does not appear on the secure page, do not enter your password. Please contact our Customer Care Center and update the same.",
  },
  {
    Question: "If I forget my VBV/MSC  password, how do I retrieve the same",
    Answer:
      "If you have forgotten your password, Click on Forgot password on Netsafe login page. Authenticate your identity after entering your Credit/Debit Card number, Card Expiry Date and ATM PIN (or CVV2 and Date of birth for Credit Cards, along with your mobile number and email id). Once the details are validated One time password will be sent to your email id and mobile no, using this permanent password can be set. You can also reset your password while transacting, click on Forgot password on the secure password page Authenticate your identity after entering your Credit/Debit Card number, Card Expiry Date and ATM PIN (or CVV2 and Date of birth for Credit Cards, along with your mobile number and email id). Once the details are validated One time password will be sent to your email id and mobile no, using this permanent password can be set.",
  },
  {
    Question:
      "While trying to register my card, I am getting the error message stating mobile no. mismatch, what could be the reason",
    Answer:
      "Please enter the mobile no you have updated in our system, In case there is a change in the number, Please contact our Customer Care Center and update the same.",
  },
  {
    Question:
      "On which email id will I receive the OTP for Credit card registration or for password reset",
    Answer:
      "If there are 2 email ids updated in our system, OTP will be sent to both the email ids. However, only one of them is required for validation during registration / password reset.",
  },
  {
    Question:
      "While trying to register I am getting error message Card already enrolled , what should I do",
    Answer:
      "Your card is already registered for Verified by Visa / MasterCard SecureCode, you don't have to re-register your card. In case you don't remember your password, please click on forgot password on the Netsafe login page or on the secure page while transacting and you can reset your password.",
  },
  {
    Question:
      "I don't remember my Verified by Visa / MasterCard Securecode login Id",
    Answer:
      "You can use your Credit/Debit card number as your login id. The login id is required only to login to Netsafe, you don't require the login id for doing online transactions.",
  },
  {
    Question: "Where do I find the CVV2",
    Answer: "CVV2 is three digit number mentioned at reverse of your card.",
  },
  {
    Question:
      "I am unable to transact online as my card is de-registered status, how do I re-register my card",
    Answer:
      "You have to login to NetSafe on the M&N  bank website using your login id & Verified by Visa/ MasterCard SecureCode password. Once you login to Netsafe click on reregister cards, enter your date of birth and CVV2 and post that the card will be reregistered. You can now use the card for online transaction.",
  },
  {
    Question:
      "Is there a fee to register for Verified by Visa / MasterCard Securecode",
    Answer:
      "The service is free, There is no additional charges for using the service.",
  },
  {
    Question:
      "What steps should I take to ensure that my VBV / MSC Password is strong and difficult to guess",
    Answer:
      "Avoid using a password that is easy to guess, also avoid using a password that you have already used elsewhere. Password should be something that is easy for you to remember but difficult for anyone else to guess. Never share your password with others. You may even choose to change your password periodically.It is your responsibility to protect your VBV / MSC Password.",
  },
  {
    Question:
      "Can I set my Personal Assurance Message to be the same as my VBV / MSC Password",
    Answer:
      "Your Personal Assurance Message and your VBV / MSC Password must not be the same, to ensure your security.",
  },
  {
    Question:
      "What happens if I try to make a purchase at a merchant that doesn't participate in the Verified by Visa / MasterCard Securecode service",
    Answer:
      "You will not be prompted to enter your for Verified by Visa / MasterCard Securecode password on these websites.By shopping at websites participating Verified by Visa / MasterCard Securecode merchants, you have the extra layer of security as the transactions are authenticated using your Verified by Visa / MasterCard Securecode password.",
  },
  {
    Question:
      "Can I get the benefit of Verified by Visa/ MasterCard SecureCode security at online stores that are not participating in the service",
    Answer:
      "No. you can only get the benefits of Verified by Visa/ MasterCard SecureCode at the participating online stores. However a number of online stores have the service available to them. In the meantime, if an online stores you trust is not yet participating; you can perform the transaction using NetSafe. Click here to know more. View more",
  },
  {
    Question: "Branches of M&N bank",
    Answer:
      "1)M&N BANK Thane.Nandanvan Industrial Estate, LBS Rd, Thane West, Thane, Maharashtra 400080\n2)M&N BANK Mumbai.Vasantrao Naik Marg,Forjeet Street , Grant Road, Mumbai, Maharashtra 400036\n3)M&N BANK Nashik.Time Square Bldg, Dwarka Circle, Nashik, Maharashtra 42201\n4)M&N BANK Pune.RB Motilal Kennedy Rd, Shivajinagar, Pune, Maharashtra 411005",
  },
  {
    Question: "Are you real",
    Answer: "I'm as real as you believe I'm",
  },
  {
    Question: "what do you look like",
    Answer:
      "like a continuous Jasmine Garland whose zeros and ones are strung together",
  },
  {
    Question: "How can you help me",
    Answer: "I can help you with any kind of banking queries!",
  },
  {
    Question: "Which languages do you speak",
    Answer: "just English. But I'm trying to learn new languages",
  },
  {
    Question: "how much is interest for FD",
    Answer: "7%",
  },
  {
    Question: "how much is interest for Fixed Deposit",
    Answer: "7%",
  },
  {
    Question: "Fixed Deposit",
    Answer: "7%",
  },
  {
    Question: "FD",
    Answer: "7%",
  },
];
export default dataset;
