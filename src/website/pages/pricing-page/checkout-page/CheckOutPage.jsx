import React, { useEffect, useState } from "react";

import "./CheckOutPage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import popularBadge from "../../../assets/popular-badge.png";
import axios from "axios";
import customAlert from "../../../utils/customAlert";

// Initialize Stripe.js with your publishable key
const stripePromise = loadStripe(
  "pk_test_51PNAn4Bizf1bE4kF5t6GuaMhTbT9nU02TJD0Sw0ANJBD8BFfjiVamDKYXDPsS8YIpNTlLddW2MmM88gxwZ6AmMTG00nOn5E1kP"
);

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#ffffff",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { planId } = useParams();

  const [checkout, setCheckout] = useState({});

  // useEffect(() => {
  //   axios
  //     .get(`https://abdulrahman.onrender.com/pricing/checkout/${planId}`)
  //     .then((res) => {
  //       setCheckout(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [planId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    customAlert("Payment processing...");

    // Get the card elements
    const cardNumberElement = elements.getElement(CardNumberElement);
    console.log(cardNumberElement);
    // Call your server to create a PaymentIntent
    const response = await fetch(
      `https://abdulrahman.onrender.com/pricing/checkout/${planId}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token f93c2a5cb23ef26d37bb100e219729b2162d36b6",
        },
        body: JSON.stringify({
          paymentMethodType: "card",
          currency: "usd",
        }),
      }
    );

    const { clientSecret } = await response.json();

    // Confirm the PaymentIntent with the card details
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardNumberElement,
          billing_details: {
            // Include any additional billing details here
          },
        },
      }
    );

    if (error) {
      console.log("[error]", error);
      customAlert(error.message, "error");
    } else if (paymentIntent.status === "succeeded") {
      console.log("[PaymentIntent]", paymentIntent);
      navigate("/complete-checkout");
    }

    console.log("[PaymentIntent]", paymentIntent.status, paymentIntent.id);
    customAlert("Payment successful", "success");
  };

  return (
    <div className="payment-details w-full lg:w-2/5">
      <form onSubmit={handleSubmit} className="payment-form space-y-6">
        <h6>Payment Details</h6>
        <div className="form-input">
          <label htmlFor="first-name">First Name*</label>
          <input
            type="text"
            id="first-name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="last-name">Last Name*</label>
          <input
            type="text"
            id="last-name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" placeholder="*******" required />
        </div>

        <h6>Card Details</h6>
        <div className="card-details w-fit">
          <div className="card-body space-y-6">
            <div className="form-input card-number">
              <label htmlFor="card-number-element">Card Number</label>
              <CardNumberElement
                id="card-number-element"
                options={CARD_ELEMENT_OPTIONS}
              />
            </div>
            <div className="flex gap-6 w-full">
              <div className="form-input card-expiry w-1/2 flex-1">
                <label htmlFor="card-expiry-element">Expiry Date</label>
                <CardExpiryElement
                  id="card-expiry-element"
                  options={CARD_ELEMENT_OPTIONS}
                />
              </div>
              <div className="form-input card-cvc w-1/2 flex-1">
                <label htmlFor="card-cvc-element">CVC</label>
                <CardCvcElement
                  id="card-cvc-element"
                  options={CARD_ELEMENT_OPTIONS}
                />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" disabled={!stripe}>
          Pay $15 Now
        </button>
      </form>
    </div>
  );
};

const CheckOutPage = () => {
  const navigate = useNavigate();
  const { planId } = useParams();

  const handleCardDigits = (e) => {
    console.log(e.keyCode);
    if (e.target.keyCode !== 8) {
      if (
        e.target.value.length === 4 ||
        e.target.value.length === 9 ||
        e.target.value.length === 14
      ) {
        e.target.value = e.target.value += " ";
      }
    }
  };

  const [checkout, setCheckout] = useState({});

  // useEffect(() => {
  //   axios
  //     .get(`http://abdulrahman.onrender.com/pricing/checkout/${planId}`)
  //     .then((res) => {
  //       setCheckout(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [planId]);

  return (
    <div className="checkout-wrapper">
      <div className="mx-auto checkout-container py-20 flex flex-col-reverse lg:flex-row items-center justify-center ">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>

        <div className="chosen-plan w-full lg:w-2/5 flex justify-end">
          <div className="recommended-plane">
            <img src={popularBadge} alt="" />
            <div className="plane plane-pricing border-animate">
              <div className="plane-body flex flex-col justify-center items-center px-[16px] py-[32px] lg:px-8 lg:py-16">
                <h5 className="plane-title">premium Plan</h5>
                <div className="line"></div>
                <ul className="plane-points space-y-5 px-4">
                  <li className="available ">
                    <svg
                      className="true"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z"
                        fill="#53ACFF"
                      />
                    </svg>
                    <svg
                      className="false"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z"
                        fill="white"
                      />
                    </svg>
                    Lorem ipsum dolor sit amet.
                  </li>

                  <li className="available">
                    <svg
                      className="true"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z"
                        fill="#53ACFF"
                      />
                    </svg>
                    <svg
                      className="false"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z"
                        fill="white"
                      />
                    </svg>
                    Lorem ipsum dolor sit amet.
                  </li>

                  <li className="available">
                    <svg
                      className="true"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z"
                        fill="#53ACFF"
                      />
                    </svg>
                    <svg
                      className="false"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z"
                        fill="white"
                      />
                    </svg>
                    Lorem ipsum dolor sit amet.
                  </li>

                  <li className="available">
                    <svg
                      className="true"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z"
                        fill="#53ACFF"
                      />
                    </svg>
                    <svg
                      className="false"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z"
                        fill="white"
                      />
                    </svg>
                    Lorem ipsum dolor sit amet.
                  </li>

                  <li className="available">
                    <svg
                      className="true"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z"
                        fill="#53ACFF"
                      />
                    </svg>
                    <svg
                      className="false"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z"
                        fill="white"
                      />
                    </svg>
                    Lorem ipsum dolor sit amet.
                  </li>

                  <li className="available">
                    <svg
                      className="true"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z"
                        fill="#53ACFF"
                      />
                    </svg>
                    <svg
                      className="false"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z"
                        fill="white"
                      />
                    </svg>
                    Lorem ipsum dolor sit amet.
                  </li>

                  <li className="not-available">
                    <svg
                      className="true"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z"
                        fill="#53ACFF"
                      />
                    </svg>
                    <svg
                      className="false"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z"
                        fill="white"
                      />
                    </svg>
                    Lorem ipsum dolor sit amet.
                  </li>

                  <li className="not-available">
                    <svg
                      className="true"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z"
                        fill="#53ACFF"
                      />
                    </svg>
                    <svg
                      className="false"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z"
                        fill="white"
                      />
                    </svg>
                    Lorem ipsum dolor sit amet.
                  </li>

                  <li className="not-available">
                    <svg
                      className="true"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.74156 0.270361C10.0861 0.630843 10.0861 1.21531 9.74156 1.57576L3.85919 7.72963C3.5146 8.09012 2.95601 8.09012 2.61138 7.72963L0.258433 5.26808C-0.0861444 4.90759 -0.0861444 4.32322 0.258433 3.96272C0.603011 3.60223 1.16169 3.60223 1.50627 3.96272L3.2353 5.77147L8.49379 0.270361C8.83838 -0.0901204 9.39697 -0.0901204 9.74156 0.270361Z"
                        fill="#53ACFF"
                      />
                    </svg>
                    <svg
                      className="false"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66205 0.337951C9.21145 -0.11265 8.48086 -0.11265 8.0303 0.337951L4.99998 3.36832L1.96966 0.337982C1.51904 -0.11262 0.78858 -0.11262 0.337963 0.337982C-0.112655 0.788584 -0.112655 1.51917 0.337963 1.9697L3.36813 5.00002L0.337963 8.03034C-0.112655 8.4808 -0.112655 9.21142 0.337963 9.66204C0.78858 10.1127 1.5192 10.1127 1.96982 9.66204L4.99998 6.63187L8.03015 9.66204C8.48083 10.1127 9.21142 10.1127 9.66202 9.66204C10.1126 9.21142 10.1126 8.48096 9.66202 8.03034L6.63168 5.00002L9.66205 1.9697C10.1127 1.51914 10.1127 0.788553 9.66205 0.337951Z"
                        fill="white"
                      />
                    </svg>
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
                <div className="line"></div>
                <div className="plane-price">
                  <p>
                    <span>$0</span> / month
                  </p>
                </div>
                <div className="plane-action">
                  <p>Having second thoughts?</p>
                  <Link to="/pricing">Check other plans</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
