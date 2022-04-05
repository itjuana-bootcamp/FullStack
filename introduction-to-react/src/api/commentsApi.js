const SERVER_URL = id => `http://localhost:4000/posts/${id}/comments/`


export const getComments = async postId => {
	try {
		const response = await fetch(SERVER_URL(postId))
		if (response.status === 200)
			return await response.json()
		else
			return []
	} catch (error) {
		console.log(error)
	}
}

export const saveComment = async (postId, comment) => {
	try {
		const response = await fetch(SERVER_URL(postId), {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(comment),
		});
		if (response.status === 201)
			return await response.json()
		else
			return false
	} catch (error) {
		console.log(error)
	}
}

export const updateComment = async (postId, commentId, comment) => {
	try {
		const response = await fetch(SERVER_URL(postId) + commentId, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(comment),
		});
		if (response.status === 200)
			return await response.json()
		else
			return false
	} catch (error) {
		console.log(error)
	}
}

export const deleteComment = async (postId, commentId) => {
	try {
		const response = await fetch(SERVER_URL(postId) + commentId, { method: 'DELETE' })
		return response.status === 204
	} catch (error) {
		console.log(error)
	}
}