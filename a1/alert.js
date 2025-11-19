//for high proirity things, that should appear as js alerts or another obtrusive popup, ex: bus is about to arrive at stop, Likely to miss transfer,

const msg_quitDuringTrip = {
    type: 'confirmBox',
    title: "Are you sure",
    text: `You have a trip in progress. If you exit you will no longer see info about it.`,
    details: `from ${origin} to ${destination}`,
    actions: [
        exit(), closeDialog()
    ]

}

const msg_missNextTransfer = {
    type: 'actionList',
    title: "Transfer Alert",
    text: `You are probably going to miss your transfer from ${currentLine} to ${nextLine} at ${nextTransfer}.\n How do you want to continue`,
    actions: [
        action1
    ]

}

const msg_leaveNow = {
    type: 'messageOnly',
    title: "Leave Now",
    text: `${nextLine} will be leaving ${nextLineStart} in ${timeUntilDeparture(nextLine, nextLineStart)}`
}