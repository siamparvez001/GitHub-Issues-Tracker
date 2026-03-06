const loginBtn = document.getElementById("loginBtn")

const loginPage = document.getElementById("loginPage")
const mainPage = document.getElementById("mainPage")

const issuesContainer = document.getElementById("issuesContainer")
const issueCount = document.getElementById("issueCount")

let issues = []


loginBtn.onclick = function () {

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if (username === "admin" && password === "admin123") {

        loginPage.classList.add("hidden")
        mainPage.classList.remove("hidden")

        loadIssues()

    } else {

        alert("Invalid login")

    }

}



async function loadIssues() {

    const res = await fetch(
        "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    )

    const data = await res.json()

    issues = data.data

    displayIssues(issues)

    updateCount(issues)

}



function updateCount(list) {

    issueCount.innerText = `${list.length} Issues`

}



function displayIssues(list) {
    issuesContainer.innerHTML = ""

    list.forEach(issue => {

        const div = document.createElement("div")

        const border =
            issue.status === "open"
                ? "border-green-500"
                : "border-purple-500"

        div.className =
            `bg-white shadow rounded-lg border-t-4 ${border} p-4 cursor-pointer flex flex-col`

        // IMAGE BASED ON PRIORITY
        let statusImg;
        const priority = issue.priority.toLowerCase()
        if (priority === "low") {
            statusImg = "./images/Closed- Status .png"
        } else {
            statusImg = "./images/Open-Status.png"
        }

        div.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <span class="flex items-center gap-2">
                    <img src="${statusImg}" class="w-5 h-5" alt="status">
                    <span class="badge">${issue.priority}</span>
                </span>
            </div>

            <h3 class="font-semibold text-sm mb-1">
                ${issue.title}
            </h3>

            <p class="text-xs text-gray-500 mb-3">
                ${issue.description.slice(0, 70)}...
            </p>

            <div class="flex gap-2 mb-3">
                <span class="badge badge-error">BUG</span>
                <span class="badge badge-warning">HELP WANTED</span>
            </div>

            <p class="text-xs text-gray-400">
                #${issue.id} by ${issue.author}
            </p>

            <p class="text-xs text-gray-400">
                ${issue.createdAt}
            </p>
        `

        div.addEventListener("click", function () {
            openModal(issue)
        })

        issuesContainer.appendChild(div)
    })
}



function openModal(issue) {

    document.getElementById("modalTitle").innerText =
        issue.title

    document.getElementById("modalDescription").innerText =
        issue.description

    document.getElementById("modalAuthor").innerText =
        issue.author

    document.getElementById("modalDate").innerText =
        issue.createdAt

    document.getElementById("modalAssignee").innerText =
        issue.author

    document.getElementById("modalPriority").innerText =
        issue.priority


    const status = document.getElementById("modalStatus")

    if (issue.status === "open") {

        status.className = "badge badge-success"
        status.innerText = "Opened"

    } else {

        status.className = "badge badge-secondary"
        status.innerText = "Closed"

    }

    document.getElementById("issueModal").showModal()

}



document.getElementById("allTab").onclick = function () {

    displayIssues(issues)
    updateCount(issues)

}



document.getElementById("openTab").onclick = function () {

    const open = issues.filter(issue => issue.status === "open")

    displayIssues(open)

    updateCount(open)

}



document.getElementById("closedTab").onclick = function () {

    const closed = issues.filter(issue => issue.status === "closed")

    displayIssues(closed)

    updateCount(closed)

}



document.getElementById("searchBtn").onclick = async function () {

    const text = document.getElementById("searchInput").value

    const res = await fetch(
        `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`
    )

    const data = await res.json()

    displayIssues(data.data)

    updateCount(data.data)

}