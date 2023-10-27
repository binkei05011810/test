import { Router } from "../deps.js";
import * as mainController from "./controllers/mainController.js";
import * as questionController from "./controllers/questionController.js";
import * as topicController from "./controllers/topicController.js";
import * as optionController from "./controllers/optionController.js";
import * as authenticationController from "./controllers/authenticationController.js";

const router = new Router();

router.get("/", mainController.showMain);

router.get("/topics/:id/questions/:qId", questionController.showQuestion);
router.get("/topics/:id/questions", questionController.showQuestions);

router.get("/topics/:id", topicController.showTopic);
router.get("/topics", topicController.showTopics);

router.post("/topics/:id/questions:qId/options", optionController.postOption);

router.post("/topics/:id/questions", questionController.postQuestion);
router.post("/topics/:id/delete", topicController.deleteTopic);
router.post("/topics", topicController.postTopic);

//router.get("/quiz", accountController.showQuiz);

router.get("/auth/register", authenticationController.showRegistrationForm);
router.post("/auth/register", authenticationController.postRegistrationForm);
router.get("/auth/login", authenticationController.showLoginForm);
router.post("/auth/login", authenticationController.postLoginForm);

export { router };
