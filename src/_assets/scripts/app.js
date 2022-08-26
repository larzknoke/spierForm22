document.addEventListener("DOMContentLoaded", function (event) {
	console.log(`I was loaded at ${Date(Date.now()).toString()}`);

	document
		.querySelector(".spierForm")
		.addEventListener("submit", function (event) {
			event.preventDefault();
			var data = this;

			grecaptcha.ready(function () {
				grecaptcha
					.execute("6LfsiqshAAAAAJfWhN9qQlKKSbQIdizcSoO_jjPa", {
						action: "submit",
					})
					.then(function (token) {
						const formData = new FormData(data);
						formData.append("token", token);

						fetch(data.getAttribute("action"), {
							method: data.getAttribute("method"),
							body: formData,
						})
							.then((res) => res.json())
							.then(function (data) {
								console.log("data", data.success);
								if (data.success) {
									document.querySelector(".spierForm").reset();
									// document.querySelector(".msg-box").remove();
									const button = document.querySelector(".submit-button");
									const msgBox = document.createElement("div");
									msgBox.classList.add(
										"text-center",
										"font-bold",
										"text-xl",
										"bg-spier-100",
										"rounded-sm",
										"text-white",
										"py-3",
										"px-6",
										"mb-3",
										"msg-box"
									);
									msgBox.textContent = "Formular erfolgreich versendet!";
									button.after(msgBox);
								} else {
									alert("Es ist ein Fehler aufgetreten.");
								}
							})
							.catch((e) => {
								console.log(e);
								return e;
							});
					});
			});
		});
});
