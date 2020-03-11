import React from 'react'

import '../styles/collection-preview.scss'
import CollectionItem from './collection-item'

function CollectionPreview({title, items}) {
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
				{
					items
						.filter((_, idx) => idx < 4)
						.map((item) => (
							<CollectionItem key={item.id} item={item} />
						))
				}
			</div>
  	</div>
	)
}

export default CollectionPreview
