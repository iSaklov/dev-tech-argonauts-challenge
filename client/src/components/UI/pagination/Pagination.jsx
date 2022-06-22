import React, { useState } from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({ page, totalPages, changePage }) => {

	const pagesArray = page > 1
												? [page - 1, page, page + 1]
												: [page, page + 1, page + 2]

	// let pagesArray = getPagesArray(totalPages)

	return (
		<ul className="pagination">
			<li className={page === 1 ? "disabled" : "waves-effect"}>
				<a>
					<i
						className="material-icons"
						onClick={() => changePage(page > 1 ? page - 1 : page)}
					>
						chevron_left
					</i>
				</a>
			</li>
			{pagesArray.map(p =>
				<li
					onClick={() => changePage(p)}
					key={p}
					className={page === p ? "active" : "waves-effect"}
				>
					<a>
						{p}
					</a>
				</li>
			)}
			<li className="waves-effect">
				<a>
					<i
						className="material-icons"
						onClick={() => changePage(page + 1)}
					>
						chevron_right
					</i>
				</a>
			</li>
		</ul>
	)
}

export default Pagination;