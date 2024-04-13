import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ array }) => {
	return (
		<div>
			{array.map((object, index) => {
				const { name, ...rest } = object;
				return <Tile name={name} description={rest} key={index} />;
			})}
		</div>
	);
};
