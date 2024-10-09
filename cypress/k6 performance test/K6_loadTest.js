import http from "k6/http";
import { check, sleep } from "k6";
import { Rate } from "k6/metrics";
import { parse } from "dotenv";
import { readFileSync } from "fs";

// Load environment variables from .env file
const envConfig = parse(readFileSync('.env'));
const API_URL = envConfig.K6_API_URL;

// Define a custom metric to track the rate of failed checks
const failRate = new Rate("failed_requests");

export let options = {
    stages: [
        { duration: "1m", target: 10 }, // Ramp up to 10 users over 1 minute
        { duration: "30s", target: 10 }, // Stay at 10 users for 30 seconds
        { duration: "30s", target: 0 },  // Ramp down to 0 users over 30 seconds
    ],
    thresholds: {
        http_req_failed: ["rate===1.00"], // 100% of http_requests should fail
        http_req_duration: ["p(95)<500"], // 95% of response times must be below 500ms
        failed_requests: ["rate<0.01"],   // Less than 1% of requests should fail
    },
};

export default function () {
    // Use the URL from the .env file
    let res = http.get(API_URL);

    console.log("Response time was " + String(res.timings.duration) + " ms");
    console.log("Response status was " + String(res.status));

    let checkRes = check(res, {
        "is status 401": (r) => r.status === 401,
        "response time < 500ms": (r) => r.timings.duration < 500,
    });

    failRate.add(!checkRes);

    sleep(1);
}
