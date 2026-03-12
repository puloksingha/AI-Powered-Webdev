const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

const dataPath = path.join(__dirname, "..", "data", "store.json");

const defaultData = {
  users: [],
  plans: [
    {
      id: "free",
      name: "Free",
      priceCents: 0,
      interval: "month",
      features: ["Community access", "Basic support"]
    },
    {
      id: "pro",
      name: "Pro",
      priceCents: 999,
      interval: "month",
      features: ["Priority support", "Billing dashboard", "Admin tools"]
    }
  ],
  subscriptions: [],
  billingEvents: []
};

function ensureDataFile() {
  const dir = path.dirname(dataPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify(defaultData, null, 2), "utf-8");
  }
}

function readStore() {
  ensureDataFile();
  const raw = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(raw);
}

function writeStore(data) {
  ensureDataFile();
  const tempPath = `${dataPath}.tmp`;
  fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), "utf-8");
  fs.renameSync(tempPath, dataPath);
}

function mutateStore(mutator) {
  const data = readStore();
  const result = mutator(data);
  writeStore(data);
  return result;
}

function nowIso() {
  return new Date().toISOString();
}

function getSubscription(data, userId) {
  let sub = data.subscriptions.find((s) => s.userId === userId);
  if (!sub) {
    sub = {
      userId,
      planId: "free",
      status: "active",
      currentPeriodEnd: null,
      providerCustomerId: null,
      providerSubscriptionId: null,
      updatedAt: nowIso()
    };
    data.subscriptions.push(sub);
  }
  return sub;
}

function recordBillingEvent(data, event) {
  data.billingEvents.push({
    id: randomUUID(),
    createdAt: nowIso(),
    ...event
  });
}

module.exports = {
  readStore,
  writeStore,
  mutateStore,
  nowIso,
  getSubscription,
  recordBillingEvent
};
