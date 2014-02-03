(ns lt.plugins.describe-key
 (:require [lt.objs.app :as app]
            [lt.objs.command :as cmd]
            [lt.objs.keyboard :as keyboard]
            [lt.object :as object]
            [lt.objs.context :as ctx]
            [lt.objs.popup :as popup]
            [clojure.string :as s]))

(def old-key-map (atom {}))

(defn save-current-key-map
    "Make a copy of the current keymap."[]
    (reset! old-key-map @lt.objs.keyboard/key-map))


;; While we don't need to manually restore the keymap when we change focus,
;; it can be useful to cancel a key sequence input.

(defn restore-keymap []
  (reset! lt.objs.keyboard/key-map @old-key-map))


;; commands with arguments --->    [(:some-command "arg1" "arg2" ...)]
;; commands without arguments ---> [:some-other-command]

(defn print-key-command [keyseq command-and-args]
  (let [c&a (first command-and-args)
        [command args] (if (keyword? c&a) [c&a nil]
                         [(first c&a) (rest c&a)])
        stored-cmd (cmd/by-id command)]
    (popup/popup! {:header "Describe key"
                   :body [:div [:h1 keyseq]
                          [:h2 (str "Command: " (:command stored-cmd))]
                          (when (seq args) [:h2 (s/join " " (cons "Arguments:" (map pr-str args)))])
                          [:i (:desc stored-cmd)]]
                   :buttons [{:label "Ok" :action :cancel}]})))


(defn intercept-keymap
    "Take all current key sequences and wrap them into a printing function"[]
  (-> (into {} (for [[k v] @lt.objs.keyboard/key-map]
             [k [(list ::print-key-command k v)]]))
      (merge {"ctrl-g" [::restore-keymap]})))


(defn describe-key
  "Create a temporary keymap to give the user info about the function associated with keys pressed.
   <ctrl-g> will restore the initial keymap."[]
  (save-current-key-map)
  (reset! lt.objs.keyboard/key-map (intercept-keymap)))


(cmd/command {:command ::restore-keymap
              :hidden true
              :desc "Restore the initial keymap"
              :exec (fn []
                      (restore-keymap))})

(cmd/command {:command ::print-key-command
              :hidden true
              :desc "Show the user the command information."
              :exec (fn [k v]
                      (print-key-command k v))})

(cmd/command {:command ::describe-key
              :desc "Describe the command associated with a key sequence."
              :exec (fn []
                      (describe-key))})

;; dev

;; (print-key-command "Ctrl-alt-k" ['(:emacs.keymap-cmd "arg1" "arg2")])
;; (print-key-command "Ctrl-alt-k" [:emacs.keymap-cmd])
;; (describe-key)
