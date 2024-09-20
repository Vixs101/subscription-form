"use client"
import SubscriptionForm from "../components/SubscriptionForm.jsx";
import Subscriptions from "../components/Subscriptions.jsx";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-around p-4">
      <SubscriptionForm />
      <Subscriptions />
    </div>
  );
}
