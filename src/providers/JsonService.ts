import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    public employee_list = [
        {
            "user_id": "2",
            "username": "johndoe",
            "email": "johndoe@gmail.com",
            "role_id": "3",
            "designation_id": "5",
            "activated": "1",
            "created": "12 June 2018",
            "fullname": "John Doe",
            "dob": "1995-12-19",
            "gender": "Male",
            "phone": "9988776644",
            "department": "PHP",
            "designation": "Android Developer",
            "department_id": "10",
            "countryname": "-"
        },
        {
            "user_id": "9",
            "username": "Richard Miles",
            "email": "richardmiles@dreamguys.co.in",
            "role_id": "3",
            "designation_id": "8",
            "activated": "1",
            "created": "14 June 2018",
            "fullname": "Dinesh Kumar",
            "dob": "-",
            "gender": "",
            "phone": "1234567820",
            "department": "IT Department",
            "designation": "Web Developer",
            "department_id": "7",
            "countryname": "-"
        },
        {
            "user_id": "11",
            "username": "John Smith",
            "email": "richardmiles@dreamguys.co",
            "role_id": "3",
            "designation_id": "23",
            "activated": "1",
            "created": "14 June 2018",
            "fullname": "John Smith",
            "dob": "-",
            "gender": "",
            "phone": "1234567890",
            "department": "-",
            "designation": "Team Leader",
            "department_id": "0",
            "countryname": "-"
        },
        {
            "user_id": "14",
            "username": "Mike Litorus",
            "email": "mike@yopmail.com",
            "role_id": "3",
            "designation_id": "23",
            "activated": "1",
            "created": "18 June 2018",
            "fullname": "Mike Litorus",
            "dob": "-",
            "gender": "",
            "phone": "1234567898",
            "department": "Administration",
            "designation": "Web Developer",
            "department_id": "12",
            "countryname": "-"
        },
        {
            "user_id": "15",
            "username": "Wilmer Deluna",
            "email": "wilmer@dreamguys.co.in",
            "role_id": "3",
            "designation_id": "8",
            "activated": "1",
            "created": "19 June 2018",
            "fullname": "Wilmer Deluna",
            "dob": "-",
            "gender": "",
            "phone": "1234568858",
            "department": "-",
            "designation": "IOS Developer",
            "department_id": "0",
            "countryname": "-"
        },
        {
            "user_id": "16",
            "username": "Jeffrey Warden",
            "email": "jeffrey@gmail.com",
            "role_id": "3",
            "designation_id": "8",
            "activated": "1",
            "created": "19 June 2018",
            "fullname": "Jeffrey Warden",
            "dob": "-",
            "gender": "",
            "phone": "5868558808",
            "department": "IT Department",
            "designation": "Team Leader",
            "department_id": "7",
            "countryname": "-"
        },
        {
            "user_id": "23",
            "username": "Bernardo Galaviz",
            "email": "galaviz@gmail.com",
            "role_id": "3",
            "designation_id": "0",
            "activated": "1",
            "created": "23 July 2018",
            "fullname": "Bernardo Galaviz",
            "dob": "-",
            "gender": "",
            "phone": "987654123123",
            "department": "IT Department",
            "designation": "Team Leader",
            "department_id": "0",
            "countryname": "-"
        },
        {
            "user_id": "24",
            "username": "Lesley Grauer",
            "email": "grauer@gmail.com",
            "role_id": "3",
            "designation_id": "12",
            "activated": "1",
            "created": "24 July 2018",
            "fullname": "Lesley Grauer",
            "dob": "-",
            "gender": "",
            "phone": "1234499480",
            "department": "Mobile Department",
            "designation": "Hybrid Developer",
            "department_id": "0",
            "countryname": "-"
        }
    ];

    public clientList = [
        {
            "co_id": "17",
            "company_name": "Global Technologies",
            "fullname": "Barry Cuda",
            "company_email": "cudatest@dreams.com",
            "designation": "Manager",
        },
        {
            "co_id": "17",
            "company_name": "Delta Infotech",
            "fullname": "Tressa Wexler",
            "company_email": "cudatest@dreams.com",
            "designation": "CEO",
        }, {
            "co_id": "17",
            "company_name": "Cream Inc",
            "fullname": "Ruby Bartlett",
            "company_email": "cudatest@dreams.com",
            "designation": "CEO",
        }, {
            "co_id": "17",
            "company_name": "Wellware Company",
            "fullname": "Misty Tison",
            "company_email": "cudatest@dreams.com",
            "designation": "CEO",
        }, {
            "co_id": "17",
            "company_name": "Mustang Technologies",
            "fullname": "Daniel Deacon",
            "company_email": "cudatest@dreams.com",
            "designation": "CEO",
        }, {
            "co_id": "17",
            "company_name": "International Software Inc",
            "fullname": "Walter Weaver",
            "company_email": "cudatest@dreams.com",
            "designation": "CEO",
        }, {
            "co_id": "17",
            "company_name": "Mercury Software Inc",
            "fullname": "Amanda Warren",
            "company_email": "cudatest@dreams.com",
            "designation": "CEO",
        }, {
            "co_id": "17",
            "company_name": "Carlson Tech",
            "fullname": "Betty Carlson",
            "company_email": "cudatest@dreams.com",
            "designation": "CEO",
        }
    ]

    public invoiceList = [{
        "invoice_id": "24",
        "client": "1",
        "allow_stripe": "No",
        "extra_fee": "0.00",
        "reference_no": "INV0024",
        "company_name": "Global Technologies",
        "status": "Unpaid",
        "created_date": "2018-11-29",
        "due_date": "2018-07-03",
        "tax1": "0.00",
        "tax2": "0.00",
        "discount": "0.00",
        "total_cost": 63.899,
        "bill_to": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
            "company_vat": "2",
            "company_fax": 0
        },

        "receive_from": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
        },
        "items": [
            {
                "item_id": "28",
                "item_tax_rate": "0.00",
                "item_tax_total": "0.00",
                "quantity": "4.26",
                "total_cost": "63.90",
                "invoice_id": "24",
                "item_name": "Gigs",
                "item_desc": "Time Spent : 4.26  Hours\nTesting site - 8.5  Minutes\nserverp - 0 Seconds\nserverp - 0 Seconds\nNew Customization  - 0 Seconds\ntest  - 0 Seconds",
                "unit_cost": "15.00",
                "item_order": "0",
                "date_saved": "2018-11-29"
            }
        ],
        "payment_made": 0,
        "payment_made_details": 0
    },
    {
        "invoice_id": "3",
        "client": "2",
        "allow_stripe": "No",
        "extra_fee": "0.00",
        "reference_no": "INV0003",
        "company_name": "Global Technologies",
        "status": "Paid",
        "created_date": "2018-06-18",
        "due_date": "2018-07-03",
        "tax1": "0.00",
        "tax2": "0.00",
        "discount": "0.00",
        "total_cost": 1,
        "bill_to": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
            "company_vat": "2",
            "company_fax": 0
        },

        "receive_from": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
        },
        "items": [
            {
                "item_id": "3",
                "item_tax_rate": "0.00",
                "item_tax_total": "0.00",
                "quantity": "1.00",
                "total_cost": "1.00",
                "invoice_id": "3",
                "item_name": "test",
                "item_desc": "test content",
                "unit_cost": "1.00",
                "item_order": "1",
                "date_saved": "2018-06-18 01:15:13"
            }
        ],
        "payment_made": 1.020000000000000017763568394002504646778106689453125,
        "payment_made_details": [
            {
                "p_id": "3",
                "invoice": "3",
                "paid_by": "2",
                "payer_email": null,
                "payment_method": "1",
                "currency": "USD",
                "amount": "1.02",
                "trans_id": "798315",
                "notes": "",
                "attached_file": null,
                "payment_date": "2018-06-18",
                "created_date": "2018-06-18",
                "month_paid": "06",
                "year_paid": "2018",
                "inv_deleted": "No",
                "refunded": "No"
            }
        ]
    },
    {
        "invoice_id": "4",
        "client": "2",
        "allow_stripe": "No",
        "extra_fee": "0.00",
        "reference_no": "INV0004",
        "company_name": "Global Technologies",
        "status": "Paid",
        "created_date": "2018-06-20",
        "due_date": "2018-06-20",
        "tax1": "0.00",
        "tax2": "0.00",
        "discount": "0.00",
        "total_cost": 7042.19,
        "bill_to": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
            "company_vat": "2",
            "company_fax": 0
        },

        "receive_from": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
        },
        "items": [
            {
                "item_id": "4",
                "item_tax_rate": "0.00",
                "item_tax_total": "0.00",
                "quantity": "0.17",
                "total_cost": "2525.20",
                "invoice_id": "4",
                "item_name": "Project EST0002",
                "item_desc": "Time Spent : 0.17  Hours\nserverp - 0 Seconds\ntest - 0 Seconds\npayment  - 0 Seconds",
                "unit_cost": "2525.20",
                "item_order": "0",
                "date_saved": "2018-06-20 23:40:38"
            },
            {
                "item_id": "5",
                "item_tax_rate": "0.00",
                "item_tax_total": "0.00",
                "quantity": "30.00",
                "total_cost": "3000.00",
                "invoice_id": "4",
                "item_name": "payment",
                "item_desc": "time - 30 hours",
                "unit_cost": "100.00",
                "item_order": "2",
                "date_saved": "2018-06-20 23:42:07"
            },
            {
                "item_id": "25",
                "item_tax_rate": "1.00",
                "item_tax_total": "1.00",
                "quantity": "1.00",
                "total_cost": "101.00",
                "invoice_id": "4",
                "item_name": "test item",
                "item_desc": "testing item",
                "unit_cost": "100.00",
                "item_order": "3",
                "date_saved": "2018-11-29"
            },
            {
                "item_id": "26",
                "item_tax_rate": "18.00",
                "item_tax_total": "216.00",
                "quantity": "3.00",
                "total_cost": "1416.00",
                "invoice_id": "4",
                "item_name": "f&d",
                "item_desc": " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                "unit_cost": "400.00",
                "item_order": "4",
                "date_saved": "2018-11-29"
            }
        ],
        "payment_made": 7042.1999999999998181010596454143524169921875,
        "payment_made_details": [
            {
                "p_id": "14",
                "invoice": "4",
                "paid_by": "2",
                "payer_email": null,
                "payment_method": "1",
                "currency": "USD",
                "amount": "7042.20",
                "trans_id": "714896",
                "notes": null,
                "attached_file": null,
                "payment_date": "2018-12-03",
                "created_date": "2018-12-03",
                "month_paid": "12",
                "year_paid": "2018",
                "inv_deleted": "No",
                "refunded": "No"
            }
        ]
    },
    {
        "invoice_id": "30",
        "client": "9",
        "allow_stripe": "No",
        "extra_fee": "100.00",
        "reference_no": "INV0030",
        "company_name": "Global Technologies",
        "status": "Unpaid",
        "created_date": "2018-12-03",
        "due_date": "2018-12-04",
        "tax1": "2.00",
        "tax2": "3.00",
        "discount": "5.00",
        "total_cost": 972,
        "bill_to": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
            "company_vat": "2",
            "company_fax": 0
        },

        "receive_from": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
        },
        "items": [
            {
                "item_id": "34",
                "item_tax_rate": null,
                "item_tax_total": "0.00",
                "quantity": "1.00",
                "total_cost": "500.00",
                "invoice_id": "30",
                "item_name": "Design - Website",
                "item_desc": "Landing Page",
                "unit_cost": "500.00",
                "item_order": "1",
                "date_saved": "2018-12-03"
            },
            {
                "item_id": "35",
                "item_tax_rate": null,
                "item_tax_total": "72.00",
                "quantity": "1.00",
                "total_cost": "472.00",
                "invoice_id": "30",
                "item_name": "f&d",
                "item_desc": " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                "unit_cost": "400.00",
                "item_order": "2",
                "date_saved": "2018-12-03"
            }
        ],
        "payment_made": 0,
        "payment_made_details": 0
    },
    {
        "invoice_id": "33",
        "client": "10",
        "allow_stripe": "Yes",
        "extra_fee": "1000.00",
        "reference_no": "INV0033",
        "company_name": "Global Technologies",
        "status": "Unpaid",
        "created_date": "2018-12-05",
        "due_date": "2018-12-20",
        "tax1": "0.00",
        "tax2": "0.00",
        "discount": "10.00",
        "total_cost": 1108168.67999999993480741977691650390625,
        "bill_to": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
            "company_vat": "2",
            "company_fax": 0
        },

        "receive_from": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
        },
        "items": [
            {
                "item_id": "40",
                "item_tax_rate": "18.00",
                "item_tax_total": "168826.68",
                "quantity": "2084.28",
                "total_cost": "1106752.68",
                "invoice_id": "33",
                "item_name": "Testing Testing",
                "item_desc": "Time Spent : 2084.28  Hours\nTesting site - 2084.27  Hours\nfood and drinks - 27 Seconds",
                "unit_cost": "450.00",
                "item_order": "1",
                "date_saved": "2018-12-05"
            },
            {
                "item_id": "41",
                "item_tax_rate": "18.00",
                "item_tax_total": "216.00",
                "quantity": "3.00",
                "total_cost": "1416.00",
                "invoice_id": "33",
                "item_name": "f&d",
                "item_desc": " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                "unit_cost": "400.00",
                "item_order": "2",
                "date_saved": "2018-12-05"
            }
        ],
        "payment_made": 0,
        "payment_made_details": 0
    },
    {
        "invoice_id": "34",
        "client": "10",
        "allow_stripe": "Yes",
        "extra_fee": "5.00",
        "reference_no": "INV0034",
        "company_name": "Global Technologies",
        "status": "Unpaid",
        "created_date": "2018-12-05",
        "due_date": "2018-12-20",
        "tax1": "0.00",
        "tax2": "0.00",
        "discount": "10.00",
        "total_cost": 54.53999999999999914734871708787977695465087890625,
        "bill_to": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
            "company_vat": "2",
            "company_fax": 0
        },

        "receive_from": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
        },
        "items": [
            {
                "item_id": "42",
                "item_tax_rate": "1.00",
                "item_tax_total": "0.54",
                "quantity": "1.00",
                "total_cost": "54.54",
                "invoice_id": "34",
                "item_name": "Tesign",
                "item_desc": "This is test",
                "unit_cost": "54.00",
                "item_order": "1",
                "date_saved": "2018-12-05"
            }
        ],
        "payment_made": 0,
        "payment_made_details": 0
    },
    {
        "invoice_id": "14",
        "client": "11",
        "allow_stripe": "Yes",
        "extra_fee": "0.00",
        "reference_no": "INV0014",
        "company_name": "Global Technologies",
        "status": "Unpaid",
        "created_date": "2018-11-22",
        "due_date": "2018-12-07",
        "tax1": "1.00",
        "tax2": "10.00",
        "discount": "0.00",
        "total_cost": 1120,
        "bill_to": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
            "company_vat": "2",
            "company_fax": 0
        },

        "receive_from": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
        },
        "items": [
            {
                "item_id": "19",
                "item_tax_rate": "12.00",
                "item_tax_total": "120.00",
                "quantity": "1.00",
                "total_cost": "1120.00",
                "invoice_id": "14",
                "item_name": "login",
                "item_desc": "Functional",
                "unit_cost": "1000.00",
                "item_order": "1",
                "date_saved": "2018-11-22"
            }
        ],
        "payment_made": 0,
        "payment_made_details": 0
    },
    {
        "invoice_id": "31",
        "client": "22",
        "allow_stripe": "No",
        "extra_fee": "0.00",
        "reference_no": "INV0031",
        "company_name": "Global Technologies",
        "status": "Unpaid",
        "created_date": "2018-12-04",
        "due_date": "19-12-2018",
        "tax1": "0.00",
        "tax2": "0.00",
        "discount": "0.00",
        "total_cost": 600,
        "bill_to": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
            "company_vat": "2",
            "company_fax": 0
        },

        "receive_from": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
        },
        "items": [
            {
                "item_id": "37",
                "item_tax_rate": "0.00",
                "item_tax_total": "0.00",
                "quantity": "0.00",
                "total_cost": "100.00",
                "invoice_id": "31",
                "item_name": "project",
                "item_desc": "Time Spent : 0  Hours\ndreams task - 13 Seconds",
                "unit_cost": "100.00",
                "item_order": "0",
                "date_saved": "2018-12-04"
            },
            {
                "item_id": "38",
                "item_tax_rate": "0.00",
                "item_tax_total": "0.00",
                "quantity": "1.00",
                "total_cost": "500.00",
                "invoice_id": "31",
                "item_name": "Design - Website",
                "item_desc": "Landing Page",
                "unit_cost": "500.00",
                "item_order": "2",
                "date_saved": "2018-12-04"
            }
        ],
        "payment_made": 0,
        "payment_made_details": 0
    },
    {
        "invoice_id": "54",
        "client": "23",
        "allow_stripe": "No",
        "extra_fee": "10.00",
        "reference_no": "INV0043",
        "company_name": "Global Technologies",
        "status": "Unpaid",
        "created_date": "2018-12-11",
        "due_date": "1970-01-01",
        "tax1": "2.00",
        "tax2": "1.00",
        "discount": "0.00",
        "total_cost": 1416,
        "bill_to": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
            "company_vat": "2",
            "company_fax": 0
        },

        "receive_from": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
        },
        "items": [
            {
                "item_id": "57",
                "item_tax_rate": null,
                "item_tax_total": "216.00",
                "quantity": "3.00",
                "total_cost": "1416.00",
                "invoice_id": "54",
                "item_name": "f&d",
                "item_desc": " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                "unit_cost": "400.00",
                "item_order": "1",
                "date_saved": "2018-12-11"
            }
        ],
        "payment_made": 0,
        "payment_made_details": 0
    },
    {
        "invoice_id": "41",
        "client": "24",
        "allow_stripe": "Yes",
        "extra_fee": "2.00",
        "reference_no": "INV0036",
        "company_name": "Global Technologies",
        "status": "Unpaid",
        "created_date": "2018-12-09",
        "due_date": "1970-01-01",
        "tax1": "10.00",
        "tax2": "2.00",
        "discount": "5.00",
        "total_cost": 505,
        "bill_to": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
            "company_vat": "2",
            "company_fax": 0
        },

        "receive_from": {
            "company_address": "Global Technologies,\n 5754 Airport Rd",
            "city": "Coosada",
            "state": "AL, 36020",
            "country": "United States",
            "zip_code": "230125",
            "company_phone": "888-777-6655",
        },
        "items": [
            {
                "item_id": "52",
                "item_tax_rate": "1.00",
                "item_tax_total": "5.00",
                "quantity": "1.00",
                "total_cost": "505.00",
                "invoice_id": "41",
                "item_name": "template",
                "item_desc": "testing",
                "unit_cost": "500.00",
                "item_order": "1",
                "date_saved": "2018-12-09"
            }
        ],
        "payment_made": 0,
        "payment_made_details": 0
    }
    ]

    public project_list = [
        {
            "project_title": "Office Management",
            "start_date": "2018-06-12",
            "due_date": "2018-12-31",
            "progress": "10",
            "assign_lead": "1",
            "assign_to": "a:3:{i:0;s:1:\"1\";i:1;s:1:\"3\";i:2;s:1:\"9\";}",
            "estimate_hours": "350.00",
            "project_created": "2018-06-12",
            "tasks": [
                {
                    "task_detail": {
                        "t_id": "28",
                        "assigned_to": "s:3:\"2,3\";",
                        "task_name": "Patient appointment booking ",
                        "estimated_hours": "12.00",
                        "description": "test",
                        "task_progress": "0",
                        "start_date": "2018-11-28",
                        "due_date": "2018-11-29",
                        "user_id": "1",
                        "fullname": "Administrator",
                        "avatar": "blue-cd-vector-technology.jpg",
                        "start_time": "0",
                        "end_time": "0"
                    },
                    "task_comment": [
                        {
                            "comment_id": "26",
                            "project": "1",
                            "task_id": "28",
                            "posted_by": "1",
                            "message": "",
                            "date_posted": "0000-00-00 00:00:00",
                            "deleted": "No",
                            "client_id": null,
                            "unread": "1"
                        }
                    ],
                    "task_files": [],
                    "assigned_to": []
                },
                {
                    "task_detail": {
                        "t_id": "26",
                        "assigned_to": "N;",
                        "task_name": "Appointment booking with payment gateway ",
                        "estimated_hours": "4.00",
                        "description": "",
                        "task_progress": "100",
                        "start_date": "2018-11-24",
                        "due_date": "2018-11-24",
                        "user_id": "2",
                        "fullname": "Steve Smith",
                        "avatar": "user-06.jpg",
                        "start_time": "0",
                        "end_time": "0"
                    },
                    "task_comment": [],
                    "task_files": [],
                    "assigned_to": []
                },
                {
                    "task_detail": {
                        "t_id": "1",
                        "assigned_to": "N;",
                        "task_name": "Patient and Doctor video conferencing",
                        "estimated_hours": "2.00",
                        "description": "",
                        "task_progress": "100",
                        "start_date": "2018-05-29",
                        "due_date": "2018-05-29",
                        "user_id": "0",
                        "fullname": "0",
                        "avatar": "0",
                        "start_time": "1527138689",
                        "end_time": "1527139199"
                    },
                    "task_comment": [
                        {
                            "comment_id": "3",
                            "project": "1",
                            "task_id": "1",
                            "posted_by": "1",
                            "message": "",
                            "date_posted": "2018-08-27",
                            "deleted": "No",
                            "client_id": null,
                            "unread": "1"
                        },
                        {
                            "comment_id": "19",
                            "project": "1",
                            "task_id": "1",
                            "posted_by": "1",
                            "message": "<p>completed</p>",
                            "date_posted": "0000-00-00",
                            "deleted": "No",
                            "client_id": null,
                            "unread": "1"
                        }
                    ],
                    "task_files": [],
                    "assigned_to": []
                },
            ],
            "tasks_open": [
                {
                    "t_id": "26",
                    "task_name": "Appointment booking with payment gateway ",
                    "project": "1",
                    "milestone": "0",
                    "assigned_to": "N;",
                    "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                    "visible": "Yes",
                    "task_progress": "0",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "0.00",
                    "logged_time": "0",
                    "auto_progress": "FALSE",
                    "start_date": "2018-05-24",
                    "due_date": "2018-05-31",
                    "pinned": "0",
                    "date_added": "2018-05-24",
                    "added_by": "5"
                },
                {
                    "t_id": "28",
                    "task_name": "test",
                    "project": "1",
                    "milestone": null,
                    "assigned_to": "s:3:\"2,3\";",
                    "description": "test",
                    "visible": "No",
                    "task_progress": "0",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "12.00",
                    "logged_time": "0",
                    "auto_progress": "FALSE",
                    "start_date": "2018-11-28",
                    "due_date": "2018-11-29",
                    "pinned": "0",
                    "date_added": "2018-11-28",
                    "added_by": "1"
                }
            ],
            "tasks_completed": [
                {
                    "t_id": "28",
                    "task_name": "Patient appointment booking",
                    "project": "1",
                    "milestone": "0",
                    "assigned_to": "N;",
                    "description": "",
                    "visible": "No",
                    "task_progress": "100",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "2.00",
                    "logged_time": "510",
                    "auto_progress": "FALSE",
                    "start_date": "2018-05-29",
                    "due_date": "2018-05-29",
                    "pinned": "0",
                    "date_added": "2018-05-23",
                    "added_by": "4"
                },
                {
                    "t_id": "1",
                    "task_name": "Patient and Doctor video conferencing",
                    "project": "1",
                    "milestone": "0",
                    "assigned_to": "N;",
                    "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                    "visible": "Yes",
                    "task_progress": "100",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "0.00",
                    "logged_time": "0",
                    "auto_progress": "FALSE",
                    "start_date": "2018-05-24",
                    "due_date": "2018-05-24",
                    "pinned": "0",
                    "date_added": "2018-05-24 02:56:23",
                    "added_by": "5"
                },
            ],
            "tasks_files_count": 0,
            "comment_count": 6,
            "overviews": {
                "project_id": "1",
                "project_code": "PRO29673",
                "project_title": "Office Management",
                "deadline": "2018-12-31",
                "project_created": "2018-06-12 04:57:39",
                "description": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...<br></p>",
                "progress": "10",
                "fixed_rate": "No",
                "hourly_rate": "15.00",
                "fixed_price": "0.00",
                "client": "1",
                "client_name": "thomas tech ",
                "leadid": "1",
                "project_lead_name": "Administrator",
                "project_lead_photo": "http://www.newhrms.com/assets/uploads/blue-cd-vector-technology.jpg",
                "project_team_members": [
                    {
                        "user_id": "1",
                        "fullname": "Administrator",
                        "avatar": "blue-cd-vector-technology.jpg"
                    },
                    {
                        "user_id": "3",
                        "fullname": "Smith",
                        "avatar": "default_avatar.jpg"
                    },
                    {
                        "user_id": "9",
                        "fullname": "John",
                        "avatar": "default_avatar.jpg"
                    }
                ]
            }
        },
        {
            "project_title": "Project Management",
            "start_date": "2018-06-12",
            "due_date": "2018-12-31",
            "progress": "100",
            "assign_lead": "1",
            "assign_to": "a:3:{i:0;s:1:\"1\";i:1;s:1:\"3\";i:2;s:1:\"9\";}",
            "estimate_hours": "350.00",
            "project_created": "2018-06-12 04:57:39",
            "tasks": [
                {
                    "task_detail": {
                        "t_id": "28",
                        "assigned_to": "s:3:\"2,3\";",
                        "task_name": "Patient appointment booking ",
                        "estimated_hours": "12.00",
                        "description": "test",
                        "task_progress": "0",
                        "start_date": "2018-11-28",
                        "due_date": "2018-11-29",
                        "user_id": "1",
                        "fullname": "Administrator",
                        "avatar": "blue-cd-vector-technology.jpg",
                        "start_time": "0",
                        "end_time": "0"
                    },
                    "task_comment": [
                        {
                            "comment_id": "26",
                            "project": "1",
                            "task_id": "28",
                            "posted_by": "1",
                            "message": "",
                            "date_posted": "0000-00-00 00:00:00",
                            "deleted": "No",
                            "client_id": null,
                            "unread": "1"
                        }
                    ],
                    "task_files": [],
                    "assigned_to": []
                },
                {
                    "task_detail": {
                        "t_id": "26",
                        "assigned_to": "N;",
                        "task_name": "Appointment booking with payment gateway ",
                        "estimated_hours": "4.00",
                        "description": "",
                        "task_progress": "100",
                        "start_date": "2018-11-24",
                        "due_date": "2018-11-24",
                        "user_id": "2",
                        "fullname": "Steve Smith",
                        "avatar": "user-06.jpg",
                        "start_time": "0",
                        "end_time": "0"
                    },
                    "task_comment": [],
                    "task_files": [],
                    "assigned_to": []
                },
                {
                    "task_detail": {
                        "t_id": "1",
                        "assigned_to": "N;",
                        "task_name": "Patient and Doctor video conferencing",
                        "estimated_hours": "2.00",
                        "description": "",
                        "task_progress": "100",
                        "start_date": "2018-05-29",
                        "due_date": "2018-05-29",
                        "user_id": "0",
                        "fullname": "0",
                        "avatar": "0",
                        "start_time": "1527138689",
                        "end_time": "1527139199"
                    },
                    "task_comment": [
                        {
                            "comment_id": "3",
                            "project": "1",
                            "task_id": "1",
                            "posted_by": "1",
                            "message": "",
                            "date_posted": "2018-08-27 06:19:31",
                            "deleted": "No",
                            "client_id": null,
                            "unread": "1"
                        },
                        {
                            "comment_id": "19",
                            "project": "1",
                            "task_id": "1",
                            "posted_by": "1",
                            "message": "<p>completed</p>",
                            "date_posted": "0000-00-00 00:00:00",
                            "deleted": "No",
                            "client_id": null,
                            "unread": "1"
                        }
                    ],
                    "task_files": [],
                    "assigned_to": []
                },
            ],
            "tasks_open": [
                {
                    "t_id": "26",
                    "task_name": "Appointment booking with payment gateway ",
                    "project": "1",
                    "milestone": "0",
                    "assigned_to": "N;",
                    "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                    "visible": "Yes",
                    "task_progress": "0",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "0.00",
                    "logged_time": "0",
                    "auto_progress": "FALSE",
                    "start_date": "2018-05-24",
                    "due_date": "2018-05-31",
                    "pinned": "0",
                    "date_added": "2018-05-24 02:50:28",
                    "added_by": "5"
                },
                {
                    "t_id": "28",
                    "task_name": "test",
                    "project": "1",
                    "milestone": null,
                    "assigned_to": "s:3:\"2,3\";",
                    "description": "test",
                    "visible": "No",
                    "task_progress": "0",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "12.00",
                    "logged_time": "0",
                    "auto_progress": "FALSE",
                    "start_date": "2018-11-28",
                    "due_date": "2018-11-29",
                    "pinned": "0",
                    "date_added": "2018-11-28 05:15:50",
                    "added_by": "1"
                }
            ],
            "tasks_completed": [
                {
                    "t_id": "28",
                    "task_name": "Patient appointment booking",
                    "project": "1",
                    "milestone": "0",
                    "assigned_to": "N;",
                    "description": "",
                    "visible": "No",
                    "task_progress": "100",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "2.00",
                    "logged_time": "510",
                    "auto_progress": "FALSE",
                    "start_date": "2018-05-29",
                    "due_date": "2018-05-29",
                    "pinned": "0",
                    "date_added": "2018-05-23 00:04:47",
                    "added_by": "4"
                },
                {
                    "t_id": "1",
                    "task_name": "Patient and Doctor video conferencing",
                    "project": "1",
                    "milestone": "0",
                    "assigned_to": "N;",
                    "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                    "visible": "Yes",
                    "task_progress": "100",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "0.00",
                    "logged_time": "0",
                    "auto_progress": "FALSE",
                    "start_date": "2018-05-24",
                    "due_date": "2018-05-24",
                    "pinned": "0",
                    "date_added": "2018-05-24 02:56:23",
                    "added_by": "5"
                },
            ],
            "tasks_files_count": 0,
            "comment_count": 6,
            "overviews": {
                "project_id": "1",
                "project_code": "PRO29673",
                "project_title": "Office Management",
                "deadline": "2018-12-31",
                "project_created": "2018-06-12 04:57:39",
                "description": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...<br></p>",
                "progress": "100",
                "fixed_rate": "No",
                "hourly_rate": "15.00",
                "fixed_price": "0.00",
                "client": "1",
                "client_name": "thomas tech ",
                "leadid": "1",
                "project_lead_name": "Administrator",
                "project_lead_photo": "http://www.newhrms.com/assets/uploads/blue-cd-vector-technology.jpg",
                "project_team_members": [
                    {
                        "user_id": "1",
                        "fullname": "Administrator",
                        "avatar": "blue-cd-vector-technology.jpg"
                    },
                    {
                        "user_id": "3",
                        "fullname": "Smith",
                        "avatar": "default_avatar.jpg"
                    },
                    {
                        "user_id": "9",
                        "fullname": "John",
                        "avatar": "default_avatar.jpg"
                    }
                ]
            }
        }, {
            "project_title": "Video Calling App",
            "start_date": "2018-06-12",
            "due_date": "2018-12-31",
            "progress": "50",
            "assign_lead": "1",
            "assign_to": "a:3:{i:0;s:1:\"1\";i:1;s:1:\"3\";i:2;s:1:\"9\";}",
            "estimate_hours": "350.00",
            "project_created": "2018-06-12 04:57:39",
            "tasks": [
                {
                    "task_detail": {
                        "t_id": "28",
                        "assigned_to": "s:3:\"2,3\";",
                        "task_name": "Patient appointment booking ",
                        "estimated_hours": "12.00",
                        "description": "test",
                        "task_progress": "0",
                        "start_date": "2018-11-28",
                        "due_date": "2018-11-29",
                        "user_id": "1",
                        "fullname": "Administrator",
                        "avatar": "blue-cd-vector-technology.jpg",
                        "start_time": "0",
                        "end_time": "0"
                    },
                    "task_comment": [
                        {
                            "comment_id": "26",
                            "project": "1",
                            "task_id": "28",
                            "posted_by": "1",
                            "message": "",
                            "date_posted": "0000-00-00 00:00:00",
                            "deleted": "No",
                            "client_id": null,
                            "unread": "1"
                        }
                    ],
                    "task_files": [],
                    "assigned_to": []
                },
                {
                    "task_detail": {
                        "t_id": "26",
                        "assigned_to": "N;",
                        "task_name": "Appointment booking with payment gateway ",
                        "estimated_hours": "4.00",
                        "description": "",
                        "task_progress": "100",
                        "start_date": "2018-11-24",
                        "due_date": "2018-11-24",
                        "user_id": "2",
                        "fullname": "Steve Smith",
                        "avatar": "user-06.jpg",
                        "start_time": "0",
                        "end_time": "0"
                    },
                    "task_comment": [],
                    "task_files": [],
                    "assigned_to": []
                },
                {
                    "task_detail": {
                        "t_id": "1",
                        "assigned_to": "N;",
                        "task_name": "Patient and Doctor video conferencing",
                        "estimated_hours": "2.00",
                        "description": "",
                        "task_progress": "100",
                        "start_date": "2018-05-29",
                        "due_date": "2018-05-29",
                        "user_id": "0",
                        "fullname": "0",
                        "avatar": "0",
                        "start_time": "1527138689",
                        "end_time": "1527139199"
                    },
                    "task_comment": [
                        {
                            "comment_id": "3",
                            "project": "1",
                            "task_id": "1",
                            "posted_by": "1",
                            "message": "",
                            "date_posted": "2018-08-27 06:19:31",
                            "deleted": "No",
                            "client_id": null,
                            "unread": "1"
                        },
                        {
                            "comment_id": "19",
                            "project": "1",
                            "task_id": "1",
                            "posted_by": "1",
                            "message": "<p>completed</p>",
                            "date_posted": "0000-00-00 00:00:00",
                            "deleted": "No",
                            "client_id": null,
                            "unread": "1"
                        }
                    ],
                    "task_files": [],
                    "assigned_to": []
                },
            ],
            "tasks_open": [
                {
                    "t_id": "26",
                    "task_name": "Appointment booking with payment gateway ",
                    "project": "1",
                    "milestone": "0",
                    "assigned_to": "N;",
                    "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                    "visible": "Yes",
                    "task_progress": "0",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "0.00",
                    "logged_time": "0",
                    "auto_progress": "FALSE",
                    "start_date": "2018-05-24",
                    "due_date": "2018-05-31",
                    "pinned": "0",
                    "date_added": "2018-05-24 02:50:28",
                    "added_by": "5"
                },
                {
                    "t_id": "28",
                    "task_name": "test",
                    "project": "1",
                    "milestone": null,
                    "assigned_to": "s:3:\"2,3\";",
                    "description": "test",
                    "visible": "No",
                    "task_progress": "0",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "12.00",
                    "logged_time": "0",
                    "auto_progress": "FALSE",
                    "start_date": "2018-11-28",
                    "due_date": "2018-11-29",
                    "pinned": "0",
                    "date_added": "2018-11-28 05:15:50",
                    "added_by": "1"
                }
            ],
            "tasks_completed": [
                {
                    "t_id": "28",
                    "task_name": "Patient appointment booking",
                    "project": "1",
                    "milestone": "0",
                    "assigned_to": "N;",
                    "description": "",
                    "visible": "No",
                    "task_progress": "100",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "2.00",
                    "logged_time": "510",
                    "auto_progress": "FALSE",
                    "start_date": "2018-05-29",
                    "due_date": "2018-05-29",
                    "pinned": "0",
                    "date_added": "2018-05-23 00:04:47",
                    "added_by": "4"
                },
                {
                    "t_id": "1",
                    "task_name": "Patient and Doctor video conferencing",
                    "project": "1",
                    "milestone": "0",
                    "assigned_to": "N;",
                    "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                    "visible": "Yes",
                    "task_progress": "100",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "0.00",
                    "logged_time": "0",
                    "auto_progress": "FALSE",
                    "start_date": "2018-05-24",
                    "due_date": "2018-05-24",
                    "pinned": "0",
                    "date_added": "2018-05-24 02:56:23",
                    "added_by": "5"
                },
            ],
            "tasks_files_count": 0,
            "comment_count": 6,
            "overviews": {
                "project_id": "1",
                "project_code": "PRO29673",
                "project_title": "Office Management",
                "deadline": "2018-12-31",
                "project_created": "2018-06-12 04:57:39",
                "description": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...<br></p>",
                "progress": "50",
                "fixed_rate": "No",
                "hourly_rate": "15.00",
                "fixed_price": "0.00",
                "client": "1",
                "client_name": "thomas tech ",
                "leadid": "1",
                "project_lead_name": "Administrator",
                "project_lead_photo": "http://www.newhrms.com/assets/uploads/blue-cd-vector-technology.jpg",
                "project_team_members": [
                    {
                        "user_id": "1",
                        "fullname": "Administrator",
                        "avatar": "blue-cd-vector-technology.jpg"
                    },
                    {
                        "user_id": "3",
                        "fullname": "Smith",
                        "avatar": "default_avatar.jpg"
                    },
                    {
                        "user_id": "9",
                        "fullname": "John",
                        "avatar": "default_avatar.jpg"
                    }
                ]
            }
        }, {
            "project_title": "Hospital Administration",
            "start_date": "2018-06-12",
            "due_date": "2018-12-31",
            "progress": "30",
            "assign_lead": "1",
            "assign_to": "a:3:{i:0;s:1:\"1\";i:1;s:1:\"3\";i:2;s:1:\"9\";}",
            "estimate_hours": "350.00",
            "project_created": "2018-06-12 04:57:39",
            "tasks": [
                {
                    "task_detail": {
                        "t_id": "28",
                        "assigned_to": "s:3:\"2,3\";",
                        "task_name": "Patient appointment booking ",
                        "estimated_hours": "12.00",
                        "description": "test",
                        "task_progress": "0",
                        "start_date": "2018-11-28",
                        "due_date": "2018-11-29",
                        "user_id": "1",
                        "fullname": "Administrator",
                        "avatar": "blue-cd-vector-technology.jpg",
                        "start_time": "0",
                        "end_time": "0"
                    },
                    "task_comment": [
                        {
                            "comment_id": "26",
                            "project": "1",
                            "task_id": "28",
                            "posted_by": "1",
                            "message": "",
                            "date_posted": "0000-00-00 00:00:00",
                            "deleted": "No",
                            "client_id": null,
                            "unread": "1"
                        }
                    ],
                    "task_files": [],
                    "assigned_to": []
                },
                {
                    "task_detail": {
                        "t_id": "26",
                        "assigned_to": "N;",
                        "task_name": "Appointment booking with payment gateway ",
                        "estimated_hours": "4.00",
                        "description": "",
                        "task_progress": "100",
                        "start_date": "2018-11-24",
                        "due_date": "2018-11-24",
                        "user_id": "2",
                        "fullname": "Steve Smith",
                        "avatar": "user-06.jpg",
                        "start_time": "0",
                        "end_time": "0"
                    },
                    "task_comment": [],
                    "task_files": [],
                    "assigned_to": []
                },
                {
                    "task_detail": {
                        "t_id": "1",
                        "assigned_to": "N;",
                        "task_name": "Patient and Doctor video conferencing",
                        "estimated_hours": "2.00",
                        "description": "",
                        "task_progress": "100",
                        "start_date": "2018-05-29",
                        "due_date": "2018-05-29",
                        "user_id": "0",
                        "fullname": "0",
                        "avatar": "0",
                        "start_time": "1527138689",
                        "end_time": "1527139199"
                    },
                    "task_comment": [
                        {
                            "comment_id": "3",
                            "project": "1",
                            "task_id": "1",
                            "posted_by": "1",
                            "message": "",
                            "date_posted": "2018-08-27 06:19:31",
                            "deleted": "No",
                            "client_id": null,
                            "unread": "1"
                        },
                        {
                            "comment_id": "19",
                            "project": "1",
                            "task_id": "1",
                            "posted_by": "1",
                            "message": "<p>completed</p>",
                            "date_posted": "0000-00-00 00:00:00",
                            "deleted": "No",
                            "client_id": null,
                            "unread": "1"
                        }
                    ],
                    "task_files": [],
                    "assigned_to": []
                },
            ],
            "tasks_open": [
                {
                    "t_id": "26",
                    "task_name": "Appointment booking with payment gateway ",
                    "project": "1",
                    "milestone": "0",
                    "assigned_to": "N;",
                    "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                    "visible": "Yes",
                    "task_progress": "0",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "0.00",
                    "logged_time": "0",
                    "auto_progress": "FALSE",
                    "start_date": "2018-05-24",
                    "due_date": "2018-05-31",
                    "pinned": "0",
                    "date_added": "2018-05-24 02:50:28",
                    "added_by": "5"
                },
                {
                    "t_id": "28",
                    "task_name": "test",
                    "project": "1",
                    "milestone": null,
                    "assigned_to": "s:3:\"2,3\";",
                    "description": "test",
                    "visible": "No",
                    "task_progress": "0",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "12.00",
                    "logged_time": "0",
                    "auto_progress": "FALSE",
                    "start_date": "2018-11-28",
                    "due_date": "2018-11-29",
                    "pinned": "0",
                    "date_added": "2018-11-28 05:15:50",
                    "added_by": "1"
                }
            ],
            "tasks_completed": [
                {
                    "t_id": "28",
                    "task_name": "Patient appointment booking",
                    "project": "1",
                    "milestone": "0",
                    "assigned_to": "N;",
                    "description": "",
                    "visible": "No",
                    "task_progress": "100",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "2.00",
                    "logged_time": "510",
                    "auto_progress": "FALSE",
                    "start_date": "2018-05-29",
                    "due_date": "2018-05-29",
                    "pinned": "0",
                    "date_added": "2018-05-23 00:04:47",
                    "added_by": "4"
                },
                {
                    "t_id": "1",
                    "task_name": "Patient and Doctor video conferencing",
                    "project": "1",
                    "milestone": "0",
                    "assigned_to": "N;",
                    "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                    "visible": "Yes",
                    "task_progress": "100",
                    "timer_status": "Off",
                    "timer_started_by": null,
                    "start_time": null,
                    "estimated_hours": "0.00",
                    "logged_time": "0",
                    "auto_progress": "FALSE",
                    "start_date": "2018-05-24",
                    "due_date": "2018-05-24",
                    "pinned": "0",
                    "date_added": "2018-05-24 02:56:23",
                    "added_by": "5"
                },
            ],
            "tasks_files_count": 0,
            "comment_count": 6,
            "overviews": {
                "project_id": "1",
                "project_code": "PRO29673",
                "project_title": "Office Management",
                "deadline": "2018-12-31",
                "project_created": "2018-06-12 04:57:39",
                "description": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...<br></p>",
                "progress": "30",
                "fixed_rate": "No",
                "hourly_rate": "15.00",
                "fixed_price": "0.00",
                "client": "1",
                "client_name": "thomas tech ",
                "leadid": "1",
                "project_lead_name": "Administrator",
                "project_lead_photo": "http://www.newhrms.com/assets/uploads/blue-cd-vector-technology.jpg",
                "project_team_members": [
                    {
                        "user_id": "1",
                        "fullname": "Administrator",
                        "avatar": "blue-cd-vector-technology.jpg"
                    },
                    {
                        "user_id": "3",
                        "fullname": "Smith",
                        "avatar": "default_avatar.jpg"
                    },
                    {
                        "user_id": "9",
                        "fullname": "John",
                        "avatar": "default_avatar.jpg"
                    }
                ]
            }
        }
    ];

    public departments = [
        {
            "deptid": "8",
            "deptname": "Accounts Department"
        },
        {
            "deptid": "12",
            "deptname": "Administration"
        },
        {
            "deptid": "25",
            "deptname": "BD"
        },
        {
            "deptid": "27",
            "deptname": "Finance Department"
        },
        {
            "deptid": "30",
            "deptname": "HR department"
        },
        {
            "deptid": "16",
            "deptname": "Hybrid"
        },
        {
            "deptid": "24",
            "deptname": "Ionic"
        },
        {
            "deptid": "9",
            "deptname": "iOS"
        },
        {
            "deptid": "7",
            "deptname": "IT Department"
        },
        {
            "deptid": "20",
            "deptname": "Maintance"
        },
        {
            "deptid": "23",
            "deptname": "Maintance Dept"
        },
        {
            "deptid": "33",
            "deptname": "Newone"
        },
        {
            "deptid": "10",
            "deptname": "PHP"
        },
        {
            "deptid": "11",
            "deptname": "Sales Department"
        },
        {
            "deptid": "17",
            "deptname": "Test"
        },
        {
            "deptid": "19",
            "deptname": "Test 2"
        },
        {
            "deptid": "31",
            "deptname": "Test department1"
        },
        {
            "deptid": "32",
            "deptname": "test department2"
        },
        {
            "deptid": "18",
            "deptname": "Test1"
        },
        {
            "deptid": "22",
            "deptname": "Test4"
        },
        {
            "deptid": "29",
            "deptname": "Testing "
        }

    ]

    public designation = [
        {
            "designation": "Web Designer",
            "dept": "Web Development"
        },
        {
            "designation": "Android Developer",
            "dept": "Application Development"
        },
        {
            "designation": "IOS Developer",
            "dept": "Application Development"
        },
        {
            "designation": "UI Designer",
            "dept": "Web Development"
        },
        {
            "designation": "UX Designer",
            "dept": "Application Development"
        }, {
            "designation": "Product Manager",
            "dept": "Application Development"
        }, {
            "designation": "SEO Analyst",
            "dept": "Marketing"
        },
    ]
    public holidays = [{
        "id": "16",
        "title": "57386e783",
        "description": "Vgshdhjx hdhhdhd hshdhbdsb dyhxbdbdbe ydudhdhbd udhhdhdd udhdbdbd  ydyshdj ysyd",
        "holiday_date": "2019-08-31"
    },
    {
        "id": "31",
        "title": "Christmas",
        "description": " ",
        "holiday_date": "2019-01-16"
    },
    {
        "id": "27",
        "title": "Pongal",
        "description": " Pongal Holidays",
        "holiday_date": "2019-01-16"
    },
    {
        "id": "17",
        "title": "Test",
        "description": "Hdhidjd ydjdjd yshjs gbz yhshs yydbxb ybdby dhdbdbdb gdbfb",
        "holiday_date": "2019-08-31"
    }];

    public users = [{
        "user_id": "2",
        "fullname": "John Doe"
    },
    {
        "user_id": "3",
        "fullname": "Steave smith"
    },
    {
        "user_id": "9",
        "fullname": "Daniel Porter"
    },
    {
        "user_id": "10",
        "fullname": "Barry Cuda"
    },
    {
        "user_id": "11",
        "fullname": "Mike Litorus"
    },
    {
        "user_id": "13",
        "fullname": "Richard Miles"
    },
    {
        "user_id": "14",
        "fullname": "Wilmer Deluna"
    },
    {
        "user_id": "15",
        "fullname": "Loren Gatlin"
    },
    {
        "user_id": "16",
        "fullname": "Catherine Manseau"
    }];


    public attendanceDetails = [
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "1-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "2-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "3-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "4-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "5-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "6-10-2018",
            "hours": 0
        },
        {
            "day": 0,
            "punch_in": "",
            "punch_out": "",
            "date": "7-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "8-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "9-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "10-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "11-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "12-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "13-10-2018",
            "hours": 0
        },
        {
            "day": 0,
            "punch_in": "",
            "punch_out": "",
            "date": "14-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "15-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "16-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "17-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "18-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "19-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "20-10-2018",
            "hours": 0
        },
        {
            "day": 0,
            "punch_in": "",
            "punch_out": "",
            "date": "21-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "22-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "23-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "24-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "25-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "26-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "27-10-2018",
            "hours": 0
        },
        {
            "day": 0,
            "punch_in": "",
            "punch_out": "",
            "date": "28-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "29-10-2018",
            "hours": 0
        },
        {
            "day": "",
            "punch_in": "",
            "punch_out": "",
            "date": "30-10-2018",
            "hours": 0
        },
        {
            "day": 1,
            "punch_in": "12:35:05 PM",
            "punch_out": "12:35:43 PM",
            "in_lat": "11.0500349",
            "in_long": "77.0186173",
            "out_lat": "11.0500343",
            "out_long": "77.0186173",
            "hours": "0.0",
            "date": "31-10-2018"
        }
    ]

    public leaves = [
        {
            "id": "74",
            "leave_from": "2019-01-08",
            "leave_to": "2019-01-09",
            "leave_type": "1",
            "user_id": "107",
            "status": "0",
            "leave_days": "2",
            "leave_reason": " test reason",
            "leave_day_type": null,
            "l_type": "Normal leave",
            "fullname": "newpalaniuser"
        },
        {
            "id": "71",
            "leave_from": "2019-01-08",
            "leave_to": "2019-01-15",
            "leave_type": "1",
            "user_id": "107",
            "status": "0",
            "leave_days": "7",
            "leave_reason": " testing",
            "leave_day_type": null,
            "l_type": "Normal leave",
            "fullname": "newpalaniuser"
        },
        {
            "id": "64",
            "leave_from": "2019-01-24",
            "leave_to": "2019-01-29",
            "leave_type": "1",
            "user_id": "80",
            "status": "0",
            "leave_days": "5",
            "leave_reason": " ",
            "leave_day_type": null,
            "l_type": "Normal leave",
            "fullname": "Sandra John"
        },
        {
            "id": "60",
            "leave_from": "2019-01-02",
            "leave_to": "2019-01-08",
            "leave_type": "1",
            "user_id": "80",
            "status": "0",
            "leave_days": "6",
            "leave_reason": " ",
            "leave_day_type": null,
            "l_type": "Normal leave",
            "fullname": "Sandra John"
        },
        {
            "id": "46",
            "leave_from": "2019-02-01",
            "leave_to": "2019-02-02",
            "leave_type": "2",
            "user_id": "2",
            "status": "0",
            "leave_days": "2",
            "leave_reason": " testing",
            "leave_day_type": null,
            "l_type": "medical leave",
            "fullname": "Steve Smith"
        },
        {
            "id": "45",
            "leave_from": "2019-06-12",
            "leave_to": "2019-06-19",
            "leave_type": "2",
            "user_id": "2",
            "status": "0",
            "leave_days": "7",
            "leave_reason": " new testing",
            "leave_day_type": null,
            "l_type": "medical leave",
            "fullname": "Steve Smith"
        },
        {
            "id": "44",
            "leave_from": "2019-03-06",
            "leave_to": "2019-03-27",
            "leave_type": "2",
            "user_id": "2",
            "status": "0",
            "leave_days": "19",
            "leave_reason": " new test",
            "leave_day_type": null,
            "l_type": "medical leave",
            "fullname": "Steve Smith"
        }
    ]

    public leave_types = [
        {
            "id": "4",
            "leave_type": "Casual leave",
            "leave_days": "6",
            "status": "1"
        },
        {
            "id": "3",
            "leave_type": "sickleave",
            "leave_days": "2",
            "status": "2"
        },
        {
            "id": "2",
            "leave_type": "medical leave",
            "leave_days": "5",
            "status": "1"
        },
        {
            "id": "1",
            "leave_type": "Normal leave",
            "leave_days": "12",
            "status": "1"
        },

    ];

    public estimateList = [
        {
            "estimate_id": "2",
            "client": "2",
            "due_date": "2018-06-01",
            "reference_no": "EST0002",
            "client_name": "Steve Smith",
            "status": "Accepted",
            "created_date": "2018-06-17",
            "tax1": "5.00",
            "tax2": "5.00",
            "discount": "0.00",
            "amount": 8440.57500000000072759576141834259033203125,
            "bill_to": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
                "company_vat": "2",
                "company_fax": 0
            },

            "receive_from": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
            },
            "items": [
                {
                    "item_id": "1",
                    "item_tax_rate": "18.00",
                    "item_name": "test",
                    "item_desc": "test content",
                    "unit_cost": "1000.00",
                    "quantity": "2.00",
                    "item_tax_total": "360.00",
                    "total_cost": "2360.00",
                    "estimate_id": "2",
                    "date_saved": "2018-06-17",
                    "item_order": "1"
                },
                {
                    "item_id": "15",
                    "item_tax_rate": "0.00",
                    "item_name": "f&d",
                    "item_desc": " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    "unit_cost": "400.00",
                    "quantity": "3.00",
                    "item_tax_total": "0.00",
                    "total_cost": "1200.00",
                    "estimate_id": "2",
                    "date_saved": "2018-11-29",
                    "item_order": "2"
                },
                {
                    "item_id": "16",
                    "item_tax_rate": "12.00",
                    "item_name": "dcd",
                    "item_desc": "",
                    "unit_cost": "50.56",
                    "quantity": "2.00",
                    "item_tax_total": "12.13",
                    "total_cost": "113.25",
                    "estimate_id": "2",
                    "date_saved": "2018-11-29",
                    "item_order": "4"
                },
                {
                    "item_id": "17",
                    "item_tax_rate": "0.00",
                    "item_name": "f&d",
                    "item_desc": " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    "unit_cost": "400.00",
                    "quantity": "10.00",
                    "item_tax_total": "0.00",
                    "total_cost": "4000.00",
                    "estimate_id": "2",
                    "date_saved": "2018-11-29",
                    "item_order": "3"
                }
            ]
        },
        {
            "estimate_id": "3",
            "client": "2",
            "due_date": "2018-06-18",
            "reference_no": "EST0003",
            "client_name": "Steve Smith",
            "status": "Pending",
            "created_date": "2018-06-17",
            "tax1": "0.00",
            "tax2": "0.00",
            "discount": "0.00",
            "amount": 1180,
            "bill_to": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
                "company_vat": "2",
                "company_fax": 0
            },

            "receive_from": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
            },
            "items": [
                {
                    "item_id": "4",
                    "item_tax_rate": "18.00",
                    "item_name": "tv",
                    "item_desc": "test",
                    "unit_cost": "1000.00",
                    "quantity": "1.00",
                    "item_tax_total": "180.00",
                    "total_cost": "1180.00",
                    "estimate_id": "3",
                    "date_saved": "2018-06-17",
                    "item_order": "1"
                }
            ]
        },
        {
            "estimate_id": "13",
            "client": "2",
            "due_date": "2018-12-02",
            "reference_no": "EST0012",
            "client_name": "Steve Smith",
            "status": "Pending",
            "created_date": "2018-12-02",
            "tax1": "0.00",
            "tax2": "0.00",
            "discount": "20.00",
            "amount": 800,
            "bill_to": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
                "company_vat": "2",
                "company_fax": 0
            },

            "receive_from": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
            },
            "items": [
                {
                    "item_id": "20",
                    "item_tax_rate": null,
                    "item_name": "Design - Website",
                    "item_desc": "Landing Page",
                    "unit_cost": "500.00",
                    "quantity": "1.00",
                    "item_tax_total": "0.00",
                    "total_cost": "500.00",
                    "estimate_id": "13",
                    "date_saved": "2018-12-02",
                    "item_order": "1"
                },
                {
                    "item_id": "21",
                    "item_tax_rate": null,
                    "item_name": "Design - Website",
                    "item_desc": "Landing Page",
                    "unit_cost": "500.00",
                    "quantity": "1.00",
                    "item_tax_total": "0.00",
                    "total_cost": "500.00",
                    "estimate_id": "13",
                    "date_saved": "2018-12-02",
                    "item_order": "2"
                }
            ]
        },
        {
            "estimate_id": "14",
            "client": "2",
            "due_date": "2018-12-04",
            "reference_no": "EST0013",
            "client_name": "Steve Smith",
            "status": "Pending",
            "created_date": "2018-12-03",
            "tax1": "0.00",
            "tax2": "0.00",
            "discount": "2.00",
            "amount": 1877.680000000000063664629124104976654052734375,
            "bill_to": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
                "company_vat": "2",
                "company_fax": 0
            },

            "receive_from": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
            },
            "items": [
                {
                    "item_id": "22",
                    "item_tax_rate": null,
                    "item_name": "Design - Website",
                    "item_desc": "Landing Page",
                    "unit_cost": "500.00",
                    "quantity": "1.00",
                    "item_tax_total": "0.00",
                    "total_cost": "500.00",
                    "estimate_id": "14",
                    "date_saved": "2018-12-03",
                    "item_order": "1"
                },
                {
                    "item_id": "23",
                    "item_tax_rate": null,
                    "item_name": "f&d",
                    "item_desc": " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    "unit_cost": "400.00",
                    "quantity": "3.00",
                    "item_tax_total": "216.00",
                    "total_cost": "1416.00",
                    "estimate_id": "14",
                    "date_saved": "2018-12-03",
                    "item_order": "2"
                }
            ]
        },
        {
            "estimate_id": "6",
            "client": "9",
            "due_date": "2018-11-14",
            "reference_no": "EST0006",
            "client_name": "John Doe",
            "status": "Pending",
            "created_date": "2018-11-14",
            "tax1": "5.00",
            "tax2": "2.00",
            "discount": "0.00",
            "amount": 127.67239999999998190105543471872806549072265625,
            "bill_to": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
                "company_vat": "2",
                "company_fax": 0
            },

            "receive_from": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
            },
            "items": [
                {
                    "item_id": "12",
                    "item_tax_rate": "18.00",
                    "item_name": "cscds",
                    "item_desc": "cdds",
                    "unit_cost": "50.56",
                    "quantity": "2.00",
                    "item_tax_total": "18.20",
                    "total_cost": "119.32",
                    "estimate_id": "6",
                    "date_saved": "2018-11-14",
                    "item_order": "1"
                }
            ]
        },
        {
            "estimate_id": "33",
            "client": "9",
            "due_date": "2018-12-26",
            "reference_no": "EST2228",
            "client_name": "John Smith",
            "status": "Pending",
            "created_date": "2018-12-16",
            "tax1": "0.00",
            "tax2": "0.00",
            "discount": "0.00",
            "amount": 500,
            "bill_to": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
                "company_vat": "2",
                "company_fax": 0
            },

            "receive_from": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
            },
            "items": [
                {
                    "item_id": "39",
                    "item_tax_rate": null,
                    "item_name": "Design - Website",
                    "item_desc": "Landing Page",
                    "unit_cost": "500.00",
                    "quantity": "1.00",
                    "item_tax_total": "0.00",
                    "total_cost": "500.00",
                    "estimate_id": "33",
                    "date_saved": "2018-12-16",
                    "item_order": "1"
                }
            ]
        },
        {
            "estimate_id": "26",
            "client": "10",
            "due_date": "2018-12-13",
            "reference_no": "EST2221",
            "client_name": "John Pal",
            "status": "Declined",
            "created_date": "2018-12-11",
            "tax1": "0.00",
            "tax2": "0.00",
            "discount": "0.00",
            "amount": 1200,
            "bill_to": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
                "company_vat": "2",
                "company_fax": 0
            },

            "receive_from": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
            },
            "items": [
                {
                    "item_id": "31",
                    "item_tax_rate": "0.00",
                    "item_name": "f&d",
                    "item_desc": " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    "unit_cost": "400.00",
                    "quantity": "3.00",
                    "item_tax_total": "0.00",
                    "total_cost": "1200.00",
                    "estimate_id": "26",
                    "date_saved": "2018-12-11",
                    "item_order": "1"
                }
            ]
        },
        {
            "estimate_id": "15",
            "client": "14",
            "due_date": "2018-12-04",
            "reference_no": "EST0014",
            "client_name": "John",
            "status": "Pending",
            "created_date": "2018-12-03",
            "tax1": "0.00",
            "tax2": "0.00",
            "discount": "1.00",
            "amount": 1401.839999999999918145476840436458587646484375,
            "bill_to": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
                "company_vat": "2",
                "company_fax": 0
            },

            "receive_from": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
            },
            "items": [
                {
                    "item_id": "24",
                    "item_tax_rate": null,
                    "item_name": "f&d",
                    "item_desc": " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    "unit_cost": "400.00",
                    "quantity": "3.00",
                    "item_tax_total": "216.00",
                    "total_cost": "1416.00",
                    "estimate_id": "15",
                    "date_saved": "2018-12-03",
                    "item_order": "1"
                }
            ]
        },
        {
            "estimate_id": "16",
            "client": "22",
            "due_date": "2018-12-11",
            "reference_no": "EST0015",
            "client_name": "International Software Inc",
            "status": "Accepted",
            "created_date": "2018-12-04",
            "tax1": "0.00",
            "tax2": "0.00",
            "discount": "0.00",
            "amount": 60.47999999999999687361196265555918216705322265625,
            "bill_to": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
                "company_vat": "2",
                "company_fax": 0
            },

            "receive_from": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
            },
            "items": [
                {
                    "item_id": "25",
                    "item_tax_rate": "12.00",
                    "item_name": "Tesign",
                    "item_desc": "This is test",
                    "unit_cost": "54.00",
                    "quantity": "1.00",
                    "item_tax_total": "6.48",
                    "total_cost": "60.48",
                    "estimate_id": "16",
                    "date_saved": "2018-12-04",
                    "item_order": "1"
                }
            ]
        },
        {
            "estimate_id": "29",
            "client": "23",
            "due_date": "1970-01-01",
            "reference_no": "EST2224",
            "client_name": "International Software Inc",
            "status": "Pending",
            "created_date": "2018-12-12",
            "tax1": "0.00",
            "tax2": "0.00",
            "discount": "0.00",
            "amount": 0,
            "bill_to": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
                "company_vat": "2",
                "company_fax": 0
            },

            "receive_from": {
                "company_address": "Global Technologies,\n 5754 Airport Rd",
                "city": "Coosada",
                "state": "AL, 36020",
                "country": "United States",
                "zip_code": "230125",
                "company_phone": "888-777-6655",
            },
            "items": [
                {
                    "item_id": "34",
                    "item_tax_rate": null,
                    "item_name": null,
                    "item_desc": "",
                    "unit_cost": "0.00",
                    "quantity": "0.00",
                    "item_tax_total": "0.00",
                    "total_cost": "0.00",
                    "estimate_id": "29",
                    "date_saved": "2018-12-12",
                    "item_order": "1"
                }
            ]
        }
    ]

    public client_list = [
        {
            "value": "27",
            "label": "ABC"
        },
        {
            "value": "24",
            "label": "ABC Technologies"
        },
        {
            "value": "23",
            "label": "Amer Private LTD"
        },
        {
            "value": "5",
            "label": "AscesTech"
        },
        {
            "value": "17",
            "label": "bino testing"
        },
        {
            "value": "9",
            "label": "DGT"
        },
        {
            "value": "6",
            "label": "Dreamguys"
        },
        {
            "value": "14",
            "label": "Guru Tech"
        },
        {
            "value": "2",
            "label": "johnson Enterprises"
        },
        {
            "value": "16",
            "label": "newclient "
        },
        {
            "value": "20",
            "label": "palanitestpalani"
        },
        {
            "value": "26",
            "label": "qwerty"
        },
        {
            "value": "4",
            "label": "Shanthi Gears"
        },
        {
            "value": "22",
            "label": "test bino testing"
        },
        {
            "value": "10",
            "label": "testcompany"
        },
        {
            "value": "19",
            "label": "testpalani"
        },
        {
            "value": "21",
            "label": "testpalani Dreams"
        },
        {
            "value": "11",
            "label": "testponmani"
        },
        {
            "value": "1",
            "label": "thomas tech "
        },
        {
            "value": "25",
            "label": "XYZ"
        }
    ];


    public payment = [
        {
            "payment_id": "3",
            "payment_date": "2018-06-18 01:15:52",
            "transaction_id": "798315",
            "received_from": "johnson Enterprises",
            "payment_made": "Online",
            "currency": "USD",
            "notes": "Thank you for <span style=\"font-weight: bold;\">your</span> business. Please process this invoice within the due date.",
            "amount": "1.02",
            "invoice_no": "INV0003",
            "invoice_date": "2018-06-18",
            "invoice_id": "3"
        },
        {
            "payment_id": "8",
            "payment_date": "2018-11-09 05:47:06",
            "transaction_id": "txn_1DUZOABY26PjmstUuf8h7IbI",
            "received_from": "Dreamguys",
            "payment_made": "Online",
            "currency": "USD",
            "notes": "Thank you for <span style=\"font-weight: bold;\">your</span> business. Please process this invoice within the due date.",
            "amount": "11111.00",
            "invoice_no": "INV0012",
            "invoice_date": "2018-11-09",
            "invoice_id": "12"
        },
        {
            "payment_id": "9",
            "payment_date": "2018-11-09 05:56:57",
            "transaction_id": "txn_1DUZXhHpsbNNd96ppBxEL6VG",
            "received_from": "Dreamguys",
            "payment_made": "Online",
            "currency": "USD",
            "notes": "Thank you for <span style=\"font-weight: bold;\">your</span> business. Please process this invoice within the due date.",
            "amount": "154.00",
            "invoice_no": "INV0013",
            "invoice_date": "2018-11-09",
            "invoice_id": "13"
        },
        {
            "payment_id": "10",
            "payment_date": "2018-11-23",
            "transaction_id": "584163",
            "received_from": "AscesTech",
            "payment_made": "Online",
            "currency": "USD",
            "notes": "Thank you for <span style=\"font-weight: bold;\">your</span> business. Please process this invoice within the due date.",
            "amount": "1180.00",
            "invoice_no": "INV0009",
            "invoice_date": "2018-06-29",
            "invoice_id": "9"
        },
        {
            "payment_id": "11",
            "payment_date": "2018-11-23",
            "transaction_id": "359841",
            "received_from": "Dreamguys",
            "payment_made": "Online",
            "currency": "USD",
            "notes": "Thank you for <span style=\"font-weight: bold;\">your</span> business. Please process this invoice within the due date.",
            "amount": "450.00",
            "invoice_no": "INV0015",
            "invoice_date": "2018-11-23",
            "invoice_id": "15"
        },
        {
            "payment_id": "12",
            "payment_date": "2018-11-23",
            "transaction_id": "789432",
            "received_from": "Dreamguys",
            "payment_made": "Online",
            "currency": "USD",
            "notes": "Thank you for <span style=\"font-weight: bold;\">your</span> business. Please process this invoice within the due date.",
            "amount": "612.00",
            "invoice_no": "INV0015",
            "invoice_date": "2018-11-23",
            "invoice_id": "15"
        },
        {
            "payment_id": "13",
            "payment_date": "2018-11-23",
            "transaction_id": "385476",
            "received_from": "AscesTech",
            "payment_made": "Online",
            "currency": "USD",
            "notes": "Thank you for <span style=\"font-weight: bold;\">your</span> business. Please process this invoice within the due date.",
            "amount": "1180.00",
            "invoice_no": "INV0009",
            "invoice_date": "2018-06-29",
            "invoice_id": "9"
        },
        {
            "payment_id": "14",
            "payment_date": "2018-12-03",
            "transaction_id": "714896",
            "received_from": "johnson Enterprises",
            "payment_made": "Online",
            "currency": "USD",
            "notes": "Thank you for <span style=\"font-weight: bold;\">your</span> business. Please process this invoice within the due date.",
            "amount": "7042.20",
            "invoice_no": "INV0004",
            "invoice_date": "2018-06-20",
            "invoice_id": "4"
        },
        {
            "payment_id": "16",
            "payment_date": "2018-12-11",
            "transaction_id": "145792",
            "received_from": "AscesTech",
            "payment_made": "Online",
            "currency": "USD",
            "notes": "Thank you for <span style=\"font-weight: bold;\">your</span> business. Please process this invoice within the due date.",
            "amount": "200.00",
            "invoice_no": "INV0042",
            "invoice_date": "2018-12-11",
            "invoice_id": "53"
        },
        {
            "payment_id": "2",
            "payment_date": "2018-06-18",
            "transaction_id": "194275",
            "received_from": "thomas tech ",
            "payment_made": "Bank Deposit",
            "currency": "USD",
            "notes": "Thank you for <span style=\"font-weight: bold;\">your</span> business. Please process this invoice within the due date.",
            "amount": "64.99",
            "invoice_no": "INV0001",
            "invoice_date": "2018-06-13",
            "invoice_id": "1"
        }
    ]

    public expense_list = [
        {
            "expense_id": "17",
            "added_by": "1",
            "billable": "1",
            "notes": "",
            "project": "38",
            "client": "10",
            "expense_date": "2018-12-11",
            "receipt": null,
            "invoiced": "0",
            "category_id": "1",
            "company_name": "testcompany",
            "project_title": "new new new ptroectsajdbsa",
            "category": "Travel",
            "amount": "1200.00",
            "show_client": "Yes"
        },
        {
            "expense_id": "6",
            "added_by": "1",
            "billable": "1",
            "notes": "testing",
            "project": "24",
            "client": "22",
            "expense_date": "2018-12-05",
            "receipt": null,
            "invoiced": "0",
            "category_id": "1",
            "company_name": "test bino testing",
            "project_title": "dreasmproject",
            "category": "Travel",
            "amount": "1200.00",
            "show_client": "Yes"
        },
        {
            "expense_id": "7",
            "added_by": "1",
            "billable": "0",
            "notes": "testtest",
            "project": "24",
            "client": "22",
            "expense_date": "2018-12-04",
            "receipt": null,
            "invoiced": "0",
            "category_id": "1",
            "company_name": "test bino testing",
            "project_title": "dreasmproject",
            "category": "Travel",
            "amount": "1250.00",
            "show_client": "Yes"
        },
        {
            "expense_id": "13",
            "added_by": "84",
            "billable": "0",
            "notes": "testing",
            "project": "27",
            "client": "24",
            "expense_date": "2018-12-11",
            "receipt": null,
            "invoiced": "0",
            "category_id": "1",
            "company_name": "ABC Technologies",
            "project_title": "Outsourced Testing Project",
            "category": "Travel",
            "amount": "500.00",
            "show_client": "No"
        },
        {
            "expense_id": "14",
            "added_by": "84",
            "billable": "1",
            "notes": "testing",
            "project": "27",
            "client": "24",
            "expense_date": "2018-12-10",
            "receipt": null,
            "invoiced": "0",
            "category_id": "1",
            "company_name": "ABC Technologies",
            "project_title": "Outsourced Testing Project",
            "category": "Travel",
            "amount": "500.00",
            "show_client": "Yes"
        },
        {
            "expense_id": "16",
            "added_by": "84",
            "billable": "0",
            "notes": "fzscg",
            "project": "27",
            "client": "24",
            "expense_date": "2018-12-14",
            "receipt": null,
            "invoiced": "0",
            "category_id": "1",
            "company_name": "ABC Technologies",
            "project_title": "Outsourced Testing Project",
            "category": "Travel",
            "amount": "300.00",
            "show_client": "No"
        },
        {
            "expense_id": "18",
            "added_by": "1",
            "billable": "0",
            "notes": "Testing",
            "project": "27",
            "client": "24",
            "expense_date": "2018-12-14",
            "receipt": null,
            "invoiced": "0",
            "category_id": "1",
            "company_name": "ABC Technologies",
            "project_title": "Outsourced Testing Project",
            "category": "Travel",
            "amount": "1000.00",
            "show_client": "No"
        },
        {
            "expense_id": "19",
            "added_by": "1",
            "billable": "0",
            "notes": "Testing",
            "project": "27",
            "client": "24",
            "expense_date": "2018-12-14",
            "receipt": null,
            "invoiced": "0",
            "category_id": "1",
            "company_name": "ABC Technologies",
            "project_title": "Outsourced Testing Project",
            "category": "Travel",
            "amount": "300.00",
            "show_client": "No"
        },
        {
            "expense_id": "2",
            "added_by": "1",
            "billable": "0",
            "notes": " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            "project": "8",
            "client": "6",
            "expense_date": "2018-08-30",
            "receipt": "jerry1.png",
            "invoiced": "0",
            "category_id": "1",
            "company_name": "Dreamguys",
            "project_title": "Testing Testing",
            "category": "Travel",
            "amount": "1000.00",
            "show_client": "No"
        },
        {
            "expense_id": "4",
            "added_by": "1",
            "billable": "0",
            "notes": "expenses",
            "project": "23",
            "client": "21",
            "expense_date": "2018-12-06",
            "receipt": null,
            "invoiced": "0",
            "category_id": "1",
            "company_name": "testpalani Dreams",
            "project_title": "palani dreams",
            "category": "Travel",
            "amount": "2000.00",
            "show_client": "No"
        }
    ]

    public expense_categories = [
        {
            "value": "1",
            "label": "Travel"
        },
        {
            "value": "2",
            "label": "test"
        }
    ];

    public select_project = [
        {
            "value": "1",
            "label": "Gigs"
        },
        {
            "value": "2",
            "label": "Project EST0002"
        },
        {
            "value": "3",
            "label": "Project EST0004"
        },
        {
            "value": "4",
            "label": "Gigs"
        },
        {
            "value": "5",
            "label": "test project"
        },
        {
            "value": "6",
            "label": "test New"
        },
        {
            "value": "7",
            "label": "Sample Project"
        },
        {
            "value": "8",
            "label": "Testing Testing"
        },
        {
            "value": "9",
            "label": "testnew project"
        },
        {
            "value": "10",
            "label": "testnew project"
        },
        {
            "value": "11",
            "label": "SmartHR"
        },
        {
            "value": "12",
            "label": "Testproject"
        },
        {
            "value": "13",
            "label": "système de gestion des ressources humaines"
        },
        {
            "value": "14",
            "label": "Project EST0005"
        },
        {
            "value": "15",
            "label": "newhrms"
        },
        {
            "value": "19",
            "label": "testpalani"
        },
        {
            "value": "20",
            "label": "project title"
        },
        {
            "value": "21",
            "label": "peo title"
        },
        {
            "value": "23",
            "label": "palani dreams"
        },
        {
            "value": "24",
            "label": "dreasmproject"
        },
        {
            "value": "25",
            "label": "Project EST0015"
        },
        {
            "value": "26",
            "label": "Preadmin"
        },
        {
            "value": "27",
            "label": "Outsourced Testing Project"
        },
        {
            "value": "30",
            "label": "Testing project"
        },
        {
            "value": "31",
            "label": "testproject"
        },
        {
            "value": "32",
            "label": "Project EST0018"
        },
        {
            "value": "33",
            "label": "Project EST0016"
        },
        {
            "value": "34",
            "label": "testpalani project"
        },
        {
            "value": "35",
            "label": "manoj project"
        },
        {
            "value": "36",
            "label": "new peojects"
        },
        {
            "value": "37",
            "label": "ProjectsUesr"
        },
        {
            "value": "38",
            "label": "new new new ptroectsajdbsa"
        },
        {
            "value": "39",
            "label": "nn peoject"
        },
        {
            "value": "40",
            "label": "latest projects"
        },
        {
            "value": "41",
            "label": "newtestproject"
        },
        {
            "value": "42",
            "label": "Laundry"
        },
        {
            "value": "43",
            "label": "Laundry"
        },
        {
            "value": "44",
            "label": "New"
        }
    ];

    public timesheet_list = [
        {
            "time_id": "54",
            "user_id": "2",
            "project_id": "15",
            "hours": "5:10",
            "timeline_date": "2018-12-19",
            "timeline_desc": "kjjkhkjh",
            "project_name": "newhrms",
            "fullname": "Steve Smith"
        },
        {
            "time_id": "53",
            "user_id": "2",
            "project_id": "15",
            "hours": "2",
            "timeline_date": "2018-12-18",
            "timeline_desc": "Good Work",
            "project_name": "newhrms",
            "fullname": "Steve Smith"
        },
        {
            "time_id": "52",
            "user_id": "2",
            "project_id": "15",
            "hours": "4",
            "timeline_date": "2018-12-17",
            "timeline_desc": "zsaxx",
            "project_name": "newhrms",
            "fullname": "Steve Smith"
        },
        {
            "time_id": "51",
            "user_id": "2",
            "project_id": "15",
            "hours": "1",
            "timeline_date": "2018-12-13",
            "timeline_desc": "testing",
            "project_name": "newhrms",
            "fullname": "Steve Smith"
        },
        {
            "time_id": "50",
            "user_id": "2",
            "project_id": "15",
            "hours": "1",
            "timeline_date": "2018-12-12",
            "timeline_desc": "just for testing",
            "project_name": "newhrms",
            "fullname": "Steve Smith"
        },
        {
            "time_id": "49",
            "user_id": "2",
            "project_id": "15",
            "hours": "4",
            "timeline_date": "2018-12-12",
            "timeline_desc": "Unit testing ",
            "project_name": "newhrms",
            "fullname": "Steve Smith"
        },
        {
            "time_id": "36",
            "user_id": "2",
            "project_id": "1",
            "hours": "3.5",
            "timeline_date": "2018-11-24",
            "timeline_desc": "Worked on new features",
            "project_name": "Gigs",
            "fullname": "Steve Smith"
        },
        {
            "time_id": "33",
            "user_id": "2",
            "project_id": "2",
            "hours": "04:00",
            "timeline_date": "2018-11-23",
            "timeline_desc": "Test",
            "project_name": "Project EST0002",
            "fullname": "Steve Smith"
        },
        {
            "time_id": "32",
            "user_id": "2",
            "project_id": "2",
            "hours": "01:00",
            "timeline_date": "2018-11-22",
            "timeline_desc": "Mnoj",
            "project_name": "Project EST0002",
            "fullname": "Steve Smith"
        },
        {
            "time_id": "31",
            "user_id": "2",
            "project_id": "2",
            "hours": "01:30",
            "timeline_date": "2018-11-22",
            "timeline_desc": "Description",
            "project_name": "Project EST0002",
            "fullname": "Steve Smith"
        }
    ];
    public timesheet_hours = [
        {
            "date": "2018-12-19",
            "minutes": 310
        },
        {
            "date": "2018-12-18",
            "minutes": 120
        },
        {
            "date": "2018-12-17",
            "minutes": 240
        },
        {
            "date": "2018-12-13",
            "minutes": 60
        },
        {
            "date": "2018-12-12",
            "minutes": 300
        },
        {
            "date": "2018-11-24",
            "minutes": 210
        },
        {
            "date": "2018-11-23",
            "minutes": 240
        },
        {
            "date": "2018-11-22",
            "minutes": 150
        }
    ];

    public payslip_list = [
        {
            "year": "2018",
            "month": "8",
            "payslip_details": {
                "payslip_user_id": "2",
                "payslip_year": "2018",
                "payslip_month": "8",
                "payslip_basic": "400000",
                "payslip_da": "320000",
                "payslip_hra": "80000",
                "payslip_conveyance": "0",
                "payslip_allowance": "0",
                "payslip_medical_allowance": "0",
                "payslip_others": "0",
                "payslip_ded_tds": "0",
                "payslip_ded_esi": "0",
                "payslip_ded_pf": "0",
                "payslip_ded_leave": "0",
                "payslip_ded_prof": "0",
                "payslip_ded_welfare": "0",
                "payslip_ded_fund": "0",
                "payslip_ded_others": "0"
            },
            "salary": "800000",
            "user_id": "2",
            "email": "stevesmith@gmail.com",
            "role_id": "3",
            "designation": "Web Backend Developer",
            "avatar": "user-06.jpg",
            "fullname": "Steve Smith"
        },
        {
            "year": "2018",
            "month": "7",
            "payslip_details": {
                "payslip_user_id": "2",
                "payslip_year": "2018",
                "payslip_month": "07",
                "payslip_basic": "30000",
                "payslip_da": "24000",
                "payslip_hra": "6000",
                "payslip_conveyance": "0",
                "payslip_allowance": "0",
                "payslip_medical_allowance": "0",
                "payslip_others": "0",
                "payslip_ded_tds": "0",
                "payslip_ded_esi": "0",
                "payslip_ded_pf": "0",
                "payslip_ded_leave": "0",
                "payslip_ded_prof": "0",
                "payslip_ded_welfare": "0",
                "payslip_ded_fund": "0",
                "payslip_ded_others": "0"
            },
            "salary": "60000",
            "user_id": "2",
            "email": "stevesmith@gmail.com",
            "role_id": "3",
            "designation": "Web Backend Developer",
            "avatar": "user-06.jpg",
            "fullname": "Steve Smith"
        },
        {
            "year": "2018",
            "month": "8",
            "payslip_details": {
                "payslip_user_id": "15",
                "payslip_year": "2018",
                "payslip_month": "8",
                "payslip_basic": "100",
                "payslip_da": "80",
                "payslip_hra": "20",
                "payslip_conveyance": "0",
                "payslip_allowance": "0",
                "payslip_medical_allowance": "0",
                "payslip_others": "0",
                "payslip_ded_tds": "0",
                "payslip_ded_esi": "0",
                "payslip_ded_pf": "0",
                "payslip_ded_leave": "0",
                "payslip_ded_prof": "0",
                "payslip_ded_welfare": "0",
                "payslip_ded_fund": "0",
                "payslip_ded_others": "0"
            },
            "salary": "200",
            "user_id": "15",
            "email": "narendhar@dreamguys.co.in",
            "role_id": "3",
            "designation": "technologies",
            "avatar": "default_avatar.jpg",
            "fullname": "Narendhar"
        },
        {
            "year": "2018",
            "month": "9",
            "payslip_details": {
                "payslip_user_id": "16",
                "payslip_year": "2018",
                "payslip_month": "9",
                "payslip_basic": "2500",
                "payslip_da": "2000",
                "payslip_hra": "500",
                "payslip_conveyance": "0",
                "payslip_allowance": "0",
                "payslip_medical_allowance": "0",
                "payslip_others": "0",
                "payslip_ded_tds": "0",
                "payslip_ded_esi": "0",
                "payslip_ded_pf": "0",
                "payslip_ded_leave": "0",
                "payslip_ded_prof": "0",
                "payslip_ded_welfare": "0",
                "payslip_ded_fund": "0",
                "payslip_ded_others": "0"
            },
            "salary": "5000",
            "user_id": "16",
            "email": "aravindan.isd@shanthigears.murugappa.com",
            "role_id": "3",
            "designation": "technologies",
            "avatar": "default_avatar.jpg",
            "fullname": "Aravindan"
        },
        {
            "year": "2018",
            "month": "9",
            "payslip_details": {
                "payslip_user_id": "15",
                "payslip_year": "2018",
                "payslip_month": "9",
                "payslip_basic": "50000",
                "payslip_da": "40000",
                "payslip_hra": "10000",
                "payslip_conveyance": "0",
                "payslip_allowance": "0",
                "payslip_medical_allowance": "0",
                "payslip_others": "0",
                "payslip_ded_tds": "0",
                "payslip_ded_esi": "0",
                "payslip_ded_pf": "0",
                "payslip_ded_leave": "0",
                "payslip_ded_prof": "0",
                "payslip_ded_welfare": "0",
                "payslip_ded_fund": "0",
                "payslip_ded_others": "0"
            },
            "salary": "100000",
            "user_id": "15",
            "email": "narendhar@dreamguys.co.in",
            "role_id": "3",
            "designation": "technologies",
            "avatar": "default_avatar.jpg",
            "fullname": "Narendhar"
        },
        {
            "year": "2018",
            "month": "9",
            "payslip_details": {
                "payslip_user_id": "11",
                "payslip_year": "2018",
                "payslip_month": "9",
                "payslip_basic": "45000",
                "payslip_da": "36000",
                "payslip_hra": "9000",
                "payslip_conveyance": "0",
                "payslip_allowance": "0",
                "payslip_medical_allowance": "0",
                "payslip_others": "0",
                "payslip_ded_tds": "0",
                "payslip_ded_esi": "0",
                "payslip_ded_pf": "0",
                "payslip_ded_leave": "0",
                "payslip_ded_prof": "0",
                "payslip_ded_welfare": "0",
                "payslip_ded_fund": "0",
                "payslip_ded_others": "0"
            },
            "salary": "90000",
            "user_id": "11",
            "email": "guru@dreamguys.co",
            "role_id": "3",
            "designation": "COO",
            "avatar": "default_avatar.jpg",
            "fullname": "Guru Prasad"
        },
        {
            "year": "2018",
            "month": "6",
            "payslip_details": {
                "payslip_user_id": "39",
                "payslip_year": "2018",
                "payslip_month": "6",
                "payslip_basic": "22500",
                "payslip_da": "18000",
                "payslip_hra": "4500",
                "payslip_conveyance": "0",
                "payslip_allowance": "0",
                "payslip_medical_allowance": "0",
                "payslip_others": "0",
                "payslip_ded_tds": "0",
                "payslip_ded_esi": "0",
                "payslip_ded_pf": "1200",
                "payslip_ded_leave": "0",
                "payslip_ded_prof": "0",
                "payslip_ded_welfare": "0",
                "payslip_ded_fund": "0",
                "payslip_ded_others": "0"
            },
            "salary": "45000",
            "user_id": "39",
            "email": "rogan@yopmail.com",
            "role_id": "3",
            "designation": "Test",
            "avatar": "1536122879.jpg",
            "fullname": "Rogan"
        },
        {
            "year": "2018",
            "month": "7",
            "payslip_details": {
                "payslip_user_id": "39",
                "payslip_year": "2018",
                "payslip_month": "07",
                "payslip_basic": "25503",
                "payslip_da": "20402",
                "payslip_hra": "5101",
                "payslip_conveyance": "0",
                "payslip_allowance": "0",
                "payslip_medical_allowance": "0",
                "payslip_others": "0",
                "payslip_ded_tds": "0",
                "payslip_ded_esi": "0",
                "payslip_ded_pf": "0",
                "payslip_ded_leave": "0",
                "payslip_ded_prof": "0",
                "payslip_ded_welfare": "0",
                "payslip_ded_fund": "0",
                "payslip_ded_others": "0"
            },
            "salary": "51005",
            "user_id": "39",
            "email": "rogan@yopmail.com",
            "role_id": "3",
            "designation": "Test",
            "avatar": "1536122879.jpg",
            "fullname": "Rogan"
        },
        {
            "year": "2018",
            "month": "9",
            "payslip_details": {
                "payslip_user_id": "53",
                "payslip_year": "2018",
                "payslip_month": "9",
                "payslip_basic": "12500",
                "payslip_da": "10000",
                "payslip_hra": "2500",
                "payslip_conveyance": "0",
                "payslip_allowance": "0",
                "payslip_medical_allowance": "0",
                "payslip_others": "0",
                "payslip_ded_tds": "0",
                "payslip_ded_esi": "0",
                "payslip_ded_pf": "0",
                "payslip_ded_leave": "0",
                "payslip_ded_prof": "0",
                "payslip_ded_welfare": "0",
                "payslip_ded_fund": "0",
                "payslip_ded_others": "0"
            },
            "salary": "",
            "user_id": "53",
            "email": "palanimuthu6@gmai.com",
            "role_id": "3",
            "designation": "accounts",
            "avatar": "default_avatar.jpg",
            "fullname": "test"
        }
    ];

    public payslip = {
        "user_id": "2",
        "email": "stevesmith@gmail.com",
        "fullname": "Steve Smith",
        "company": "Focus Technologies",
        "city": "cbe",
        "country": "641015",
        "address": "Peelamedu",
        "phone": "9988776644",
        "avatar": "https://newhrms.com/assets/uploads/user-06.jpg",
        "designation": "Web Backend Developer",
        "amount": "800000",
        "payslip_year": "2018",
        "payslip_month": "8",
        "payslip_basic": "400000",
        "payslip_da": "320000",
        "payslip_hra": "80000",
        "payslip_conveyance": "0",
        "payslip_allowance": "0",
        "payslip_medical_allowance": "0",
        "payslip_others": "0",
        "payslip_ded_tds": "0",
        "payslip_ded_esi": "0",
        "payslip_ded_pf": "0",
        "payslip_ded_leave": "0",
        "payslip_ded_prof": "0",
        "payslip_ded_welfare": "0",
        "payslip_ded_fund": "0",
        "payslip_ded_others": "0"
    }

    public chatMsgList = [
        {
            "fullname": "Smith",
            "user_id": "44",
            "profile_image": "https://newhrms.com/livedemo/assets/uploads/"
        },
        {
            "fullname": "Steve Smith",
            "user_id": "2",
            "profile_image": "https://newhrms.com/livedemo/assets/uploads/user-06.jpg"
        },
        {
            "fullname": "John Doe",
            "user_id": "9",
            "profile_image": "https://newhrms.com/livedemo/assets/uploads/default_avatar.jpg"
        },
        {
            "fullname": "John smith",
            "user_id": "1",
            "profile_image": "https://newhrms.com/livedemo/assets/uploads/blue-cd-vector-technology.jpg"
        }
    ];

    public chatLastMsg = [
        {
            "user_id": "44",
            "last_message": "Haii",
            "msg_time": "2019-01-03"
        },
        {
            "user_id": "2",
            "last_message": "Hey",
            "msg_time": "2018-12-22 12:03:43"
        },
        {
            "user_id": "9",
            "last_message": "Tub",
            "msg_time": "2018-11-12 13:37:28"
        },
        {
            "user_id": "1",
            "last_message": "Hajshs",
            "msg_time": "2018-11-12 10:46:28"
        }
    ];
    public saved_item = [
        {
            "item_id": "1",
            "item_name": "f&d",
            "item_desc": " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            "unit_cost": "400.00",
            "item_tax_rate": "18.00",
            "item_tax_total": "216.00",
            "quantity": "3.00",
            "total_cost": "1416.00",
            "deleted": "No"
        },
        {
            "item_id": "2",
            "item_name": "Design - Website",
            "item_desc": "Landing Page",
            "unit_cost": "500.00",
            "item_tax_rate": "0.00",
            "item_tax_total": "0.00",
            "quantity": "1.00",
            "total_cost": "500.00",
            "deleted": "No"
        }
    ];
    public chatmsg = {
        "from_user": {
            "id": "1",
            "user_id": "1",
            "fullname": "Administrator",
            "gender": "",
            "dob": "0000-00-00",
            "company": "-",
            "city": null,
            "country": null,
            "locale": "en_US",
            "address": "-",
            "phone": "",
            "mobile": null,
            "skype": null,
            "language": "english",
            "department": null,
            "avatar": "blue-cd-vector-technology.jpg",
            "use_gravatar": "N",
            "as_company": "false",
            "allowed_modules": null,
            "hourly_rate": "0.00"
        },
        "$to_user": null,
        "chat_messages": [
            {
                "msg_id": "1",
                "from_id": "1",
                "to_id": "2",
                "message": "Hello",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-17 19:28:49"
            },
            {
                "msg_id": "2",
                "from_id": "2",
                "to_id": "1",
                "message": "how are you ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-17 19:29:10"
            },
            {
                "msg_id": "3",
                "from_id": "2",
                "to_id": "1",
                "message": "fine",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-17 19:29:19"
            },
            {
                "msg_id": "4",
                "from_id": "2",
                "to_id": "1",
                "message": "hai",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-17 19:37:20"
            },
            {
                "msg_id": "5",
                "from_id": "2",
                "to_id": "1",
                "message": "Hi there, I am also fine, thanks! And how are you?",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-17 19:37:25"
            },
            {
                "msg_id": "6",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-17 19:37:49"
            },
            {
                "msg_id": "7",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-17 19:38:15"
            },
            {
                "msg_id": "8",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-17 19:39:05"
            },
            {
                "msg_id": "9",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-23 11:44:45"
            },
            {
                "msg_id": "10",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-23 11:44:53"
            },
            {
                "msg_id": "11",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-23 11:45:01"
            },
            {
                "msg_id": "12",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-23 11:45:09"
            },
            {
                "msg_id": "13",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-23 11:45:43"
            },
            {
                "msg_id": "14",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-23 12:04:09"
            },
            {
                "msg_id": "15",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-23 12:04:34"
            },
            {
                "msg_id": "16",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-23 12:28:38"
            },
            {
                "msg_id": "24",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-23 12:53:14"
            },
            {
                "msg_id": "29",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-23 15:14:18"
            },
            {
                "msg_id": "31",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-24 13:16:54"
            },
            {
                "msg_id": "32",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-24 13:17:51"
            },
            {
                "msg_id": "33",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-24 13:18:25"
            },
            {
                "msg_id": "34",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-24 13:20:22"
            },
            {
                "msg_id": "35",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-24 13:20:33"
            },
            {
                "msg_id": "37",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-24 18:21:53"
            },
            {
                "msg_id": "39",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-24 18:32:13"
            },
            {
                "msg_id": "43",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-29 18:05:48"
            },
            {
                "msg_id": "44",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-29 18:05:58"
            },
            {
                "msg_id": "45",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-10-29 18:06:31"
            },
            {
                "msg_id": "46",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-01 05:56:03"
            },
            {
                "msg_id": "47",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-01 06:00:35"
            },
            {
                "msg_id": "48",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-01 06:01:03"
            },
            {
                "msg_id": "49",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-01 06:01:25"
            },
            {
                "msg_id": "50",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-01 06:01:59"
            },
            {
                "msg_id": "51",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-01 06:05:11"
            },
            {
                "msg_id": "52",
                "from_id": "2",
                "to_id": "1",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-01 06:05:21"
            },
            {
                "msg_id": "175",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-09 10:21:43"
            },
            {
                "msg_id": "176",
                "from_id": "1",
                "to_id": "2",
                "message": "How are you",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-09 10:21:59"
            },
            {
                "msg_id": "177",
                "from_id": "1",
                "to_id": "2",
                "message": "Hai",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-09 10:32:19"
            },
            {
                "msg_id": "179",
                "from_id": "1",
                "to_id": "2",
                "message": "How are you",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-09 11:50:08"
            },
            {
                "msg_id": "180",
                "from_id": "1",
                "to_id": "2",
                "message": "Hai",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-09 11:54:01"
            },
            {
                "msg_id": "181",
                "from_id": "1",
                "to_id": "2",
                "message": "Hai",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-09 11:54:40"
            },
            {
                "msg_id": "182",
                "from_id": "1",
                "to_id": "2",
                "message": "H",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-09 12:00:45"
            },
            {
                "msg_id": "183",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-11-09 12:06:14"
            },
            {
                "msg_id": "311",
                "from_id": "1",
                "to_id": "2",
                "message": "Hai",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-12-22 12:03:30"
            },
            {
                "msg_id": "312",
                "from_id": "1",
                "to_id": "2",
                "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
                "group_id": "0",
                "msg_type": "one",
                "msg_date": "2018-12-22 12:03:43"
            }
        ]
    };
    public taskProject = {
        "project_title": "Gigs",
        "start_date": "2018-06-12",
        "due_date": "2018-12-31",
        "progress": "0",
        "assign_lead": "1",
        "assign_to": "a:3:{i:0;s:1:\"1\";i:1;s:1:\"3\";i:2;s:1:\"9\";}",
        "estimate_hours": "350.00",
        "project_created": "2018-06-12 04:57:39",
        "tasks": [
            {
                "task_detail": {
                    "t_id": "28",
                    "assigned_to": "s:3:\"2,3\";",
                    "task_name": "test ",
                    "estimated_hours": "12.00",
                    "description": "test",
                    "task_progress": "0",
                    "start_date": "2018-11-28",
                    "due_date": "2018-11-29",
                    "user_id": "1",
                    "fullname": "Administrator",
                    "avatar": "blue-cd-vector-technology.jpg",
                    "start_time": "0",
                    "end_time": "0"
                },
                "task_comment": [
                    {
                        "comment_id": "26",
                        "project": "1",
                        "task_id": "28",
                        "posted_by": "1",
                        "message": "",
                        "date_posted": "0000-00-00 00:00:00",
                        "deleted": "No",
                        "client_id": null,
                        "unread": "1"
                    }
                ],
                "task_files": [],
                "assigned_to": []
            },
            {
                "task_detail": {
                    "t_id": "26",
                    "assigned_to": "N;",
                    "task_name": "New Customization ",
                    "estimated_hours": "4.00",
                    "description": "",
                    "task_progress": "100",
                    "start_date": "2018-11-24",
                    "due_date": "2018-11-24",
                    "user_id": "2",
                    "fullname": "Steve Smith",
                    "avatar": "user-06.jpg",
                    "start_time": "0",
                    "end_time": "0"
                },
                "task_comment": [],
                "task_files": [],
                "assigned_to": []
            },
            {
                "task_detail": {
                    "t_id": "1",
                    "assigned_to": "N;",
                    "task_name": "Testing site",
                    "estimated_hours": "2.00",
                    "description": "",
                    "task_progress": "100",
                    "start_date": "2018-05-29",
                    "due_date": "2018-05-29",
                    "user_id": "0",
                    "fullname": "0",
                    "avatar": "0",
                    "start_time": "1527138689",
                    "end_time": "1527139199"
                },
                "task_comment": [
                    {
                        "comment_id": "3",
                        "project": "1",
                        "task_id": "1",
                        "posted_by": "1",
                        "message": "",
                        "date_posted": "2018-08-27 06:19:31",
                        "deleted": "No",
                        "client_id": null,
                        "unread": "1"
                    },
                    {
                        "comment_id": "19",
                        "project": "1",
                        "task_id": "1",
                        "posted_by": "1",
                        "message": "<p>completed</p>",
                        "date_posted": "0000-00-00 00:00:00",
                        "deleted": "No",
                        "client_id": null,
                        "unread": "1"
                    }
                ],
                "task_files": [],
                "assigned_to": []
            },
            {
                "task_detail": {
                    "t_id": "3",
                    "assigned_to": "N;",
                    "task_name": "serverp",
                    "estimated_hours": "0.00",
                    "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                    "task_progress": "0",
                    "start_date": "2018-05-24",
                    "due_date": "2018-05-31",
                    "user_id": "0",
                    "fullname": "0",
                    "avatar": "0",
                    "start_time": "0",
                    "end_time": "0"
                },
                "task_comment": [],
                "task_files": [],
                "assigned_to": []
            },
            {
                "task_detail": {
                    "t_id": "4",
                    "assigned_to": "N;",
                    "task_name": "serverp",
                    "estimated_hours": "0.00",
                    "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                    "task_progress": "100",
                    "start_date": "2018-05-24",
                    "due_date": "2018-05-24",
                    "user_id": "0",
                    "fullname": "0",
                    "avatar": "0",
                    "start_time": "0",
                    "end_time": "0"
                },
                "task_comment": [],
                "task_files": [],
                "assigned_to": []
            }
        ],
        "tasks_open": [
            {
                "t_id": "3",
                "task_name": "serverp",
                "project": "1",
                "milestone": "0",
                "assigned_to": "N;",
                "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                "visible": "Yes",
                "task_progress": "0",
                "timer_status": "Off",
                "timer_started_by": null,
                "start_time": null,
                "estimated_hours": "0.00",
                "logged_time": "0",
                "auto_progress": "FALSE",
                "start_date": "2018-05-24",
                "due_date": "2018-05-31",
                "pinned": "0",
                "date_added": "2018-05-24 02:50:28",
                "added_by": "5"
            },
            {
                "t_id": "28",
                "task_name": "test ",
                "project": "1",
                "milestone": null,
                "assigned_to": "s:3:\"2,3\";",
                "description": "test",
                "visible": "No",
                "task_progress": "0",
                "timer_status": "Off",
                "timer_started_by": null,
                "start_time": null,
                "estimated_hours": "12.00",
                "logged_time": "0",
                "auto_progress": "FALSE",
                "start_date": "2018-11-28",
                "due_date": "2018-11-29",
                "pinned": "0",
                "date_added": "2018-11-28 05:15:50",
                "added_by": "1"
            }
        ],
        "tasks_completed": [
            {
                "t_id": "1",
                "task_name": "Testing site",
                "project": "1",
                "milestone": "0",
                "assigned_to": "N;",
                "description": "",
                "visible": "No",
                "task_progress": "100",
                "timer_status": "Off",
                "timer_started_by": null,
                "start_time": null,
                "estimated_hours": "2.00",
                "logged_time": "510",
                "auto_progress": "FALSE",
                "start_date": "2018-05-29",
                "due_date": "2018-05-29",
                "pinned": "0",
                "date_added": "2018-05-23 00:04:47",
                "added_by": "4"
            },
            {
                "t_id": "4",
                "task_name": "serverp",
                "project": "1",
                "milestone": "0",
                "assigned_to": "N;",
                "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                "visible": "Yes",
                "task_progress": "100",
                "timer_status": "Off",
                "timer_started_by": null,
                "start_time": null,
                "estimated_hours": "0.00",
                "logged_time": "0",
                "auto_progress": "FALSE",
                "start_date": "2018-05-24",
                "due_date": "2018-05-24",
                "pinned": "0",
                "date_added": "2018-05-24 02:56:23",
                "added_by": "5"
            },
            {
                "t_id": "26",
                "task_name": "New Customization ",
                "project": "1",
                "milestone": "0",
                "assigned_to": "N;",
                "description": "",
                "visible": "Yes",
                "task_progress": "100",
                "timer_status": "Off",
                "timer_started_by": null,
                "start_time": null,
                "estimated_hours": "4.00",
                "logged_time": "0",
                "auto_progress": "FALSE",
                "start_date": "2018-11-24",
                "due_date": "2018-11-24",
                "pinned": "0",
                "date_added": "2018-11-24 00:40:02",
                "added_by": "2"
            }
        ],
        "tasks_files_count": 0,
        "comment_count": 6,
        "overviews": {
            "project_id": "1",
            "project_code": "PRO29673",
            "project_title": "Gigs",
            "deadline": "2018-12-31",
            "project_created": "2018-06-12 04:57:39",
            "description": "<p>This is testing project<br></p>",
            "progress": "0",
            "fixed_rate": "No",
            "hourly_rate": "15.00",
            "fixed_price": "0.00",
            "client": "1",
            "client_name": "thomas tech ",
            "leadid": "1",
            "project_lead_name": "Administrator",
            "project_lead_photo": "http://www.newhrms.com/assets/uploads/blue-cd-vector-technology.jpg",
            "project_team_members": [
                {
                    "user_id": "1",
                    "fullname": "Administrator",
                    "avatar": "blue-cd-vector-technology.jpg"
                },
                {
                    "user_id": "3",
                    "fullname": "Manoj",
                    "avatar": "default_avatar.jpg"
                },
                {
                    "user_id": "9",
                    "fullname": "Dinesh Kumar",
                    "avatar": "default_avatar.jpg"
                }
            ]
        }
    };

    public clientProfile = {
        "co_id": "10",
        "company_name": "Global Technologies",
        "fullname": "Administrator",
        "company_email": "global@tech.co.in",
        "company_website": "www.global.com",
        "company_mobile": "1234567890",
        "company_address": "Global Technologies,\n 5754 Airport Rd",
        "city": "Coosada",
        "state": "AL, 36020",
        "country": "United States",
        "zip_code": "230125",
        "company_phone": "888-777-6655",
        "company_vat": "2",
        "company_fax": 0,
        "skype": "testid",
        "linkedin": "linked",
        "facebook": "fb",
        "twitter": "twitter",
        "contact_person": "admin",
        "projects": [
            {
                "project_title": "Office Management",
                "start_date": "2018-06-12",
                "due_date": "2018-12-31",
                "progress": "0",
                "assign_lead": "1",
                "assign_to": "a:3:{i:0;s:1:\"1\";i:1;s:1:\"3\";i:2;s:1:\"9\";}",
                "estimate_hours": "350.00",
                "project_created": "2018-06-12",
                "tasks": [
                    {
                        "task_detail": {
                            "t_id": "28",
                            "assigned_to": "s:3:\"2,3\";",
                            "task_name": "Patient appointment booking ",
                            "estimated_hours": "12.00",
                            "description": "test",
                            "task_progress": "0",
                            "start_date": "2018-11-28",
                            "due_date": "2018-11-29",
                            "user_id": "1",
                            "fullname": "Administrator",
                            "avatar": "blue-cd-vector-technology.jpg",
                            "start_time": "0",
                            "end_time": "0"
                        },
                        "task_comment": [
                            {
                                "comment_id": "26",
                                "project": "1",
                                "task_id": "28",
                                "posted_by": "1",
                                "message": "",
                                "date_posted": "0000-00-00 00:00:00",
                                "deleted": "No",
                                "client_id": null,
                                "unread": "1"
                            }
                        ],
                        "task_files": [],
                        "assigned_to": []
                    },
                    {
                        "task_detail": {
                            "t_id": "26",
                            "assigned_to": "N;",
                            "task_name": "Appointment booking with payment gateway ",
                            "estimated_hours": "4.00",
                            "description": "",
                            "task_progress": "100",
                            "start_date": "2018-11-24",
                            "due_date": "2018-11-24",
                            "user_id": "2",
                            "fullname": "Steve Smith",
                            "avatar": "user-06.jpg",
                            "start_time": "0",
                            "end_time": "0"
                        },
                        "task_comment": [],
                        "task_files": [],
                        "assigned_to": []
                    },
                    {
                        "task_detail": {
                            "t_id": "1",
                            "assigned_to": "N;",
                            "task_name": "Patient and Doctor video conferencing",
                            "estimated_hours": "2.00",
                            "description": "",
                            "task_progress": "100",
                            "start_date": "2018-05-29",
                            "due_date": "2018-05-29",
                            "user_id": "0",
                            "fullname": "0",
                            "avatar": "0",
                            "start_time": "1527138689",
                            "end_time": "1527139199"
                        },
                        "task_comment": [
                            {
                                "comment_id": "3",
                                "project": "1",
                                "task_id": "1",
                                "posted_by": "1",
                                "message": "",
                                "date_posted": "2018-08-27 06:19:31",
                                "deleted": "No",
                                "client_id": null,
                                "unread": "1"
                            },
                            {
                                "comment_id": "19",
                                "project": "1",
                                "task_id": "1",
                                "posted_by": "1",
                                "message": "<p>completed</p>",
                                "date_posted": "0000-00-00 00:00:00",
                                "deleted": "No",
                                "client_id": null,
                                "unread": "1"
                            }
                        ],
                        "task_files": [],
                        "assigned_to": []
                    },
                ],
                "tasks_open": [
                    {
                        "t_id": "26",
                        "task_name": "Appointment booking with payment gateway ",
                        "project": "1",
                        "milestone": "0",
                        "assigned_to": "N;",
                        "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                        "visible": "Yes",
                        "task_progress": "0",
                        "timer_status": "Off",
                        "timer_started_by": null,
                        "start_time": null,
                        "estimated_hours": "0.00",
                        "logged_time": "0",
                        "auto_progress": "FALSE",
                        "start_date": "2018-05-24",
                        "due_date": "2018-05-31",
                        "pinned": "0",
                        "date_added": "2018-05-24 02:50:28",
                        "added_by": "5"
                    },
                    {
                        "t_id": "28",
                        "task_name": "test",
                        "project": "1",
                        "milestone": null,
                        "assigned_to": "s:3:\"2,3\";",
                        "description": "test",
                        "visible": "No",
                        "task_progress": "0",
                        "timer_status": "Off",
                        "timer_started_by": null,
                        "start_time": null,
                        "estimated_hours": "12.00",
                        "logged_time": "0",
                        "auto_progress": "FALSE",
                        "start_date": "2018-11-28",
                        "due_date": "2018-11-29",
                        "pinned": "0",
                        "date_added": "2018-11-28 05:15:50",
                        "added_by": "1"
                    }
                ],
                "tasks_completed": [
                    {
                        "t_id": "28",
                        "task_name": "Patient appointment booking",
                        "project": "1",
                        "milestone": "0",
                        "assigned_to": "N;",
                        "description": "",
                        "visible": "No",
                        "task_progress": "100",
                        "timer_status": "Off",
                        "timer_started_by": null,
                        "start_time": null,
                        "estimated_hours": "2.00",
                        "logged_time": "510",
                        "auto_progress": "FALSE",
                        "start_date": "2018-05-29",
                        "due_date": "2018-05-29",
                        "pinned": "0",
                        "date_added": "2018-05-23 00:04:47",
                        "added_by": "4"
                    },
                    {
                        "t_id": "1",
                        "task_name": "Patient and Doctor video conferencing",
                        "project": "1",
                        "milestone": "0",
                        "assigned_to": "N;",
                        "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                        "visible": "Yes",
                        "task_progress": "100",
                        "timer_status": "Off",
                        "timer_started_by": null,
                        "start_time": null,
                        "estimated_hours": "0.00",
                        "logged_time": "0",
                        "auto_progress": "FALSE",
                        "start_date": "2018-05-24",
                        "due_date": "2018-05-24",
                        "pinned": "0",
                        "date_added": "2018-05-24 02:56:23",
                        "added_by": "5"
                    },
                ],
                "tasks_files_count": 0,
                "comment_count": 6,
                "overviews": {
                    "project_id": "1",
                    "project_code": "PRO29673",
                    "project_title": "Office Management",
                    "deadline": "2018-12-31",
                    "project_created": "2018-06-12 04:57:39",
                    "description": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...<br></p>",
                    "progress": "0",
                    "fixed_rate": "No",
                    "hourly_rate": "15.00",
                    "fixed_price": "0.00",
                    "client": "1",
                    "client_name": "thomas tech ",
                    "leadid": "1",
                    "project_lead_name": "Administrator",
                    "project_lead_photo": "http://www.newhrms.com/assets/uploads/blue-cd-vector-technology.jpg",
                    "project_team_members": [
                        {
                            "user_id": "1",
                            "fullname": "Administrator",
                            "avatar": "blue-cd-vector-technology.jpg"
                        },
                        {
                            "user_id": "3",
                            "fullname": "Smith",
                            "avatar": "default_avatar.jpg"
                        },
                        {
                            "user_id": "9",
                            "fullname": "John",
                            "avatar": "default_avatar.jpg"
                        }
                    ]
                }
            },
            {
                "project_title": "Project Management",
                "start_date": "2018-06-12",
                "due_date": "2018-12-31",
                "progress": "0",
                "assign_lead": "1",
                "assign_to": "a:3:{i:0;s:1:\"1\";i:1;s:1:\"3\";i:2;s:1:\"9\";}",
                "estimate_hours": "350.00",
                "project_created": "2018-06-12 04:57:39",
                "tasks": [
                    {
                        "task_detail": {
                            "t_id": "28",
                            "assigned_to": "s:3:\"2,3\";",
                            "task_name": "Patient appointment booking ",
                            "estimated_hours": "12.00",
                            "description": "test",
                            "task_progress": "0",
                            "start_date": "2018-11-28",
                            "due_date": "2018-11-29",
                            "user_id": "1",
                            "fullname": "Administrator",
                            "avatar": "blue-cd-vector-technology.jpg",
                            "start_time": "0",
                            "end_time": "0"
                        },
                        "task_comment": [
                            {
                                "comment_id": "26",
                                "project": "1",
                                "task_id": "28",
                                "posted_by": "1",
                                "message": "",
                                "date_posted": "0000-00-00 00:00:00",
                                "deleted": "No",
                                "client_id": null,
                                "unread": "1"
                            }
                        ],
                        "task_files": [],
                        "assigned_to": []
                    },
                    {
                        "task_detail": {
                            "t_id": "26",
                            "assigned_to": "N;",
                            "task_name": "Appointment booking with payment gateway ",
                            "estimated_hours": "4.00",
                            "description": "",
                            "task_progress": "100",
                            "start_date": "2018-11-24",
                            "due_date": "2018-11-24",
                            "user_id": "2",
                            "fullname": "Steve Smith",
                            "avatar": "user-06.jpg",
                            "start_time": "0",
                            "end_time": "0"
                        },
                        "task_comment": [],
                        "task_files": [],
                        "assigned_to": []
                    },
                    {
                        "task_detail": {
                            "t_id": "1",
                            "assigned_to": "N;",
                            "task_name": "Patient and Doctor video conferencing",
                            "estimated_hours": "2.00",
                            "description": "",
                            "task_progress": "100",
                            "start_date": "2018-05-29",
                            "due_date": "2018-05-29",
                            "user_id": "0",
                            "fullname": "0",
                            "avatar": "0",
                            "start_time": "1527138689",
                            "end_time": "1527139199"
                        },
                        "task_comment": [
                            {
                                "comment_id": "3",
                                "project": "1",
                                "task_id": "1",
                                "posted_by": "1",
                                "message": "",
                                "date_posted": "2018-08-27 06:19:31",
                                "deleted": "No",
                                "client_id": null,
                                "unread": "1"
                            },
                            {
                                "comment_id": "19",
                                "project": "1",
                                "task_id": "1",
                                "posted_by": "1",
                                "message": "<p>completed</p>",
                                "date_posted": "0000-00-00 00:00:00",
                                "deleted": "No",
                                "client_id": null,
                                "unread": "1"
                            }
                        ],
                        "task_files": [],
                        "assigned_to": []
                    },
                ],
                "tasks_open": [
                    {
                        "t_id": "26",
                        "task_name": "Appointment booking with payment gateway ",
                        "project": "1",
                        "milestone": "0",
                        "assigned_to": "N;",
                        "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                        "visible": "Yes",
                        "task_progress": "0",
                        "timer_status": "Off",
                        "timer_started_by": null,
                        "start_time": null,
                        "estimated_hours": "0.00",
                        "logged_time": "0",
                        "auto_progress": "FALSE",
                        "start_date": "2018-05-24",
                        "due_date": "2018-05-31",
                        "pinned": "0",
                        "date_added": "2018-05-24 02:50:28",
                        "added_by": "5"
                    },
                    {
                        "t_id": "28",
                        "task_name": "test",
                        "project": "1",
                        "milestone": null,
                        "assigned_to": "s:3:\"2,3\";",
                        "description": "test",
                        "visible": "No",
                        "task_progress": "0",
                        "timer_status": "Off",
                        "timer_started_by": null,
                        "start_time": null,
                        "estimated_hours": "12.00",
                        "logged_time": "0",
                        "auto_progress": "FALSE",
                        "start_date": "2018-11-28",
                        "due_date": "2018-11-29",
                        "pinned": "0",
                        "date_added": "2018-11-28 05:15:50",
                        "added_by": "1"
                    }
                ],
                "tasks_completed": [
                    {
                        "t_id": "28",
                        "task_name": "Patient appointment booking",
                        "project": "1",
                        "milestone": "0",
                        "assigned_to": "N;",
                        "description": "",
                        "visible": "No",
                        "task_progress": "100",
                        "timer_status": "Off",
                        "timer_started_by": null,
                        "start_time": null,
                        "estimated_hours": "2.00",
                        "logged_time": "510",
                        "auto_progress": "FALSE",
                        "start_date": "2018-05-29",
                        "due_date": "2018-05-29",
                        "pinned": "0",
                        "date_added": "2018-05-23 00:04:47",
                        "added_by": "4"
                    },
                    {
                        "t_id": "1",
                        "task_name": "Patient and Doctor video conferencing",
                        "project": "1",
                        "milestone": "0",
                        "assigned_to": "N;",
                        "description": "The usability study methodologies for evaluating UI versus content are fairly similar. However, there are nuances to the methodologies that are worth considering when the primary goal of the usability study is evaluating digital copy.",
                        "visible": "Yes",
                        "task_progress": "100",
                        "timer_status": "Off",
                        "timer_started_by": null,
                        "start_time": null,
                        "estimated_hours": "0.00",
                        "logged_time": "0",
                        "auto_progress": "FALSE",
                        "start_date": "2018-05-24",
                        "due_date": "2018-05-24",
                        "pinned": "0",
                        "date_added": "2018-05-24 02:56:23",
                        "added_by": "5"
                    },
                ],
                "tasks_files_count": 0,
                "comment_count": 6,
                "overviews": {
                    "project_id": "1",
                    "project_code": "PRO29673",
                    "project_title": "Office Management",
                    "deadline": "2018-12-31",
                    "project_created": "2018-06-12 04:57:39",
                    "description": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...<br></p>",
                    "progress": "0",
                    "fixed_rate": "No",
                    "hourly_rate": "15.00",
                    "fixed_price": "0.00",
                    "client": "1",
                    "client_name": "thomas tech ",
                    "leadid": "1",
                    "project_lead_name": "Administrator",
                    "project_lead_photo": "http://www.newhrms.com/assets/uploads/blue-cd-vector-technology.jpg",
                    "project_team_members": [
                        {
                            "user_id": "1",
                            "fullname": "Administrator",
                            "avatar": "blue-cd-vector-technology.jpg"
                        },
                        {
                            "user_id": "3",
                            "fullname": "Smith",
                            "avatar": "default_avatar.jpg"
                        },
                        {
                            "user_id": "9",
                            "fullname": "John",
                            "avatar": "default_avatar.jpg"
                        }
                    ]
                }
            }
        ],
        "invoices": [
            {
                "invoice_id": "24",
                "client": "1",
                "allow_stripe": "No",
                "extra_fee": "0.00",
                "reference_no": "INV0024",
                "company_name": "Global Technologies",
                "status": "Unpaid",
                "created_date": "2018-11-29",
                "due_date": "2018-12-15",
                "tax1": "0.00",
                "tax2": "0.00",
                "discount": "0.00",
                "total_cost": 63.899,
                "bill_to": {
                    "company_address": "Global Technologies,\n 5754 Airport Rd",
                    "city": "Coosada",
                    "state": "AL, 36020",
                    "country": "United States",
                    "zip_code": "230125",
                    "company_phone": "888-777-6655",
                    "company_vat": "2",
                    "company_fax": 0
                },

                "receive_from": {
                    "company_address": "Global Technologies,\n 5754 Airport Rd",
                    "city": "Coosada",
                    "state": "AL, 36020",
                    "country": "United States",
                    "zip_code": "230125",
                    "company_phone": "888-777-6655",
                },
                "items": [
                    {
                        "item_id": "28",
                        "item_tax_rate": "0.00",
                        "item_tax_total": "0.00",
                        "quantity": "4.26",
                        "total_cost": "63.90",
                        "invoice_id": "24",
                        "item_name": "Gigs",
                        "item_desc": "Time Spent : 4.26  Hours\nTesting site - 8.5  Minutes\nserverp - 0 Seconds\nserverp - 0 Seconds\nNew Customization  - 0 Seconds\ntest  - 0 Seconds",
                        "unit_cost": "15.00",
                        "item_order": "0",
                        "date_saved": "2018-11-29"
                    }
                ],
                "payment_made": 0,
                "payment_made_details": 0
            },
            {
                "invoice_id": "3",
                "client": "2",
                "allow_stripe": "No",
                "extra_fee": "0.00",
                "reference_no": "INV0003",
                "company_name": "Global Technologies",
                "status": "Paid",
                "created_date": "2018-06-18",
                "due_date": "2018-07-03",
                "tax1": "0.00",
                "tax2": "0.00",
                "discount": "0.00",
                "total_cost": 1,
                "bill_to": {
                    "company_address": "Global Technologies,\n 5754 Airport Rd",
                    "city": "Coosada",
                    "state": "AL, 36020",
                    "country": "United States",
                    "zip_code": "230125",
                    "company_phone": "888-777-6655",
                    "company_vat": "2",
                    "company_fax": 0
                },

                "receive_from": {
                    "company_address": "Global Technologies,\n 5754 Airport Rd",
                    "city": "Coosada",
                    "state": "AL, 36020",
                    "country": "United States",
                    "zip_code": "230125",
                    "company_phone": "888-777-6655",
                },
                "items": [
                    {
                        "item_id": "3",
                        "item_tax_rate": "0.00",
                        "item_tax_total": "0.00",
                        "quantity": "1.00",
                        "total_cost": "1.00",
                        "invoice_id": "3",
                        "item_name": "test",
                        "item_desc": "test content",
                        "unit_cost": "1.00",
                        "item_order": "1",
                        "date_saved": "2018-06-18"
                    }
                ],
                "payment_made": 1.020000000000000017763568394002504646778106689453125,
                "payment_made_details": [
                    {
                        "p_id": "3",
                        "invoice": "3",
                        "paid_by": "2",
                        "payer_email": null,
                        "payment_method": "1",
                        "currency": "USD",
                        "amount": "1.02",
                        "trans_id": "798315",
                        "notes": "",
                        "attached_file": null,
                        "payment_date": "2018-06-18",
                        "created_date": "2018-06-18",
                        "month_paid": "06",
                        "year_paid": "2018",
                        "inv_deleted": "No",
                        "refunded": "No"
                    }
                ]
            },
            {
                "invoice_id": "4",
                "client": "2",
                "allow_stripe": "No",
                "extra_fee": "0.00",
                "reference_no": "INV0004",
                "company_name": "Global Technologies",
                "status": "Paid",
                "created_date": "2018-06-20",
                "due_date": "2018-06-20",
                "tax1": "0.00",
                "tax2": "0.00",
                "discount": "0.00",
                "total_cost": 7042.19,
                "bill_to": {
                    "company_address": "Global Technologies,\n 5754 Airport Rd",
                    "city": "Coosada",
                    "state": "AL, 36020",
                    "country": "United States",
                    "zip_code": "230125",
                    "company_phone": "888-777-6655",
                    "company_vat": "2",
                    "company_fax": 0
                },

                "receive_from": {
                    "company_address": "Global Technologies,\n 5754 Airport Rd",
                    "city": "Coosada",
                    "state": "AL, 36020",
                    "country": "United States",
                    "zip_code": "230125",
                    "company_phone": "888-777-6655",
                },
                "items": [
                    {
                        "item_id": "4",
                        "item_tax_rate": "0.00",
                        "item_tax_total": "0.00",
                        "quantity": "0.17",
                        "total_cost": "2525.20",
                        "invoice_id": "4",
                        "item_name": "Project EST0002",
                        "item_desc": "Time Spent : 0.17  Hours\nserverp - 0 Seconds\ntest - 0 Seconds\npayment  - 0 Seconds",
                        "unit_cost": "2525.20",
                        "item_order": "0",
                        "date_saved": "2018-06-20"
                    },
                    {
                        "item_id": "5",
                        "item_tax_rate": "0.00",
                        "item_tax_total": "0.00",
                        "quantity": "30.00",
                        "total_cost": "3000.00",
                        "invoice_id": "4",
                        "item_name": "payment",
                        "item_desc": "time - 30 hours",
                        "unit_cost": "100.00",
                        "item_order": "2",
                        "date_saved": "2018-06-20"
                    },
                    {
                        "item_id": "25",
                        "item_tax_rate": "1.00",
                        "item_tax_total": "1.00",
                        "quantity": "1.00",
                        "total_cost": "101.00",
                        "invoice_id": "4",
                        "item_name": "test item",
                        "item_desc": "testing item",
                        "unit_cost": "100.00",
                        "item_order": "3",
                        "date_saved": "2018-11-29"
                    },
                    {
                        "item_id": "26",
                        "item_tax_rate": "18.00",
                        "item_tax_total": "216.00",
                        "quantity": "3.00",
                        "total_cost": "1416.00",
                        "invoice_id": "4",
                        "item_name": "f&d",
                        "item_desc": " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                        "unit_cost": "400.00",
                        "item_order": "4",
                        "date_saved": "2018-11-29"
                    }
                ],
                "payment_made": 7042.1999999999998181010596454143524169921875,
                "payment_made_details": [
                    {
                        "p_id": "14",
                        "invoice": "4",
                        "paid_by": "2",
                        "payer_email": null,
                        "payment_method": "1",
                        "currency": "USD",
                        "amount": "7042.20",
                        "trans_id": "714896",
                        "notes": null,
                        "attached_file": null,
                        "payment_date": "2018-12-03",
                        "created_date": "2018-12-03",
                        "month_paid": "12",
                        "year_paid": "2018",
                        "inv_deleted": "No",
                        "refunded": "No"
                    }
                ]
            }
        ],
        "estimates": [
            {
                "estimate_id": "33",
                "client": "9",
                "due_date": "2018-12-26",
                "reference_no": "EST2228",
                "client_name": "John Smith",
                "status": "Pending",
                "created_date": "2018-12-16",
                "tax1": "0.00",
                "tax2": "0.00",
                "discount": "0.00",
                "amount": 500,
                "bill_to": {
                    "company_address": "Global Technologies,\n 5754 Airport Rd",
                    "city": "Coosada",
                    "state": "AL, 36020",
                    "country": "United States",
                    "zip_code": "230125",
                    "company_phone": "888-777-6655",
                    "company_vat": "2",
                    "company_fax": 0
                },

                "receive_from": {
                    "company_address": "Global Technologies,\n 5754 Airport Rd",
                    "city": "Coosada",
                    "state": "AL, 36020",
                    "country": "United States",
                    "zip_code": "230125",
                    "company_phone": "888-777-6655",
                },
                "items": [
                    {
                        "item_id": "39",
                        "item_tax_rate": null,
                        "item_name": "Design - Website",
                        "item_desc": "Landing Page",
                        "unit_cost": "500.00",
                        "quantity": "1.00",
                        "item_tax_total": "0.00",
                        "total_cost": "500.00",
                        "estimate_id": "33",
                        "date_saved": "2018-12-16",
                        "item_order": "1"
                    }
                ]
            },
            {
                "estimate_id": "26",
                "client": "10",
                "due_date": "2018-12-13",
                "reference_no": "EST2221",
                "client_name": "John Pal",
                "status": "Declined",
                "created_date": "2018-12-11",
                "tax1": "0.00",
                "tax2": "0.00",
                "discount": "0.00",
                "amount": 1200,
                "bill_to": {
                    "company_address": "Global Technologies,\n 5754 Airport Rd",
                    "city": "Coosada",
                    "state": "AL, 36020",
                    "country": "United States",
                    "zip_code": "230125",
                    "company_phone": "888-777-6655",
                    "company_vat": "2",
                    "company_fax": 0
                },

                "receive_from": {
                    "company_address": "Global Technologies,\n 5754 Airport Rd",
                    "city": "Coosada",
                    "state": "AL, 36020",
                    "country": "United States",
                    "zip_code": "230125",
                    "company_phone": "888-777-6655",
                },
                "items": [
                    {
                        "item_id": "31",
                        "item_tax_rate": "0.00",
                        "item_name": "f&d",
                        "item_desc": " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                        "unit_cost": "400.00",
                        "quantity": "3.00",
                        "item_tax_total": "0.00",
                        "total_cost": "1200.00",
                        "estimate_id": "26",
                        "date_saved": "2018-12-11",
                        "item_order": "1"
                    }
                ]
            }
        ]
    };

    public employeeProfile = {
        "user_id": "2",
        "username": "smithdreams",
        "email": "stevesmith@gmail.com",
        "role_id": "3",
        "designation_id": "5",
        "activated": "1",
        "created": "12 June 2018",
        "fullname": "Steve Smith",
        "dob": "1995-12-19",
        "gender": "Male",
        "avatar": "https://newhrms.com/livedemo/assets/uploads/user-06.jpg",
        "phone": "9988776644",
        "department": "PHP",
        "designation": "Web Backend Developer",
        "department_id": "10",
        "city": "Manchester Township",
        "country": "NJ, 08759",
        "address": " 1861 Bayonne Ave",
        "countryname": "-",
        "education_details": "[{\"id\":\"183\",\"user_id\":\"2\",\"institution\":\"International College of Arts and Science (UG)\",\"subject\":\"Bsc Computer Science\",\"start_year\":\"2003\",\"complete_year\":\"2007\",\"degree\":\"Bsc Computer Science\",\"grade\":\"S\"},{\"id\":\"183\",\"user_id\":\"2\",\"institution\":\"International College of Arts and Science (PG)\",\"subject\":\"Msc Computer Science\",\"start_year\":\"2003\",\"complete_year\":\"2007\",\"degree\":\"Bsc Computer Science\",\"grade\":\"S\"}]",
        "experience_information": "[{\"id\":\"105\",\"user_id\":\"2\",\"company\":\"Zen Corporation\",\"location\":\"London\",\"jop_position\":\"Web Designer\",\"period_from\":\"2017\",\"period_to\":\"2018\"},{\"id\":\"106\",\"user_id\":\"2\",\"company\":\"Ron-tech\",\"location\":\"Us\",\"jop_position\":\"Web Designer\",\"period_from\":\"2016\",\"period_to\":\"2017\"}]"
    }


    constructor() {
    }

}


