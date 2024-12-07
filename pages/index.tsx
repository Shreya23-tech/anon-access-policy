/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/button'
import Page from '@/components/page'
import { useRouter } from 'next/router'
import { animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { LogInWithAnonAadhaar, useAnonAadhaar } from '@anon-aadhaar/react'
import QRCode from 'qrcode.react'
import { compressProof } from '@/utils'
import {verify, deserialize } from '@anon-aadhaar/core'
// import { init, iprove, InitArgs, artifactUrls } from "@anon-aadhaar/core";

enum PageState {
	splash,
	uploadAadhar,
	maskedAadharVerified,
	qr,
	verifyAadhar
}

const Index = () => {
	const router = useRouter()
	const [anonAadhar] = useAnonAadhaar()
	const [pageState, setPageState] = useState<PageState>(PageState.uploadAadhar)
	const [compressedProof, setCompressedProof] = useState<string>()
	const [verifyok, setVerify] = useState<boolean>(false)

	// once the user has logged in using aadhar and generated a proof:
	useEffect(() => {
		if (
			anonAadhar.status === 'logged-in' &&
			pageState === PageState.uploadAadhar
		) {
			// const img = document.getElementById('shapes') as HTMLImageElement
			// animate(img, { scale: 1, rotate: -45 }, { duration: 0.5 })
			setPageState(PageState.maskedAadharVerified)
		}
	}, [anonAadhar, pageState])

	// change state to connect wallet after waiting 2 seconds on maskedAadharVerified
	useEffect(() => {
		if (pageState === PageState.maskedAadharVerified) {
			setTimeout(() => {
				// const img = document.getElementById('shapes') as HTMLImageElement
				// animate(img, { scale: 1.3 }, { duration: 0.5 })
				setPageState(PageState.qr)
				console.log("winn here", compressedProof)
			}, 2000)
		}
	}, [pageState])

	useEffect(() => {
		if (pageState === PageState.qr && anonAadhar.status === 'logged-out') {
			window.location.reload()
		}
	}, [pageState, anonAadhar])

	useEffect( () => {
		// ;(async () => {
		// 	const res= await verify(anonAadhar)
		// 	console.log("here hjasgdj dshhfvds", res)
		// })()
		if (pageState === PageState.qr && anonAadhar.status === 'logged-in') {
			// console.log("look hereharsh", a)
			
			const compressedProof = compressProof(anonAadhar.anonAadhaarProofs[0])
			setCompressedProof(compressedProof)
		}
	}, [pageState, anonAadhar])

	const [qrValiditySeconds, setQrValiditySeconds] = useState<number>(120)

	const isQrValid = qrValiditySeconds > 0

	useEffect(() => {
		const interval = setInterval(() => {
			setQrValiditySeconds((prevSeconds) => prevSeconds - 1)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<Page>
			{pageState == PageState.qr && verifyok === false &&(
				<div className='ml-auto right-8 absolute top-12'>
					<LogInWithAnonAadhaar nullifierSeed={1234} />
				</div>
			)}

			{/* <img
				src='/images/shapes.svg'
				alt='Shapes'
				className='absolute scale-125 my-auto mx-auto -left-40 self-center -z-20'
				id='shapes'
			/> */}

			{pageState === PageState.uploadAadhar && verifyok === false && (
				// <div className='flex flex-col mt-auto'>
				// 	<div className='shadow px-4 py-6'>
				// 		<label className='text-black rounded-lg text-xl font-medium'>
				// 			According to the selected policy access we need to verify:
				// 		</label>

				// 		<div className='flex flex-row'>
				// 			<label>
				// 				<input type='checkbox' defaultChecked  />
				// 				<span className='ml-2'>Age above 18</span>
				// 			</label>
				// 			<label className='ml-4'>
				// 				<input type='checkbox' />
				// 				<span className='ml-2'>Pincode is Indian</span>
				// 			</label>
				// 		</div>

				// 	</div>
				// 	<div className='mx-auto w-fit mt-6'>
				// 		<LogInWithAnonAadhaar nullifierSeed={1234} fieldsToReveal={["revealAgeAbove18", "revealPinCode"]} />
				// 	</div>
				// </div>
				<div className="flex flex-col justify-center items-center h-[100vh]">
  {/* Main Container */}
  <div className="bg-black text-white rounded-lg p-10 shadow-xl w-full max-w-3xl">
    {/* Header */}
    <header className="text-center mb-8">
      <h1 className="text-4xl font-extrabold text-white">
        Hey Analyst, let's verify if you align with the access policy
      </h1>
    </header>

    {/* Policy Details */}
    <div className="shadow-md px-8 py-10 bg-white rounded-lg border border-gray-300">
      <label className="text-black text-xl font-semibold mb-6 block text-center">
        According to the selected policy access, we need to verify:
      </label>

      <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
        <li>Age above 18</li>
        <li>Pincode is Indian</li>
      </ul>
    </div>

    {/* Action Section */}
    <div className="mt-8">
      <LogInWithAnonAadhaar 
        nullifierSeed={1234} 
        fieldsToReveal={["revealAgeAbove18", "revealPinCode"]} 
      />
    </div>
  </div>

  {/* Footer */}
  <footer className="mt-10 text-gray-600 text-sm">
    Made with ❤️ using <span className="font-semibold">Anon Aadhaar</span> SDK
  </footer>
</div>



			)}

			{pageState === PageState.maskedAadharVerified && verifyok === false && (
				<>
					<p className='text-black text-xl mt-[50vh] font-medium mx-auto'>
						Masked Aadhaar Verified
					</p>
				</>
			)}

{pageState === PageState.qr && verifyok === false && (
    <div
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 via-white to-gray-100 px-4 full-width"
    >
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
            You are one step away from getting verified
        </h1>

        {/* QR Code */}
        {compressedProof && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <QRCode
                    value={compressedProof}
                    size={256}
                    className="rounded-md"
                    aria-label="QR Code for proof verification"
                />
            </div>
        )}

        {/* Decorative Element */}
        <p className="text-gray-500 text-sm mt-4">
            Scan this QR code to proceed with your verification process.
        </p>

        {/* Button */}
        <button
            className="mt-8 px-8 py-3 text-lg font-semibold text-white bg-black rounded-full shadow-md hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all"
            onClick={async () => {
                const pol = await deserialize(anonAadhar.anonAadhaarProofs[0].pcd);
                const res = await verify(pol);
                setVerify(res);
                setPageState(PageState.verifyAadhar);
                console.log("Verification result:", res);
            }}
        >
            Verify your proof
        </button>

        {/* Footer Decorative Line */}
        <div className="absolute bottom-5 w-full text-center">
            <span className="text-gray-400 text-xs">
                Powered by <strong className="text-gray-600">Schrodinger's cat</strong>
            </span>
        </div>
    </div>
)}



			{
				verifyok === true && (
					<div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-green-50 to-gray-200">
					{/* Success Message Container */}
					<div className="bg-white text-center rounded-lg p-10 shadow-xl w-full max-w-2xl">
					  {/* Header */}
					  <header className="mb-6">
						<h1 className="text-4xl font-extrabold text-green-600">
						  🎉 Verification Successful!
						</h1>
					  </header>
				  
					  {/* Message */}
					  <p className="text-gray-800 text-lg mb-8">
						You have successfully verified for the given access policy.
					  </p>
				  
					  {/* Action Prompt */}
					  <button
						className="px-8 py-3 text-lg font-semibold text-white bg-black rounded-full shadow-md hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all"
						onClick={() => {
						  // Replace with your navigation logic
						  window.location.href = "/authorization";
						}}
					  >
						Go Back to Authorization Page
					  </button>
					</div>
				  
					{/* Footer */}
					<footer className="mt-10 text-gray-600 text-sm">
					  Made with ❤️ using <span className="font-semibold">Anon Aadhaar</span> SDK
					</footer>
				  </div>
				  
				)
			}
         
		</Page>
	)
}

export default Index
