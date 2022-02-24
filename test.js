const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const emailCheck = require('email-check');
const emailExistence = require('email-existence');

const rows = [];
const validEmails = [];
const refusedEmails = [];
let counter = 0;
