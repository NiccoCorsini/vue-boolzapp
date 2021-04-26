const app = new Vue({
    el: "#app",
    data: {
        // LOGGED USER
        login: {
            name: 'Logged User',
            avatar: '_io',
        },
        // CONTACTS
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Gervasio',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Stanabrodi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Gioverca!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Sarcinopendri!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Tommasa',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: "Ti cao nell'orecchio",
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: "Il che c'è a Fucecchio?",
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Mi pare giusto così',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Jhonson',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: "Se l'arcivescovo di Costantinopoli si disarcivescostantinopolizzasse, vi disarcivescostantinopolizzereste voi?",
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Personalmente no',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Beh! che ti devo dire..',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Ivan 13',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ha cagato il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ha cagato un rinoceronte..',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: "Dovresti dargli un po' meno cibo",
                        status: 'received'
                    }
                ],
            },
        ],
        // EMOTICONS
        emoticons: [
            {
                code: "😃"
            },
            {
                code: "😀"
            },
            {
                code: "😄"
            },
            {
                code: "😁"
            },
            {
                code: "😆"
            },
            {
                code: "😅"
            },
            {
                code: "🤣"
            },
            {
                code: "😂"
            },
            {
                code: "🙂"
            },
            {
                code: "🙃"
            },
            {
                code: "😉"
            },
            {
                code: "😊"
            },
            {
                code: "😇"
            },
            {
                code: "🥰"
            },
            {
                code: "😍"
            },
            {
                code: "🤩"
            },
            {
                code: "😘"
            },
            {
                code: "😗"
            },
            {
                code: "😚"
            },
            {
                code: "🥲"
            },
            {
                code: "😋"
            },
            {
                code: "😛"
            },
            {
                code: "😜"
            },
            {
                code: "🤪"
            },
            {
                code: "😝"
            },
            {
                code: "🤑"
            },
            {
                code: "🤗"
            },
            {
                code: "🤭"
            },
            {
                code: "🤫"
            },
            {
                code: "🤔"
            },
            {
                code: "🤐"
            },
            {
                code: "🤨"
            },
            {
                code: "😐"
            },
            {
                code: "😑"
            },
            {
                code: "😶"
            },
            {
                code: "😏"
            },
            {
                code: "😒"
            },
            {
                code: "🙄"
            },
            {
                code: "😬"
            },
            {
                code: "🤥"
            },
            {
                code: "😌"
            },
            {
                code: "😔"
            },
            {
                code: "😪"
            },
            {
                code: "🤤"
            },
            {
                code: "😴"
            },
            {
                code: "😷"
            },
            {
                code: "🤒"
            },
            {
                code: "🤕"
            },
            {
                code: "🤢"
            },
            {
                code: "🤮"
            },
            {
                code: "🤧"
            },
            {
                code: "🥵"
            },
            {
                code: "🥶"
            },
            {
                code: "🥴"
            },
            {
                code: "😵"
            },
            {
                code: "🤯"
            },
            {
                code: "🤠"
            },
            {
                code: "🥳"
            },
            {
                code: "🥸"
            },
            {
                code: "😎"
            },
        ],
        // SELECTED (CURRENT OBJECT)
        current: {},

        // IF SELECTED ITEM
        ifSelected: false,

        // LAST ACCESS (DATE STRING)
        lastAccess: '',

        // SEARCH IN CONTACTS VALUE
        searchUser: '',

        // IF NOT FOUND
        notFound: true,

        // TEMPORANY NAME (IF CONTACT NOT FOUND)
        tempName: '',

        // TEXT MESSAGE VALUE
        newTextMessage: '',

        // ICON SWITCH
        iconVisible: false,

        // EMOTICON SWITCH
        emoticonVisible: false,

        // DARKMODE SWITCH
        darkmode: false,
    },
    methods: {
        // DARKMODE
        darkmodeSwitch(){
            this.darkmode = !this.darkmode;
        },
        // ICONS ON OFF
        iconOn(){
            this.iconVisible = true;
        },
        iconOff(){
            this.iconVisible = false;
        },
        // EMOTICON ON OFF
        emoticonOn(){
            this.emoticonVisible = true;
            this.iconVisible = true;
        },
        emoticonOff(){
            this.emoticonVisible = false;
            this.iconVisible = false;
        },
        // SCROLL TO LAST MESSAGE
        scrollToEnd() {    	
            let container = this.$el.querySelector("#chat-messages");
            container.scrollTop = container.scrollHeight + 6;
        },
        // PUSH EMOJI IN TEXT MESSAGE
        emojiInsert(emoji){
            this.newTextMessage += emoji.code;
        },
        // SHOW SELECTED CONTACT
        currentSelected(contact){
            
            this.current = {
                ...contact,
            };

            this.ifSelected = true;

            this.current.messages.forEach((element, index) => {
                if(index === (this.current.messages.length - 1)){
                    this.lastAccess = element.date;
                }
            });

            setTimeout(()=>{
                this.scrollToEnd();
            }, 100);
        },
        // SEARCH CONTACT IN CONTACTS
        searchedUser(){
            this.notFound = false;

            this.contacts.forEach((element, index) =>{
                
                if(!this.searchUser == ''){
                    element.visible = false;
                }

                if(element.name.toLowerCase().includes(this.searchUser.toLowerCase())){
                    element.visible = true;
                    this.notFound = true;
                } else {
                    element.visible = false;
                    this.tempName = this.searchUser;
                }
            });
        },
        // SEND MESSAGE
        sendMessage(){

            if(this.newTextMessage != ''){
                this.pushMessage(this.newTextMessage, true)
                setTimeout(() =>{
                    this.receiveMessage()
                }, 2000);        
            };

            this.newTextMessage = '';

        },
        // BOT ANSWER
        receiveMessage(){
            const messages = [];
            this.contacts.forEach(element =>{

                if(this.current.name == element.name){
                    
                    element.messages.forEach(message =>{
                        if(message.status == 'sent'){
                            messages.push(message.message);
                        }
                        this.lastAccess = message.date;
                    });

                }
                
            });

            const last = messages[messages.length - 1];

            this.answer(last);

        },
        // ANSWERS OPTIONS
        answer(last){
            let message;

            switch(last){
                
                case "ciao":
                    
                    message = "Ciao!";
                    this.pushMessage(message, false);
                    break;

                case "come stai?":
                    
                    message = "Bene grazie! e tu?";
                    this.pushMessage(message, false);
                    break;

                case "quanti anni hai?":
                    
                    message = "Non te lo dico..";
                    this.pushMessage(message, false);
                    break;

                case "tu hai una bella barbetta":
                    
                    message = "Bello te!";
                    this.pushMessage(message, false);
                    break;

                default:
                    message = "Non credo di aver capito..";
                    this.pushMessage(message, false);
            }
        },
        // FILTER AND PUSH MESSAGES
        pushMessage(message, stat){
            let value;

            if(stat){
                value = "sent";
            } else {
                value = "received";
            }

            this.contacts.forEach(element =>{

                if(this.current.name == element.name){
                    element.messages.push({
                        date: this.actualTime(),
                        message: message,
                        status: value
                    });
                };
            });

            this.scrollToEnd()

        },
        // ACTUAL DATE AND TIME
        actualTime(){
            const timeDefault = new Date();
            let day = timeDefault.getDate();
            if (day < 10){
                day = `0${day}`;
            }
            let month = timeDefault.getMonth();
            if (month < 10){
                month = `0${month + 1}`;
            }
            const year = timeDefault.getFullYear();

            let hour = timeDefault.getHours()
            if (hour < 10){
                hour = `0${hour}`;
            }

            let minute = timeDefault.getMinutes()
            if (minute < 10){
                minute = `0${minute}`;
            }

            let second = timeDefault.getSeconds()
            if (second < 10){
                second = `0${second}`;
            }

            return `${day}/${month}/${year} ${hour}:${minute}:${second}`

        }
    }
});