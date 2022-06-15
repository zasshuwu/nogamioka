import Image from "next/image";
import Link from "next/link";
import { SpotifyStatus } from "./Home";
import useSWR from "swr";

export default function Contact() {
	const fetcher = (url) => fetch(url).then((res) => res.json());
	const { data, error } = useSWR("/api/spotify", fetcher);

	return (
		<div className="p-4">
			<div className="flex items-center space-x-8">
				<div className="rounded-full h-48 w-48 sm:h-64 sm:w-64 shadow-xl">
					<Image
						width={"200px"}
						height={"200px"}
						layout="responsive"
						style={{ borderRadius: "50%" }}
						src="https://avatars.githubusercontent.com/u/37283437?v=4"
					></Image>
				</div>
				<div className="mt-4">
					<SpotifyStatus data={data}></SpotifyStatus>
				</div>
			</div>
			<div className="my-4 font-normal font-['Be_Vietnam_Pro']">
				<table>
					<tbody>
						<tr>
							<td>E-mail</td>
							<td>
								<Link href="mailto:iam@hoanganh.dev">
									{"iam [at] hoanganh [dot] dev"}
								</Link>
							</td>
						</tr>
						<tr>
							<td>Academic</td>
							<td>
								<Link href="mailto:anhhoangnguyen@concordia.ca">
									{"anhhoangnguyen [at] concordia [dot] ca"}
								</Link>
							</td>
						</tr>
						<tr>
							<td>LinkedIn</td>
							<td className="break-all">
								<Link href="https://linkedin.com/in/aaanh">
									https://linkedin.com/in/aaanh
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
