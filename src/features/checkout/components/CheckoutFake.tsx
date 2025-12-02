import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/shared/hooks'
import { clearCart } from '@/features/cart/model'
import { clearCartFromLs } from '@/utils'

export const CheckoutFake: React.FC = () => {
	const [status, setStatus] = useState<'loading' | 'success'>('loading')
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	useEffect(() => {
		const timer = setTimeout(() => {
			setStatus('success')
		}, 2500)

		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		if (status === 'success') {
			const redirectTimer = setTimeout(() => {
				dispatch(clearCart())
				clearCartFromLs()
				navigate('/')
			}, 2500)

			return () => clearTimeout(redirectTimer)
		}
	}, [status, navigate])

	return (
		<div className="flex items-center justify-center px-4 py-32">
			<div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 text-center">
				<AnimatePresence mode="wait">
					{status === 'loading' && (
						<motion.div
							key="loading"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0 }}
							className="flex flex-col items-center gap-5"
						>
							<Loader2 className="w-12 h-12 animate-spin text-primary" />
							<h2 className="text-xl font-bold">
								Processing your payment
							</h2>
							<p className="text-gray-500">
								Please do not close this page
							</p>
						</motion.div>
					)}

					{status === 'success' && (
						<motion.div
							key="success"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0 }}
							className="flex flex-col items-center gap-5"
						>
							<CheckCircle className="w-16 h-16 text-green-500" />
							<h2 className="text-2xl font-bold text-green-600">
								Payment Successful
							</h2>
							<p className="text-gray-500">
								Thank you for your purchase
							</p>
							<p className="text-sm text-gray-400">
								You will be redirected shortly...
							</p>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}
