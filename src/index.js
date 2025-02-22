const { Client, Wallet } = require("xrpl");
const express = require("express");
const app = express();

const wallet1 = Wallet.fromSeed("sEdTDabTTeBqosZMXCsU76WC1MepfzP"); // Borrower
const wallet2 = Wallet.fromSeed("sEdTLXugJbGrZAHEuQ6MJD84q3Fi56v"); // Lender

app.use(express.static("public")); // Serve static files (we’ll add this)

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>My Mini Bank</h1>
        <p>Borrower’s Wallet: ${wallet1.classicAddress}</p>
        <p>Lender’s Wallet: ${wallet2.classicAddress}</p>
        <button onclick="fundLoan()">Give Cash (Lender)</button>
        <button onclick="requestLoan()">Take Loan (Borrower)</button>
        <p id="message">What’s Happening: Waiting...</p>
        <script>
          async function fundLoan() {
            const response = await fetch("/lend", { method: "POST" });
            const result = await response.text();
            document.getElementById("message").innerText = "What’s Happening: " + result;
          }
          async function requestLoan() {
            const response = await fetch("/borrow", { method: "POST" });
            const result = await response.text();
            document.getElementById("message").innerText = "What’s Happening: " + result;
          }
        </script>
      </body>
    </html>
  `);
});

app.post("/lend", async (req, res) => {
  const client = new Client("wss://testnet.xrpl-labs.com", { connectionTimeout: 10000 });
  await client.connect();
  const paymentTx = {
    TransactionType: "Payment",
    Account: wallet2.classicAddress,
    Destination: wallet1.classicAddress,
    Amount: {
      currency: "USD",
      value: "10",
      issuer: wallet2.classicAddress
    },
  };
  const prepared = await client.autofill(paymentTx);
  const signed = wallet2.sign(prepared);
  await client.submitAndWait(signed.tx_blob);
  await client.disconnect();
  res.send("Lender gave Borrower 10 USD");
});

app.post("/borrow", async (req, res) => {
  const client = new Client("wss://testnet.xrpl-labs.com", { connectionTimeout: 10000 });
  await client.connect();
  const paymentTx = {
    TransactionType: "Payment",
    Account: wallet1.classicAddress,
    Destination: wallet2.classicAddress,
    Amount: {
      currency: "4C4F414E30303100000000000000000000000000",
      value: "5",
      issuer: wallet1.classicAddress
    },
  };
  const prepared = await client.autofill(paymentTx);
  const signed = wallet1.sign(prepared);
  await client.submitAndWait(signed.tx_blob);
  await client.disconnect();
  res.send("Borrower gave Lender 5 LOAN001 IOUs");
});

app.listen(3000, () => console.log("Mini Bank running at http://localhost:3000"));