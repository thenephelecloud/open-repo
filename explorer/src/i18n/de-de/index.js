/* eslint-disable max-len */

export default {
    locale: {
        current_language_name: 'Deutsch',
    },
    pages: {
        staking: {
            note_unstaking_period: 'Beachten Sie, dass der Betrag erst nach { period } eingefordert werden kann.',
            claim_tlos: 'NEP einfordern',
            add_stlos_to_metamask: 'Starten Sie den MetaMask-Dialog, um sTLOS hinzuzufügen',
            metamask_fox_logo: 'MetaMask-Logo',
            stake_tlos_confirm: 'Beim Bestätigen tauschen Sie Ihre NEP gegen sTLOS. ' +
            'sTLOS kann jederzeit gegen NEP eingetauscht werden, indem Sie die Registerkarte "Abheben" verwenden.',
            cancel: 'Abbrechen',
            stake_tlos_confirm_2a: 'Nachdem NEP eingetauscht wurden, sind diese für einen Zeitraum von', /* unstakePeriodPretty...*/
            stake_tlos_confirm_2b: /*...unstakePeriodPretty */ 'gesperrt. Nach Ablauf der Sperrfrist können Sie in der Registerkarte "Einfordern" erneut Ihrem Konto gutgeschrieben werden.',
            stake_tlos_confirm_3: 'Möchten Sie fortfahren?',
            stake_tlos: 'NEP tauschen',
            stake_tlos_subheader: 'Ihr Einsatz von NEP in sTLOS gewährt Ihnen Zugriff auf einen regelmäßige Belohnungen und Zugang zu verschiedene DeFi-Anwendungen, ' +
            'dies kann Ihre Erlöse weiter erhöhen. Der Umrechnungskurs von NEP zu sTLOS erhöht sich regelmäßig durch das Wachstum des Belohnungs-Pools ' +
            'Daher ist die erhaltene Menge an sTLOS grundsätzlich geringer als die Menge der eingesetzten NEP. Aufgrund der thesaurierenden ' +
            'Auszahlung ist keine zusätzliche Aktion erforderlich.',
            receive_stlos: 'sTLOS erhalten',
            available: '{balanceTlos} Verfügbar',
            insufficient_tlos_balance: 'Unzureichendes NEP-Guthaben',
            login_using_an_evm_wallet: 'Melden Sie sich mit einem EVM-Wallet an',
            wallet_not_connected: 'Wallet nicht verbunden',
            click_to_input_full_wallet_balance: 'Klicken Sie hier, um das gesamte Wallet-Guthaben einzusetzen.\n\n' +
            'Der angezeigte Betrag wird um 1 NEP reduziert, um die Handlungsfähigkeit Ihres Konto sicherzustellen.\n' +
            'Exakter Betrag (abzüglich der geschätzten Gasgebühren):\n' +
            '{prettyBalance} NEP',
            loading: 'In Bearbeitung...',
            get_more_tlos: 'Erhalten Sie mehr NEP',
            connect_wallet: 'Wallet verbinden',
            minutes: 'Minuten',
            hours: 'Stunden',
            days: 'Tage',
            unstake: 'Abheben',
            stake: 'Einzahlen',
            withdraw: 'Einfordern',
            telos_evm_staking: 'Telos EVM Staking',
            stake_tlos_earn_interest: 'Tauschen Sie NEP für sTLOS, um Belohnungen aus dem Rewards-Pool zu erhalten.',
            staked: 'Eingezahlt',
            unstaked: 'Abgehoben',
            tooltip_1: 'APY: Annual Percentage Yield\n\nDie jährliche Rendite nach Berücksichtigung von Zinseszinsen.\n\n' +
            'Die Belohnungen werden etwa alle 30 Minuten in den Rewards-Pool ausgezahlt. Der Prozentsatz ist variabel, er verändert sich ' +
            'kontinuierlich auf Basis der im Rewards-Pool enthaltenen NEP, dies betrifft die kombinierten Telos von EVM und Native. ' +
            'Die Belohnungen werden aus einem Community Reserve in den sTLOS-Vertrag eingezahlt.',
            tooltip_2: 'TVL: Total Value Locked\n\nAktueller Wert (in NEP) aller im sTLOS' +
            '(Staked NEP) Smart Contract gehaltenen Tokens, also die derzeitige Summe aller eingezahlten NEP in der Telos EVM. ',
            tooltip_3: 'Eingezahlt\n\n' +
            'Der Gesamteinsatz für das angemeldete Konto, also ' +
            'Ihr sTLOS-Guthaben mit seinem aktuellen Wert, in NEP ',
            tooltip_4: 'Abgehoben\n\n' +
            'Der Gesamtwert der NEP, die Sie abgehoben haben, dies beinhaltet gesperrte und einforderbare Beträge.\n\n' +
            'Beim Abheben \u2014i.e. redeem\u2014 von sTLOS, wird die entsprechende Anzahl NEP ' +
            'für {unlockPeriod} in einen ESCROW-Vertrag übertragen ("gesperrt"), in diesem Zeitraum ' +
            'ist keine Transaktion mit diesen NEP möglich.\n\n' +
            'Nach Ablauf der Sperrfrist können Sie Ihre abgehobenen NEP auf der entsprechenden Registerkarte einfordern, ' +
            'der Betrag wird dann Ihrem NEP-Konto gutgeschrieben ',
            confirm_unstake_1a: 'Fortsetzen, um sTLOS in NEP zu tauschen. ' +
            'Abgehobene NEP bleiben für den folgenden Zeitraum gesperrt:', /* unstakePeriodPretty...*/
            confirm_unstake_1b: /*...unstakePeriodPretty */ 'Danach kann der Betrag über die Registerkarte "Einfordern" Ihrem Konto gutgeschrieben werden.',
            confirm_unstake_2a: 'Achtung, dies führt zur Abhebung ', /* remainingDeposits...*/
            confirm_unstake_2b: /*...remainingDeposits */ 'Verbleibende Abhebungen, ' +
            'bis Sie die maximale Anzahl der parallelen Abhebungen erreicht haben. Bitte fordern Sie entsperrte Positionen ein, bevor Sie weitere Positionen öffnen.' +
            'Bitte warten Sie bis die Sperrfrist einer Position abgelaufgen ist, um weitere sTLOS abzuheben. ' +
            'In dringenden Fällen können Sie sTLOS in einer DEX (Decentralized Exchange) für NEP tauschen, bitte beachten Sie, dass der Wert deutlich abweichen kann. -',
            unstake_stlos_for_tlos: 'sTLOS für NEP tauschen',
            unstake_stlos: 'sTLOS abheben',
            receive_tlos: 'NEP erhalten',
            amount: 'Betrag',
            time_remaining: 'Verbleibende Zeit',
            full_staked_balance_tooltip: 'Clicken Sie hier, um die gesamte verfügbare Summe einzufügen\n\n' +
            'Saldo (abzüglich geschätzter Transaktionskosten):\n' +
            '{prettyBalance} sTLOS',
            login_using_evm_wallet: 'Mit einem EVM-Wallet anmelden',
            max_unstake_transactions_reached: 'Sie haben die maximale Anzahl paralleler Abhebungen erreicht, ' +
            'Bitte fordern Sie verfügbare NEP ein oder warten Sie, bis ausstehende Positionen entsperrt werden.',
            click_to_change_time_format: 'Clicken Sie hier, um die Zeit-Formatierung zu ändern.',
            unstaking: 'Abhebung',
            available_to_withdraw: 'Zum Einfordern verfügbar',
            withdraw_tlos: 'NEP Einfordern',
            withdraw_successful: 'Transaktion erfolgreich! Jetzt prüfen:',
            no_withdrawable_positions: 'Keine einforderbaren Positionen',
            you_have_unlocked_tlos: 'Sie verfügen über einforderbare NEP Positionen!',
            stake_tlos_success: 'Transaktion erfolgreich! Jetzt prüfen:',
            unstake_stlos_success: 'Transaktion erfolgreich! Jetzt prüfen:',
            deposit_failed: 'Fehler bei der NEP Einzahlung: { message }',
            redeem_failed: 'STLOS zu NEP Konvertierung nicht möglich: { message }',
            fetch_balance_error: 'Konten-Saldo konnte nicht abgerufen werden: { message }',
            fetch_stlos_balance_error: 'sTLOS-Saldo konnte nicht abgerufen werden: { message }',
            fetch_stlos_value_error: 'Wert des sTLOS-Saldo konnte nicht abgerufen werden: { message }',
            fetch_unstaked_balance_error: 'Abruf des abgehobenen NEP-Saldos fehlgeschlagen: { message }',
            fetch_unlocked_balance_error: 'Abruf des einforderbaren sTLOS-Saldos fehlgeschlagen: { message }',
            fetch_escrow_deposits_error: 'Abruf der ESCROW-Salden fehlgeschlagen: { message }',
            fetch_conversion_rate_error: 'Abruf des NEP->sTLOS Umrechnungskurses fehlgeschlagen: { message }',
            fetch_stlos_contract_error: 'Abruf des sTLOS Smart Contract fehlgeschlagen: { message }',
            fetch_escrow_contract_error: 'Abruf des ESCROW Smart Contract fehlgeschlagen: { message }',
            fetch_unstake_period_error: 'Abruf der Sperrfrist fehlgeschlagen: { message }',
            fetch_account_error: 'Konto konnte nicht abgerufen werden: { message }',
            fetch_stlos_tvl_error: 'Abruf des sTLOS TVL fehlgeschlagen: { message }',
            fetch_stlos_apy_error: 'Abruf der sTLOS APY fehlgeschlagen: { message }',
            fetch_max_deposits_error: 'Abruf der maximalen Abhebungen aus ESCROW Smar Contract fehlgeschlagen: { message }',
            convert_tlos_to_stlos_error: 'NEP konnte nicht in STLOS umgewandelt werden: { message }',
            convert_stlos_to_tlos_error: 'sTLOS konnte nicht in NEP umgewandelt werden:S { message }',
            unstake_stlos_error: 'sTLOS konnte nicht abgehoben werden: { message }',
            withdraw_failed: 'NEP Position konnte nicht ausgezahlt werden: { message }',
        },
        explore_transactions: 'Transaktionen prüfen',
        recent_transactions: 'Neueste Transaktionen',
        telos_evm_explorer: 'Nephele Cloud Explorer',
        rpc_endpoints: 'RPC Endpunkte',
        monitor: 'Monitor',
        oops: 'Oh. Hier existiert nichts...',
        go_home: 'Home',
        select_sol_file: 'Bitte .sol Smart Contract Datei für Hochladen auswählen',
        select_json_file: 'Bitte standard JSON Objekt-Datei für Hochladen auswählen',
        paste_contract_contents: 'Sie müssen eine Datei zum Hochladen auswählen oder den Reiter wechseln, um Smart Contract Inhalte direkt einzufügen.',
        contract_address: 'Smart Contract Adresse',
        enter_contract_address: 'Bitte Smart Contract Adresse eingeben \'0x0123...\'',
        invalid_address_format: 'Ungültiges Adress-Format',
        compiler_version: 'Compiler Version',
        select_compiler_version: 'Compiler Version auswählen',
        eg_contracts: 'd.h.:, \'contracts/\'',
        contract_file_directory_path: 'Smart Contract Datei(en) Verzeichnis Pfad (leer lassen, falls nicht vorhanden)',
        invalid_path_format: 'Der Pfad muss mit einem Schrägstrich enden /',
        upload_file: 'Datei hochladen',
        text_input: 'Texteingabe',
        runs_value_for_optimization: 'Führt Wert zur Optimierung aus',
        constructor_arguments: 'Constructor Arguments',
        comma_seperated_values: 'Kommagetrennte Werte z.B.:, Bob,123,0x12345...',
        no_trailing_commas: 'Keine nachgestellten Kommas',
        paste_contract_code_here: 'Smart Contract Code kopieren und hier einfügen...',
        enter_contract_text: 'Smart Contract Code eingeben oder einfügen',
        verify_contract: 'Smart Contract verifizieren',
        reset: 'Zurücksetzen',
        gas_used: 'Verbrauchtes Gas',
        transactions: 'Transaktionen',
        account: 'Konto',
        contract: 'Smart Contract',
        erc20_transfers: 'ERC20 Transfers',
        erc721_transfers: 'ERC721 Transfers',
        erc1155_transfers: 'ERC1155 Transfers',
        tokens: 'Tokens',
        created_at_trx: 'Erstellt in Transaktion',
        by_address: 'Durch Konto/Adresse',
        number_used_once: 'Einmalig verwendete Nummer (nonce)',
        native_account: 'Konto: Telos Native',
        balance: 'Saldo',
        view_source_prompt: 'Dieser Smart Contract wurde überprüft. Sie können den Quellcode und die Metadaten im Reiter \'contract\' ansehen',
        account_url: '{ domain }/account/{ account }',
        tlos_balance: '{ balance } NEP',
        couldnt_retreive_metadata_for_address: 'Metadata konnten nicht abgerufen werden { address }: { message }',
        transaction_details: 'Transaktions-Details',
        transaction_not_found: 'Nicht gefunden: { hash }',
        general: 'Allgemein',
        details: 'Details',
        logs: 'Protokolle',
        internal_txns: 'Interne Transaktionen',
        transaction_hash: 'Transaktions Hash',
        click_to_change_date_format: 'Klicken Sie hier, um das Datumsformat zu ändern',
        block_number: 'Block Nummer',
        from: 'Von',
        to: 'Nach',
        date: 'Datum',
        success: 'Erfolg',
        failure: 'Fehlgeschlagen',
        status: 'Status',
        balance_gwei: '{ amount } GWEI',
        balance_tlos: '{ amount } NEP',
        error_message: 'Fehlermeldung',
        contract_function: 'Smart Contract Funktionen',
        function_parameters: 'Funktions-Parameter',
        deployed_contract: 'Bereitgestellter Smart Contract',
        click_to_show_in_wei: 'Anklicken zum Einblenden in wei',
        gas_price_charged: 'Berechnete Transaktionskosten',
        gas_fee: 'Transaktionskosten',
        gas_limit: 'Transaktionskosten-Limit',
        nonce: 'Nonce',
        input: 'Eingabe',
        output: 'Ausgabe',
        value: 'Wert',
    },
    components: {
        internal_txns: 'Interne Transaktionen',
        n_internal_txns: '{ amount } Interne Transaktionen',
        none: 'Keine',
        verify_prompt: 'Dieser Smart Contract wurde noch nicht überprüft.  Möchten Sie den Contract/die Contracts und deren Metadaten jetzt hochladen, um die Quelle zu verifizieren?',
        verify_contract: 'Smart Contract verifizieren',
        search_evm_address_failed: 'Suche nach EVM-Adresse zu Telos Native Konto { accountName } fehlgeschlagen. Sie können auf wallet.telos.net eine EVM-Adresse erstellen.',
        unknown_web3_login_type: 'Unbekannter web3 Login Typ: { provider }',
        unknown_evm_login_provider: 'Anbieter der EVM-Anmeldung deaktiviert: { provider }',
        unknown_native_login_provider: 'Anbieter der Native-Anmeldung deaktiviert: { provider }',
        connect_wallet: 'Wallet verbinden',
        view_address: 'Adresse ansehen',
        disconnect: 'Verbindung trennen',
        disable_wallet_extensions: 'Deaktivieren Sie die Wallet-Erweiterungen oder setzen Sie Brave-Wallet als Standard in den Browser-Einstellungen, um Brave Wallet zu verwenden.',
        enable_wallet_extensions: 'Aktivieren Sie die MetaMask-Erweiterung und setzen Sie die Voreinstellung "Erweiterung bevorzugen" in den Browser-Einstellungen, um die MetaMask-Wallet zu verwenden.',
        evm_wallets: 'EVM-Wallets',
        advanced: 'Erweiterte Optionen',
        continue_on_metamask: 'Mit Metamask fortfahren',
        text1_native_wallets: 'Telos Native Wallets für',
        text2_advanced_users: 'Fortgeschrittene Benutzer',
        text3_or_to_recover_assets: 'oder zur Wiedererlangung von Werten, die an eine Telos Native Adresse gesendet wurden',
        copy_to_clipboard: '{ text } in die Zwischenablage kopieren',
        latest_block: 'Letzter Block',
        tlos_price: 'NEP Preis',
        gas_price: 'Gas Preis',
        click_to_expand: 'Klicken Sie, um die Funktionssignatur zu erweitern',
        search_evm_failed: 'Suche nach verlinkter EVM-Adresse für Telos Native Konto { search_term } fehlgeschlagen.',
        search_failed: 'Suche fehlgeschlagen, bitte geben Sie einen gültigen Suchbegriff ein.',
        add_to_metamask: '{ symbol } zu MetaMask hinzufügen',
        tx_hash: 'Tx Hash',
        block: 'Block',
        date: 'Datum',
        method: 'Methode',
        to_interacted_with: 'An/Interagiert mit',
        value_transfer: 'Wert/Transfer',
        value: 'Wert',
        token: 'Token',
        unknown_precision: 'Unbekannte Präzision/Dezimalstellen',
        click_to_change_format: 'Zum Ändern des Formats anklicken',
        func_exed_based_on_dec_data: 'Funktion auf Basis der dekodierten Daten ausgeführt.',
        balance: 'Saldo',
        error_fetching_balance: 'Fehler beim Aufrufen des Saldos',
        launch_metamask_dialog_to_add: 'MetaMask Dialog öffnen, um { symbol } hinzuzufügen',
        search_hints: 'Transaktion,Adresse/Konto,Block',
        no_provider_found: 'Mehr als ein Anbieter ist aktiv, bitte deaktivieren Sie zusätzliche Anbieter oder der aktuelle EVM-Wallet-Anbieter wird nicht unterstützt.',
        copied: 'Kopiert',
        copy_to_clipboard_failed: 'Koipieren in die Zwischenablage ist fehlgeschlagen',
        gwei: 'Gwei',
        failed_to_parse_transaction: 'Das Parsen der Daten für die Transaktion ist fehlgeschlagen, Fehler: { message }',
        executed_based_on_decoded_data: 'Funktion wird auf der Grundlage der dekodierten Eingabedaten ausgeführt. Bei nicht identifizierter Funktion wird stattdessen die Methoden-ID angezeigt.',
        unsupported_token_type: 'Token Typ nicht unterstützt: { tokenType }',
        token_id: 'Id #{ tokenId }',
        status: 'Status',
        nonce: 'Nonce',
        from: 'Von',
        to: 'An',
        transaction: {
            form_from: 'Von : ',
            form_to: 'An : ',
            form_token: 'Token : ',
            consult_collection: 'Sammlung ansehen',
            consult_metadata: 'Metadaten ansehen',
            consult_media: 'Medien ansehen',
            show_total: 'Summe anzeigen',
            show_wei: 'wei anzeigen',
            value_uint256: 'Wert (uint256) : ',
            tlos_transfer: 'NEP Transfer',
            unknown: 'Unbekannt',
            contract_deployment: 'Smart Contract Deployment',
            no_internal_trxs_found: 'Keine interne Transaktion gefunden',
            human_readable: 'Für Menschen lesbar',
            no_logs_found: 'Keine Protokolle gefunden',
            verify_related_contract: 'Überprüfen Sie den zugehörigen Smart Contract für jedes Protokoll, um seine für den Menschen lesbare Version zu sehen',
            failed_to_retrieve_contract: 'Smart Contract mit dieser Adresse konnte nicht abgerufen werden { address }',
        },
        inputs: {
            incorrect_address_array_length: 'Das Array sollte { size } Adressen enthalten',
            incorrect_booleans_array_length: 'In dem Array sollten { size } Boolesche Werte enthalten sein',
            incorrect_bytes_array_length: 'Das Array sollte { size } Bytes enthalten',
            odd_number_of_bytes: 'Es sollte eine gerade Anzahl von Bytezeichen vorhanden sein',
            incorrect_sigint_array_length: 'Das Array muss { size } signed Integers enthalten',
            incorrect_strings_array_length: 'Das Array sollte nur { size } Zeichenfolgen enthalten',
            incorrect_unsigint_array_length: 'Das Array muss { size } unsigned Integers enthalten',

            invalid_address_array_string: 'Eingegebener Wert repräsentiert kein Array von Adressen',
            invalid_booleans_array_string: 'Der eingegebene Wert entspricht keinem Array von bool(s)',
            invalid_bytes_array_string: 'Eingegebener Wert entspricht keinem Array von Bytes dar',
            invalid_sigint_array_string: 'Eingegebener Wert entspricht keinem Array von signed Integers dar',
            invalid_strings_array_string: 'Eingegebener Wert entspricht keinem Array von Strings dar',
            invalid_unsigint_array_string: 'Eingegebener Wert entspricht keinem Array von unsigned Integers dar',

            invalid_address_length: 'Eine Adresse muss genau 40 Zeichen lang sein, exklusive Prefix "0x"',
            invalid_address_start: 'Eine Adresse muss mit 0x beginnen',
            invalid_address_characters: 'Der Eintrag enthält ungültige Zeichen',
            readonly: 'Dieses Feld ist schreibgeschützt',
            required: 'Dieses Feld ist erforderlich',
            too_large: 'Maximalwert für int{ size } ist { max }',
            too_small: 'Minimalwert für int{ size } ist { max }',
            too_large_pow2: 'Maximalwert für uint{ size } ist 2^{ size } - 1',
            too_small_pow2: 'Minimalwert für int{ size } ist -(2^{ size }) + 1',
            too_large_unsigint: 'Maximalwert für uint{ size } ist 2^{ size } - 1',
            no_negative_unsigint: 'Wert für uint{ size } darf nicht negativ sein',
            invalid_signed_integer: 'Ungültiger signed integer',
            invalid_unsigint: 'Der Eintrag muss einen gültigen unsigned integer enthalten',
            str_input_placeholder: '["Wert", ... , "Endgültiger Wert"]',
            str_input_hint: 'Doppelte Anführungszeichen in Strings müssen escaped werden (\\")',
            address_placeholder: 'Adresse beginnt mit 0x',
            address_label: '{ label } (Adresse/Konto)',
            boolean_array_label: '{ label } (bool[{ size }])',
        },
        health: {
            status: 'Status',
            checked_at: 'Geprüft am',
            task: 'Aufgabe',
            message: 'Nachricht',
            block_height: 'Block Nummer',
            latency: 'Latenz',
            click_to_change_format: 'Zum Ändern des Formats anklicken',
        },
        contract_tab: {
            copy_abi_to_clipboard: 'ABI JSON des Smart Contracts in die Zwischenablage kopieren',
            enter_amount: 'Wählen Sie Anzahl der Dezimalstellen und geben Sie einen Betrag ein, dieser wird als Funktionsparameter als uint256 erfasst',
            result: 'Ergebnis',
            view_transaction: 'Transaktion ansehen',
            code: 'Code',
            read: 'Lesen',
            write: 'Schreiben',
            query: 'Abfragen',
            amount: 'Anzahl',
            value: 'Wert',
            custom_decimals: 'Benutzerdefinierte Dezimalen',
            custom: 'Benutzerdefiniert',
            unverified_contract_source: 'Dieser Smart Contract wurde nicht verifiziert...',
            click_here: 'Klicken Sie hier, ',
            upload_source_files: 'um Quelldateien hochzuladen und diesen Smart Contract zu verifizieren. ' +
                'Alternativ können Sie mit dem Smart Contract interagieren, indem Sie ein beliebiges ABI verwenden:',
            use_erc20_abi: 'ERC20 ABI nutzen',
            use_erc721_abi: 'ERC721 ABI nutzen',
            use_erc1155_abi: 'ERC1155 ABI nutzen',
            abi_from_json: 'ABI aus JSON-Datei',
            paste_abi_json_here: 'ABI JSON hier einfügen',
            abi_json_preview: 'ABI JSON Vorschau',
            provided_abi_invalid: 'Bereitgestellte ABI ist ungültig',
            provided_json_invalid: 'Bereitgestellte JSON ist ungültig',
            read_functions: 'Lese-Funktionen',
            write_functions: 'Schreib-Funktionen',
            unverified_contract: 'Ungeprüfter Smart Contract',
            read_as_proxy: 'Als Proxy lesen',
            write_as_proxy: 'Als Proxy schreiben',
            contract_is_proxy: 'Bei diesem Vertrag handelt es sich um einen transparenten EIP-1967-Proxy für den Vertrag',
            proxy_for_unverified_contract_part_1: 'Der Vertrag, für den es sich um einen Proxy handelt, ist nicht verifiziert, daher ist sein ABI nicht verfügbar. Um mit dem Implementierungsvertrag zu interagieren, besuchen Sie',
            proxy_for_unverified_contract_part_2: 'die Seite mit dem Implementierungsvertrag',
            no_abi_methods: 'Im Vertrags-ABI wurden keine ausführbaren Funktionen gefunden',
        },
        header: {
            sign_in: 'Anmelden',
            sign_out: 'Abmelden',
            liq_staking: 'Liquid Staking',
            goto_staking: 'Staking/Anlage öffnen',
            goto_health_monitor: 'Health Monitor öffnen',
            goto_mainnet: 'Mainnet auswählen',
            goto_testnet: 'Testnet auswählen',
            health_monitor: 'Health Monitor',
            health_status: 'Health Status',
            advanced: 'Erweitert',
            light_mode: 'Light Mode',
            dark_mode: 'Dark Mode',
            address_not_found: 'Suche nach verlinkter EVM-Adresse für Telos Native Konto { search_term } fehlgeschlagen.',
            search_failed: 'Suche fehlgeschlagen, bitte geben Sie einen gültigen Suchbegriff ein.',
            goto_address_details: 'Adresse/Konto Details öffnen',
            copy_address: 'Adresse/Konto kopieren',
            address_copied: 'Adresse/Konto in Zwischenablage kopiert',
            search_placeholder: 'Adresse/Konto, Transaktion, Block',
            select_language: 'Sprache wählen',
        },
    },
    global: {
        language: 'Sprache',
        cancel: 'Abbrechen',
        ok: 'Ok',
        dismiss: 'Ablehnen',
        internal_error: 'Interner Fehler',
    },
    layouts: {
        health_status: 'Health Status',
        stake_telos: 'Stake NEP',
        teloscan_mainnet: 'Teloscan Mainnet',
        teloscan_testnet: 'Teloscan Testnet',
    },
    notification: {
        success_title_trx: 'Erfolg',
        success_title_copied: 'Kopiert',
        success_message_trx: 'Ihre Transaktion wurde verarbeitet. Für detaillierte Informationen klicken Sie bitte auf den unten stehenden Link.',
        success_message_revoking: 'Die Zuweisung von <b>{symbol}</b> für <b>{address}</b> wurde erfolgreich widerrufen.',
        success_message_copied: 'Ihr Kontoname wurde in die Zwischenablage kopiert.',
        success_see_trx_label: 'Transaktion anzeigen',
        dismiss_label: 'Verwerfen',
        error_title: 'Oh oh!',
        error_title_disconnect: 'Keine Internetverbindung',
        error_message_disconnect: 'Es tut uns leid, es sieht so aus, als wären Sie nicht mit dem Internet verbunden. Bitte überprüfen Sie Ihre Netzwerkverbindung und versuchen Sie es erneut.',
        error_see_details_label: 'Details anzeigen',
        error_details_title: 'Fehlerdetails',
        neutral_message_sending: 'Sende <b>{quantity}</b> an <b>{address}</b>',
        neutral_message_staking: 'Einlagen von <b>{quantity} {symbol}</b>',
        neutral_message_unstaking: 'Rücknahme von <b>{quantity} {symbol}</b> vorbereiten',
        neutral_message_revoking: 'Zuweisung von <b>{symbol}</b> für <b>{address}</b> erfolgreich widerrufen',
        neutral_message_wrapping: '<b>{quantity} {symbol}</b> in ERC20 umwandeln',
        neutral_message_unwrapping: '<b>{quantity} {symbol}</b> wiederherstellen',
        neutral_message_withdrawing: '<b>{quantity} {symbol}</b> abheben',
        dont_show_message_again: 'Diese Nachricht nicht mehr anzeigen',
        error_message_sending: 'Beim Senden von <b>{quantity}</b> an <b>{address}</b> ist ein Fehler aufgetreten',
        error_message_staking: 'Beim Einzahlen von <b>{quantity} {symbol}</b> ist ein Fehler aufgetreten',
        error_message_unstaking: 'Beim Vorbereiten der Rücknahme von <b>{quantity} {symbol}</b> ist ein Fehler aufgetreten',
        error_message_revoking: 'Beim Widerrufen der Zuweisung von <b>{symbol}</b> für <b>{address}</b> ist ein Fehler aufgetreten',
        error_message_wrapping: 'Beim Umwandeln von <b>{quantity} {symbol}</b> in ERC20 ist ein Fehler aufgetreten',
        error_message_unwrapping: 'Beim Wiederherstellen von <b>{quantity} {symbol}</b> ist ein Fehler aufgetreten',
        error_message_withdrawing: 'Beim Abheben von <b>{quantity} {symbol}</b> ist ein Fehler aufgetreten',
        error_message_custom_call: 'Beim Aufrufen von <b>{name}</b> mit <b>{params} Parametern</b> ist ein Fehler aufgetreten',
        error_message_custom_call_send: 'Beim Aufrufen von <b>{name}</b> mit <b>{params} Parametern</b> und Senden von <b>{quantity} {symbol}</b> ist ein Fehler aufgetreten',
        neutral_message_custom_call: 'Aufrufen von <b>{name}</b> mit <b>{params} Parametern</b>',
        neutral_message_custom_call_send: 'Aufrufen von <b>{name}</b> mit <b>{params} Parametern</b> und Senden von <b>{quantity} {symbol}</b>',
    },
    antelope: {
        evm: {
            error_unpredictable_gas_limit: 'Das Gaslimit für diese Transaktion konnte nicht geschätzt werden',
            error_transaction_canceled: 'Sie haben die Aktion abgebrochen',
        },
    },
    temporal: {
        telos_cloud_discontinued_title: 'Wichtig',
        telos_cloud_discontinued_message_title: 'Achtung Benutzer: Die Telos Cloud Wallet-Kontooption wird nicht mehr angeboten.',
        telos_cloud_discontinued_message_body: 'Die Kontooption Telos Cloud Wallet (ORE ID via Google) zur Verbindung und Unterzeichnung von Transaktionen wird nach dem 31. Dezember eingestellt. Wenn Sie die Telos Cloud Wallet für den Zugang zu Ihrem Konto nutzen, übertragen Sie Ihr Vermögen bitte vor diesem Termin auf eine andere Wallet. <strong>Diese Änderung hat keine Auswirkungen auf Nutzer, die über Metamask, WalletConnect, Anchor oder andere Anmeldemethoden auf ihre Konten zugreifen.</strong>',
    },
};
