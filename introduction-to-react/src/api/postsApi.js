const SERVER_URL = 'http://localhost:4000/posts/'


export const getPosts = async () => {
	try {
		const response = await fetch(SERVER_URL);
		if (response.status === 200)
			return await response.json()
		else
			return []
	} catch (error) {
		console.log(error)
	}
}

export const savePost = async post => {
	try {
		const response = await fetch(SERVER_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(post),
		});
		if (response.status === 201)
			return await response.json()
		else
			return false
	} catch (error) {
		console.log(error)
	}
}

export const updatePost = async (id, post) => {
	try {
		const response = await fetch(SERVER_URL + id, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(post),
		});
		if (response.status === 200)
			return await response.json()
		else
			return false
	} catch (error) {
		console.log(error)
	}
}

export const getPost = async id => {
	try {
		const response = await fetch(SERVER_URL + id);
		if (response.status === 200)
			return await response.json()
		else
			return false
	} catch (error) {
		console.log(error)
	}
}

export const deletePost = async id => {
	try {
		const response = await fetch(SERVER_URL + id, { method: 'DELETE' });
		return response.status === 204
	} catch (error) {
		console.log(error)
	}
}