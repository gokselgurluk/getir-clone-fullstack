function CategoryItem({ category }) {
	return (
        <a href="#" className="flex group justify-center items-center rounded transition-colors hover:bg-purple-50 flex-col p-4">
            <img src={category.image} className="w-12 h-12 rounded-lg border border-gray-200 object-cover" />
            <span className="font-medium opacity-70 transition-colors group-hover:text-secondary whitespace-nowrap block mt-2 text-sm">{category.title}</span>
        </a>
	)
}

export default CategoryItem