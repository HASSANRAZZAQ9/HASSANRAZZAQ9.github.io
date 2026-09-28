const topics={
"multiple-linear-regression":{title:"Multiple Linear Regression From Scratch",tag:"REGRESSION",intro:"Learn the model y = b₀ + b₁x₁ + … + bₙxₙ, then connect the equation to gradient descent and a NumPy implementation.",html:`<h2 id="intuition">Intuition</h2><p>Multiple linear regression predicts a continuous value from several input features. The model learns one weight for each feature plus an intercept.</p><h2 id="math">The mathematics</h2><p>The prediction is <b>ŷ = b₀ + b₁x₁ + b₂x₂ + … + bₙxₙ</b>. A common training objective is mean squared error. Gradient descent changes each parameter in the direction that reduces the cost.</p><pre><code>prediction = X @ b
error = prediction - y
gradient = (X.T @ error) / len(y)
b = b - learning_rate * gradient</code></pre><h2 id="code">Python implementation</h2><pre><code>import numpy as np

b = np.zeros(n_features)

for _ in range(1000):
    prediction = X @ b
    error = prediction - y
    gradient = (X.T @ error) / len(y)
    b -= 0.01 * gradient</code></pre><p>The important idea is that <code>X.T @ error</code> combines every feature's values with the current prediction errors to produce a gradient for every parameter.</p><h2 id="next">Next steps</h2><p>Try the algorithm on a small CSV dataset, compare it with scikit-learn, and evaluate it with MAE, RMSE and R².</p>`},
"gradient-descent":{title:"Gradient Descent Explained",tag:"MATHEMATICS",intro:"Understand the optimization loop behind many machine learning algorithms.",html:`<h2 id="intuition">Intuition</h2><p>Imagine a ball moving downhill. The cost function is the landscape, and the gradient points toward increasing cost. We move in the opposite direction.</p><h2 id="math">The update rule</h2><p>For a parameter θ, the basic update is <b>θ ← θ − α · ∂J/∂θ</b>, where α is the learning rate and J is the cost.</p><h2 id="code">Python</h2><pre><code>theta = theta - learning_rate * gradient</code></pre><p>A learning rate that is too large can overshoot. One that is too small can make training unnecessarily slow.</p><h2 id="next">Next steps</h2><p>Study partial derivatives, then implement gradient descent for linear regression using NumPy.</p>`},
"logistic-regression":{title:"Logistic Regression With Python",tag:"CLASSIFICATION",intro:"Use a sigmoid function to turn a linear score into a probability for binary classification.",html:`<h2 id="intuition">Intuition</h2><p>Logistic regression calculates a linear score and passes it through the sigmoid function, producing a value between 0 and 1.</p><h2 id="math">Sigmoid</h2><pre><code>σ(z) = 1 / (1 + e⁻ᶻ)</code></pre><p>For classification, a threshold such as 0.5 can turn predicted probabilities into class labels. Training commonly minimizes log loss.</p><h2 id="code">Python idea</h2><pre><code>z = X @ b
probability = 1 / (1 + np.exp(-z))
prediction = (probability >= 0.5).astype(int)</code></pre><h2 id="next">Next steps</h2><p>Evaluate classification with precision, recall, F1 and a confusion matrix.</p>`},
"preprocessing":{title:"Train/Test Split & Feature Scaling",tag:"PREPROCESSING",intro:"Prepare data correctly so evaluation reflects performance on unseen examples.",html:`<h2 id="intuition">Why split the data?</h2><p>A test set should represent data the model did not see during training. Training and testing on the same observations can produce an overly optimistic estimate.</p><h2 id="math">Scaling</h2><p>Standardization commonly transforms a feature using z = (x − mean) / standard deviation. Scaling can be especially important for distance-based and gradient-based algorithms.</p><h2 id="code">scikit-learn</h2><pre><code>from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)</code></pre><h2 id="next">Next steps</h2><p>Learn how to prevent data leakage and build preprocessing pipelines.</p>`},
"random-forest":{title:"Random Forest Explained",tag:"TREES",intro:"Understand how an ensemble of decision trees can be combined for robust predictions.",html:`<h2 id="intuition">Intuition</h2><p>A random forest trains many decision trees using randomized samples and feature choices, then aggregates their predictions.</p><h2 id="math">Why ensembles?</h2><p>Individual trees can be sensitive to the training data. Combining many varied trees can reduce variance and improve generalization.</p><h2 id="code">Python</h2><pre><code>from sklearn.ensemble import RandomForestRegressor

model = RandomForestRegressor(
    n_estimators=200,
    random_state=42
)
model.fit(X_train, y_train)</code></pre><h2 id="next">Next steps</h2><p>Compare random forests with a single decision tree and gradient boosting.</p>`},
"xgboost":{title:"XGBoost Regression",tag:"BOOSTING",intro:"A practical introduction to gradient boosting for tabular regression problems.",html:`<h2 id="intuition">Boosting</h2><p>Boosting builds models sequentially. Later trees focus on reducing errors left by earlier trees.</p><h2 id="math">Core idea</h2><p>Each new tree contributes a correction to the current model. A learning rate controls how strongly each new tree changes the prediction.</p><h2 id="code">Python</h2><pre><code>from xgboost import XGBRegressor

model = XGBRegressor(
    n_estimators=300,
    learning_rate=0.05,
    max_depth=5,
    random_state=42
)
model.fit(X_train, y_train)</code></pre><h2 id="next">Next steps</h2><p>Experiment with validation data and tune the learning rate, depth and number of estimators.</p>`}};
const key=new URLSearchParams(location.search).get('topic')||'multiple-linear-regression';const t=topics[key]||topics["multiple-linear-regression"];document.title=t.title+" | MLForge";document.getElementById('title').textContent=t.title;document.getElementById('tag').textContent=t.tag;document.getElementById('intro').textContent=t.intro;document.getElementById('content').innerHTML=t.html;