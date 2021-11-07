import React from "react";
import clsx from "clsx";

import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import customTheme from "../styles/theme";

const useStyles = makeStyles((theme) => ({}));

function createData(model, cpu, ram, gpu, storage, os) {
	return model, cpu, ram, gpu, storage, os;
}

const specsData = [
	createData(
		"Custom Workstation",
		"AMD Ryzen 5 3600",
		"24GB 3200 MT/s",
		"nVidia GTX 1080 8GB",
		"512GB NVME, 256GB NVME, 1TB HDD, 1TB HDD",
		"Windows 10 Pro, Ubuntu 21.10"
	),
	createData(
		"Homelab Server",
		"AMD Ryzen 3 3200G",
		"8GB 3600 MT/s",
		"Radeon RX580 8GB",
		"512GB SSD",
		"Ubuntu Server 20.04"
	),
	createData(
		"Dell Precision 5530",
		"Intel Core i7 8850H",
		"32GB 2666 MT/s",
		"Quadro P1000 4GB",
		"512GB SSD",
		"Windows 10 Pro"
	),
	createData(
		"Dell Precision 5530",
		"Intel Core i7 8850H",
		"32GB 2666 MT/s",
		"Quadro P1000 4GB",
		"512GB SSD",
		"Windows 10 Pro"
	),
	createData(
		"Lenovo ThinkPad P50",
		"Intel Core i7 6820HQ",
		"16GB 2666 MT/s",
		"Quadro M1000M 2GB",
		"512GB NVME, 256 NVME",
		"Windows 10 Pro, Ubuntu 21.04"
	),
	createData(
		"Lenovo ThinkPad P50",
		"Intel Core i7 6820HQ",
		"16GB 2666 MT/s",
		"Quadro M1000M 2GB",
		"512GB NVME, 256 NVME",
		"Windows 10 Pro, Ubuntu 21.04"
	),
];

const specsBlock = (props) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.specsModel}></div>
			<div className={classes.specsDetail}></div>
		</>
	);
};

export default function Specs() {
	const classes = useStyles();

	return (
		<div className={classes.specsGroup}>
			<div className={classes.specsTitle}>
				<Typography variant="h1">Anh&apos;s Specs Sheet</Typography>
			</div>
			<div className={classes.specsContent}>
				<div className={classes.specsEntry}></div>
			</div>
		</div>
	);
}
