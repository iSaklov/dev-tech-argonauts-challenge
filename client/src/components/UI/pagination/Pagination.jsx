import React, { useState } from 'react'

const Pagination = ({ page, totalPages, changePage }) => {

	const pagesArray = page > 1
												? [page - 1, page, page < totalPages ? page + 1 : null]
												: [page, totalPages > 1 ? page + 1 : null]

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
			{pagesArray.filter(p => p !== null).map(p =>
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
			<li className={page === totalPages ? "disabled" : "waves-effect"}>
				<a>
					<i
						className="material-icons"
						onClick={() => changePage(page < totalPages ? page + 1 : page)}
					>
						chevron_right
					</i>
				</a>
			</li>
		</ul>
	)
}

export default Pagination;