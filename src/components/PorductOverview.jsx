import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import Sidebar from './Sidebar'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductView({open,setOpen,choosedProduct}) {
  
  const [CartOpen, setCartOpen] = useState(false);
  const { addToCart } = useContext(CartContext);  
  const setCart = (product, id) => {
    setCartOpen(!CartOpen);
    addToCart(product, id);
  };
  return (
    <>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img src={choosedProduct?.image} alt='loading' className="object-cover object-center" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{choosedProduct?.title}</h2>

                      <section aria-labelledby="information-heading" className="mt-2">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">{choosedProduct?.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3,4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    choosedProduct?.rating.rate > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">{choosedProduct?.rate} out of 5 stars</p>
                            <a href="" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              {choosedProduct?.rating.count} reviews
                            </a>
                          </div>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-10">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        {/* <form> */}

                          {/* Sizes */}
                          <div className="mt-10">
                          </div>

                          <button
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-fuchsia-800  py-3 px-8 text-base font-medium text-fuchsia-800  hover:bg-fuchsia-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:text-white"
                            onClick={() => addToCart(choosedProduct,choosedProduct.id)}
                          >
                            Add to bag
                          </button>
                          <button
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-500 py-3 px-8 text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={()=>setCart(choosedProduct,choosedProduct.id,true)}
                          >
                            Buy Now
                          </button>
                        {/* </form> */}
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
      {<Sidebar open={CartOpen} setOpen={setCartOpen} />}
      </>
  )
}