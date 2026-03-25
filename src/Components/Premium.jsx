import axios from "axios";
import { BASE_URL } from "../Constants/constants";
import { addUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Premium = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // ✅ Redirect premium users to posts
  if (user?.isPremium) {
    return <Navigate to="/premiumfront" replace />;
  }

  const handlePayment = async (type) => {
    try {
      // 1️⃣ Create order
      const order = await axios.post(
        `${BASE_URL}/payment/create`,
        { membershipType: type },
        { withCredentials: true }
      );

      const { amount, keyId, currency, notes, orderId } = order.data;

      const options = {
        key: keyId,
        amount,
        currency,
        name: "DevMate",
        description: "Connect to Premium Plan and enjoy exclusive features",
        order_id: orderId,

        prefill: {
          name: `${notes.firstName} ${notes.lastName}`,
          email: notes.emailId,
          contact: "9919199393",
        },

        theme: {
          color: "#6366F1",
        },

        // 2️⃣ On payment success
        handler: async function (response) {
          try {
            await axios.post(
              `${BASE_URL}/payment/success`,
              {
                orderId,
                paymentId: response.razorpay_payment_id,
              },
              { withCredentials: true }
            );

            // 3️⃣ Update Redux user
            dispatch(addUser({ ...user, isPremium: true }));

            alert("🎉 Payment successful! Welcome to Premium");
          } catch (err) {
            console.error("Backend update failed", err);
          }
        },
      };

      // 4️⃣ Open Razorpay
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">

      {/* Header */}
      <header className="py-16 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Dev<span className="text-indigo-600">Mate</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Connect, collaborate, and grow with developers around the world.
        </p>
      </header>

      {/* Info Section */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            One Platform. Endless Collaboration.
          </h2>
          <p className="mt-4 text-gray-600">
            Unlock premium features to build projects, chat in real-time,
            and expand your developer network.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Starter Plan */}
          <div className="bg-white rounded-3xl shadow-md p-8 border">
            <h3 className="text-xl font-semibold text-gray-800">Starter</h3>
            <p className="text-gray-500 mt-1">Best for beginners</p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-900">₹300</span>
              <span className="text-gray-500">/month</span>
            </div>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Developer profile</li>
              <li>✔ Limited connections</li>
              <li>✔ Community access</li>
              <li className="text-gray-400">✖ Direct messaging</li>
              <li className="text-gray-400">✖ Premium support</li>
            </ul>

            <button
              onClick={() => handlePayment("starter")}
              className="mt-8 w-full py-3 rounded-xl border border-gray-300 hover:bg-gray-100"
            >
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-3xl shadow-xl p-8 relative">
            <span className="absolute top-4 right-4 bg-white text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-indigo-100 mt-1">For serious developers</p>

            <div className="mt-6">
              <span className="text-4xl font-bold">₹700</span>
              <span className="text-indigo-100">/month</span>
            </div>

            <ul className="mt-6 space-y-3 text-indigo-100">
              <li>✔ Everything in Starter</li>
              <li>✔ Unlimited connections</li>
              <li>✔ Real-time chat</li>
              <li>✔ Project collaboration</li>
              <li>✔ Priority support</li>
            </ul>

            <button
              onClick={() => handlePayment("pro")}
              className="mt-8 w-full py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-indigo-50"
            >
              Upgrade to Pro
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Premium;
