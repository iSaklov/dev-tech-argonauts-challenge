import React, { useContext } from 'react'
import { ArgoContext } from '../../context/ArgoContext'

const Pagination = () => {
  const { currentPage, totalPages, changePage } = useContext(ArgoContext)
  const pagesArray =
    currentPage > 1
      ? [
          currentPage - 1,
          currentPage,
          currentPage < totalPages ? currentPage + 1 : null
        ]
      : [currentPage, totalPages > 1 ? currentPage + 1 : null]

  return (
    <ul className="pagination">
      <li
        className={currentPage === 1 ? 'disabled' : 'waves-effect waves-light'}
      >
        <button>
          <i className="material-icons" onClick={() => changePage(1)}>
            first_page
          </i>
        </button>
      </li>
      <li
        className={currentPage === 1 ? 'disabled' : 'waves-effect waves-light'}
      >
        <button>
          <i
            className="material-icons"
            onClick={() => changePage(currentPage > 1 ? currentPage - 1 : null)}
          >
            chevron_left
          </i>
        </button>
      </li>
      {pagesArray
        .filter((p) => p !== null)
        .map((p) => (
          <li
            // prevents reloading when the active page is clicked again
            onClick={() => (p !== currentPage ? changePage(p) : null)}
            key={p}
            className={
              currentPage === p ? 'active' : 'waves-effect waves-light'
            }
          >
            <button>{p}</button>
          </li>
        ))}
      <li
        className={
          currentPage === totalPages ? 'disabled' : 'waves-effect waves-light'
        }
      >
        <button>
          <i
            className="material-icons"
            onClick={() =>
              changePage(currentPage < totalPages ? currentPage + 1 : null)
            }
          >
            chevron_right
          </i>
        </button>
      </li>
      <li
        className={
          currentPage === totalPages ? 'disabled' : 'waves-effect waves-light'
        }
      >
        <button>
          <i className="material-icons" onClick={() => changePage(totalPages)}>
            last_page
          </i>
        </button>
      </li>
    </ul>
  )
}

export default Pagination
