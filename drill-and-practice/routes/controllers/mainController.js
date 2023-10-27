const showMain = async ({ response, render, state }) => {
  if (await state.session.get("authenticated")) {
    render("main.eta", await state.session.get("user"));
  } else {
    response.redirect("/auth/login");
  }
};

export { showMain };
