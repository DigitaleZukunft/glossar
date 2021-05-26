<svelte:head>
	<title>FAQ</title>
</svelte:head>

<main>
	<h1>FAQ</h1>
	<h2>Ich habe ein Problem oder einen Vorschlag</h2>
	<p>
		Wunderbar! Bitte schauen Sie in unseren <a href="https://github.com/DigitaleZukunft/glossar/issues/new" target="_blank">Issuetracker</a
		>, ob dazu schon eine Issue existiert. Wenn nicht, können Sie mit Ihrem GitHub-Account gerne eine Issue erstellen. Falls Sie noch keinen
		GitHub-Account haben, können sie diesen wenigen Minuten <a href="https://github.com/join" target="blank">hier anlegen</a>. Bitte keine
		Emails.
	</p>
	<h2>Wie funktioniert die Suche?</h2>
	<p>
		Das obere Suchfeld sucht in allen Spalten gleichzeitig. Durch unscharfe Suche werden Tippfehler korrigiert. Standard ist die
		UND-Verknüpfung der Begriffe, "A oder B" kann durch "A | B" gesucht werden. Beispiele:
	</p>
	<ul>
		<li>"AkdividäTEN" findet "Aktivitäten"</li>
		<li>"daten von patienten" findet "Patientendatenmanagementsystem"</li>
		<li>"Planung Projekten" findet "Planung, Steuerung, Überwachung von IT-Projekten"</li>
		<li>"Planung | Projekte" findet alle Einträge, die Planung oder Projekte beinhalten (oder beides)</li>
		<li>
			Noch ausgefeiltere Tricks <a href="https://fusejs.io/examples.html#extended-search" target="_blank">siehe FuseJS</a>
		</li>
	</ul>
</main>
