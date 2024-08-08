import { useState } from 'react';

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-[1000px] w-[900px]">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="border rounded-md shadow-md overflow-hidden">
        <dl className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium leading-6 text-gray-900 sm:col-span-9">
              When Do I Receive My Order?
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-500 sm:col-span-3 sm:mt-0">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-8 w-8 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggle}
              >
                <span className="sr-only">Open</span>
                {/* You can change the icon based on the state */}
                {isOpen ? (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 10.293a1 1 0 01-1.414 0L10 15.854l-2.586-2.586a1 1 0 01-1.414-1.414l3.857-3.857-3.857-3.857a1 1 0 011.414-1.414l2.586 2.586 2.586-2.586a1 1 0 011.414 0l-3.857 3.857 3.857 3.857a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4.586 4.586 4.586 4.586a1 1 0 01-1.414 1.414l-3.293-3.293-3.293 3.293a1 1 0 01-1.414-1.414l4.586-4.586L5.293 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </dd>
          </div>
          {isOpen && (
            <dd className="px-4 py-5 sm:px-6">
              <div className="text-sm leading-5 text-gray-500">
                When placing the order, a day of shipment is indicated. After
                the order has been placed, the same delivery time will also be
                stated on the order confirmation. It is therefore never
                possible that during the order, the shipping day on the
                website, is different than on the order confirmation.
              </div>
            </dd>
          )}
          <div className="px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium leading-6 text-gray-900 sm:col-span-9">
              I Now See The Longer Delivery Time Of (A Part Of) My Order. How
              Can I Cancel It?
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-500 sm:col-span-3 sm:mt-0">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-8 w-8 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggle}
              >
                <span className="sr-only">Open</span>
                {/* You can change the icon based on the state */}
                {isOpen ? (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 10.293a1 1 0 01-1.414 0L10 15.854l-2.586-2.586a1 1 0 01-1.414-1.414l3.857-3.857-3.857-3.857a1 1 0 011.414-1.414l2.586 2.586 2.586-2.586a1 1 0 011.414 0l-3.857 3.857 3.857 3.857a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4.586 4.586 4.586 4.586a1 1 0 01-1.414 1.414l-3.293-3.293-3.293 3.293a1 1 0 01-1.414-1.414l4.586-4.586L5.293 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </dd>
          </div>
          {isOpen && (
            <dd className="px-4 py-5 sm:px-6">
              <div className="text-sm leading-5 text-gray-500">
              If the order has a longer delivery time than you had previously seen, it is of course possible to cancel (a part of) the order. For this you can contact our customer service. They will cancel the order for you. The purchase amount will be back on your bank account within two working days. When an order has already been shipped, it can no longer be cancelled
              </div>
            </dd>
          )}
          <div className="px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium leading-6 text-gray-900 sm:col-span-9">
              When Will I Receive The Invoice For My Order?
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-500 sm:col-span-3 sm:mt-0">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-8 w-8 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggle}
              >
                <span className="sr-only">Open</span>
                {/* You can change the icon based on the state */}
                {isOpen ? (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 10.293a1 1 0 01-1.414 0L10 15.854l-2.586-2.586a1 1 0 01-1.414-1.414l3.857-3.857-3.857-3.857a1 1 0 011.414-1.414l2.586 2.586 2.586-2.586a1 1 0 011.414 0l-3.857 3.857 3.857 3.857a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4.586 4.586 4.586 4.586a1 1 0 01-1.414 1.414l-3.293-3.293-3.293 3.293a1 1 0 01-1.414-1.414l4.586-4.586L5.293 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </dd>
          </div>
          {isOpen && (
            <dd className="px-4 py-5 sm:px-6">
              <div className="text-sm leading-5 text-gray-500">
              When you have paid for the order, you will not automatically receive an invoice for your order. If you wish to receive an invoice, this can be done in two ways.The first way is through your account at our store. When you log in to your account you can see your orders and download the invoice.
              </div>
            </dd>
          )}
          <div className="px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium leading-6 text-gray-900 sm:col-span-9">
              How Long Will My Order Take To Be Delivered?
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-500 sm:col-span-3 sm:mt-0">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-8 w-8 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggle}
              >
                <span className="sr-only">Open</span>
                {/* You can change the icon based on the state */}
                {isOpen ? (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 10.293a1 1 0 01-1.414 0L10 15.854l-2.586-2.586a1 1 0 01-1.414-1.414l3.857-3.857-3.857-3.857a1 1 0 011.414-1.414l2.586 2.586 2.586-2.586a1 1 0 011.414 0l-3.857 3.857 3.857 3.857a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4.586 4.586 4.586 4.586a1 1 0 01-1.414 1.414l-3.293-3.293-3.293 3.293a1 1 0 01-1.414-1.414l4.586-4.586L5.293 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </dd>
          </div>
          {isOpen && (
            <dd className="px-4 py-5 sm:px-6">
              <div className="text-sm leading-5 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut pretium libero, non viverra nisl. Maecenas rhoncus erat eget vehicula tempor. Mauris sollicitudin, tellus nec feugiat elementum, ante sapien sagittis sapien, non convallis velit orci quis nisi. In egestas, mauris sit amet pellentesque sollicitudin
              </div>
            </dd>
          )}
          <div className="px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium leading-6 text-gray-900 sm:col-span-9">
              Do I Need To Create An Account To Place An Order?
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-500 sm:col-span-3 sm:mt-0">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-8 w-8 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggle}
              >
                <span className="sr-only">Open</span>
                {/* You can change the icon based on the state */}
                {isOpen ? (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 10.293a1 1 0 01-1.414 0L10 15.854l-2.586-2.586a1 1 0 01-1.414-1.414l3.857-3.857-3.857-3.857a1 1 0 011.414-1.414l2.586 2.586 2.586-2.586a1 1 0 011.414 0l-3.857 3.857 3.857 3.857a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4.586 4.586 4.586 4.586a1 1 0 01-1.414 1.414l-3.293-3.293-3.293 3.293a1 1 0 01-1.414-1.414l4.586-4.586L5.293 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </dd>
          </div>
          {isOpen && (
            <dd className="px-4 py-5 sm:px-6">
              <div className="text-sm leading-5 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                et perferendis earum, aperiam quod consequuntur delectus
                voluptate libero culpa omnis.
              </div>
            </dd>
          )}
          <div className="px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium leading-6 text-gray-900 sm:col-span-9">
              Can I Choose My Currency I Pay In?
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-500 sm:col-span-3 sm:mt-0">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-8 w-8 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggle}
              >
                <span className="sr-only">Open</span>
                {/* You can change the icon based on the state */}
                {isOpen ? (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 10.293a1 1 0 01-1.414 0L10 15.854l-2.586-2.586a1 1 0 01-1.414-1.414l3.857-3.857-3.857-3.857a1 1 0 011.414-1.414l2.586 2.586 2.586-2.586a1 1 0 011.414 0l-3.857 3.857 3.857 3.857a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4.586 4.586 4.586 4.586a1 1 0 01-1.414 1.414l-3.293-3.293-3.293 3.293a1 1 0 01-1.414-1.414l4.586-4.586L5.293 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </dd>
          </div>
          {isOpen && (
            <dd className="px-4 py-5 sm:px-6">
              <div className="text-sm leading-5 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                et perferendis earum, aperiam quod consequuntur delectus
                voluptate libero culpa omnis.
              </div>
            </dd>
          )}
        </dl>
      </div>
    </div>
  );
}

export default FAQ;