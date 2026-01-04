import { Client, Account } from 'appwrite';

const client = new Client()
    .setEndpoint('https://[YOUR_APPWRITE_ENDPOINT]') // Your Appwrite Endpoint
    .setProject('67343c97000960340146'); // Your project ID

const account = new Account(client);

export { client, account };
