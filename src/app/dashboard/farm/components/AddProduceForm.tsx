'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { africanCountries, cn } from '@/lib/utils';
import { useAuth } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useForm, useFormState } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
	crop: z.string({
		required_error: 'Please enter the crop name',
	}),
	variety: z.string().optional(),
	cultivatedAt: z.date({
		required_error: 'Please enter date of cultivation',
	}),
	unit: z.string({
		required_error: 'Please enter unit',
	}),
	quantity: z.string({
		required_error: 'Please enter the quantity planted',
	}),
});

const units = [
	'Bushels',
	'Boxes',
	'Pounds',
	'Ears',
	'Clusters',
	'Seeds',
	'Bags',
	'Gallons',
	'Dozens',
	'Bunches',
	'Trays',
	'Baskets',
	'Cords',
	'Pallets',
	'Cubic Yards',
	'Bales',
];

const AddProduceForm = () => {
	const { userId } = useAuth();
    const router = useRouter();
    const path = usePathname()

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const { isSubmitting } = useFormState<z.infer<typeof FormSchema>>({
		control: form.control,
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		if (userId) {
			try {
				const res = await fetch('/api/farm', {
					method: 'POST',
					body: JSON.stringify({ data, userId }),
				});

				if (res.ok) {
					toast({
						title: 'Produce added succesfully ✅',
						duration: 5000,
					});

					router.push(path);
				}
			} catch (error) {
				toast({
					title: 'Something went wrong  ❌',
					description:
						'An error occured while trying to add produce , please try again or contact support',
					duration: 5_000,
					variant: 'destructive',
                });
                
                console.log(error);
            } finally {
                router.refresh()
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
					name='crop'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Crop*</FormLabel>
							<FormControl>
								<Input placeholder='Apple' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='cultivatedAt'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormLabel>Cultivated At*</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={'outline'}
											className={cn(
												'pl-3 text-left font-normal',
												!field.value && 'text-muted-foreground'
											)}>
											{field.value ? (
												format(+field.value, 'PPP')
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className='w-auto p-0' align='start'>
									<Calendar
										mode='single'
										//   @ts-ignore
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date) =>
											date > new Date() || date < new Date('1900-01-01')
										}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='variety'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Variety</FormLabel>
							<FormControl>
								<Input placeholder='Granny Smith' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
                />
                
				<FormField
					control={form.control}
					name='quantity'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Quantity*</FormLabel>
							<FormControl>
								<Input placeholder='200' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='unit'
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Unit*</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder='Seeds' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{units.map((unit) => (
											<SelectItem key={unit} value={unit}>
												{unit}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						);
					}}
				/>

				<Button
					disabled={isSubmitting}
					className='float-right btn'
					type='submit'>
					{isSubmitting ? 'Adding...' : 'Add Produce'}
				</Button>
			</form>
		</Form>
	);
};

export default AddProduceForm;
