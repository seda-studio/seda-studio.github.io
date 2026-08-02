const url = process.env.SMOKE_URL;
const expected = process.env.SMOKE_EXPECT || "Software for Evolving Digital Art";
const basicAuth = process.env.SMOKE_BASIC_AUTH;

if (!url) {
  throw new Error("SMOKE_URL is required.");
}

const headers = {};
if (basicAuth) {
  headers.Authorization = `Basic ${Buffer.from(basicAuth).toString("base64")}`;
}

const response = await fetch(url, { headers, redirect: "follow" });
const body = await response.text();

if (!response.ok) {
  throw new Error(`${url} returned HTTP ${response.status}`);
}

if (!body.includes(expected)) {
  throw new Error(`${url} did not include expected text: ${expected}`);
}

console.log(`Smoke check passed for ${url}.`);
