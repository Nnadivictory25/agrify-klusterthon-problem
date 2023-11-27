'use client';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { africanCountries } from '@/lib/utils';
import { useAuth } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm, useFormState } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
	country: z.string({
		required_error: 'Please enter your Country',
	}),
	state: z.string().optional(),
});

const OnboardForm = () => {
    const { userId } = useAuth();
	const router = useRouter();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const { isSubmitting } = useFormState<z.infer<typeof FormSchema>>({
		control: form.control,
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		if (userId) {
			try {
				const res = await fetch('/api/user', {
					method: 'POST',
                    body: JSON.stringify({ data, userId }),
                    next: { tags: ['collection'] } 
				});

				if (res.ok) {
					toast({
						title: 'Profile Updated Succesfully ✅',
						duration: 5000,
					});

					router.push('/dashboard');
				}
			} catch (error) {
				toast({
					title: 'Something went wrong  ❌',
					description:
						'An error occured while trying to update profile , please try again or contact support',
					duration: 5_000,
					variant: 'destructive',
				});
			}
		}
	}

	function onError(error: any) {
		console.log(error);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit, onError)}
				className='w-full space-y-6'>
				<FormField
					control={form.control}
					name='country'
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Country</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder='Select your country' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{africanCountries.map(({name}) => (
											<SelectItem key={name} value={name}>
												{name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						);
					}}
				/>

				<FormField
					control={form.control}
					name='state'
					render={({ field }) => (
						<FormItem>
							<FormLabel>State</FormLabel>
							<FormControl>
								<Input placeholder='Enter your state' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					disabled={isSubmitting}
					className='float-right btn'
					type='submit'>
					{isSubmitting ? 'Submitting...' : 'Submit'}
				</Button>
			</form>
		</Form>
	);
};

export default OnboardForm;
