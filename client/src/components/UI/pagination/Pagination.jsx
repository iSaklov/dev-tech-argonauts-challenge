import React from 'react'

const Pagination = ({ page, totalPages, changePage }) => {

	const pagesArray = page > 1
													? [page - 1, page, page < totalPages ? page + 1 : null]
													: [page, totalPages > 1 ? page + 1 : null]

	return (
		<ul className="pagination">
			<li className={page === 1 ? "disabled" : "waves-effect waves-light"}>
				<button>
					<i
						className="material-icons"
						onClick={() => changePage(1)}
					>
						first_page
					</i>
				</button>
			</li>
			<li className={page === 1 ? "disabled" : "waves-effect waves-light"}>
				<button>
					<i
						className="material-icons"
						onClick={() => changePage(page > 1 ? page - 1 : null)}
					>
						chevron_left
					</i>
				</button>
			</li>
			{pagesArray.filter(p => p !== null).map(p =>
				<li
					// prevents reloading when the active page is clicked again
					onClick={() => p !== page ? changePage(p) : null}
					key={p}
					className={page === p ? "active" : "waves-effect waves-light"}
				>
					<button>
						{p}
					</button>
				</li>
			)}
			<li className={page === totalPages ? "disabled" : "waves-effect waves-light"}>
				<button>
					<i
						className="material-icons"
						onClick={() => changePage(page < totalPages ? page + 1 : null)}
					>
						chevron_right
					</i>
				</button>
			</li>
			<li className={page === totalPages ? "disabled" : "waves-effect waves-light"}>
				<button>
					<i
						className="material-icons"
						onClick={() => changePage(totalPages)}
					>
						last_page
					</i>
				</button>
			</li>
		</ul>
	)
}

export default Pagination