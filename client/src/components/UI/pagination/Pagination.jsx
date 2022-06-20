import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({page, totalPages, changePage}) => {
	let pagesArray = getPagesArray(totalPages)
	return (
		<ul className="pagination">
			<li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
			{pagesArray.map(p =>
				<li
					onClick={() => changePage(p)}
					key={p}
					className={page === p ? "active" : "waves-effect"}
				>
					<a href="#!">{p}</a>
				</li>
			)}
			<li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
		</ul>
	);
};

export default Pagination;