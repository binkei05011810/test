const showTopic = async ({ params, request, response, state }) => {
    
};

const deleteTopic = async ({ params, request, response, state }) => {
    await sql`DELETE FROM addresses WHERE id = ${ id }`;
};

const postTopic = async ({ params, request, response, state }) => {
    const body = request.body();
    const params = await body.value;
  
    const name = params.get("name");
    const user = await state.session.get("user");

    if (!user) {
        response.status = 401;
        return;
    }

    await sql`INSERT INTO topics (name, user_id) VALUES (${name}, ${user.id})`;
    response.redirect("/topics");
};

const showTopics = async ({ params, request, response, state }) => {
    const user = await state.session.get("user");

    if (!user) {
        response.status = 401;
        return;
    }

    const rows = await sql`SELECT * FROM topics WHERE user_id = ${user.id}`;
    render("topics.eta", { topics: rows });
};



export { showTopic, deleteTopic, postTopic , showTopics};